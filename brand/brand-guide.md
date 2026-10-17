# Jade Agentic — brand guide

The written version of the brand kit preview (`reference/source/03-brand-kit-preview.html`).
Machine-readable values live in `brand/tokens.css` (Tailwind) and `brand/tokens.json`.

## The idea

**Nature, rendered in data.** Organic subjects (a field, doves, a jade tree) with a quiet digital layer over them (ASCII characters, monospace labels). Antique voice, modern hands: a classic serif for what we say, clean modern type for what you use.

The site has two worlds:
- **The field** — a dark, blurred, slowly drifting green background with film grain and ASCII doves. Used for the hero and the closing.
- **The paper** — warm, light sections for reading: services, what every project gets, about. The page alternates beige and green so it never becomes one long stretch of either (home: green hero, beige services, green how it works, beige every project, green contact).

Dark frames sit inside the page with a 16px inset and 28px corners, so the page feels like paper with windows onto the field.

## Logo

**The mark:** the Full Canopy jade bonsai — a bold trunk that tapers as it rises, five branches with rounded leaf clusters, a grounding line underneath, all inside a disc (after the *bi*, an ancient carved jade disc).

| File | Use |
|---|---|
| `public/logo/jade-disc-ivory.svg` | On dark backgrounds (navigation, footer, hero) |
| `public/logo/jade-disc-ink.svg` | On light backgrounds (paper, documents, email) |
| `public/logo/jade-disc-currentcolor.svg` | Inline SVG that takes the surrounding text color |
| `public/logo/favicon.svg`, `favicon-32.png`, `favicon-192.png`, `apple-touch-icon.png` | Browser and device icons (ivory mark on night) |
| `public/logo/jade-disc-*-512.png` | Social avatars, documents |

**Lockup:** mark + "Jade Agentic" in Cormorant Garamond 500. Mark height ≈ 1.3× the cap height of the wordmark; gap ≈ 10px at nav size (34px mark, 26px wordmark). Build the wordmark as live HTML text, not an image.

**Rules**
- One color only: Ivory on dark, Ink on light.
- Always keep the disc.
- Clear space: a quarter of the disc's width on every side.
- Minimum size: 24px on screen, 16px as a favicon.
- Never stretch, rotate, recolor, outline, or add shadows or gradients. Never place on a busy photo without a panel behind it.

## Color

See `tokens.css` for every value. In short:

| Group | Colors |
|---|---|
| The field (dark surfaces) | night `#16261C`, field `#1B2E22`, forest `#2E4A36`, shadow `#14231A` |
| On the field (text + accents) | ivory `#EFEBDF`, mist `#C9D2C3`, sage `#9DB592`, celadon `#BFD3CC` |
| The paper (light sections) | paper `#E9E4D8`, card `#F2EEE4`, ink `#1C241F`, moss `#3A453E` |
| Accent + support | jade `#3F6E5E`, lichen `#56665C`, fern `#7E927F`, leak `#D9E4C8` |

**Pairings that pass contrast**
- On night/field: ivory (headlines, buttons), mist (body), sage (labels).
- On paper/card: ink (headlines), moss (body), lichen or jade (labels).
- **Fern fails for small text** (4.3:1). Use it only at 18px+, or use sage/mist instead.

**Primary buttons:** ivory pill with night text on dark; ink pill with ivory text on paper. Secondary: 1px outline (ivory at 40% on dark, ink at 30% on paper).

## Typography

| Font | Role | Weights |
|---|---|---|
| **Cormorant Garamond** | The voice: headlines, company name, section and card titles | 400, 500, italic |
| **Instrument Sans** | The interface: body, nav, buttons, forms (default) | 400, 500 |
| **JetBrains Mono** | The digital detail: small uppercase labels, figure numbers, the doves | 400 |

Load all three from Google Fonts (URL in `tokens.json`), or self-host with Fontsource.

**Scale (desktop → mobile)**
- Display: serif 400, 168px → ~66px, line-height 0.86, tracking −0.03em. The hero headline is set without italics; elsewhere, italicize one key word per headline at most.
- Section title: serif 400, 76px → ~46px, line-height 0.95.
- Card / stage title: serif 400, 30–52px.
- Wordmark: serif 500, 26px.
- Body: sans 400, 16–17px, line-height 1.6.
- Nav: sans 400, 15px. Buttons: sans 500, 15–16px.
- Label: mono 400 uppercase, 11–12px, letter-spacing 0.18–0.2em. Use sparingly — a few per page, not every element.

## Glass panels

Frosted panels let the field show through while keeping text crisp.
- **Hero glass** (`.glass-hero`): short text + buttons directly on the moving field.
- **Panel glass** (`.glass-panel`): interactive cards on dark, like the booking picker.

**There is no limit on how many glass panels a page or a screen can have.** Use as many as the design needs.

The only real requirements:
- **A field behind it.** Glass only reads as glass when there is something to show through. Use dark glass on the green field and light glass on the light field. Flat paper with nothing behind it gives glass nothing to blur, so give a beige panel the light field first.
- **Readable text.** Text inside stays at least 16px and meets 4.5:1 contrast (measure it over the darkest and lightest parts of the field).

Light glass (`.glass-light`) is the version for beige panels: white-tinted, bright edge, soft shadow. It works over the **light field** (soft sage and celadon washes over beige), which every beige panel uses so the page never has flat beige.

**Raised panels** (cards with a soft shadow, such as Launch and Studio) have no per-page limit either. Use as many as the layout needs.

Contrast note: over the light field, small labels use `moss`, not `jade` (jade failed 4.5:1 over the darker washes, measured).

## Components

- **Notched navigation:** a 780×72px night bar cut into the top-center of the hero frame, bottom corners 26px, with inverted 26px curves where it meets the frame (radial-gradient corners). Contains: logo lockup (a link to the home page), 3 links (Services, which scrolls to its home page section, About, Contact), "Book a call" ivory pill with a forest icon circle and an up-right arrow.
- **Buttons:** fully rounded pills, 48–56px tall.
- **Eyebrow labels:** `NN · SECTION NAME` in mono, jade on paper, sage on dark.
- **Progress line:** 2–3px track in ink/14%, filled in jade.
- **Package cards:** one on card (light), one on `#1C2A21` (dark), side by side.
- **Shape:** frames 28px, cards 22–26px, small controls 12–14px, buttons and chips pill.

## Signature visuals

- **Blurred field** (`assets/visuals/blurred-field.ts`): random horizontal strokes in the field palette, painted once to a canvas, then blurred (26px) and slowly drifted with CSS (38s, alternate). Add `assets/visuals/grain.svg` on top at 16% opacity, `mix-blend-mode: overlay`.
- **ASCII doves** (`assets/visuals/ascii-doves.ts`): seven doves drawn from "·" and "•" in JetBrains Mono, porcelain `#F4F1E8`, with motion trails, depth by size, and drift away from the pointer. Still image under reduced motion. Pause off screen.
- **The bloom** was removed from the site plan; do not build it.

## Motion

- Ease `cubic-bezier(.2,.7,.15,1)`; reveals 1.1–1.3s; nothing bounces or snaps.
- Headlines rise line by line from behind a mask, 0.16s apart.
- Sections fade up 30px as they enter.
- The field drifts very slowly; the hero text parallaxes slightly on scroll.
- **Every effect has a still version** under `prefers-reduced-motion: reduce`.
