import { animate } from 'https://cdn.jsdelivr.net/npm/motion@latest/+esm';

// ---- HOVER LIFT: Cards ----
const CARD_SEL = [
  '.service-card',
  '.industry-card',
  '.package-card',
  '.portfolio-card',
  '.about-value',
  '.contact-method',
].join(', ');

const SPRING   = { duration: 0.35, easing: [0.34, 1.56, 0.64, 1] };
const EASE_OUT = { duration: 0.30, easing: [0.25, 1, 0.5, 1] };

document.querySelectorAll(CARD_SEL).forEach(card => {
  card.addEventListener('mouseenter', () =>
    animate(card, { y: -6, scale: 1.015 }, SPRING)
  );
  card.addEventListener('mouseleave', () =>
    animate(card, { y: 0, scale: 1 }, EASE_OUT)
  );
});

// ---- PRESS EFFECT: Buttons ----
const BTN_SEL = [
  '.btn-primary',
  '.btn-secondary',
  '.nav-cta',
  '.package-btn',
  '.portfolio-btn',
  '.form-btn',
  '.ind-showcase-cta',
].join(', ');

document.querySelectorAll(BTN_SEL).forEach(btn => {
  btn.addEventListener('mousedown', () =>
    animate(btn, { scale: 0.95 }, { duration: 0.1, easing: 'ease-out' })
  );
  btn.addEventListener('mouseup', () =>
    animate(btn, { scale: 1 }, { duration: 0.3, easing: [0.34, 1.56, 0.64, 1] })
  );
  btn.addEventListener('mouseleave', () =>
    animate(btn, { scale: 1 }, { duration: 0.2, easing: 'ease-out' })
  );
});

// ---- PAGE TRANSITIONS ----
animate(document.body, { opacity: [0, 1] }, { duration: 0.4, easing: 'ease-out' });

document.addEventListener('click', e => {
  const link = e.target.closest('a[href]');
  if (!link) return;
  const href = link.getAttribute('href');
  if (!href) return;
  if (
    href.startsWith('#') ||
    href.startsWith('http') ||
    href.startsWith('//') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:') ||
    href.includes('wa.me')
  ) return;
  e.preventDefault();
  animate(document.body, { opacity: 0 }, { duration: 0.25, easing: 'ease-in' })
    .finished
    .then(() => { window.location.href = href; });
});
