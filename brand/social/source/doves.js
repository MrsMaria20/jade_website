(() => {
/**
 * ============================================================================
 * ASCII DOVES
 * ============================================================================
 * The signature flock from "02 v2 · General — Field & Flight".
 *
 * Source:  reference/source/01-field-and-flight-v2.html → makeBirds() / drawBirds()
 *          Ported 1:1, then made framework-agnostic.
 *
 * What it does
 *   - Draws 7 doves made of "·" and "•" characters (JetBrains Mono, porcelain #F4F1E8).
 *   - Bigger dove = closer = brighter and faster. Far doves are drawn first.
 *   - Trails: instead of clearing each frame, the previous frame is faded out a little.
 *   - Doves veer away from the pointer, and loop back in from the left when they exit.
 *
 * Accessibility / performance
 *   - prefers-reduced-motion → one still frame, no animation loop.
 *   - Stops drawing while the canvas is off screen (IntersectionObserver).
 *
 * Usage (inside an Astro component's <script>):
 *
 *   import { createAsciiDoves } from '../../assets/visuals/ascii-doves';
 *   const doves = createAsciiDoves(document.querySelector('#doves') as HTMLCanvasElement);
 *   // later, if the element is removed:  doves.destroy();
 *
 * Load JetBrains Mono before the first draw, or the first frames use a fallback font.
 * ============================================================================
 */


/* ----------------------------------------------------------------------------
 * Types
 * ------------------------------------------------------------------------- */

                                    
                                    
                 

                                               
                 

                                                                     
                

                                                                                
                 

                                                                                       
                              

                                                                                 
                          
 

/** One dove's state. */
                
                                        
            
                                                            
                             
                                                                     
                                                             
                                                 
 


/* ----------------------------------------------------------------------------
 * createAsciiDoves
 * ------------------------------------------------------------------------- */

function createAsciiDoves(canvas                   , opts                    = {}) {

  // ── Options (with defaults) ───────────────────────────────────────────────
  const count  = opts.count ?? 7;
  const color  = opts.color ?? '#F4F1E8';
  const font   = opts.font  ?? '11px "JetBrains Mono", ui-monospace, monospace';
  const trail  = opts.trail ?? 0.3;
  const reduce = opts.reducedMotion
              ?? window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const target = opts.pointerTarget ?? canvas.parentElement ?? canvas;


  // ── State ─────────────────────────────────────────────────────────────────
  const ctx = canvas.getContext('2d') ;

  let W = 0;            // canvas size in CSS pixels
  let H = 0;
  let mx = -9999;       // pointer position (far away = no pointer)
  let my = -9999;
  let raf = 0;          // requestAnimationFrame id
  let last = 0;         // timestamp of the previous frame
  let visible = true;   // is the canvas on screen?
  let birds         = [];


  // ── Size the canvas bitmap to its on-screen size × pixel ratio ────────────
  function resize() {
    const dpr = Math.min(2, window.devicePixelRatio || 1);

    W = canvas.clientWidth;
    H = canvas.clientHeight;

    canvas.width  = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);

    // Draw in CSS pixels from here on.
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }


  // ── Create the flock ──────────────────────────────────────────────────────
  function makeBirds() {
    birds = [];

    for (let i = 0; i < count; i++) {
      birds.push({
        x:   Math.random() * W,
        y:   H * (0.14 + Math.random() * 0.5),   // upper-middle band of the frame
        s:   0.55 + Math.random() * 0.8,
        sp:  0.05 + Math.random() * 0.03,
        ang: -0.1 - Math.random() * 0.14,         // slightly upward
        wob: Math.random() * Math.PI * 2,
        ph:  Math.random() * Math.PI * 2,
      });
    }

    // Far (small) doves first, so near doves draw on top.
    birds.sort((a, b) => a.s - b.s);
  }


  // ── Draw one frame ────────────────────────────────────────────────────────
  function draw(now        , dt        ) {

    // 1. Fade the previous frame (this is what makes the trails).
    //    In still mode, just clear it.
    if (reduce) {
      ctx.clearRect(0, 0, W, H);
    } else {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = `rgba(0,0,0,${trail})`;
      ctx.fillRect(0, 0, W, H);
      ctx.globalCompositeOperation = 'source-over';
    }

    // 2. Text settings shared by every character.
    ctx.font = font;
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.fillStyle = color;

    // 3. Each dove.
    for (const b of birds) {

      // Heading, with a slow wobble so the flight isn't perfectly straight.
      const a = b.ang + 0.09 * Math.sin(now * 0.0007 + b.wob);

      // 3a. Movement (skipped in still mode).
      if (!reduce) {
        // Fly forward.
        b.x += Math.cos(a) * b.sp * b.s * dt * 1.6;
        b.y += Math.sin(a) * b.sp * b.s * dt * 1.6;

        // Veer away from the pointer when within 200px.
        const dx = b.x - mx;
        const dy = b.y - my;
        const d  = Math.sqrt(dx * dx + dy * dy);

        if (d < 200 && d > 1) {
          const push = (1 - d / 200) * 0.35 * dt;
          b.x += (dx / d) * push;
          b.y += (dy / d) * push;
        }

        // Left the frame → re-enter from the left at a new height.
        if (b.x > W + 140 || b.y < -140) {
          b.x = -140;
          b.y = H * (0.2 + Math.random() * 0.55);
        }
      }

      // 3b. Geometry for this frame.
      const s = b.s;
      const flap = (reduce ? 1.2 : (now * 0.0105) / (0.7 + s * 0.3)) + b.ph;

      const dirx = Math.cos(a);   // unit vector along the body
      const diry = Math.sin(a);
      const upx  = diry;          // unit vector perpendicular to the body
      const upy  = -dirx;

      const body = 26 * s;        // body length
      const span = 40 * s;        // wing length

      // Closer doves are brighter.
      ctx.globalAlpha = 0.45 + (0.5 * (s - 0.55)) / 0.8;

      // 3c. Body: a line of dots.
      for (let u = -0.5; u <= 0.5; u += 0.125) {
        ctx.fillText('·', b.x + dirx * u * body, b.y + diry * u * body);
      }

      // 3d. Head: one heavier dot at the front.
      ctx.fillText('•', b.x + dirx * body * 0.58, b.y + diry * body * 0.58 - 1);

      // 3e. Tail: three dots fanned at the back.
      for (let k = -1; k <= 1; k++) {
        ctx.fillText(
          '·',
          b.x - dirx * body * 0.72 + upx * k * 3 * s,
          b.y - diry * body * 0.72 + upy * k * 3 * s,
        );
      }

      // 3f. Wings: near wing full strength; far wing fainter and slightly out of phase.
      const wings                                     = [
        [Math.cos(flap), 1],
        [Math.cos(flap + 0.35) * 0.8, 0.5],
      ];

      for (const [lift, alphaMul] of wings) {
        // Wing root (just behind the middle of the body) and tip.
        const rx = b.x + dirx * body * 0.08;
        const ry = b.y + diry * body * 0.08;
        const tx = rx + upx * span * lift - dirx * span * 0.38;
        const ty = ry + upy * span * lift - diry * span * 0.38;

        ctx.globalAlpha *= alphaMul;

        // Walk from root to tip; at each step draw a short row of dots (the wing's width),
        // narrowing toward the tip and bowing outward in the middle.
        for (let u = 0.08; u <= 1.001; u += 0.1) {
          const chord = (1 - u * 0.72) * 14 * s;
          const bow   = Math.sin(Math.PI * u) * 5 * s * (lift > 0 ? 1 : -1);
          const px    = rx + (tx - rx) * u + upx * bow;
          const py    = ry + (ty - ry) * u + upy * bow;

          for (let v = -0.5; v <= 0.5; v += 0.34) {
            ctx.fillText('·', px + dirx * v * chord, py + diry * v * chord);
          }
        }

        ctx.globalAlpha /= alphaMul;
      }
    }

    ctx.globalAlpha = 1;
  }


  // ── Animation loop ────────────────────────────────────────────────────────
  function tick(now        ) {
    raf = requestAnimationFrame(tick);

    // Off screen: keep the clock current but don't draw.
    if (!visible) {
      last = now;
      return;
    }

    // Time since last frame, capped so a background tab doesn't cause a jump.
    const dt = Math.min(50, now - (last || now));
    last = now;

    draw(now, dt);
  }


  // ── Event handlers ────────────────────────────────────────────────────────
  const onMove = (e              ) => {
    const r = canvas.getBoundingClientRect();
    mx = (e.clientX - r.left) * (W / r.width);
    my = (e.clientY - r.top)  * (H / r.height);
  };

  const onLeave = () => {
    mx = -9999;
    my = -9999;
  };

  const onResize = () => {
    resize();
    if (reduce) draw(0, 0);   // still mode has no loop, so redraw by hand
  };


  // ── Start ─────────────────────────────────────────────────────────────────
  resize();
  makeBirds();

  target.addEventListener('pointermove', onMove);
  target.addEventListener('pointerleave', onLeave);
  window.addEventListener('resize', onResize);

  const io = new IntersectionObserver(
    ([entry]) => { visible = entry.isIntersecting; },
    { threshold: 0 },
  );
  io.observe(canvas);

  if (reduce) {
    draw(0, 0);
    document.fonts?.ready.then(() => draw(0, 0));   // redraw once the mono font has loaded
  } else {
    raf = requestAnimationFrame(tick);
  }


  // ── Cleanup ───────────────────────────────────────────────────────────────
  return {
    destroy() {
      cancelAnimationFrame(raf);
      io.disconnect();
      target.removeEventListener('pointermove', onMove);
      target.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('resize', onResize);
    },
  };
}

window.JadeDoves = { createAsciiDoves };
})();
