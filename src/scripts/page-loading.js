// Very simple "loading" affordance, in two parts:
// 1. A slim top progress bar that appears when navigating to another page on this site
//    (this is a static multi-page site — real client-side routing doesn't exist, so this is
//    just a brief visual cue while the browser loads the next page, not a real progress value).
// 2. Images still fetching get a plain gray placeholder instead of a blank gap, then fade in.
//
// Both are purely progressive enhancement: nothing is hidden by default in CSS, only images
// that are provably still loading get a JS-added class — and even those get a timeout failsafe
// so a stalled load/error event can never leave something invisible forever.

const bar = document.getElementById('page-progress');

if (bar) {
  document.addEventListener('click', (e) => {
    const link = e.target instanceof Element ? e.target.closest('a') : null;
    if (!link) return;
    if (link.target === '_blank' || e.metaKey || e.ctrlKey || e.shiftKey) return;
    if (link.protocol !== 'http:' && link.protocol !== 'https:') return; // skip tel:/mailto:
    if (link.origin !== location.origin) return; // skip external links
    if (link.href === location.href) return; // same page, no navigation happening

    bar.classList.add('is-active');
    // A plain timeout rather than requestAnimationFrame — rAF can stall entirely in some
    // contexts (e.g. a backgrounded tab), and this only needs to fire on the next tick, not
    // sync to a paint frame.
    window.setTimeout(() => {
      bar.style.width = '70%';
    }, 10);
  });
}

document.querySelectorAll('img').forEach((img) => {
  if (img.complete) return; // already loaded (e.g. cached) — never flash a placeholder

  img.classList.add('is-loading');
  const reveal = () => img.classList.remove('is-loading');
  img.addEventListener('load', reveal, { once: true });
  img.addEventListener('error', reveal, { once: true });
  window.setTimeout(reveal, 3000); // failsafe: never stay hidden indefinitely
});
