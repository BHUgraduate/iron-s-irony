"""
Prepares the catalogue photographs.

    python3 -I scripts/prepare-catalogue-photos.py <folder-with-original-photos>

Reads scripts/catalogue-photos.json (design slug -> ordered source files) and writes, per design:
  public/catalogue/<slug>/<slug>-<n>.jpg   the photograph, unaltered in content
  public/catalogue/<slug>/share.jpg        900px version used for the social share image
and data/catalogue-images.json (width, height and a tiny blur placeholder for each).

Photographs are never cropped, filtered or recoloured. Files are re-encoded only to (a) repair a truncated
file, (b) drop metadata such as location, or (c) bring 3000px+ originals down to 2000px on the long side.
Every other file is copied byte for byte.
"""
import base64, io, json, shutil, sys
from pathlib import Path
from PIL import Image, ImageFile, ImageOps

ImageFile.LOAD_TRUNCATED_IMAGES = True
root = Path(__file__).resolve().parent.parent
src_dir = Path(sys.argv[1])
mapping = json.loads((root / "scripts/catalogue-photos.json").read_text())
manifest = {}

def blur(im):
    t = ImageOps.exif_transpose(im).convert("RGB")
    t.thumbnail((16, 16))
    b = io.BytesIO()
    t.save(b, "JPEG", quality=60)
    return "data:image/jpeg;base64," + base64.b64encode(b.getvalue()).decode()

for slug, files in mapping.items():
    out = root / "public/catalogue" / slug
    out.mkdir(parents=True, exist_ok=True)
    for n, name in enumerate(files, 1):
        src = src_dir / name
        key = f"{slug}-{n}"
        dest = out / f"{key}.jpg"
        im = Image.open(src)
        im.load()
        w, h = im.size
        truncated = False
        try:
            ImageFile.LOAD_TRUNCATED_IMAGES = False
            Image.open(src).load()
        except OSError:
            truncated = True
        finally:
            ImageFile.LOAD_TRUNCATED_IMAGES = True
        has_meta = bool(im.info.get("exif")) or bool(im.info.get("icc_profile") and False)
        if max(w, h) > 2000 or truncated or has_meta:
            im2 = ImageOps.exif_transpose(im).convert("RGB")
            im2.thumbnail((2000, 2000), Image.LANCZOS)
            im2.save(dest, "JPEG", quality=92, optimize=True, progressive=True)
            w, h = im2.size
        else:
            shutil.copyfile(src, dest)
        manifest[key] = {"w": w, "h": h, "blur": blur(im)}
        if n == 1:
            s = ImageOps.exif_transpose(im).convert("RGB")
            s.thumbnail((900, 900), Image.LANCZOS)
            s.save(out / "share.jpg", "JPEG", quality=85, optimize=True)

(root / "data/catalogue-images.json").write_text(json.dumps(manifest, indent=1))
print(len(manifest), "photographs prepared")
