// On desktop (hover-capable devices), copy tel:/mailto: links to clipboard instead of
// trying to open a dialer or mail client that likely isn't configured.
if (window.matchMedia('(hover: hover)').matches) {
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="tel:"], a[href^="mailto:"]');
    if (!a) return;
    e.preventDefault();
    const isPhone = a.href.startsWith('tel:');
    const value = isPhone
      ? a.href.replace('tel:', '')
      : a.href.replace('mailto:', '');
    navigator.clipboard.writeText(value).then(() => showToast(isPhone));
  });
}

function showToast(isPhone) {
  const existing = document.getElementById('copy-toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.id = 'copy-toast';
  toast.className = 'copy-toast';
  toast.textContent = isPhone ? 'Skopiowano numer!' : 'Skopiowano e-mail!';
  document.body.appendChild(toast);
  // Force reflow so the fade-in transition fires
  toast.getBoundingClientRect();
  toast.classList.add('copy-toast--visible');
  setTimeout(() => {
    toast.classList.remove('copy-toast--visible');
    toast.addEventListener('transitionend', () => toast.remove(), { once: true });
  }, 2000);
}
