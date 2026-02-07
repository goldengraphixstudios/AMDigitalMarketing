import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(circle at 10% 10%, rgba(255,48,109,0.35), transparent 55%), radial-gradient(circle at 90% 20%, rgba(198,140,220,0.4), transparent 55%), #f9f6f3",
          color: "#120b14",
        }}
      >
        <div style={{ fontSize: 60, letterSpacing: "0.1em", textTransform: "uppercase" }}>
          AM Digital Marketing
        </div>
        <div style={{ fontSize: 34, marginTop: 24, maxWidth: 900 }}>
          CRM, Funnels & Automation Strategy
        </div>
        <div style={{ fontSize: 22, marginTop: 32, opacity: 0.7 }}>
          Smarter Marketing. Stronger Systems. Better Results.
        </div>
      </div>
    ),
    size
  );
}
