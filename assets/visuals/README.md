# Visual assets

Framework-agnostic TypeScript, ported from the mockups. In step 3 of `build-plan.md`, wrap each in an Astro component:

| File | Becomes | Notes |
|---|---|---|
| `blurred-field.ts` | `src/components/BlurredField.astro` | Paint once; blur + drift are CSS. Markup/CSS snippet at the bottom of the file. |
| `ascii-doves.ts` | `src/components/AsciiDoves.astro` | `createAsciiDoves(canvas)` → returns `{ destroy }`. Load JetBrains Mono before it draws. |
| `grain.svg` | `public/grain.svg` | Film grain overlay at 16% opacity, `mix-blend-mode: overlay`. |

The bloom (ASCII flower that grows with scroll) isn't ported yet. Its source is `drawBloom` in `reference/source/02-ff2-site-home.html`; port it when that section is built, driven by GSAP ScrollTrigger progress instead of scroll math.

Hero layer order (back to front): field canvas → grain → doves canvas → text and glass panels → notched nav.
