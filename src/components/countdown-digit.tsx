"use client";

import { useEffect, useState } from "react";

interface CountdownDigitProps {
  value: number;
  label: string;
}

export function CountdownDigit({ value, label }: CountdownDigitProps) {
  const [tick, setTick] = useState(false);

  useEffect(() => {
    setTick(true);
    const timeout = setTimeout(() => setTick(false), 300);
    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <div
      className="flex flex-col items-center gap-3 rounded-lg px-4 py-5 md:px-6 md:py-7"
      style={{
        backgroundColor: "var(--ds-surface-card)",
        border: "1px solid var(--ds-border-subtle)",
        boxShadow: "var(--ds-shadow-md)",
      }}
    >
      <div
        className={`
          font-[family-name:var(--font-geist-mono)] font-semibold
          text-6xl md:text-8xl
          tabular-nums tracking-tight
          ${tick ? "digit-tick" : ""}
        `}
        style={{
          color: "var(--ds-text-primary)",
          textShadow: `0 0 40px var(--ds-glow), 0 0 80px var(--ds-glow-strong)`,
        }}
      >
        {String(value).padStart(2, "0")}
      </div>
      <span
        className="text-xs md:text-sm uppercase tracking-[0.2em] font-medium"
        style={{ color: "var(--ds-text-muted)" }}
      >
        {label}
      </span>
    </div>
  );
}
