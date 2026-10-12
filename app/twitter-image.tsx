import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "iron’s irony — Precision Architectural Ironwork";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#151618",
          padding: "64px",
          border: "8px solid #26282E",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "16px",
              color: "#9E7445",
              textTransform: "uppercase",
              letterSpacing: "3px",
            }}
          >
            iron’s irony &bull; Fabrication Atelier
          </span>
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "14px",
              color: "#747882",
            }}
          >
            ironsirony.com
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <span
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "72px",
              color: "#F9F8F6",
              fontWeight: 500,
              lineHeight: 1.1,
            }}
          >
            iron’s irony
          </span>
          <span
            style={{
              fontFamily: "sans-serif",
              fontSize: "24px",
              color: "#D0CCC2",
              maxWidth: "780px",
              lineHeight: 1.4,
            }}
          >
            Building, architectural, and decorative ironwork engineered for permanence, character, and structural integrity.
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #26282E",
            paddingTop: "20px",
            fontFamily: "monospace",
            fontSize: "14px",
            color: "#9E7445",
            letterSpacing: "2px",
          }}
        >
          <span>Solid Metallurgy &bull; AESS Visual Standards</span>
          <span>hycyon</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}