# Build plan

One step at a time. Before each step: propose a plan and wait for approval. After each step: run the build, report what to check in the browser, and commit.

## Step 1 — Project setup
- Create the Astro project (TypeScript, strict) in this folder without deleting the kit files.
- Add Tailwind CSS; create `src/styles/global.css` with `@import "tailwindcss";` followed by the contents of `brand/tokens.css`.
- Load the three Google Fonts (URL in `brand/tokens.json`).
- Copy `public/logo/*` into place (already under `public/`); add favicon and apple-touch-icon links in the base layout.
- `.gitignore` (node_modules, dist, .astro, .env, .DS_Store). Add Prettier (+ prettier-plugin-astro) and an `npm run format` script. Fill in the Commands section of `CLAUDE.md`.
- ✅ Check: `npm run dev` shows a night-colored page with "Jade Agentic" in Cormorant Garamond and the favicon in the tab.

## Step 2 — Layout shell
- `BaseLayout.astro` (head, fonts, meta, Open Graph basics), `Nav.astro` (notched navigation), `Footer.astro`.
- Nav: logo lockup as a link to `/`, then Services · About · Contact, then the **Book a call** pill (→ `/contact#book`).
- Reusable bits: `Button.astro` (primary/secondary × dark/light), `SectionIntro.astro` (label + title + intro), `GlassPanel.astro` (hero | panel).
- Mobile nav: compact notch with a menu button opening a full-screen sheet, plus a sticky "Book a call" bar after the hero (see `reference/source/01b-field-and-flight-v2-mobile.html`).
- ✅ Check: nav and footer at 390px and 1440px.

## Step 3 — The hero
- `BlurredField.astro` and `AsciiDoves.astro` from `assets/visuals/`; grain overlay.
- Hero frame (16px inset, 28px corners), label, headline, hero glass card with blurb and buttons, slight parallax.
- Reduced motion: still field, still doves, no rise.
- ✅ Check against `heromockupex.png` and `reference/source/01-field-and-flight-v2.html`. Lighthouse performance still 95+.

## Step 4 — Home sections (after `site-plan.md` copy is confirmed)
- Services preview (Launch and Studio cards, three-step strip, founding clients strip) → Contact and what's next (booking card, email, coming-soon line).
- Section reveal animation (fade up 30px) with GSAP or IntersectionObserver.

## Step 5 — Services page: built, then CUT
- Built and reviewed (commit `bb6a63e`), then removed on purpose: it repeated the home page and there isn't enough project evidence yet. "Services" is now a section of the home page.
- Revisit after the four founding projects, or when the AI services launch.

## Step 6 — About page: built
- Hero, who we are, how we work, what's next, and the shared contact panel; company-focused, "we" voice. See `site-plan.md`.
- To review: the "how we work" panel (kept for a first look, may be cut).

## Step 7 — Contact page
- Short hero, Calendly inline embed (lazy, `#book`), email card, Tally project form if kept (lazy).
- Placeholder boxes if URLs aren't ready yet.

## Step 8 — Work page (built, hidden)
- `/work` index and `/work/<slug>` case-study template from a content collection; everything hidden while no project has `draft: false`.
- Reference: `reference/source/02-ff2-site-work.html`.

## Step 9 — Polish and checks
- Responsive pass at 390 / 768 / 1024 / 1440. Contrast, focus states, alt text, keyboard navigation.
- Meta titles/descriptions, Open Graph image, sitemap, robots.txt, 404 page.
- Lighthouse: performance, accessibility, best practices, SEO all 95+.

## Step 10 — Launch
- Push to GitHub → import into Vercel → connect jadeagentic.com.
- Optional: Vercel Analytics.
