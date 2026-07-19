// Exactly three deliberate motion moments per the reconciled brief/CLAUDE.md motion rule:
// (1) hero entrance stagger, (2) one-time section reveals on scroll, (3) header hide/show
// (that one lives in Header.astro's own tiny script, not here, since it needs no GSAP).
//
// Content is visible-by-default in CSS (no opacity:0 baked into any stylesheet), so a slow or
// failed script load never hides anything — GSAP only animates FROM the visible state.

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const heroEls = gsap.utils.toArray('[data-animate="hero"]');
const revealEls = gsap.utils.toArray('[data-animate="reveal"]');

const allAnimated = [...heroEls, ...revealEls];

// Failsafe: GSAP's ticker runs on requestAnimationFrame, which browsers freeze for backgrounded/
// hidden tabs (e.g. a link opened into a background tab). If that happens mid-animation, content
// that .from() hid would stay invisible forever. Force the final visible state after a timeout
// no matter what — a no-op in the normal case (it fires well after real animations finish), a
// safety net otherwise. This is why nothing here is ever allowed to stay hidden indefinitely.
window.setTimeout(() => gsap.set(allAnimated, { autoAlpha: 1, y: 0 }), 2000);

if (prefersReducedMotion) {
  // Explicitly set final visible state — never leave anything mid-animation for these users.
  gsap.set(allAnimated, { autoAlpha: 1, y: 0 });
} else {
  if (heroEls.length) {
    gsap.from(heroEls, {
      autoAlpha: 0,
      y: 24,
      duration: 0.7,
      ease: 'power2.out',
      stagger: 0.1,
    });
  }

  revealEls.forEach((el) => {
    gsap.from(el, {
      autoAlpha: 0,
      y: 28,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      },
    });
  });
}
