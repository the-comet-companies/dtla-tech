import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Shop Titan Case Study: DTLA Print";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BRAND = "#0066CC";
const TEXT = "#1D1D1F";
const MUTED = "#6E6E73";
const BG = "#FBFBFB";
const CARD = "#FFFFFF";
const BORDER = "rgba(0,0,0,0.08)";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: BG,
          padding: "72px 88px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -180,
            top: -180,
            width: 720,
            height: 720,
            borderRadius: "9999px",
            border: `2px solid ${BRAND}`,
            opacity: 0.08,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -80,
            top: -80,
            width: 520,
            height: 520,
            borderRadius: "9999px",
            border: `2px solid ${BRAND}`,
            opacity: 0.12,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 60,
            top: 60,
            width: 320,
            height: 320,
            borderRadius: "9999px",
            background: `radial-gradient(circle, rgba(0,102,204,0.10) 0%, transparent 70%)`,
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 20, zIndex: 1 }}>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: "0.06em",
              color: TEXT,
            }}
          >
            SHOP TITAN
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 20px",
              borderRadius: 9999,
              background: BRAND,
              color: "white",
              fontSize: 18,
              fontWeight: 600,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: 9999,
                background: "white",
                display: "flex",
              }}
            />
            Case Study: DTLA Print
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 22,
            maxWidth: 920,
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              color: TEXT,
              letterSpacing: "-0.02em",
            }}
          >
            How&nbsp;
            <span style={{ display: "flex", color: BRAND }}>DTLA Print</span>
            &nbsp;runs their shop with Shop Titan.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              color: MUTED,
              lineHeight: 1.4,
            }}
          >
            FileMaker back office, e-commerce storefront, 78+ AI agents — battle-tested across thousands of orders.
          </div>
        </div>

        <div style={{ display: "flex", gap: 20, zIndex: 1 }}>
          {[
            { value: "1000s+", label: "Orders Processed" },
            { value: "78+", label: "AI Agents" },
            { value: "12+", label: "Years Battle-Tested" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "18px 26px",
                borderRadius: 14,
                background: CARD,
                border: `1px solid ${BORDER}`,
                gap: 6,
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: 38,
                  fontWeight: 700,
                  color: TEXT,
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 14,
                  color: MUTED,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontWeight: 600,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
