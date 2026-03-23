"use client";

import { useCountdown } from "@/hooks/use-countdown";
import { useGreeting } from "@/hooks/use-greeting";
import { useTagline } from "@/hooks/use-tagline";
import { CountdownDigit } from "@/components/countdown-digit";
import { ThemeToggle } from "@/components/theme-toggle";
import { AnimatedLogo } from "@/components/animated-logo";
import { useTabTitle } from "@/hooks/use-tab-title";

const COUNTDOWN_DATE =
  process.env.NEXT_PUBLIC_COUNTDOWN_DATE || "2026-04-01T13:00:00Z";

const KOMMITED_LETTERS = "Kommited?".split("");

export default function Home() {
  const { days, hours, minutes, seconds, isExpired } =
    useCountdown(COUNTDOWN_DATE);
  const greeting = useGreeting();
  useTabTitle();
  const { text: tagline, visible: taglineVisible } = useTagline();

  return (
    <>
      <ThemeToggle />

      {/* Background layers */}
      <div className="fixed inset-0 bg-dot-grid pointer-events-none" />
      <div className="fixed inset-0 bg-vignette pointer-events-none" />
      <div className="fixed inset-0 bg-noise pointer-events-none" />

      {/* Top accent line */}
      <div
        className="fixed top-0 left-0 right-0 h-[2px] z-10"
        style={{
          background:
            "linear-gradient(to right, transparent, var(--ds-primary), transparent)",
          opacity: 0.4,
        }}
      />

      <main className="relative z-10 min-h-dvh flex flex-col items-center justify-center gap-6 md:gap-10 px-6 pb-16">
        {/* Big Logo */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0s" }}>
          <AnimatedLogo size={80} />
        </div>

        {/* Greeting */}
        {greeting && (
          <p
            className="text-sm animate-fade-in-up -mb-4"
            style={{
              color: "var(--ds-text-secondary)",
              animationDelay: "0.8s",
            }}
          >
            {greeting}
          </p>
        )}

        {/* Hero — single heading */}
        <h1
          className="text-3xl md:text-5xl font-semibold text-center tracking-tight leading-tight"
          style={{ color: "var(--ds-text-primary)" }}
        >
          <span
            className="animate-fade-in-up inline-block"
            style={{ animationDelay: "0.9s" }}
          >
            Are you ready to get{" "}
          </span>
          <span
            className="text-4xl md:text-6xl inline-block"
            style={{
              color: "var(--ds-primary)",
              textShadow:
                "0 0 40px var(--ds-glow), 0 0 80px var(--ds-glow-strong)",
            }}
          >
            {KOMMITED_LETTERS.map((letter, i) => (
              <span
                key={i}
                className="letter-animate inline-block"
                style={{ animationDelay: `${1.0 + i * 0.05}s` }}
              >
                {letter}
              </span>
            ))}
          </span>
        </h1>

        {/* Countdown or Expired */}
        {isExpired ? (
          <div
            className="flex flex-col items-center gap-4 animate-fade-in-up"
            style={{ animationDelay: "1.6s" }}
          >
            <p
              className="font-[family-name:var(--font-geist-mono)] text-5xl md:text-7xl font-semibold glow-pulse"
              style={{ color: "var(--ds-primary)" }}
            >
              It&apos;s time to Kommit.
            </p>
          </div>
        ) : (
          <div
            className="flex items-center gap-2 md:gap-4 animate-fade-in-up"
            style={{ animationDelay: "1.6s" }}
          >
            <CountdownDigit value={days} label="Days" />
            <span
              className="hidden md:block text-3xl font-semibold self-start mt-8"
              style={{ color: "var(--ds-text-muted)" }}
            >
              :
            </span>
            <CountdownDigit value={hours} label="Hours" />
            <span
              className="hidden md:block text-3xl font-semibold self-start mt-8"
              style={{ color: "var(--ds-text-muted)" }}
            >
              :
            </span>
            <CountdownDigit value={minutes} label="Minutes" />
            <span
              className="hidden md:block text-3xl font-semibold self-start mt-8"
              style={{ color: "var(--ds-text-muted)" }}
            >
              :
            </span>
            <CountdownDigit value={seconds} label="Seconds" />
          </div>
        )}

        {/* Rotating tagline */}
        <p
          className={`font-[family-name:var(--font-geist-mono)] text-xs md:text-sm animate-fade-in-up tagline-fade ${taglineVisible ? "tagline-fade-visible" : "tagline-fade-hidden"}`}
          style={{
            color: "var(--ds-text-muted)",
            animationDelay: "1.8s",
          }}
        >
          {isExpired ? "No more excuses. Ship it." : tagline}
        </p>

        {/* Footer badge */}
        <div
          className="animate-fade-in-up mt-4"
          style={{ animationDelay: "2.0s" }}
        >
          <div
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs"
            style={{
              backgroundColor: "var(--ds-surface-card)",
              border: "1px solid var(--ds-border-subtle)",
              color: "var(--ds-text-muted)",
              boxShadow: "var(--ds-shadow-sm)",
            }}
          >
            Made with{" "}
            <span className="animate-heartbeat" style={{ color: "#EF4444" }}>
              ❤️
            </span>{" "}
            by the{" "}
            <a
              href="https://getkommit.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200"
              style={{ color: "var(--ds-text-secondary)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--ds-primary)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--ds-text-secondary)")
              }
            >
              Kommit Team
            </a>
          </div>
        </div>
      </main>

      {/* Bottom accent line */}
      <div
        className="fixed bottom-0 left-0 right-0 h-[2px] z-10"
        style={{
          background:
            "linear-gradient(to right, transparent, var(--ds-primary), transparent)",
          opacity: 0.4,
        }}
      />
    </>
  );
}
