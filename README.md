# Zee VPN — Marketing Site

Marketing site and landing pages for **Zee VPN**, a free Android VPN unlocked by a single short ad.

Built with **Next.js 15 App Router** + **Tailwind CSS 3.4** + **TypeScript**, fully statically prerendered, deploys to **Vercel** with zero configuration.

---

## Stack

| Concern | Choice |
| --- | --- |
| Framework | Next.js 15.3 (App Router, fully static) |
| Language | TypeScript |
| Styling | Tailwind CSS 3.4 + shadcn/ui primitives |
| Animations | Tailwind `animate-*` + Lenis (momentum scroll) |
| Forms | `react-hook-form` + `zod` |
| 3D globe | [`cobe`](https://github.com/shuding/cobe) (WebGL, ~6KB) |
| Speed test | [`@cloudflare/speedtest`](https://github.com/cloudflare/speedtest) |
| IP / geo lookup | [iplogs.com](https://iplogs.com/docs) — `POST /v1/check` |
| Fonts | Inter (via `next/font/google`) |

---

## Getting started

Requires Node 18.18+ (Node 20 LTS recommended).

```bash
npm install
npm run dev        # http://localhost:9002
```

| Script | Purpose |
| --- | --- |
| `npm run dev` | Dev server on port 9002 |
| `npm run dev:clean` | Wipes `.next` then starts dev |
| `npm run build` | Production build (SSG) |
| `npm run start` | Serve the production build |
| `npm run lint` | Next.js ESLint |
| `npm run typecheck` | `tsc --noEmit` |

---

## Project structure

```
src/
├── app/                       # App Router routes (all static)
│   ├── layout.tsx             # Root layout: fonts, smooth scroll, top banner, header, footer
│   ├── page.tsx               # Home: hero → pillars → feature rows → ticker → testimonials → CTA
│   ├── globals.css            # Tailwind layers + design tokens + utility classes
│   ├── blog/                  # Blog landing
│   ├── contact/               # Contact form (server action + zod validation)
│   ├── download/              # Download landing
│   ├── get-pin/               # Free-PIN request flow (server action)
│   └── what-is-a-vpn/         # Educational page with sticky nav
├── components/
│   ├── header.tsx             # Morphing pill header (full-width → compact pill on scroll)
│   ├── footer.tsx             # Brand + nav columns + status row
│   ├── top-banners.tsx        # IP/ISP/protection bar (iplogs.com)
│   ├── hero-section.tsx       # Home hero
│   ├── smooth-scroll.tsx      # Lenis init (mounted in root layout)
│   ├── animate-on-scroll.tsx  # IntersectionObserver-based fade/slide
│   ├── marketing-headline.tsx # Headline typography primitive
│   └── ui/                    # shadcn/ui primitives + custom widgets
│       ├── button.tsx
│       ├── card.tsx
│       ├── country-ticker.tsx # Marquee of regions + live load %
│       ├── globe.tsx          # cobe WebGL globe + DOM marker overlays w/ hover tooltips
│       ├── speed-gauge.tsx    # Live Cloudflare speed test w/ animated gauge + results panel
│       └── …
├── hooks/
│   └── use-toast.ts
└── lib/
    ├── cdn-images.ts          # External image URLs
    ├── data.ts                # Static content (benefits, tiers, testimonials)
    ├── free-pin-eligibility.ts
    ├── hsl-to-hex.ts
    └── utils.ts               # `cn` (clsx + tailwind-merge)
```

---

## Design system

Centralized in `src/app/globals.css` and `tailwind.config.ts`:

- **Color tokens** are HSL CSS variables (`--background`, `--primary`, `--accent`, …). Tailwind reads them via `hsl(var(--token))`.
- **Dark mode** is the default and only theme (`<html class="dark">`).
- **Custom utility classes** live in `@layer components`:
  - `.section-eyebrow` — small-caps eyebrow label with a hairline accent
  - `.surface-card` — refined card surface preset
  - `.hairline-divider` — subtle gradient horizontal rule
  - `.mask-fade-x` — left/right edge fade for marquees
- **Typography refinements** in `body { … }`: `font-feature-settings: 'cv11','ss01','cv02'`, `optimizeLegibility`, `font-synthesis-weight: none`.
- **Anti-FOUC**: body starts at `opacity: 0` via inline `<style>` in the layout; the Tailwind layer transitions it to `opacity: 1` once styles are applied.

---

## Notable interactive widgets

### `<Globe />` (`src/components/ui/globe.tsx`)
WebGL globe rendered by `cobe`. The native cobe markers are disabled — instead, real-world city lat/lng are projected to screen-space in a `requestAnimationFrame` loop and rendered as DOM elements, which lets each marker have a hover tooltip with country flag + city name. Depth-aware: markers fade and scale as they approach the visible hemisphere edge.

### `<SpeedGauge />` (`src/components/ui/speed-gauge.tsx`)
Live download speed test powered by `@cloudflare/speedtest` (free, no API key, CORS-enabled). The gauge animates in real time as `onResultsChange` streams. When the test completes, the gauge cross-fades into a results panel showing Ping / Jitter / Loaded latency, with a "Check Again" button to re-run. Real city/IP comes from iplogs.com on mount.

### `<CountryTicker />` (`src/components/ui/country-ticker.tsx`)
Horizontal marquee of region pills with live load percentages (color-coded by load tier). Loads jitter every 4s for a live feel. Uses the `ticker` keyframe registered in `tailwind.config.ts` + the `.mask-fade-x` utility for clean edges.

### `<SmoothScroll />` (`src/components/smooth-scroll.tsx`)
Lenis-driven momentum scroll mounted at the root. Respects `prefers-reduced-motion`. Hijacks anchor link clicks and scrolls to them with a `-96px` offset to clear the fixed header.

### Morphing `<Header />`
Full-width transparent at the top of the page; condenses into a centered floating pill on scroll. Uses a single `cubic-bezier(0.22, 1, 0.36, 1)` timing function across all morph properties and a hysteresis threshold (enter at 28px, exit at 12px) to prevent flicker.

---

## Forms

`src/app/contact/actions.ts` and `src/app/get-pin/actions.ts` are Next.js Server Actions that validate input with `zod` schemas. The contact action currently logs the submission and returns success — wire up your email/DB pipeline there before launching with real users.

---

## Deployment

This is a **fully static** site — no server runtime required.

### Vercel (recommended)

```bash
vercel
```

No additional configuration is needed. Vercel auto-detects Next.js, runs `npm run build`, and serves the prerendered output from the edge.

### Other hosts

`npm run build` produces a static-friendly App Router build. Most platforms that support Next.js (Netlify, AWS Amplify, etc.) will work; for plain static hosting, you can also export with the `output: 'export'` flag — but note that server actions (contact, get-pin) require a Node runtime.

---

## Environment

The site currently uses no environment variables. The two external APIs (iplogs.com, Cloudflare Speedtest) require no keys. If you later wire up the contact server action to send email or persist submissions, add the relevant secrets via `vercel env add` (or your platform equivalent) — do **not** commit them. `.env*` is already in `.gitignore`.

---

## Conventions

- **Imports** sorted: external → `@/*` aliases → relative.
- **Styling**: prefer Tailwind utilities; reach for `@layer components` in `globals.css` only when a pattern is reused 3+ times.
- **Components**: shadcn/ui primitives live in `src/components/ui/`; cross-cutting marketing components live in `src/components/`.
- **No prop drilling for theme**: tokens are CSS variables; consume via Tailwind.
- **Server Actions** for forms (no client-side fetch unless required).
- **Type-only imports** used where applicable (`import type { … }`).

---

## License

Proprietary. © Zee VPN.
