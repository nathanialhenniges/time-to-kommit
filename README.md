# Time to Kommit - Are you ready to get Kommited?

A cinematic countdown web app for the Kommit team, counting down
to launch day at [countdown.getkommit.ai](https://countdown.getkommit.ai).
Built with the Kommit design system, featuring a dark-first
aesthetic, animated pixelated K logo, and developer-themed humor.

Every second counts. Make it count.

## Features

- **Real-time Countdown** - Live days, hours, minutes, and
  seconds updating every second with tick animations.
- **Animated Pixelated Logo** - The Kommit K builds block by
  block on page load with staggered reveal.
- **Light and Dark Mode** - System preference detection with
  manual toggle, persisted to localStorage.
- **Time-of-Day Greetings** - Dynamic greetings based on the
  visitor's local time (morning, afternoon, evening, night owl).
- **Rotating Dev Taglines** - Developer humor taglines that
  cycle every 8 seconds with fade transitions.
- **Dynamic OG Images** - Server-rendered Open Graph and Twitter
  card images that update daily with the current day count.
- **Tab Away Detection** - Page title changes to
  "Still kommiting?" when you leave the tab.
- **Letter-by-Letter Animation** - "Kommited?" text builds
  character by character with blue glow.
- **Kommit Design System** - Full implementation of the Kommit
  design tokens for surfaces, text, borders, and brand colors.

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/nathanialhenniges/time-to-kommit.git
   cd time-to-kommit
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Create your environment file:
   ```bash
   cp .env.example .env.local
   ```

4. Set your countdown target date in `.env.local`:
   ```
   NEXT_PUBLIC_COUNTDOWN_DATE=2026-04-01T13:00:00Z
   ```

5. Start the dev server:
   ```bash
   bun dev
   ```

6. Open [http://localhost:3000](http://localhost:3000).

## Usage

The app is a single-page countdown. Configure the target date
via the `NEXT_PUBLIC_COUNTDOWN_DATE` environment variable using
ISO 8601 format. The countdown automatically adjusts to the
visitor's local timezone.

When the countdown expires, the page transitions to an
"It's time to Kommit." state with a pulsing blue glow.

To deploy, push to GitHub and connect to Vercel. Set the
`NEXT_PUBLIC_COUNTDOWN_DATE` environment variable in the
Vercel dashboard.

## Tech Stack

| Layer          | Technology                  |
| -------------- | --------------------------- |
| Framework      | Next.js 16 (App Router)     |
| Language       | TypeScript                  |
| Styling        | Tailwind CSS v4             |
| Runtime        | Bun                         |
| Fonts          | Geist Sans, Geist Mono      |
| OG Images      | Next.js ImageResponse (Edge)|
| Deployment     | Vercel                      |
| Design System  | Kommit Design System        |

## Development

### Prerequisites

- Bun 1.0 or later
- Node.js 18 or later (for Next.js compatibility)

### Setup

1. Install dependencies:
   ```bash
   bun install
   ```

2. Copy the environment example:
   ```bash
   cp .env.example .env.local
   ```

3. Start the development server:
   ```bash
   bun dev
   ```

### Development Scripts

- `bun dev` - Start dev server with Turbopack on port 3000.
- `bun run build` - Create an optimized production build.
- `bun run start` - Start the production server.
- `bun run lint` - Run ESLint across the project.

### Code Quality

- TypeScript strict mode enabled.
- ESLint with Next.js configuration.
- Kommit design system tokens enforced via CSS custom
  properties (no hardcoded colors in components).

## Project Structure

```
time-to-kommit/
├── public/                     # Static assets
│   ├── icon.svg                # Kommit logo (SVG)
│   ├── icon.png                # Apple touch icon (512x512)
│   └── sw.js                   # No-op service worker
├── src/
│   ├── app/
│   │   ├── globals.css         # Design tokens, animations
│   │   ├── layout.tsx          # Root layout, fonts, SEO
│   │   ├── page.tsx            # Countdown page
│   │   ├── opengraph-image.tsx # Dynamic OG image (edge)
│   │   └── twitter-image.tsx   # Twitter card image (edge)
│   ├── components/
│   │   ├── animated-logo.tsx   # Pixelated K build animation
│   │   ├── countdown-digit.tsx # Digit card with glow
│   │   └── theme-toggle.tsx    # Light/dark mode toggle
│   └── hooks/
│       ├── use-countdown.ts    # Countdown timer logic
│       ├── use-greeting.ts     # Time-of-day greeting
│       ├── use-tab-title.ts    # Tab away detection
│       └── use-tagline.ts      # Rotating taglines
├── .env.example                # Environment template
├── next.config.ts              # Next.js configuration
├── package.json                # Dependencies and scripts
├── postcss.config.mjs          # PostCSS with Tailwind
└── tsconfig.json               # TypeScript configuration
```

## License

![GitHub license](https://img.shields.io/github/license/nathanialhenniges/time-to-kommit.svg?style=for-the-badge&logo=github)

## Contact

For questions or feedback, reach out to the Kommit team:

- Website: [getkommit.ai](https://getkommit.ai)
- GitHub: [@nathanialhenniges](https://github.com/nathanialhenniges)

---

Made with love by the [Kommit Team](https://getkommit.ai)
