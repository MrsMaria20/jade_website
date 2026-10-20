# Site plan

> **Status: PROPOSED, being revised panel by panel with the owner.** Items marked `TODO` are open decisions. Copy marked DRAFT is not approved.
> Keep `[BRACKETS]` as visible placeholders until real content arrives. Voice rules: `brand/voice-and-copy.md` (results first, plain and direct, no explaining the method).

Audience: small to medium businesses of every kind.

## Pages

| Page | URL | Purpose |
|---|---|---|
| Home | `/` | Hero, services, how it works, what every project gets, and the contact / what's-next closing panel |
| About | `/about` | Who is behind the studio |
| Contact | `/contact` | Book the 20-minute call (Calendly), send a brief, or email |
| Work | `/work` | **Built, not published.** See the end of this file |

## Navigation

Logo lockup (a link to `/`, accessible name "Jade Agentic, home") → `Services` (`/#services`, a section of the home page) · `About` (`/about`) · `Contact` (`/contact`) · **Book a call** pill (`/contact#book`).
A `Work` link is added automatically once a project is published.
Mobile: compact notch with a menu button opening a full-screen sheet, plus a sticky "Book a call" bar after the hero (see `reference/source/01b-field-and-flight-v2-mobile.html`).

---

## Home `/`

Visual reference: hero from `heromockupex.png` and `reference/source/01-field-and-flight-v2.html`; the rest from `reference/source/02-ff2-site-home.html`. The bloom section in that file is not used.

**Layout rule:** the home page is five panels, and each fills exactly one screen (the browser window), so the next panel appears as the visitor scrolls. Colour rhythm: green hero, beige services, green how it works, beige every project, green contact. Beige panels are NOT flat: they use the **light field** (soft sage and celadon washes over beige) so they feel related to the green ones (a crumpled-paper texture was tried and rejected). **Window-opening transition** (the panel is a rounded frame that grows from a smaller window as you scroll to it and closes as you scroll back): on the contact panel only. Services, how it works, and every project are plain full-width panels with square edges.

### 1. Hero: the field (dark)
- Frame: field + grain + ASCII doves; notched navigation cut into the top.
- No label above the headline (the "A SMALL WEB STUDIO" label was removed).
- Headline (serif, very large, bottom left, two lines): **Websites built to represent you**
- Hero glass card (right): "Custom websites for small to medium businesses, built so your brand resonates with the people you want to reach. We define what your site needs together, then handle every step from there." (No timeline in the hero: the owner is new and does not want to promise a number; timelines are agreed per project on the call.)
  - On phones (under 768px) only the first sentence is shown, so the card stays short; the second button reads "Services" there.
  - Buttons: **Start a project** (→ `/contact`) · See our services (→ `#services`)
- No vertical side text and no scroll cue (both removed from the mockup).

### 2. Services: beige with the light field, plain full-width, one screen (`#services`)
- Label: `01 · SERVICES`
- Header: **Two ways to get your website live.** On the right: "Most projects start here. We confirm the exact scope on a call." and a **Book a call** button (→ `/contact#book`).
- Two starting-point cards (light and dark, side by side). **No prices and no revision or change rules on the site**; budget and exact scope are settled on the call.
  - **Launch** · one or two pages, a minimal marketing site. DRAFT: "A focused site that puts your business in front of the right people and makes it easy to get in touch." Includes: contact form, booking link, search basics, domain connection. Timeline: 1 to 2 weeks.
  - **Studio** · the complete, built-out website. DRAFT: "A complete website that represents your whole business, with a page for everything your customers look for." Includes: everything in Launch, plus more pages; scope confirmed on a call. Timeline: 3 to 4 weeks.
  - Timelines are ranges; the clock starts once scope is agreed and content is received.

