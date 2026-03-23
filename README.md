# Time to Kommit

A countdown timer for the next Kommit.

## Setup

```bash
bun install
cp .env.example .env.local
# Edit .env.local with your target date
bun dev
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_COUNTDOWN_DATE` | ISO 8601 date string for the countdown target (e.g. `2026-04-01T13:00:00Z`) |

## Deploy

Push to GitHub and connect to [Vercel](https://vercel.com). Set `NEXT_PUBLIC_COUNTDOWN_DATE` in the Vercel dashboard environment variables.
