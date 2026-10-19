import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "iron’s irony: gates, railings, balconies, staircases and custom ironwork";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The same gate elevation used on the website, drawn as simple lines.
const pickets = Array.from({ length: 13 }, (_, i) => 70 + i * 22);

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0E0F11",
          color: "#F9F8F6",
          position: "relative",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: 640 }}>
          <div style={{ display: "flex", fontSize: 30, letterSpacing: 6, color: "#C28E53", textTransform: "uppercase" }}>
            Architectural &amp; decorative ironwork
          </div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 112, fontWeight: 800, lineHeight: 0.95, letterSpacing: -3, textTransform: "uppercase" }}>
            <span>Iron,</span>
            <span>shaped</span>
            <span>with intent.</span>
          </div>
          <div style={{ display: "flex", fontSize: 44, fontFamily: "Georgia, serif" }}>iron’s irony</div>
        </div>
        <svg
          width="440"
          height="440"
          viewBox="0 0 400 300"
          style={{ position: "absolute", right: 64, top: 90 }}
          fill="none"
          stroke="#F9F8F6"
          strokeOpacity="0.85"
          strokeWidth="2"
        >
          <path d="M40 36H360V272H40Z" />
          <path d="M40 78H360M40 232H360M200 36V272" />
          {pickets.map((x) => (
            <path key={x} d={`M${x} 78V232M${x - 4} 70L${x} 60L${x + 4} 70`} />
          ))}
          <path d="M60 258H340" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
