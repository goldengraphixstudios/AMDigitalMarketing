# AM Digital Marketing — Luxury Marketing Site

This project was generated from the local brand files in:
`C:\Users\AJHAY\Desktop\AM Digital Marketing`

## What Was Extracted From Local Files

**Source files scanned**
- `AM Digital Marketing INFO.pdf`
- `Branding.pdf`
- `Branding Image.jpg`

**Copy & positioning pulled from `AM Digital Marketing INFO.pdf`**
- Brand name: AM Digital Marketing
- Descriptor: CRM, Funnels & Digital Marketing Strategy
- CEO: Angelyn Mediana
- Positioning: systems-driven digital partner (not just a VA)
- Hero headline: “Turn Leads Into Clients With Smart Funnels & Automated Systems”
- Subheadline and services list
- Pricing framing: Custom Packages | Request a Quote
- Lead magnet: “Get a Free Funnel & Systems Audit”
- Website goals, tools & platforms list
- Social links and email

**Brand cues pulled from `Branding.pdf` + `Branding Image.jpg`**
- Fonts: Le Jour Script + Cormorant Garamond
- Palette: `#ff306d`, `#c68cdc`, `#70008f`, `#ffb5cd`
- Visual direction: premium feminine-modern, soft gradients, neutral workspace photography

## TODO / Missing From Source Files

- **Booking/Calendly link**: not provided in the PDF. The “Book a Discovery Call” button is shown in a disabled/TODO state.
- **Client logos**: “Clients we served” requested, but no logos supplied. The proof section notes TODO.
- **Portfolio projects**: PDF requested the page but left it blank. The portfolio page is intentionally placeholder-only.
- **Le Jour Script font file**: not included locally. The site uses `Allura` as a placeholder and notes to replace with licensed Le Jour Script when available.

## CTAs & Where They Point

- **Request a Quote** → `/contact` (multi-step quote form)
- **Book a Discovery Call** → TODO (disabled, no link provided)
- **Explore Our Services** → `/services`
- **Get your Free Funnel & Systems Audit** → `/free-audit`

## Tech Stack

- Next.js (App Router) + React + TypeScript
- Tailwind CSS
- Framer Motion
- GSAP + ScrollTrigger
- Lenis smooth scrolling
- next/image + next/font
- Playwright (smoke test + screenshot script)

## Animation Checklist

- **Hero headline staggered animation**: `src/components/AnimatedText.tsx` (used in `src/components/Hero.tsx`).
- **Scroll reveal (fade + translate + scale)**: `src/components/AnimatedSection.tsx` and `src/components/Reveal.tsx` used across sections.
- **Service card hover microinteractions**: `src/components/ServicesCards.tsx` + `.card-sweep` and `.gradient-border` in `src/app/globals.css`.
- **Page transitions**: `src/components/PageTransition.tsx`.
- **Smooth scrolling**: `src/components/SmoothScroll.tsx` (Lenis).
- **GSAP ScrollTrigger cinematic section**: `src/components/ServicesCinematic.tsx` (pinned and sequential steps).
- **Reduced motion fallback**: `useReducedMotion` throughout motion components.

## Quick Verification (Manual)

1. Load `/` and confirm the hero headline words animate in.
2. Scroll: Proof, Services, Process, Lead Magnet, About, Contact sections reveal with fade + translate + scale.
3. Hover service cards on `/services`: lift + glow + gradient sweep should be visible; idle float should be subtle.
4. Navigate between pages (e.g., `/` → `/services`) to see the page transition.
5. Toggle OS “Reduce motion” to confirm animations are reduced/disabled.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run test:e2e
```

## Playwright

Playwright is configured for smoke tests and screenshots. Install browsers before running:

```bash
npx playwright install
```