### 3. How it works: the green field, one screen (`#how-it-works`)
The one colored panel between two beige ones, so the page has a rhythm: green hero, beige services, **green how it works**, beige every project, green contact. Full-width green field with a dark veil (35%) so the small step text stays readable (measured contrast 4.8:1 or better).
- Label: `02 · HOW IT WORKS`
- Header: **From first conversation to live site, in three steps.**
- Three steps (names avoid the word "Launch"): **Talk it through** (we define what your site needs, together) → **We build it** (we handle every step; you don't need to learn a site builder) → **You're live** (your site goes live on your own domain).
- Founding clients strip (dashed border, under the steps): The first four projects are offered at a reduced rate, in exchange for a testimonial and permission to share the work. **Ask about a spot** (→ `/contact`). Set `foundingSpotsOpen` to `false` in `src/data/site.ts` when all four spots are taken, and the strip disappears from the site.

### 4. Every project: paper, one screen (`#every-project`)
- Label: `03 · EVERY PROJECT`
- Header: **What you get either way.**
- Layout: a full-width beige panel with the light field. The header and the three points sit directly on it, and the three points are frosted-glass bubbles (white-tinted glass with a bright edge) over the light field, so the glass has something soft to blur. No window transition and no letter reveal here (the letter reveal is kept for the "how it works" header only).
- Three points: **Designed from scratch** (your site is designed around your business, not built from a template) · **Works on every device** (built to work well on phones, tablets, and computers) · **You own everything** (your domain, your site, and your accounts are in your name). All three confirmed by the owner.

### 5. Contact: the field, one screen (`#contact`)
- Left:
  - Label: `04 · CONTACT`
  - Heading: **Tell us about your business.**
  - Text: "A 20-minute call about your business and what your website needs to do for it. You'll leave knowing the next step."
  - Email line: "Prefer to write? team@jadeagentic.com"
- Right (panel glass): booking card, "20 minutes", button **Choose a time** (→ `/contact#book`). Do not mention cost; the call is free, but price stays off the card.
- (No founding clients strip here: it moved to the "how it works" panel, which leaves this panel roomy on purpose. Extra space sits between "Prefer to write?" and the coming-soon line.)
- Coming-soon line (below, quieter): "Coming soon: AI assistants that handle the routine work, so you can focus on what matters most. Email us to hear first." The email link is a plain `mailto:` link; no second form.

### Motion on the home page
All of it is slow and calm, and every effect has a still version under reduced motion.
- **Hero:** headline rises line by line; label, card fade up; field and headline move slightly on scroll.
- **How it works header:** the title writes itself in, each letter fading in at random, and it is tied to the scroll position: scrolling down writes it in, scrolling up fades it back out, and stopping part-way leaves it part-way (reference: `assets/visuals/transition_reference.mov`, kept on the owner's computer only). Used on this header only, so it stays special.
- **Contact frame:** opens like a window, growing from a smaller rounded frame to full width as you scroll to it.
- **Cards:** Launch and Studio rise slightly on hover, and the timeline line draws across in green.
- **Sections:** content fades up 30px as it enters.

### Footer (all pages)
Night background: closing line + **Book a call** / email buttons; columns: logo + short descriptor · Pages (Services, About, Contact) · Elsewhere: LinkedIn only (https://www.linkedin.com/company/jade-agentic, set in `src/data/site.ts`; no Instagram); bottom row: © 2026 JADE AGENTIC · JADEAGENTIC.COM. `TODO:` footer copy in the new voice.

---

## Services page: CUT FOR NOW (decision, not a gap)

The owner decided to **cut the separate Services page**. It repeated the home page (the same two cards and the same contact panel), and with no finished projects yet there isn't enough real evidence to write a meaningful Launch-versus-Studio comparison without inventing it. "Services" is now a section of the home page (`#services`), and the nav "Services" link scrolls to it.

**Bring it back when** there are real differences to describe (after the four founding projects) or when the AI assistants and agentic workflows launch, which gives the page a reason to exist. Its first version is in git history (commit `bb6a63e`), including the "Best for" cards and the "Every project" panel.

## About `/about`

Visual reference: `reference/source/02-ff2-site-about.html` (layout only). **About Jade Agentic as a business, not about the owner personally** (owner's direction): a "we" voice, no personal story, no portrait (the logo mark stands in), no name. Five panels, each filling one screen, in the home page's colour rhythm:

1. **Hero** (green field, doves): label `JADEAGENTIC.COM / ABOUT`; headline **Real people, start to finish.**; line: "A small studio, on purpose. You work directly with whoever designs and builds your site, from the first call to launch."
2. **Who we are** (beige light field): one wide **light-glass card** that is a single surface (the logo half and the text half share the exact same background; the owner's reference had two shades and asked for one). It rises and gains a soft shadow on hover as one piece, like the home page cards. Left: the Jade logo mark, large. A thin vertical hairline, then on the right: `01 · WHO WE ARE` at the top of the card, and in the middle the title and paragraph spread to the height of the logo (the title's top lines up with the top of the logo, the paragraph's bottom with the bottom of the logo, with a clear gap between them): the title **A web studio for businesses like yours.** and "Jade Agentic is a web design and development studio for small to medium businesses. We build custom websites, designed so your brand resonates with the people you want to reach, and we handle every step from the first conversation to a live site." (A line about the meaning of the mark was tried and removed.)
3. **How we work** (green field): `02 · HOW WE WORK`, **What working with us is like.** Three points: **No handoffs** (the people you meet are the people who build your site) · **Scope agreed first** (we agree what your site needs, and the budget, with you on a call before the work begins) · **Straight answers** (AI assistants and agentic workflows are coming soon, not here today; we say plainly what is ready and what is not). *First version, to review; the owner confirms each point is true before launch.*
4. **What's next** (beige light field, three light-glass bubbles): `03 · WHAT'S NEXT`, **Websites now. More on the way.** NOW: Websites (custom websites, designed around your business and live on your own domain) · COMING SOON: AI assistants (assistants that handle the routine work, so you can focus on what matters most) · COMING SOON: Agentic workflows (routine processes handled from start to finish; draft wording to confirm).
5. **Contact**: the shared closing panel, numbered `04 · CONTACT`.

Left out on purpose: the mockup's personal "Hi, I'm [Your name]" story and portrait (the page is about the company); "AI for speed, never shortcuts" and the toolkit list (they describe the method, which the voice rules avoid; the footer no longer says "built with Astro" either); "You own everything" (already on the home page).

## Contact `/contact`

Visual reference: `reference/source/02-ff2-site-contact.html` (layout only). Two panels, each filling one screen. **Booking is the one conversion goal**, so there is no project form (the mockup's Tally form asks for a rough budget, which conflicts with settling budget on a call; email already covers "send a brief").

1. **Hero** (green field, doves): label `JADEAGENTIC.COM / CONTACT`; headline **Tell us about your business.**; line: "Book a 20-minute call, or just email. Whichever feels easiest."
2. **Book a call** (`#book`, beige light field): left: `01 · BOOK A CALL`, **Pick a time.**, "A 20-minute call about your business and what your website needs to do for it. You'll leave knowing the next step.", and a light-glass card, "Prefer to write?" with **team@jadeagentic.com** and "Send a note, a link to your current site, or a few sites you love." Right: the **Calendly calendar** in a white rounded card (lazy-loaded), with an "Open it in a new tab" fallback link.

Every "Book a call" button on the site goes to `/contact#book`. The Calendly link is set once, as `calendlyUrl` in `src/data/site.ts` (the EVENT link, e.g. `https://calendly.com/yourname/20min`). Until it is set, a visible `[Calendly link]` placeholder box shows. Only real `https://calendly.com/` links are accepted.

## Work `/work`: BUILT, NOT PUBLISHED

There is no portfolio yet. This page is built so it's ready, but it stays off the live site, the nav, and the sitemap until the first real project is added.

Visual reference: `reference/source/02-ff2-site-work.html` (layout only; drop its "new studio" intro copy).

**Index `/work`**
1. Short hero (field, 640px, doves): label `JADEAGENTIC.COM / WORK`; headline **Selected *work.***; subline [ONE LINE ABOUT THE KIND OF WORK SHOWN].
2. Project grid (paper): one card per published project, newest first → cover image, client name, business type, one-line summary, `VIEW PROJECT →`.
3. Closing booking strip + footer.

**Case study `/work/<slug>`** (one template, one page per project)
1. Hero: client name, business type, year, services as mono labels, cover image, **Visit the live site** button (if `liveUrl`).
2. The brief: what the business needed (2–3 sentences).
3. Process figures: `FIG. 01 — DISCOVERY` · `FIG. 02 — DESIGN` · `FIG. 03 — BUILD`, each an image + short caption.
4. Results strip (mono stats): only real numbers. Leave out any stat you can't verify.
5. Client quote (optional, only with permission).
6. Next project link → booking strip → footer.

**Project file**: `src/content/work/<slug>.md`, one per project:
```yaml
title: "[CLIENT NAME]"
businessType: "[e.g. Bakery]"
year: 2027
services: ["Design", "Build", "Launch"]
summary: "[One line for the card]"
cover: "./images/<slug>/cover.jpg"
liveUrl: "https://..."        # optional
stats:                        # optional, real numbers only
  - { label: "Performance", value: "98" }
quote: { text: "...", name: "...", role: "..." }   # optional, with permission
draft: true                   # set to false to publish (this also makes /work and the nav link appear)
```
The Markdown body holds the brief and figure captions.

**To publish the first project:** add the `.md` file and images, set `draft: false`, commit, push. Vercel rebuilds and `/work`, the nav link, and the sitemap entry appear together.

---

## Real details still needed
- Done: contact email is **team@jadeagentic.com** (set in `src/data/site.ts`). Email only; no phone number is shown on the site, by choice.
- Done: the Calendly event link is set (`calendlyUrl` in `src/data/site.ts`) and the embed is verified. The event itself is "Jade Agentic Discovery Call, 20 min" (the link's name ends in `30min`, which is only a leftover label). The embedded calendar is tinted in the brand colours via the embed link (accent jade `#3F6E5E`, text ink `#1C241F`, background white); this works on the owner's Calendly account. A floating Calendly pop-up badge was considered and not added: the site already has the nav button, the mobile sticky bar, and the embedded calendar, and a badge would add a third-party script to every page. Things Calendly controls, not the site: the host name shown at the top of the calendar, the "Powered by Calendly" ribbon (free plan), and Calendly's own cookie notice.
- Decided: no project form (Tally dropped).
- Decided: founding spots are four; no timeline number in the hero; card ranges are 1 to 2 weeks and 3 to 4 weeks.
- Decided: no prices on the site; price, budget, revisions, and change rules are covered on the call and in the written agreement.
- Done: LinkedIn company page is live and linked in the footer (`https://www.linkedin.com/company/jade-agentic`). No Instagram.
