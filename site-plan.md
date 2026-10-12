# Site plan

> **Status: PROPOSED, being revised panel by panel with the owner.** Items marked `TODO` are open decisions. Copy marked DRAFT is not approved.
> Keep `[BRACKETS]` as visible placeholders until real content arrives. Voice rules: `brand/voice-and-copy.md` (results first, plain and direct, no explaining the method).

Audience: small to medium businesses of every kind.

## Pages

| Page | URL | Purpose |
|---|---|---|
| Home | `/` | Hero, a preview of the services, and the contact / what's-next closing panel |
| Services | `/services` | The two packages in depth: what's included and how a project runs |
| About | `/about` | Who is behind the studio |
| Contact | `/contact` | Book the 20-minute call (Calendly), send a brief, or email |
| Work | `/work` | **Built, not published.** See the end of this file |

## Navigation

Logo lockup (a link to `/`, accessible name "Jade Agentic, home") → `Services` (`/services`) · `About` (`/about`) · `Contact` (`/contact`) · **Book a call** pill (`/contact#book`).
A `Work` link is added automatically once a project is published.
Mobile: compact notch with a menu button opening a full-screen sheet, plus a sticky "Book a call" bar after the hero (see `reference/source/01b-field-and-flight-v2-mobile.html`).

---

## Home `/`

Visual reference: hero from `heromockupex.png` and `reference/source/01-field-and-flight-v2.html`; the rest from `reference/source/02-ff2-site-home.html`. The bloom section in that file is not used.

### 1. Hero: the field (dark)
- Frame: field + grain + ASCII doves; notched navigation cut into the top.
- Small label (top left, mono): `A SMALL WEB STUDIO`
- Headline (serif, very large, bottom left, two lines): **Websites built to represent you**
- Hero glass card (right): "Custom websites for small to medium businesses, built so your brand resonates with the people you want to reach. We define what your site needs together, then handle every step from there. In [X] weeks, your site is live."
  - Buttons: **Start a project** (→ `/contact`) · See our services (→ `#services`)
- No vertical side text and no scroll cue (both removed from the mockup).

### 2. Services preview: paper (`#services`)
- Label: `TODO`
- Header: **Two ways to get your website live.**
- Two starting-point cards (light and dark, side by side). **No prices and no revision or change rules on the site**; budget and exact scope are settled on the call. A line under the cards: "Most projects start here. We confirm the exact scope on a call."
  - **Launch** · one or two pages, a minimal marketing site. DRAFT: "A focused site that puts your business in front of the right people and makes it easy to get in touch." Includes: contact form, booking link, search basics, domain connection. Timeline: about a week.
  - **Studio** · the complete, built-out website. DRAFT: "A complete website that represents your whole business, with a page for everything your customers look for." Includes: everything in Launch, plus more pages; scope confirmed on a call. Timeline: 2 to 3 weeks.
  - Timelines are ranges; the clock starts once scope is agreed and content is received.
- Slim three-step strip (names avoid the word "Launch"): DRAFT: **Talk it through** (we define what your site needs) → **We build it** (we handle every step) → **You're live** (in [X] weeks).
- Founding clients strip (dashed border): The first [NUMBER] projects are offered at a reduced rate, in exchange for a testimonial and permission to share the work. **Ask about a spot** (→ `/contact`)
- Button: **See our services** (→ `/services`)

### 3. Contact and what's next: the field (dark, closing frame)
- Left:
  - Heading: **Tell us about your business.**
  - Text: "A 20-minute call about your business and what your website needs to do for it. You'll leave knowing the next step."
  - Email line: "Prefer to write? [YOUR EMAIL]"
- Right (panel glass): booking card, "20 minutes", button **Choose a time** (→ `/contact#book`). Do not mention cost; the call is free, but price stays off the card.
- Coming-soon line (below, quieter): "Coming soon: AI assistants that handle the routine work, so you can focus on what matters most. Email us to hear first." The email link is a plain `mailto:` link; no second form.

### Footer (all pages)
Night background: closing line + **Book a call** / email buttons; columns: logo + short descriptor · Pages (Services, About, Contact) · Elsewhere: [LinkedIn] [Instagram]; bottom row: © 2026 JADE AGENTIC · JADEAGENTIC.COM. `TODO:` footer copy in the new voice.

---

## Services `/services`

Visual reference: `reference/source/02-ff2-site-services.html`.
`TODO:` sections and copy. Must cover: Launch and Studio in depth (what's included, who each is for), the simple process from first conversation to a live site, timelines (see below), the founding clients offer, a questions section, and a booking strip.

**Timelines (owner's experience, to confirm wording):** a small to medium site takes about 4 to 7 days; a very detailed site takes 2 to 3 weeks. Suggested mapping: Launch (one or two pages) about a week, Studio (complete) 2 to 3 weeks. State that the timeline starts once the scope is agreed and the content has been received, since late content is the main thing that moves a date. Keep ranges, not single dates, until there are a few finished projects to point to.

**Questions section:** keep it on this page, but only publish questions that have actually been asked. Start with the few the studio can answer from its own process (for example, how long a site takes, who owns it, whether you can update it yourself) and add to it after real conversations. Until then, leave the section out rather than inventing questions.

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
- `TODO:` [YOUR EMAIL] (e.g. hello@jadeagentic.com)
- `TODO:` [CALENDLY URL]
- `TODO:` [TALLY FORM URL] (only if the project form is kept)
- `TODO:` final timeline wording for the hero (it says "[X] weeks"; with real ranges of about a week to 3 weeks, reword, e.g. "in as little as a week" or "within one to three weeks"), founding spots ([NUMBER])
- Decided: no prices on the site; price, budget, revisions, and change rules are covered on the call and in the written agreement.
- `TODO:` social links
