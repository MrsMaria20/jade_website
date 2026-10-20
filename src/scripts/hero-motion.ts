/*
  hero-motion.ts

  What it is: the slight scroll parallax for hero frames.
  Where it's used: HeroFrame.astro, which imports and starts it.
  Which mockup it matches: the slight movement of the field and text in
  reference/source/01-field-and-flight-v2.html.

  What it animates
    - The field behind each frame, and any element marked `data-hero-parallax`,
      move slightly as the visitor scrolls.

  The entrance animation (headline rise and fade-ups) is NOT here: it is plain CSS
  in HeroFrame.astro, so the first paint never waits for this script to load.

  Reduced motion: nothing is animated. The content is simply shown.
*/

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initHeroMotion(): void {
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;

  // Reduced motion: leave everything exactly where it is, fully visible.
  if (prefersReducedMotion) {
    return;
  }

  try {
    gsap.registerPlugin(ScrollTrigger);

    // ── Parallax: the field drifts down a little, the text up a little ───────
    document
      .querySelectorAll<HTMLElement>('[data-hero-frame]')
      .forEach((frame) => {
        const fieldWrap = frame.querySelector<HTMLElement>('[data-field-wrap]');
        const parallaxText = frame.querySelector<HTMLElement>(
          '[data-hero-parallax]',
        );

        const scrollSettings = {
          trigger: frame,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        };

        // The field wrapper bleeds 40px past the frame, so 36px of travel is safe.
        if (fieldWrap) {
          gsap.to(fieldWrap, {
            y: 36,
            ease: 'none',
            scrollTrigger: scrollSettings,
          });
        }

        if (parallaxText) {
          gsap.to(parallaxText, {
            y: -30,
            ease: 'none',
            scrollTrigger: scrollSettings,
          });
        }
      });
  } catch (error) {
    // The parallax is decoration; if it fails the page is still fully usable.
    console.error('Hero parallax failed to start:', error);
  }
}
