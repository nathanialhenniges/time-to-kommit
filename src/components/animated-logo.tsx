"use client";

export function AnimatedLogo({ size = 36 }: { size?: number }) {
  // The 8 blocks of the pixelated K, in build order:
  // Vertical bar (top to bottom), then upper arm (in to out), then lower arm (in to out)
  const blocks = [
    { x: 36, y: 28, delay: 0.15 },   // vertical top
    { x: 36, y: 44, delay: 0.25 },   // vertical 2
    { x: 36, y: 60, delay: 0.35 },   // vertical 3
    { x: 36, y: 76, delay: 0.45 },   // vertical bottom
    { x: 52, y: 44, delay: 0.55 },   // upper arm inner
    { x: 68, y: 28, delay: 0.65 },   // upper arm outer
    { x: 52, y: 60, delay: 0.55 },   // lower arm inner
    { x: 68, y: 76, delay: 0.65 },   // lower arm outer
  ];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: "visible" }}
    >
      {/* Blue circle - scales in first */}
      <circle
        cx="64"
        cy="64"
        r="64"
        fill="#2563EB"
        style={{
          animation: "logo-circle 0.4s ease-out both",
        }}
      />
      {/* K blocks - staggered reveal */}
      {blocks.map((block, i) => (
        <rect
          key={i}
          x={block.x}
          y={block.y}
          width={12}
          height={12}
          rx={3}
          fill="white"
          style={{
            opacity: 0,
            animation: `logo-block 0.3s ease-out ${block.delay}s both`,
          }}
        />
      ))}
    </svg>
  );
}
