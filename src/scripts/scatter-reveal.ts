/*
  scatter-reveal.ts

  What it is: the "text writes itself in" effect. Each letter of a headline
  fades in on its own, in random order, and the whole thing is tied to the
  visitor's scroll position.
  Where it's used: BaseLayout.astro starts it on every page. It acts on any
  element with the attribute `data-scatter` that contains `data-char` letters
  (SectionIntro.astro produces this markup when given `scatter`).
  Reference: assets/visuals/transition_reference.mov.

  How it behaves
    - Scrolling down: letters appear a few at a time, so a half-scrolled
      headline is half written.
    - Scrolling up: they fade back out the same way, in the same order.
    - Stopping part-way leaves it part-way. The visitor is in control of the pace.

  Distance: the effect runs while the headline travels from near the bottom of
  the screen (90%) up to about a third of the way down (35%). By the time its
  panel fills the screen, the headline is complete.

  Reduced motion: nothing is hidden or animated; the headline is simply shown.
  The hidden starting state lives in BaseLayout.astro and only applies when
  scripting is on and motion is allowed.
*/

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initScatterReveal(): void {
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;

  if (prefersReducedMotion) {
    return;
  }

  const groups = gsap.utils.toArray<HTMLElement>('[data-scatter]');

  if (groups.length === 0) {
    return;
  }

  try {
    gsap.registerPlugin(ScrollTrigger);

    groups.forEach((group) => {
      const letters = group.querySelectorAll<HTMLElement>('[data-char]');

      // One tween over every letter. `amount` spreads the letters' start times
      // across 70% of the timeline, in random order; each letter then takes
      // 30% to fade in. The timeline is stretched over the scroll distance.
      gsap.fromTo(
        letters,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.3,
          ease: 'none',
          stagger: { amount: 0.7, from: 'random' },
          scrollTrigger: {
            trigger: group,
            start: 'top 90%',
            end: 'top 35%',
            // A little smoothing so the letters settle instead of ticking.
            scrub: 0.5,
          },
        },
      );
    });
  } catch (error) {
    // Never leave a headline invisible: drop the hidden starting state.
    document.documentElement.classList.remove('js');
    console.error('Scatter reveal failed to start:', error);
  }
}
