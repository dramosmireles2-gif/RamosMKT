# REVISIÓN · ramosmkt.lat

Registro por sección. La revisión del hero está en `experimentos/hero/REVISION.md`.

## Sección 2 · Sitios entregados (`#proyectos`) · 2026-10-09

Capturas en `docs/revision/`: `proyectos-antes-375.webp`, `proyectos-antes-1440.webp`,
`proyectos-despues-375.webp`, `proyectos-despues-768.webp`, `proyectos-despues-1440.webp`.

### Qué cambió
- Fuera: las 2 demos (MARÉ, El Divino Bocado), la tarjeta "Sistemas Administrativos" (no era un
  cliente), el carrusel automático, la etiqueta `// Proyectos · Our work`, las etiquetas en
  MAYÚSCULAS ("SEGUROS · WEB PROFESIONAL"), los botones con "→" y el hover que levanta tarjetas.
- Dentro: los 4 clientes reales, cada uno con una captura **nueva tomada de su sitio en vivo a 390px**
  (lo que ve su cliente en el celular), no el mismo recorte del hero. Captura impresa sobre papel con
  marcas de corte, nombre, giro y ciudad, qué hace su página (verificado en el sitio el 2026-10-09) y
  el enlace "Abrir <dominio>".
- Cierre de la sección: "¿Quieres la de tu negocio?" + botón de WhatsApp con mensaje propio y evento
  `whatsapp_click` con `ubicacion: 'proyectos'`. El evento del hero pasó a ser genérico
  (`a[data-ubicacion]`), así que cada botón nuevo solo necesita ese atributo.
- Componente `.boton-wa` creado en `Style.css` a partir del botón del hero (el hero no se tocó).

### Auditoría de señales
Syne/Space Grotesk (aceptada, marca) = 1. Casi negro + verde: mitigada, el verde aparece en un solo
botón por pantalla. Sin eyebrows, sin "→", sin " · ", sin rejilla de tarjetas idénticas (cuatro
tamaños y desfases distintos), sin hover ni animación de entrada, sin sombras. **Total: 1.**
Frases prohibidas: 0 (grep).

### Pruebas
- 5 segundos: el título dice cuántos negocios y qué tienen; cada bloque dice quién, qué giro y dónde.
- Consola sin errores. Enlaces a los 4 sitios abren en pestaña nueva. Ancla `#proyectos` del hero y
  del nav siguen funcionando.
- Iteraciones: 2 (Integral FR recortado otra vez porque asomaba el título "Catálogo"; captura de
  Aiser más grande a 1440).

### Pendiente fuera de esta sección
- CSS y JS del portafolio viejo (`.portfolio-*` en `Style.css`, carrusel en `main.js`,
  `motion-effects.js`) ya no se usan en el home; quitar al final del rediseño si ninguna otra página
  los ocupa.
- El nav marca "Industrias" como activo mientras se ve `#proyectos` (resaltado por scroll heredado;
  se revisa cuando cambie el orden de las demás secciones).
