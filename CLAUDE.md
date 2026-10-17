# Jade Agentic — website

Marketing site for **Jade Agentic**, a one-person web design and development studio.
Today it sells custom websites to small to medium businesses of every kind. Write for a broad audience; don't single out any one industry.
Next, it will offer AI assistants and agentic workflows. The site should say so honestly: "coming soon," never implied as available now.

Live domain: jadeagentic.com

## Stack

- **Astro** (static output) with **TypeScript**
- **Tailwind CSS** for layout and styling; brand tokens live in `src/styles/global.css` under `@theme`
- **GSAP + ScrollTrigger** for scroll animation (headline reveals, section fade-ups)
- **HTML canvas, no library** for the ASCII doves and the blurred field (`src/components/AsciiDoves.astro`, `BlurredField.astro`)
- **Google Fonts**: Cormorant Garamond, Instrument Sans, JetBrains Mono
- **Tally** (project form) and **Calendly** (20-minute intro call), both embedded
- **Vercel** hosting, deployed from GitHub. No backend, no database.
- No React unless a feature truly needs it. Ask before adding any new dependency.

## Pages

Three live pages: Home `/`, About `/about`, Contact `/contact`. A fourth, Work `/work`, is built but hidden until the first real project is published. There is no Services page (cut on purpose; see `site-plan.md`); "Services" is a section of the home page.
Navigation: logo (links home) · Services (`/#services`) · About · Contact · **Book a call** pill (to `/contact#book`, where Calendly is embedded).
`site-plan.md` has every section in order with its copy (PROPOSED; open items are marked `TODO`). `build-plan.md` has the build steps.

## Where things are

| Path | What it is |
|---|---|
| `brand/brand-guide.md` | The full brand kit, written out |
| `brand/tokens.css` | Tailwind `@theme` tokens; becomes `src/styles/global.css` in build step 1 |
| `brand/tokens.json` | Same values as data (incl. Google Fonts URL, field palette) |
| `brand/voice-and-copy.md` | Tone, key lines, placeholder rules |
| `public/logo/` | Full Canopy bonsai: SVGs, PNGs, favicons |
| `assets/visuals/` | `ascii-doves.ts`, `blurred-field.ts`, `grain.svg`; wrap in Astro components |
| `reference/source/` | Approved mockups as annotated source (see below) |

## Source of truth for design

Match these mockups in `reference/source/` (each file starts with a comment saying what to take from it):
- `01-field-and-flight-v2.html` (+ `01b-…-mobile.html`): hero, doves, logo in nav, overall look
- `02-ff2-site-home.html`, `02-ff2-site-contact.html`: sections, components, glass panels, footer (ignore the bloom section; it was removed)
- `02-ff2-site-about.html`: layout reference for the About page (`02-ff2-site-services.html` is no longer used; the Services page was cut)
- `02-ff2-site-work.html`: layout reference for the hidden Work page
- `heromockupex.png`: the approved hero layout (copy and card treatment per `site-plan.md`)
- `03-brand-kit-preview.html`: visual brand summary

When the mockups and this file disagree, this file wins. When unsure, ask instead of guessing.

## Brand rules

**Colors** — always use the Tailwind tokens, never raw hex values in components.
| Token | Hex | Use |
|---|---|---|
| night | #16261C | page background, nav notch, footer |
| field | #1B2E22 | hero and closing panels |
| forest | #2E4A36 | icon circles in buttons |
| ivory | #EFEBDF | headlines and primary buttons on dark |
| mist | #C9D2C3 | body text and nav links on dark |
| sage | #9DB592 | labels and highlights on dark |
| celadon | #BFD3CC | soft accent, selected states |
| paper | #E9E4D8 | light section background |
| card | #F2EEE4 | cards on paper |
| ink | #1C241F | headlines and dark cards on paper |
| moss | #3A453E | body text on paper |
| jade | #3F6E5E | brand accent: labels, progress bars, active rings |
| lichen | #56665C | small labels on paper |
| fern | #7E927F | large text on dark only (fails contrast when small) |

**Type**
- `font-serif` Cormorant Garamond 400/500 (+ italic): headlines, the company name, section and card titles. Italicize one key word per headline at most.
- `font-sans` Instrument Sans 400/500: everything people read or tap — body, nav, buttons, forms. Default font.
- `font-mono` JetBrains Mono 400: small UPPERCASE labels with wide letter-spacing (~0.18–0.2em), figure numbers.

**Logo** — the Full Canopy jade bonsai in a disc (`public/logo/`). Ivory on dark, ink on light. One color only. Never stretch, recolor, outline, or add effects. Minimum 24px (16px favicon).

**Glass panels** — **no limit** on how many glass panels (or raised cards) a page or screen can have. Glass needs a field behind it to read as glass: dark glass on the green field, light glass (`.glass-light`) on the *light field* (soft sage and celadon washes) that beige panels use. Don't put glass on flat paper with nothing behind it. Keep text at least 16px and 4.5:1 contrast.
- Hero glass: `bg rgba(239,235,223,.08)`, `backdrop-blur 14px`, `border 1px rgba(239,235,223,.16)`, radius 22px
- Panel glass: `bg rgba(239,235,223,.06)`, `backdrop-blur 10px`, `border 1px rgba(239,235,223,.14)`, radius 24px

**Shape** — hero frames: 28px radius, 16px inset from the window edge, with the notched navigation cut into the top. Cards 22–26px. Small controls 12–14px. Buttons and chips fully rounded.

## Voice

Results first: say what the business gets (its brand resonating with the right audience, a site that does its job, an easy process), not how the work is done. Plain, direct sentences; no fluffy language. Full rules in `brand/voice-and-copy.md`.

## Motion

- Slow, calm easing: `cubic-bezier(.2,.7,.15,1)`, 1–1.3s reveals. Nothing bounces or snaps.
- Every animation must have a still version under `prefers-reduced-motion: reduce`.
- Pause canvas animations when off screen.

## Quality bar

- Mobile first. Check every section at 390px wide and at 1440px.
- Text contrast at least 4.5:1 (3:1 for 24px+). Real `<button>` and `<a>` elements, visible focus states, alt text.
- Target 95+ mobile Lighthouse performance. Lazy-load embeds (Calendly, Tally).
- Placeholders stay in [BRACKETS] until real content arrives. Never invent prices, stats, reviews, or client names.

## Code style: readable first

The client reads this code. Every file must be easy to follow:
- **Header comment** at the top of every file: what it is, where it's used, and which mockup it matches.
- **Section comments** above each block of markup (`<!-- ===== HERO: … ===== -->`), each group of CSS rules, and each function (what it does and why, not just its name).
- **One statement per line.** Consistent 2-space indentation. Blank lines between sections, rules, and functions. Long attribute lists and objects broken across lines.
- Descriptive names (`heroHeadline`, not `hh`). No dense one-liners, no minified-looking code.
- Run Prettier before committing (`npm run format`, set up in step 1).

## How to work

- Follow `build-plan.md` one step at a time. Propose a plan before each step and wait for approval.
- Keep components small and reusable (`Nav`, `Footer`, `GlassPanel`, `Button`, `SectionIntro`, …).
- After each step: run the build, check for errors, and tell me what to look at in the browser.
- Commit after each working step with a clear message.

## Commands

<!-- Fill in after the Astro project is created -->
- `npm run dev` — local preview
- `npm run build` — production build
- `npm run format` — Prettier over the whole project
