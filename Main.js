// ---- SCROLL ANIMATIONS ----
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ---- FORMULARIO → WHATSAPP ----
function enviarFormulario() {
    const nombre   = document.querySelectorAll('.form-input')[0].value.trim();
    const negocio  = document.querySelectorAll('.form-input')[1].value.trim();
    const servicio = document.querySelector('.form-select').value;
    const mensaje  = document.querySelector('.form-textarea').value.trim();

    if (!nombre) { alert('Por favor ingresa tu nombre.'); return; }

    const txt = `Hola RamosMKT! 👋\n\nNombre: ${nombre}\nNegocio: ${negocio || '—'}\nServicio: ${servicio || '—'}\n\n${mensaje || ''}`;
    window.open('https://wa.me/528148078309?text=' + encodeURIComponent(txt), '_blank');
}