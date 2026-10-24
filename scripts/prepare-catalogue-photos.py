"""
Prepares the catalogue photographs.

    python3 -I scripts/prepare-catalogue-photos.py <folder-with-originals> [<another-folder> ...]

Reads scripts/catalogue-photos.json (design slug -> ordered source files) and writes, per design:
  public/catalogue/<slug>/<slug>-<n>.jpg   the photograph, unaltered in content
  public/catalogue/<slug>/share.jpg        900px version used for the social share image
and data/catalogue-images.json (width, height and a tiny blur placeholder for each).

Photographs are never cropped or recoloured. Files are re-encoded only to (a) repair a truncated file,
(b) drop metadata such as location, (c) bring 3000px+ originals down to 2000px on the long side, or
(d) lift brightness: a gentle gamma curve, applied only to the designs' own photographs that are clearly dark
(mean brightness under 100, never stronger than gamma 0.78). Reference images are never adjusted.
Every other file is copied byte for byte. data/catalogue-images.json records which photos were brightened.
"""
import base64, io, json, math, shutil, sys
from pathlib import Path
from PIL import Image, ImageFile, ImageOps, ImageStat

ImageFile.LOAD_TRUNCATED_IMAGES = True
root = Path(__file__).resolve().parent.parent
src_dirs = [Path(a) for a in sys.argv[1:]]

def find(name):
    for d in src_dirs:
        if (d / name).exists():
            return d / name
    raise FileNotFoundError(name)

DARK, TARGET, MIN_GAMMA = 100, 108, 0.78
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
        src = find(name)
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
        has_meta = bool(im.info.get("exif"))
        gamma = 1.0
        if slug != "references":
            g = ImageOps.exif_transpose(im).convert("L")
            g.thumbnail((200, 200))
            mean = ImageStat.Stat(g).mean[0]
            if mean < DARK:
                gamma = max(MIN_GAMMA, math.log(TARGET / 255) / math.log(mean / 255))
        if max(w, h) > 2000 or truncated or has_meta or gamma < 1:
            im2 = ImageOps.exif_transpose(im).convert("RGB")
            if gamma < 1:
                lut = [round(255 * (i / 255) ** gamma) for i in range(256)]
                im2 = im2.point(lut * 3)
            im2.thumbnail((2000, 2000), Image.LANCZOS)
            im2.save(dest, "JPEG", quality=88, optimize=True, progressive=True)
            w, h = im2.size
        else:
            shutil.copyfile(src, dest)
        manifest[key] = {"w": w, "h": h, "blur": blur(im)}
        if gamma < 1:
            manifest[key]["gamma"] = round(gamma, 2)
        if n == 1 and slug != "references":
            s = ImageOps.exif_transpose(im).convert("RGB")
            s.thumbnail((900, 900), Image.LANCZOS)
            s.save(out / "share.jpg", "JPEG", quality=85, optimize=True)

(root / "data/catalogue-images.json").write_text(json.dumps(manifest, indent=1))
print(len(manifest), "photographs prepared; brightened:", {k: v["gamma"] for k, v in manifest.items() if "gamma" in v})
