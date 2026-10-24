import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { DESIGNS, getDesign } from "@/data/catalogue";

export const alt = "iron’s irony catalogue design";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return DESIGNS.map((d) => ({ slug: d.slug }));
}

/** Share preview: the real photograph at full height beside the design name and brand. The photograph is not cropped to a banner. */
export default async function Image({ params }: { params: { slug: string } }) {
  const d = getDesign(params.slug);
  let photo: string | null = null;
  if (d) {
    try {
      const file = await readFile(path.join(process.cwd(), "public", "catalogue", d.slug, "share.jpg"));
      photo = `data:image/jpeg;base64,${file.toString("base64")}`;
    } catch {
      photo = null;
    }
  }
  const title = d?.name ?? "Catalogue";
  const category = d ? `${d.service.title}${d.type ? ` · ${d.type}` : ""}` : "";

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#0E0F11", color: "#F9F8F6" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1, padding: 64 }}>
          <div style={{ display: "flex", fontSize: 24, letterSpacing: 5, color: "#C28E53", textTransform: "uppercase" }}>
            Catalogue{category ? ` · ${category}` : ""}
          </div>
          <div style={{ display: "flex", fontSize: title.length > 26 ? 62 : 76, fontWeight: 800, lineHeight: 1, letterSpacing: -2, textTransform: "uppercase" }}>
            {title}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 44, fontFamily: "Georgia, serif" }}>iron’s irony</div>
            <div style={{ display: "flex", marginTop: 6, fontSize: 22, color: "#F9F8F699" }}>Made to order. Adapted to your project.</div>
          </div>
        </div>
        {photo && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={photo} alt="" width={473} height={630} style={{ width: 473, height: 630, objectFit: "cover" }} />
        )}
      </div>
    ),
    { ...size }
  );
}
