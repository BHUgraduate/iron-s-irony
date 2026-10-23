import { ImageResponse } from "next/og";
import { DESIGNS, getDesign } from "@/data/catalogue";
import { drawingPaths } from "@/components/ui/drawings";

export const alt = "iron’s irony catalogue design";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return DESIGNS.map((d) => ({ slug: d.slug }));
}

/** Share preview for a design: its drawing (or first photograph once one exists), name and brand. */
export default function Image({ params }: { params: { slug: string } }) {
  const d = getDesign(params.slug);
  const title = d?.work.title ?? "Catalogue";
  const category = d ? `${d.service.title} · ${d.work.typeLabel}` : "Catalogue";
  const paths = d ? drawingPaths(d.work.kind) : [];

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#0E0F11", color: "#F9F8F6", padding: 72, position: "relative" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: 600 }}>
          <div style={{ display: "flex", fontSize: 26, letterSpacing: 5, color: "#C28E53", textTransform: "uppercase" }}>
            Catalogue · {category}
          </div>
          <div style={{ display: "flex", fontSize: title.length > 34 ? 60 : 72, fontWeight: 800, lineHeight: 1, letterSpacing: -2, textTransform: "uppercase" }}>
            {title}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 44, fontFamily: "Georgia, serif" }}>iron’s irony</div>
            {d?.representative && (
              <div style={{ display: "flex", marginTop: 8, fontSize: 22, color: "#F9F8F699" }}>Representative drawing</div>
            )}
          </div>
        </div>
        <svg width="460" height="345" viewBox="0 0 400 300" style={{ position: "absolute", right: 56, top: 110 }} fill="none" stroke="#F9F8F6" strokeOpacity="0.85" strokeWidth="2">
          {paths.map((p, i) => (
            <path key={i} d={p} />
          ))}
        </svg>
      </div>
    ),
    { ...size }
  );
}
