import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Are you ready to get Kommited?";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Revalidate every hour so the day count stays fresh
export const revalidate = 3600;

export default function OGImage() {
  const targetDate = new Date(
    process.env.NEXT_PUBLIC_COUNTDOWN_DATE || "2026-04-01T13:00:00Z"
  );
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();
  const daysLeft = Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
  const isExpired = diff <= 0;

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
          backgroundColor: "#000000",
          position: "relative",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background:
              "linear-gradient(to right, transparent, #2563EB, transparent)",
          }}
        />

        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 3,
            background:
              "linear-gradient(to right, transparent, #2563EB, transparent)",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 32,
          }}
        >
          {/* Blue circle with K */}
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              backgroundColor: "#2563EB",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            K
          </div>
          <span
            style={{
              color: "#EDEDED",
              fontSize: 24,
              fontWeight: 600,
              letterSpacing: "-0.02em",
            }}
          >
            Kommit
          </span>
        </div>

        {/* Hero text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
            marginBottom: 40,
          }}
        >
          <span
            style={{
              color: "#EDEDED",
              fontSize: 48,
              fontWeight: 600,
              letterSpacing: "-0.02em",
            }}
          >
            Are you ready to get
          </span>
          <span
            style={{
              color: "#2563EB",
              fontSize: 64,
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            Kommited?
          </span>
        </div>

        {/* Dynamic day count or expired message */}
        {isExpired ? (
          <span
            style={{
              color: "#2563EB",
              fontSize: 56,
              fontWeight: 700,
              marginBottom: 24,
            }}
          >
            It&apos;s time to Kommit.
          </span>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 16,
              marginBottom: 24,
            }}
          >
            <span
              style={{
                color: "#2563EB",
                fontSize: 80,
                fontWeight: 700,
                lineHeight: 1,
              }}
            >
              {daysLeft}
            </span>
            <span
              style={{
                color: "#A0A0A0",
                fontSize: 32,
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              {daysLeft === 1 ? "day left" : "days left"}
            </span>
          </div>
        )}

        {/* Tagline */}
        <span
          style={{
            color: "#8F8F8F",
            fontSize: 20,
          }}
        >
          {isExpired
            ? "No more excuses. Ship it."
            : "Every second counts. Make it count."}
        </span>
      </div>
    ),
    { ...size }
  );
}
