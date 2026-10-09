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

## Sección 3 · Paquetes (`#paquetes`) · 2026-10-09

Capturas en `docs/revision/`: `paquetes-375x812-t00..t03.webp` y `paquetes-1440x900-t00..t01.webp`.

### Qué cambió
- Fuera: tarjetas de vidrio (`backdrop-filter`), glow verde de fondo, insignia "POPULAR", nombres en
  inglés (STARTER, BUSINESS WEB), cifras sin "Desde", "Precios claros, resultados reales", "→",
  hover que levanta y escalonado animado.
- Dentro: "Cuánto cuesta empezar tu página." + la aclaración de que son puntos de partida y que la
  cotización llega en menos de 24 horas (compromiso del paso "Propuesta"). Cuatro hojas de cotización
  iguales (en precios la simetría ayuda a comparar): nombre, "Desde", cifra, entrega, lo que incluye
  (tabla oficial), condiciones de pago y cambios, y "Cotizar" por WhatsApp con el paquete y su precio
  en el mensaje (evento `paquetes-<paquete>`). Ninguna destacada.
- Web Empresarial y Solución a la medida dicen "o en 3 pagos" (política oficial para proyectos grandes).

### Auditoría de señales
Syne/Space Grotesk (aceptada) = 1. Cuatro tarjetas iguales, pero sin ícono y con contenido de precio
que se compara: no cuenta como la señal "3 o 6 tarjetas idénticas con ícono". Sin verde, sin glow,
sin sombras, sin "→", sin badge. **Total: 1.** Frases prohibidas: 0.

### Prueba de 5 segundos
Primera pantalla a 375: "Cuánto cuesta empezar tu página", "Landing Express, desde $1,500 MXN, lista
en 5 días", condiciones de pago y "Cotizar". Se entiende el precio de entrada y qué hacer. Pasa.

### Iteraciones (2 de 3)
1. Primera versión con un tinte verde en el fondo: venía de `#paquetes::before` (regla vieja de
   glassmorphism).
2. Regla eliminada. Consola sin errores.

## Carruseles en móvil · 2026-10-09 (pedido de David)
Sitios entregados, Paquetes y los grupos de Servicios pasan a tira horizontal a ≤768px. Altura en
375 aproximada: Sitios entregados de ~3,300px a ~1,200px; Paquetes de ~2,350px a ~1,000px;
Servicios (con los giros) de ~2,700px a ~980px. En Servicios la tira toma la altura del grupo más
alto, así que las filas de giros en móvil muestran solo nombre, precio y entrega.

## Industrias (dentro de `#servicios`) y Cómo trabajamos (`#proceso` + `#nosotros`) · 2026-10-09

Capturas: `industrias-375x812.webp`, `industrias-1440x900.webp`, `como-trabajamos-375x812.webp`,
`como-trabajamos-1440x900.webp`.

### Qué cambió
- Industrias: la rejilla de 5 tarjetas con ícono se vuelve el 4.º grupo de Servicios, "Quiero una
  página para mi giro", con filas que llevan a cada página de giro: "Desde $2,500 MXN" y su tiempo
  de entrega (de cada página de industria); Iglesias dice "Por ofrenda" y que el dominio corre por
  cuenta de la iglesia (PLAN §5). El grupo conserva `id="industrias"` para el nav.
- Nosotros + Proceso: una sola sección "Así trabajamos contigo." Los 4 pasos son una secuencia real
  (lista numerada simple, sin íconos ni tarjetas), con las condiciones de pago arriba y "Quién está
  detrás" con la historia real (negocio de los papás, 2024, Reynosa). Fuera: "Fechas cumplidas,
  siempre", los 4 valores con ícono, el bloque "2024" con borde verde, las etiquetas bilingües y el
  conector entre pasos. El bloque conserva `id="nosotros"`.
- `scroll-margin-top` en `#industrias` y `#nosotros` para que no queden bajo el nav fijo.

### Auditoría de señales
Syne/Space Grotesk (aceptada) = 1. Pasos 1 a 4: es una secuencia real, no cuenta. Sin verde, sin
íconos decorativos, sin tarjetas con ícono, sin eyebrows, sin "→". **Total: 1.** Frases prohibidas: 0.

### Prueba de 5 segundos
Giros (375): "Quiero una página para mi giro, Restaurantes, desde $2,500 MXN, lista en 2 a 3
semanas". Cómo trabajamos (375): "Así trabajamos contigo, 50% al iniciar y 50% al entregar, 1
Platicamos tu idea". Pasan.

### Iteraciones (2 de 3)
1. Con los giros, Servicios en móvil medía ~2,700px; se pasó a carrusel y quedaba un hueco por la
   altura del grupo de giros.
2. Filas de giros compactas en móvil y margen de ancla. Enlaces del nav verificados; `#contacto`
   sigue sin destino hasta la sección de Cierre. Consola sin errores.

## Sección 6 · Preguntas frecuentes (`#faq`) · 2026-10-09

Capturas: `preguntas-375x812.webp`, `preguntas-1440x900.webp`.

### Qué cambió
- Fuera: acordeón con JS, etiqueta `// FAQ · Preguntas frecuentes`, paquetes que no existen ("Web
  Básico", "Pro Digital", "Full Stack"), "5–7 días", "100% remoto".
- Dentro: 6 objeciones reales en voz del dueño (ya tengo Facebook, cuánto cuesta mantenerla, si no
  la sé usar, cuánto tarda, cómo se paga, si no me gusta), respuestas de 1 a 3 líneas con datos de
  la tabla oficial (mantenimiento desde $500/$900/$1,500 al mes, dominio $350 al año desde el 2.º
  año, tiempos por paquete, 50/50 o 3 pagos, 2 rondas). `<details>` nativo, la primera abierta,
  columna de 760px. Enlace secundario "¿Otra duda? Pregúntanos por WhatsApp" (evento `faq`).
- JSON-LD `FAQPage` regenerado desde el mismo texto: coincide palabra por palabra (verificado en el
  navegador).

### Auditoría de señales
Syne/Space Grotesk (aceptada) = 1. Sin verde, sin íconos, sin "→", sin eyebrow. **Total: 1.**
Frases prohibidas y nombres viejos de paquetes: 0.

### Prueba de 5 segundos
Primera pantalla a 375: "Lo que siempre nos preguntan" y la respuesta abierta a "Ya tengo Facebook";
debajo, las demás dudas como preguntas cortas. Se entiende de un vistazo. Pasa.

### Iteraciones (1 de 3)
Pasó a la primera: abre y cierra sin JS, JSON-LD válido, consola sin errores. A 1440 la columna
angosta deja aire a la derecha a propósito, para variar el ritmo frente a Servicios y Cómo trabajamos.

### Pendiente fuera de esta sección
- CSS y JS del portafolio viejo (`.portfolio-*` en `Style.css`, carrusel en `main.js`,
  `motion-effects.js`) ya no se usan en el home; quitar al final del rediseño si ninguna otra página
  los ocupa.
- El nav marca "Industrias" como activo mientras se ve `#proyectos` (resaltado por scroll heredado;
  se revisa cuando cambie el orden de las demás secciones).
