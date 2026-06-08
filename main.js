// ---- CLEAN URL ----
// Quita la extensión .html de la URL si aparece
if (window.location.pathname.endsWith('.html')) {
  const clean = window.location.pathname.endsWith('/index.html')
    ? window.location.pathname.replace('/index.html', '/')
    : window.location.pathname.replace('.html', '');
  history.replaceState(null, '', clean + window.location.search);
}

// Intercepta todos los links a secciones (#), hace scroll y limpia el hash
document.addEventListener('click', e => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  const id = link.getAttribute('href').slice(1);
  if (!id) return;
  const target = document.getElementById(id);
  if (!target) return;
  e.preventDefault();
  target.scrollIntoView({ behavior: 'smooth' });
  history.replaceState(null, '', window.location.pathname);
});

// ---- HAMBURGER MENU ----
const hamburger = document.getElementById('navHamburger');
const mobileMenu = document.getElementById('navMobileMenu');

hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
});

mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
    });
});

// ---- SCROLL ANIMATIONS ----
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ---- FAQ ACCORDION ----
document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
        const answer = btn.nextElementSibling;
        const isOpen = answer.classList.contains('open');
        document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'));
        document.querySelectorAll('.faq-question').forEach(b => b.classList.remove('open'));
        if (!isOpen) {
            answer.classList.add('open');
            btn.classList.add('open');
        }
    });
});

// ---- FORMULARIO → WHATSAPP ----
function enviarFormulario() {
    const nombre   = document.querySelectorAll('.form-input')[0].value.trim();
    const negocio  = document.querySelectorAll('.form-input')[1].value.trim();
    const servicio = document.querySelector('.form-select').value;
    const mensaje  = document.querySelector('.form-textarea').value.trim();

    if (!nombre) { alert('Por favor ingresa tu nombre.'); return; }

    const txt = `Hola RamosMKT! 👋\n\nNombre: ${nombre}\nNegocio: ${negocio || '—'}\nServicio: ${servicio || '—'}\n\n${mensaje || ''}`;
    window.open('https://wa.me/528148078309?text=' + encodeURIComponent(txt), '_blank');
    window.location.href = '/gracias';
}

// ---- HERO PARALLAX ----
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const grid = document.querySelector('.hero-grid');
    const glow = document.querySelector('.hero-glow');
    if (grid) grid.style.transform = `translateY(${scrolled * 0.15}px)`;
    if (glow) glow.style.transform = `translateY(${scrolled * 0.25}px)`;
});

// ---- NAV ACTIVE STATE ----
const navLinks = document.querySelectorAll('.nav-link');
const navSections = document.querySelectorAll('section[id], div[id]');

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
            });
        }
    });
}, { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' });

navSections.forEach(s => sectionObserver.observe(s));

// ---- COUNTER ANIMATION ----
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.dataset.count);
            let start = 0;
            const step = target / (1500 / 16);
            const timer = setInterval(() => {
                start = Math.min(start + step, target);
                el.textContent = Math.floor(start);
                if (start >= target) clearInterval(timer);
            }, 16);
            counterObserver.unobserve(el);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

// ---- PORTFOLIO CAROUSEL AUTOPLAY ----
(function () {
  const grid = document.querySelector('.portfolio-grid');
  if (!grid) return;

  let timer = null;
  let current = 0;
  let paused = false;
  let controls = null;
  let dots = [];

  function getCards() { return Array.from(grid.querySelectorAll('.portfolio-card')); }

  function updateDots(index) {
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
  }

  function syncCurrent() {
    const cards = getCards();
    const gridLeft = grid.getBoundingClientRect().left;
    let closest = 0, minDist = Infinity;
    cards.forEach((c, i) => {
      const dist = Math.abs(c.getBoundingClientRect().left - gridLeft);
      if (dist < minDist) { minDist = dist; closest = i; }
    });
    current = closest;
    updateDots(closest);
  }

  function goTo(index) {
    const cards = getCards();
    if (!cards.length) return;
    current = ((index % cards.length) + cards.length) % cards.length;
    const card = cards[current];
    const isMobile = window.innerWidth <= 768;
    grid.scrollTo({ left: card.offsetLeft - (isMobile ? 20 : 0), behavior: 'smooth' });
    updateDots(current);
  }

  function buildControls() {
    const cards = getCards();
    if (controls) controls.remove();

    controls = document.createElement('div');
    controls.className = 'portfolio-controls';

    const dotsEl = document.createElement('div');
    dotsEl.className = 'portfolio-dots';
    dots = cards.map((_, i) => {
      const btn = document.createElement('button');
      btn.className = 'portfolio-dot' + (i === 0 ? ' active' : '');
      btn.setAttribute('aria-label', `Proyecto ${i + 1}`);
      btn.addEventListener('click', () => { goTo(i); resetTimer(); });
      dotsEl.appendChild(btn);
      return btn;
    });

    const arrowsEl = document.createElement('div');
    arrowsEl.className = 'portfolio-arrows';

    const prevBtn = document.createElement('button');
    prevBtn.className = 'portfolio-arrow';
    prevBtn.innerHTML = '←';
    prevBtn.setAttribute('aria-label', 'Anterior');
    prevBtn.addEventListener('click', () => { goTo(current - 1); resetTimer(); });

    const nextBtn = document.createElement('button');
    nextBtn.className = 'portfolio-arrow';
    nextBtn.innerHTML = '→';
    nextBtn.setAttribute('aria-label', 'Siguiente');
    nextBtn.addEventListener('click', () => { goTo(current + 1); resetTimer(); });

    arrowsEl.appendChild(prevBtn);
    arrowsEl.appendChild(nextBtn);
    controls.appendChild(dotsEl);
    controls.appendChild(arrowsEl);
    grid.parentElement.insertBefore(controls, grid.nextSibling);
  }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => { if (!paused) goTo(current + 1); }, 3500);
  }

  function resetTimer() { clearInterval(timer); startTimer(); }

  buildControls();
  startTimer();

  grid.addEventListener('mouseenter', () => { paused = true; });
  grid.addEventListener('mouseleave', () => { paused = false; });
  grid.addEventListener('touchstart', () => { paused = true; }, { passive: true });
  grid.addEventListener('touchend', () => {
    setTimeout(() => { paused = false; syncCurrent(); resetTimer(); }, 300);
  }, { passive: true });
  grid.addEventListener('scroll', syncCurrent, { passive: true });
})();
