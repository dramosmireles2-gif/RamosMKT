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

## Sección 4 · Servicios (`#servicios`) · 2026-10-09

Capturas en `docs/revision/`: `servicios-375x812-t00..t02.webp` y `servicios-1440x900-t00..t01.webp`
(pantallas consecutivas de la sección). Antes: rejilla de 6 tarjetas iguales con ícono (ver
`experimentos/hero/antes/` y el historial de git).

### Qué cambió
- Fuera: las 6 tarjetas con ícono, los nombres en inglés ("WEB DEVELOPMENT"), la etiqueta
  `// Servicios · Services`, los "Cotizar →", el escalonado animado, "Solo pagas por resultados
  medibles" y "Responde y vende 24/7 sin contratar a nadie".
- Dentro: 3 grupos por lo que el cliente necesita, escritos en su voz ("Quiero vender en línea",
  "Quiero que me encuentren", "Quiero ordenar mi negocio"), con filas de servicio: nombre, qué
  recibe, "Desde $X MXN" y una nota con el segundo nivel de precio cuando existe. Toda la fila es el
  enlace (WhatsApp con el servicio prellenado y evento `servicios-<servicio>`; Página web va a
  `#paquetes`).
- Precios corregidos a la tabla oficial: tienda desde $4,500 (completa $8,000), sistema desde $5,000
  (completo $8,000), anuncios desde $1,500 de configuración + desde $2,000 al mes.
- La sección se movió después de `#paquetes`, como en el orden aprobado. Ninguna otra sección cambió.
- A 1440 el título queda fijo (sticky) mientras se recorren los grupos.

### Auditoría de señales
Syne/Space Grotesk (aceptada) = 1. Sin verde en la sección. Sin tarjetas, sin íconos decorativos
(solo el chevron de fila de DESIGN.md), sin eyebrows, sin "→", sin " · " visible, sin animación ni
hover que levante, sin sombras. **Total: 1.** Frases prohibidas: 0.

### Prueba de 5 segundos
Viendo solo la primera pantalla a 375: "¿Qué necesita tu negocio?" → "Quiero vender en línea" →
"Tienda en línea, desde $4,500 MXN" con flecha de acción. Se entiende qué ofrece, cuánto cuesta
empezar y que la fila se toca para cotizar. Pasa.

### Iteraciones (2 de 3)
1. Primera versión: a 1440 la columna del título quedaba vacía bajo el texto y las notas de precio
   se partían en 3 líneas.
2. Título sticky a 1440 y notas a 30ch. Consola sin errores.

### Pendiente fuera de esta sección
- CSS y JS del portafolio viejo (`.portfolio-*` en `Style.css`, carrusel en `main.js`,
  `motion-effects.js`) ya no se usan en el home; quitar al final del rediseño si ninguna otra página
  los ocupa.
- El nav marca "Industrias" como activo mientras se ve `#proyectos` (resaltado por scroll heredado;
  se revisa cuando cambie el orden de las demás secciones).
