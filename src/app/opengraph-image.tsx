import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Avenor Tech - Premium web development agency";
export const size = { width: 1200, height: 630 };
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
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(145deg, #050a18 0%, #0f172a 42%, #1e1b4b 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background:
                "linear-gradient(135deg, #22d3ee 0%, #3b82f6 45%, #8b5cf6 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#f4f7ff",
              fontSize: 40,
              fontWeight: 800,
              fontFamily:
                "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
            }}
          >
            A
          </div>
          <span
            style={{
              fontSize: 52,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "#f4f7ff",
              fontFamily:
                "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
            }}
          >
            Avenor Tech
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 58,
              fontWeight: 650,
              lineHeight: 1.12,
              letterSpacing: "-0.03em",
              color: "#f4f7ff",
              maxWidth: 900,
              fontFamily:
                "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
            }}
          >
            Futuristic high-performance websites
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 500,
              color: "rgba(244, 247, 255, 0.72)",
              maxWidth: 820,
              lineHeight: 1.35,
              fontFamily:
                "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
            }}
          >
            Premium web development for businesses that want modern design,
            stronger trust, and better conversions.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 22,
            color: "rgba(148, 163, 184, 0.95)",
            fontFamily:
              "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
          }}
        >
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background:
                "linear-gradient(135deg, #22d3ee, #3b82f6, #8b5cf6)",
            }}
          />
          avenortech12.com · Next.js · TypeScript · Supabase
        </div>
      </div>
    ),
    { ...size },
  );
}
