import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "iron’s irony — Building, Architectural & Decorative Ironwork";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#121316",
          padding: "64px",
          position: "relative",
          border: "12px solid #1A1C20",
        }}
      >
        {/* Subtle Architectural Grid Lines */}
        <div
          style={{
            position: "absolute",
            inset: "40px",
            border: "1px solid #26282E",
            display: "flex",
          }}
        />

        {/* Bronze Corner Calibration Brackets */}
        <div
          style={{
            position: "absolute",
            top: "40px",
            left: "40px",
            width: "24px",
            height: "24px",
            borderTop: "3px solid #9E7445",
            borderLeft: "3px solid #9E7445",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "40px",
            right: "40px",
            width: "24px",
            height: "24px",
            borderTop: "3px solid #9E7445",
            borderRight: "3px solid #9E7445",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "40px",
            width: "24px",
            height: "24px",
            borderBottom: "3px solid #9E7445",
            borderLeft: "3px solid #9E7445",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "40px",
            width: "24px",
            height: "24px",
            borderBottom: "3px solid #9E7445",
            borderRight: "3px solid #9E7445",
          }}
        />

        {/* Header Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            zIndex: 10,
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: "#9E7445",
            }}
          />
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "16px",
              color: "#9E7445",
              textTransform: "uppercase",
              letterSpacing: "4px",
            }}
          >
            Atelier Fabrication & Engineering
          </span>
        </div>

        {/* Central Brand Statement */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            maxWidth: "920px",
            zIndex: 10,
          }}
        >
          <span
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "76px",
              color: "#F9F8F6",
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: "-1.5px",
            }}
          >
            iron’s irony
          </span>

          <span
            style={{
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
              fontSize: "36px",
              color: "#D0CCC2",
              fontWeight: 400,
              lineHeight: 1.2,
            }}
          >
            Ironwork built for structure. Designed for character.
          </span>

          <span
            style={{
              fontFamily: "sans-serif",
              fontSize: "20px",
              color: "#747882",
              marginTop: "8px",
              lineHeight: 1.5,
              maxWidth: "800px",
            }}
          >
            Building, architectural, and decorative ironwork engineered for residential estates, architectural practices, and bespoke commissions.
          </span>
        </div>

        {/* Footer Disciplines Strip */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #26282E",
            paddingTop: "24px",
            zIndex: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "32px",
              fontFamily: "monospace",
              fontSize: "14px",
              color: "#D0CCC2",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            <span>Building Ironwork</span>
            <span>&bull;</span>
            <span>Architectural Ironwork</span>
            <span>&bull;</span>
            <span>Decorative Ironwork</span>
            <span>&bull;</span>
            <span>Custom Fabrication</span>
          </div>

          <div
            style={{
              fontFamily: "monospace",
              fontSize: "14px",
              color: "#9E7445",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            hycyon engineering
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}