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
