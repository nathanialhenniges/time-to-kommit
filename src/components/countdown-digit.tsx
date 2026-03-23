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
      className="flex flex-col items-center gap-3 rounded-lg px-3 py-4 md:px-5 md:py-6 relative overflow-hidden"
      style={{
        backgroundColor: "var(--ds-surface-card)",
        border: "1px solid var(--ds-border-subtle)",
        boxShadow:
          "var(--ds-shadow-md), 0 4px 20px -4px rgba(37, 99, 235, 0.15)",
      }}
    >
      {/* Blue bottom glow */}
      <div
        className="absolute bottom-0 left-[10%] right-[10%] h-[1px]"
        style={{
          background:
            "linear-gradient(to right, transparent, var(--ds-primary), transparent)",
          boxShadow: "0 0 12px 2px rgba(37, 99, 235, 0.2)",
        }}
      />
      <div
        className={`
          font-[family-name:var(--font-geist-mono)] font-semibold
          text-5xl md:text-7xl
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
        className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium"
        style={{ color: "var(--ds-text-muted)" }}
      >
        {label}
      </span>
    </div>
  );
}
