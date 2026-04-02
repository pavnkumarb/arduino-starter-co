import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Arduino Starter Co — Build Your First Circuit";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1A202C 0%, #0D7ECD 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            color: "#FF6B2B",
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: 4,
            marginBottom: 32,
            textTransform: "uppercase",
          }}
        >
          Arduino Starter Co
        </div>
        <div
          style={{
            color: "white",
            fontSize: 60,
            fontWeight: 700,
            textAlign: "center",
            lineHeight: 1.15,
            marginBottom: 28,
            maxWidth: 900,
          }}
        >
          Build Your First Circuit.
        </div>
        <div
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: 26,
            textAlign: "center",
            maxWidth: 700,
            lineHeight: 1.5,
          }}
        >
          Beginner-friendly Arduino kit — unbox, wire up, and build in 30
          minutes.
        </div>
      </div>
    ),
    { ...size }
  );
}
