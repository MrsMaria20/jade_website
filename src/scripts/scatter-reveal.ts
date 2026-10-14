/*
  scatter-reveal.ts

  What it is: the "text writes itself in" effect. Each letter of a headline
  fades in on its own, in random order, as the headline scrolls into view.
  Where it's used: BaseLayout.astro starts it on every page. It acts on any
  element with the attribute `data-scatter` that contains `data-char` letters
  (SectionIntro.astro produces this markup when given `scatter`).
  Reference: assets/visuals/transition example.mov (letters fade in at random).

  Speed: the reference does this in about 0.3 seconds. Ours takes about 1.3
  seconds, so it settles in calmly, in keeping with the site's slow motion.

  Reduced motion: nothing is hidden or animated; the headline is simply shown.
  The hidden starting state lives in BaseLayout.astro and only applies when
  scripting is on and motion is allowed.
*/

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';

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
    gsap.registerPlugin(ScrollTrigger, CustomEase);
    CustomEase.create('calm', '0.2, 0.7, 0.15, 1');

    groups.forEach((group) => {
      const letters = group.querySelectorAll<HTMLElement>('[data-char]');

      ScrollTrigger.create({
        trigger: group,
        // Start once the headline is comfortably inside the screen.
        start: 'top 80%',
        once: true,
        onEnter: () => {
          gsap.to(letters, {
            opacity: 1,
            duration: 0.55,
            ease: 'calm',
            // `amount` spreads every letter's start across 0.75s, in random order.
            stagger: { amount: 0.75, from: 'random' },
          });
        },
      });
    });
  } catch (error) {
    // Never leave a headline invisible: drop the hidden starting state.
    document.documentElement.classList.remove('js');
    console.error('Scatter reveal failed to start:', error);
  }
}
