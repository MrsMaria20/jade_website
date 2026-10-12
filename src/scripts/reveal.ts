/*
  reveal.ts

  What it is: the gentle "fade up as it scrolls into view" for content sections.
  Where it's used: BaseLayout.astro starts it on every page.
  Which mockup it matches: the `rv` reveal in reference/source/02-ff2-site-home.html
  (sections fade up 30px as they enter).

  How to use it: add the attribute `data-reveal` to any element. Elements that
  enter the screen together are revealed one after another, 0.1s apart.

  Reduced motion: nothing is hidden or animated, content is simply shown.
  The hidden starting state lives in BaseLayout.astro and only applies when
  scripting is on and motion is allowed.
*/

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';

export function initReveal(): void {
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;

  if (prefersReducedMotion) {
    return;
  }

  const items = gsap.utils.toArray<HTMLElement>('[data-reveal]');

  if (items.length === 0) {
    return;
  }

  try {
    gsap.registerPlugin(ScrollTrigger, CustomEase);

    // The same slow, calm curve as --ease-calm in global.css.
    CustomEase.create('calm', '0.2, 0.7, 0.15, 1');

    // Batching groups elements that arrive on screen at the same moment, so a
    // row of cards reveals in sequence instead of all at once.
    ScrollTrigger.batch(items, {
      start: 'top 88%',
      once: true,
      onEnter: (batch) => {
        gsap.fromTo(
          batch,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: 'calm',
            stagger: 0.1,
            overwrite: true,
          },
        );
      },
    });
  } catch (error) {
    // Never leave content invisible: drop the hidden starting state.
    document.documentElement.classList.remove('js');
    console.error('Section reveal failed to start:', error);
  }
}
