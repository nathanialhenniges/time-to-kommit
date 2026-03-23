# Time to Kommit

Countdown web app for **countdown.getkommit.ai** by the Kommit Team. Counts down to a configurable date with the Kommit brand identity.

## Stack

- Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
- Bun runtime (not npm/yarn)
- Deployed on Vercel

## Commands

```bash
bun dev          # Dev server with Turbopack
bun run build    # Production build
bun run lint     # ESLint
```

## Architecture

```
src/
├── app/
│   ├── layout.tsx              # Root layout, fonts, SEO metadata
│   ├── page.tsx                # Countdown page (client component)
│   ├── globals.css             # Design tokens, light/dark mode, animations
│   ├── opengraph-image.tsx     # Dynamic OG image (edge, revalidates hourly)
│   └── twitter-image.tsx       # Twitter card image (edge)
├── components/
│   ├── animated-logo.tsx       # Pixelated K logo with staggered block reveal
│   ├── countdown-digit.tsx     # Single digit card with tick animation + blue glow
│   └── theme-toggle.tsx        # Light/dark mode toggle (top-left)
└── hooks/
    ├── use-countdown.ts        # Countdown timer (1s interval)
    ├── use-greeting.ts         # Time-of-day greeting
    ├── use-tab-title.ts        # Tab away title ("Still kommiting?")
    └── use-tagline.ts          # Rotating dev-humor taglines
public/
├── icon.svg                    # Kommit logo (pixelated K on blue circle)
├── icon.png                    # 512x512 apple touch icon
└── sw.js                       # No-op service worker
```

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_COUNTDOWN_DATE` | Yes | ISO 8601 target date (e.g. `2026-04-01T13:00:00Z`) |

## Design System

Based on the [Kommit design system](https://getkommit.ai/design-system).

- **Tokens**: All colors use CSS custom properties (`var(--ds-*)`) defined in `globals.css`
- **Light/dark mode**: `:root` = light, `.dark` = dark. System preference detected on load, toggle persists to localStorage
- **Brand color**: `#2563EB`
- **Fonts**: Geist Sans (UI text), Geist Mono (digits, code, wordmark)
- **Dark-first**: Design for dark mode first, verify in light
- **Background layers**: Dot grid + radial blue vignette + noise grain texture

## Conventions

- Use `var(--ds-*)` tokens for all colors — never hardcode color values in components
- Client components require `"use client"` directive
- Use `next/image` for images — remote patterns locked to `getkommit.ai` in `next.config.ts`
- Keep dependencies minimal — no shadcn/ui or icon libraries needed for this app
- Anti-patterns (from design system): no colored icon containers, no gradient accent lines on cards, max `rounded-lg` on cards, no `hover:scale` on cards, no hardcoded colors
- Animations use CSS keyframes defined in `globals.css` — staggered via `animation-delay`
- Page entrance uses orchestrated stagger sequence (logo → greeting → heading → countdown → tagline → footer)
