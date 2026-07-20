// Desktop-only enhancements for tel: and mailto: links (hover: hover = mouse/trackpad device).
// Mobile keeps native behaviour (dialer, mail app).
if (!window.matchMedia('(hover: hover)').matches) {
  // nothing — let the browser handle tel:/mailto: natively on touch devices
} else {
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="tel:"], a[href^="mailto:"]');
    if (!a) return;
    e.preventDefault();

    if (a.href.startsWith('tel:')) {
      showPhoneCard(a);
    } else {
      const email = a.href.replace('mailto:', '');
      const original = a.textContent;
      navigator.clipboard.writeText(email).then(() => {
        a.textContent = '✓ Skopiowano!';
        a.classList.add('is-copied');
        setTimeout(() => {
          a.textContent = original;
          a.classList.remove('is-copied');
        }, 1500);
      });
    }
  });

  // Close phone card on outside click
  document.addEventListener('click', (e) => {
    const card = document.getElementById('phone-card');
    if (card && !card.contains(e.target) && !e.target.closest('a[href^="tel:"]')) {
      card.remove();
    }
  });
}

function showPhoneCard(anchor) {
  const existing = document.getElementById('phone-card');
  if (existing) { existing.remove(); return; }

  const number = anchor.href.replace('tel:', '');
  const card = document.createElement('div');
  card.id = 'phone-card';
  card.className = 'phone-card';
  card.innerHTML = `
    <p class="phone-card__label">Zadzwoń lub wpisz numer</p>
    <p class="phone-card__number">${anchor.textContent.trim()}</p>
    <button class="phone-card__copy btn btn-primary" type="button">Kopiuj numer</button>
  `;

  const copyBtn = card.querySelector('.phone-card__copy');
  copyBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(number).then(() => {
      copyBtn.textContent = '✓ Skopiowano!';
      copyBtn.classList.add('is-copied');
      setTimeout(() => card.remove(), 900);
    });
  });

  // Position below the anchor
  const rect = anchor.getBoundingClientRect();
  card.style.setProperty('--card-top', `${rect.bottom + window.scrollY + 8}px`);
  card.style.setProperty('--card-left', `${rect.left + window.scrollX}px`);
  document.body.appendChild(card);
}

function copyToClipboard(value, isPhone) {
  navigator.clipboard.writeText(value).then(() => showToast(isPhone));
}

function showToast(isPhone) {
  const existing = document.getElementById('copy-toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.id = 'copy-toast';
  toast.className = 'copy-toast';
  toast.textContent = isPhone ? 'Skopiowano numer!' : 'Skopiowano e-mail!';
  document.body.appendChild(toast);
  toast.getBoundingClientRect();
  toast.classList.add('copy-toast--visible');
  setTimeout(() => {
    toast.classList.remove('copy-toast--visible');
    toast.addEventListener('transitionend', () => toast.remove(), { once: true });
  }, 2000);
}
