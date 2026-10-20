# Social assets

Images for places outside the website, in the Jade Agentic style: the blurred green
field and the ASCII doves from the hero, the ivory logo, the wordmark, and the
tagline "Websites built to represent you."

| File | Size | Where to use it |
|---|---|---|
| `linkedin-banner-1128x191@3x.png` | 3384 x 573 (3x of LinkedIn's 1128 x 191, for extra sharpness) | LinkedIn company page cover image |
| `linkedin-logo-800x800.png` | 800 x 800 | LinkedIn company page logo (it shows small, so the mark has no text) |
| `social-share-1200x630.png` | 1200 x 630 | The image shown when the website is shared (the "Open Graph" image); used in build step 9 |

Notes
- The LinkedIn banner keeps its content in the centre, so it still reads when LinkedIn
  crops the edges on a phone.
- The doves are placed by hand, well apart from each other and from the text, and drawn with a single crisp wing (the website's moving doves draw a faint second wing, which looks right in motion but smudges in a still image).
- The logo is ivory on dark green, the brand's primary version, with no effects on the mark.
- Colours and type come from `brand/brand-guide.md`. No prices, claims, or names appear in these images.

## Making changes

`source/` holds what produced the images: `render.html` draws the asset for a given
size, `render.mjs` photographs it with headless Chrome, and `field.js` / `doves.js` are
the website's hero code (from `assets/visuals/`) converted to plain scripts, and
`doves-still.js` is the dove code with the faint second wing switched off for still images. To make a
new size or change the wording, ask Claude: it edits `render.html` and re-renders.
