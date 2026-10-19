import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#151618",
          position: "relative",
        }}
      >
        {/* Bronze Outer Accent Border */}
        <div
          style={{
            position: "absolute",
            inset: 2,
            border: "1px solid #9E7445",
            opacity: 0.6,
          }}
        />
        {/* Core Monogram */}
        <span
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "20px",
            color: "#F9F8F6",
            fontWeight: 600,
            lineHeight: 1,
            marginTop: "-2px",
          }}
        >
          i
        </span>
      </div>
    ),
    {
      ...size,
    }
  );
}