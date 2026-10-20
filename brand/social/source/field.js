(() => {
/**
 * ============================================================================
 * BLURRED FIELD
 * ============================================================================
 * The motion-blurred green background from "02 v2 · General — Field & Flight".
 *
 * Source:  reference/source/01-field-and-flight-v2.html → paintField()
 *
 * What it does
 *   - Paints random horizontal strokes in field greens, plus a few pale "light leaks",
 *     ONCE. Nothing is redrawn per frame.
 *   - The blur and the slow sideways drift are CSS (snippet at the bottom of this file),
 *     so the effect costs almost nothing while the page is open.
 *
 * Usage (inside an Astro component's <script>):
 *
 *   import { paintBlurredField } from '../../assets/visuals/blurred-field';
 *   paintBlurredField(document.querySelector('#field') as HTMLCanvasElement);
 *
 *   // Pass a seed to get the same field on every load:
 *   paintBlurredField(canvas, 42);
 * ============================================================================
 */


/* ----------------------------------------------------------------------------
 * Colors (same values as brand/tokens.json → fieldPalette)
 * ------------------------------------------------------------------------- */

/** Base fill under the strokes. */
const FIELD_BASE = '#1B2E22';

/** Stroke colors, picked at random. */
const FIELD_PALETTE = [
  '#2E4A36',
  '#3E6048',
  '#56785A',
  '#7C9A74',
  '#14231A',
  '#9DB592',
  '#2A4232',
];

/** Pale highlight strokes ("light leaks"). */
const FIELD_LEAK = '#D9E4C8';


/** The colors a field is painted with. */
                              
               
                    
               
 

/**
 * A light version of the field, for the beige panels: soft washes of celadon
 * and sage over paper, so frosted glass has something gentle to blur.
 * Lighter tones are listed more than once so they dominate.
 */
const LIGHT_FIELD              = {
  base: '#E9E4D8',
  palette: [
    '#BFD3CC', '#BFD3CC', '#9DB592', '#F2EEE4', '#F2EEE4',
    '#C9D2C3', '#D9E4C8', '#7E927F', '#3F6E5E',
  ],
  leak: '#FFFFFF',
};


/* ----------------------------------------------------------------------------
 * paintBlurredField
 * ------------------------------------------------------------------------- */

function paintBlurredField(
  canvas                   ,
  seed         ,
  colors              = { base: FIELD_BASE, palette: FIELD_PALETTE, leak: FIELD_LEAK },
) {

  // ── Random numbers ────────────────────────────────────────────────────────
  // With a seed: a simple repeatable generator. Without: Math.random.
  let s = seed ?? 0;
  const rand =
    seed === undefined
      ? Math.random
      : () => {
          s = (s * 1664525 + 1013904223) % 4294967296;
          return s / 4294967296;
        };


  // ── Canvas size ───────────────────────────────────────────────────────────
  // The result is blurred heavily, so half resolution looks identical and paints faster.
  const W = Math.max(300, Math.round(canvas.clientWidth / 2));
  const H = Math.max(200, Math.round(canvas.clientHeight / 2));

  canvas.width = W;
  canvas.height = H;

  const ctx = canvas.getContext('2d') ;

  // The mockup was tuned at 1488×948 (painted at 1488 wide); scale sizes to match.
  const k = W / 1488;


  // ── 1. Base color ─────────────────────────────────────────────────────────
  ctx.fillStyle = colors.base;
  ctx.fillRect(0, 0, W, H);


  // ── 2. Green strokes ──────────────────────────────────────────────────────
  // Long, thin, semi-transparent rectangles. Most are thin; a few are thick
  // (the squared random value skews heights toward small).
  const strokes = Math.round(240 * (H / 474));

  for (let i = 0; i < strokes; i++) {
    const y = rand() * H;
    const h = (4 + Math.pow(rand(), 2) * 70) * k;
    const x = rand() * W * 1.2 - W * 0.1;   // may start slightly off the left edge
    const w = (200 + rand() * 1200) * k;

    ctx.globalAlpha = 0.15 + rand() * 0.45;
    ctx.fillStyle = colors.palette[Math.floor(rand() * colors.palette.length)];
    ctx.fillRect(x, y, w, h);
  }


  // ── 3. Light leaks ────────────────────────────────────────────────────────
  // 14 faint pale strokes, kept in the top 70% of the frame.
  for (let i = 0; i < 14; i++) {
    ctx.globalAlpha = 0.08 + rand() * 0.12;
    ctx.fillStyle = colors.leak;
    ctx.fillRect(
      rand() * W,
      rand() * H * 0.7,
      (300 + rand() * 700) * k,
      (3 + rand() * 10) * k,
    );
  }

  ctx.globalAlpha = 1;
}


/* ----------------------------------------------------------------------------
 * Markup + CSS that goes with it (from the mockup)
 * ----------------------------------------------------------------------------

  <!-- Wrapper bleeds 40px past the frame so the blurred edges never show. -->
  <div class="field-wrap">
    <canvas id="field" class="field" aria-hidden="true"></canvas>
  </div>

  <!-- Film grain on top (public/grain.svg). -->
  <img src="/grain.svg" class="grain" alt="" aria-hidden="true" />


  .field-wrap {
    position: absolute;
    inset: -40px;
  }

  .field {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    filter: blur(26px) saturate(1.08);
    animation: drift 38s ease-in-out infinite alternate;
  }

  @keyframes drift {
    from { transform: scale(1.12) translateX(-2.5%); }
    to   { transform: scale(1.12) translateX(2.5%); }
  }

  .grain {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    opacity: 0.16;
    mix-blend-mode: overlay;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: reduce) {
    .field { animation: none; }
  }

  Optional parallax (GSAP): move .field-wrap down at 0.25× scroll speed while the hero is in view.
---------------------------------------------------------------------------- */

window.JadeField = { paintBlurredField, LIGHT_FIELD };
})();
