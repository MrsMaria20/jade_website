/*
  hero-motion.ts

  What it is: the entrance animation and the slight scroll parallax for hero frames.
  Where it's used: HeroFrame.astro, which imports and starts it.
  Which mockup it matches: the headline rise and fade-ups in
  reference/source/01-field-and-flight-v2.html.

  What it animates
    - Elements marked with the class `hero-line` rise into place, one after another.
    - Elements with a `data-hero-fade="<seconds>"` attribute fade up after that delay.
    - The field behind each frame, and any element marked `data-hero-parallax`,
      move slightly as the visitor scrolls.

  Reduced motion: nothing is animated. The content is simply shown.
  If anything here fails, the hidden starting state is removed so the text is
  never left invisible.
*/

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';

// Reveals are slow and calm; this matches the --ease-calm token in global.css.
const CALM_EASE = 'calm';

export function initHeroMotion(): void {
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;

  // Reduced motion: leave everything exactly where it is, fully visible.
  if (prefersReducedMotion) {
    return;
  }

  try {
    gsap.registerPlugin(ScrollTrigger, CustomEase);
    CustomEase.create(CALM_EASE, '0.2, 0.7, 0.15, 1');

    // ── Headline: each line rises out of its mask, 0.16s apart ───────────────
    const headlineLines = gsap.utils.toArray<HTMLElement>('.hero-line');

    if (headlineLines.length > 0) {
      gsap.fromTo(
        headlineLines,
        { yPercent: 110, opacity: 1 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.2,
          ease: CALM_EASE,
          stagger: 0.16,
          delay: 0.1,
        },
      );
    }

    // ── Label, card, and cue: fade up, each after its own delay ──────────────
    const fadeItems = gsap.utils.toArray<HTMLElement>('[data-hero-fade]');

    fadeItems.forEach((item) => {
      const delay = Number(item.dataset.heroFade ?? 0);

      gsap.fromTo(
        item,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 1.1, ease: CALM_EASE, delay },
      );
    });

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
    // Never leave the hero invisible: drop the hidden starting state.
    document.documentElement.classList.remove('js');
    console.error('Hero motion failed to start:', error);
  }
}
