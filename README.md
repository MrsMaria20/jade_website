# Jade Agentic — starter kit

Everything Claude Code needs to build jadeagentic.com, in the structure `CLAUDE.md` expects.

```
CLAUDE.md               Project brief and rules — Claude Code reads this first, every session
site-plan.md            Pages, sections in order, and starting copy (PROPOSED — confirm TODOs)
build-plan.md           The build, step by step
brand/
  brand-guide.md        The full brand kit, written out
  tokens.css            Colors, fonts, radii, glass, ready for Tailwind (step 1)
  tokens.json           The same values as data
  voice-and-copy.md     Tone, key lines, rules for placeholders
public/logo/            The Full Canopy bonsai: SVGs, PNGs, favicons
assets/visuals/         ASCII doves, blurred field, grain — ported from the mockups
reference/source/       The approved mockups as source files (markup, styles, and effect code)
```

## How to use it

1. Copy everything in this folder into your project folder (merge with what's there; replace `CLAUDE.md`).
2. Optional: move the exported `Brand Kit · Preview…-html.zip` into `reference/` so it's out of the way. Unzipped, it's a viewable version of the brand kit.
3. In Claude Code: *"Read CLAUDE.md, site-plan.md, build-plan.md, and everything in brand/ and assets/visuals/. Skim reference/source/. Then summarize what you understood and propose a plan for build step 1. Don't write code yet."*

## About `reference/source/`

These are the design-canvas source files of the approved mockups. They won't open as normal web pages (they need the canvas runtime), but every style, layout value, and line of effect code in them is readable, which is what Claude Code needs. They've been formatted and annotated: each file opens with a comment saying what to take from it, every section is labeled, and every function in the behaviour script has a one-line explanation. To *see* the mockups, open the canvas, or export any artboard as HTML from the canvas and drop it into `reference/`.

| File | Mockup |
|---|---|
| `01-field-and-flight-v2.html` | 02 v2 · General — Field & Flight (hero, doves, logo in nav) |
| `01b-field-and-flight-v2-mobile.html` | The same at phone size (mobile nav, sticky booking bar) |
| `02-ff2-site-home.html` … `-contact.html` | F&F II Site · Home, Services, Work, About, Contact |
| `03-brand-kit-preview.html` | Brand Kit · Preview v0.1 |
