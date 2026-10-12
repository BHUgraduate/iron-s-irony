import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#151618",
          position: "relative",
          padding: "16px",
        }}
      >
        {/* Outer Hairline Border */}
        <div
          style={{
            position: "absolute",
            inset: "12px",
            border: "1.5px solid #D0CCC2",
            opacity: 0.35,
          }}
        />

        {/* Bronze Corner Accent Markers */}
        <div
          style={{
            position: "absolute",
            top: "16px",
            left: "16px",
            width: "10px",
            height: "10px",
            borderTop: "2px solid #9E7445",
            borderLeft: "2px solid #9E7445",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            width: "10px",
            height: "10px",
            borderTop: "2px solid #9E7445",
            borderRight: "2px solid #9E7445",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "16px",
            left: "16px",
            width: "10px",
            height: "10px",
            borderBottom: "2px solid #9E7445",
            borderLeft: "2px solid #9E7445",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "16px",
            right: "16px",
            width: "10px",
            height: "10px",
            borderBottom: "2px solid #9E7445",
            borderRight: "2px solid #9E7445",
          }}
        />

        {/* Central Logo Lockup */}
        <span
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "72px",
            color: "#F9F8F6",
            fontWeight: 500,
            lineHeight: 1,
            letterSpacing: "-2px",
          }}
        >
          i’i
        </span>

        <span
          style={{
            fontFamily: "monospace",
            fontSize: "11px",
            color: "#9E7445",
            textTransform: "uppercase",
            letterSpacing: "3px",
            marginTop: "8px",
          }}
        >
          iron’s irony
        </span>
      </div>
    ),
    {
      ...size,
    }
  );
}