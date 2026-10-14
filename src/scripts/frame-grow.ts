/*
  frame-grow.ts

  What it is: a dark frame that "opens like a window" as the visitor scrolls to
  it: it starts as a smaller, rounder window and grows to full width.
  Where it's used: BaseLayout.astro starts it on every page. It acts on any
  element with the attribute `data-frame-grow` (the contact panel on the home page).

  How it works: the frame is clipped with an inset that shrinks to zero as the
  scroll position advances. Its content is not scaled, only revealed, so text
  stays sharp the whole time. The animation is tied to scrolling (scrubbed), so
  it follows the visitor's pace and reverses if they scroll back up.

  Reduced motion: nothing is clipped; the frame is simply shown at full size.
*/

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initFrameGrow(): void {
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;

  if (prefersReducedMotion) {
    return;
  }

  const frames = gsap.utils.toArray<HTMLElement>('[data-frame-grow]');

  if (frames.length === 0) {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  frames.forEach((frame) => {
    gsap.fromTo(
      frame,
      // Start: smaller and rounder, with extra room at the top and sides.
      { clipPath: 'inset(9vh 5vw 0vh 5vw round 56px)' },
      // End: the full frame, with the normal 28px brand corners.
      {
        clipPath: 'inset(0vh 0vw 0vh 0vw round 28px)',
        ease: 'none',
        scrollTrigger: {
          trigger: frame,
          // From when the frame's top edge reaches the bottom of the screen...
          start: 'top bottom',
          // ...until it is a quarter of the way down: fully open by then.
          end: 'top 25%',
          scrub: 0.6,
        },
      },
    );
  });
}
