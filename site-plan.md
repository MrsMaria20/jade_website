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

**Layout rule:** the home page is four panels, and each fills exactly one screen (the browser window), so the next panel appears as the visitor scrolls. Paper panels are flat paper color (a crumpled-paper texture was tried and rejected).

### 1. Hero: the field (dark)
- Frame: field + grain + ASCII doves; notched navigation cut into the top.
- No label above the headline (the "A SMALL WEB STUDIO" label was removed).
- Headline (serif, very large, bottom left, two lines): **Websites built to represent you**
- Hero glass card (right): "Custom websites for small to medium businesses, built so your brand resonates with the people you want to reach. We define what your site needs together, then handle every step from there." (No timeline in the hero: the owner is new and does not want to promise a number; timelines are agreed per project on the call.)
  - On phones (under 768px) only the first sentence is shown, so the card stays short; the second button reads "Services" there.
  - Buttons: **Start a project** (→ `/contact`) · See our services (→ `#services`)
- No vertical side text and no scroll cue (both removed from the mockup).

### 2. Services: paper, one screen (`#services`)
- Label: `01 · SERVICES`
- Header: **Two ways to get your website live.** On the right: "Most projects start here. We confirm the exact scope on a call." and a **Book a call** button (→ `/contact#book`).
- Two starting-point cards (light and dark, side by side). **No prices and no revision or change rules on the site**; budget and exact scope are settled on the call.
  - **Launch** · one or two pages, a minimal marketing site. DRAFT: "A focused site that puts your business in front of the right people and makes it easy to get in touch." Includes: contact form, booking link, search basics, domain connection. Timeline: 1 to 2 weeks.
  - **Studio** · the complete, built-out website. DRAFT: "A complete website that represents your whole business, with a page for everything your customers look for." Includes: everything in Launch, plus more pages; scope confirmed on a call. Timeline: 3 to 4 weeks.
  - Timelines are ranges; the clock starts once scope is agreed and content is received.

### 3. How it works: paper, one screen (`#how-it-works`)
- Label: `02 · HOW IT WORKS`
- Header: **From first conversation to live site, in three steps.**
- Three steps (names avoid the word "Launch"): **Talk it through** (we define what your site needs, together) → **We build it** (we handle every step; you don't need to learn a site builder) → **You're live** (your site goes live on your own domain).

### 4. Every project: paper, one screen (`#every-project`)
- Label: `03 · EVERY PROJECT`
- Header: **What you get either way.**
- Three points: **Designed from scratch** (your site is designed around your business, not built from a template) · **Works on every device** (built to work well on phones, tablets, and computers) · **You own everything** (your domain, your site, and your accounts are in your name). All three confirmed by the owner.

### 5. Contact: the field, one screen (`#contact`)
- Left:
  - Label: `04 · CONTACT`
  - Heading: **Tell us about your business.**
  - Text: "A 20-minute call about your business and what your website needs to do for it. You'll leave knowing the next step."
  - Email line: "Prefer to write? team@jadeagentic.com"
- Right (panel glass): booking card, "20 minutes", button **Choose a time** (→ `/contact#book`). Do not mention cost; the call is free, but price stays off the card.
- Founding clients strip (dashed border, full width, below the two columns): The first four projects are offered at a reduced rate, in exchange for a testimonial and permission to share the work. **Ask about a spot** (→ `/contact`). Set `foundingSpotsOpen` to `false` in `src/data/site.ts` when all four spots are taken, and the strip disappears.
- Coming-soon line (below, quieter): "Coming soon: AI assistants that handle the routine work, so you can focus on what matters most. Email us to hear first." The email link is a plain `mailto:` link; no second form.

### Motion on the home page
All of it is slow and calm, and every effect has a still version under reduced motion.
- **Hero:** headline rises line by line; label, card fade up; field and headline move slightly on scroll.
- **How it works header:** the title writes itself in, each letter fading in at random, and it is tied to the scroll position: scrolling down writes it in, scrolling up fades it back out, and stopping part-way leaves it part-way (reference: `assets/visuals/transition_reference.mov`, kept on the owner's computer only). Used on this header only, so it stays special.
- **Contact frame:** opens like a window, growing from a smaller rounded frame to full width as you scroll to it.
- **Cards:** Launch and Studio rise slightly on hover, and the timeline line draws across in green.
- **Sections:** content fades up 30px as it enters.

### Footer (all pages)
Night background: closing line + **Book a call** / email buttons; columns: logo + short descriptor · Pages (Services, About, Contact) · Elsewhere: [LinkedIn] [Instagram]; bottom row: © 2026 JADE AGENTIC · JADEAGENTIC.COM. `TODO:` footer copy in the new voice.

---

## Services page: CUT FOR NOW (decision, not a gap)

The owner decided to **cut the separate Services page**. It repeated the home page (the same two cards and the same contact panel), and with no finished projects yet there isn't enough real evidence to write a meaningful Launch-versus-Studio comparison without inventing it. "Services" is now a section of the home page (`#services`), and the nav "Services" link scrolls to it.

**Bring it back when** there are real differences to describe (after the four founding projects) or when the AI assistants and agentic workflows launch, which gives the page a reason to exist. Its first version is in git history (commit `bb6a63e`), including the "Best for" cards and the "Every project" panel.

## About `/about`

Visual reference: `reference/source/02-ff2-site-about.html`.
`TODO:` sections and copy. First person ("I") is allowed here.

## Contact `/contact`

Visual reference: `reference/source/02-ff2-site-contact.html`.

1. **Short hero** (field, 640px tall, doves): label `JADEAGENTIC.COM / CONTACT`; headline `TODO`; subline: book a 20-minute call, send a short brief, or email.
2. **Two columns, paper:**
   - Left: **Project form**, Tally embed (`TODO:` [TALLY FORM URL]; optional, confirm whether to keep). The mockup's 3-step form shows the questions: name, email, business + website → what you need + rough budget ([A] / [A]–[B] / [B]+ / not sure) → message.
   - Right (`#book`): **Calendly inline embed** for the 20-minute intro call (`TODO:` [CALENDLY URL]); below it an email card: [YOUR EMAIL].
3. Footer.

---

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
- `TODO:` [CALENDLY URL]
- `TODO:` [TALLY FORM URL] (only if the project form is kept)
- Decided: founding spots are four; no timeline number in the hero; card ranges are 1 to 2 weeks and 3 to 4 weeks.
- Decided: no prices on the site; price, budget, revisions, and change rules are covered on the call and in the written agreement.
- `TODO:` social links (no accounts yet; a company LinkedIn page is planned, then its URL goes in `src/data/site.ts`)
