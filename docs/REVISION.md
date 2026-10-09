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

## Sección 7 · Cierre (`#contacto`) · 2026-10-09

Capturas: `cierre-375x812.webp`, `cierre-1440x900.webp`.

### Qué cambió
- Sección nueva (no existía; el footer enlazaba a `#contacto` sin destino, ya funciona).
- "Cuéntanos de tu negocio y te cotizamos en menos de 24 horas." + un solo botón verde de WhatsApp
  con mensaje abierto para completar ("…Mi negocio es: "), evento `cierre`. Sobre papel el botón
  lleva filete carbón de 1px y el foco es carbón.
- Datos reales en `<dl>`: teléfono con `tel:`, horario, Reynosa y trabajo a distancia, correo
  `dramosmireles2@gmail.com` (decisión de David). Áreas táctiles de 44px.
- Sin formulario: ya existe `contacto.html` y aquí solo agregaría un paso antes de WhatsApp.

### Auditoría de señales
Syne/Space Grotesk (aceptada) = 1. Un solo verde en la sección. Sin íconos (salvo el glifo de
WhatsApp), sin tarjetas, sin "→", sin sombras. **Total: 1.** Frases prohibidas: 0.

### Prueba de 5 segundos
375: título con la promesa de 24 horas, botón verde de WhatsApp a ancho completo, y debajo número,
horario y "Reynosa, Tamaulipas". Se entiende qué hacer, cuándo atienden y dónde están. Pasa.

### Iteraciones (1 de 3)
Pasó a la primera. Enlaces verificados (WhatsApp, `tel:`, `mailto:`), consola sin errores.

## Footer (`footer.pie`, solo index.html) · 2026-10-09

Capturas: `footer-375x812.webp`, `footer-1440x900.webp`.

### Qué cambió
- Tres bloques: marca (logo + "Páginas web, tiendas y sistemas para negocios de Reynosa."), Contacto
  (WhatsApp, correo, Reynosa) y Redes (Instagram, Facebook, TikTok como texto); barra con aviso de
  privacidad y ©. Todos los enlaces de 44px.
- Correo corregido a `dramosmireles2@gmail.com`. Fuera: columna Navegación (repetía el nav), íconos
  verdes, círculos de redes, "Tecnología que crece negocios", "Hecho con ♥ y código", " · ".
- Logo: copia recortada sin márgenes transparentes (`img/logo-rmkt-recortado.png`, mismo diseño)
  para alinearlo con el texto. El archivo original no se tocó.
- Clase nueva `footer.pie`; las otras páginas siguen con su footer y sus estilos `.footer-*`.
- En móvil, espacio extra al final para que el botón flotante no tape el ©.

### Auditoría de señales
Syne/Space Grotesk (aceptada) = 1. Sin verde fuera del logo, sin íconos, sin " · ", sin frases
prohibidas. **Total: 1.**

### Prueba de 5 segundos
375: logo, qué hacen y dónde; WhatsApp, correo y ciudad; redes; aviso de privacidad. Pasa.

### Iteraciones (2 de 3)
1. El logo quedaba chico y corrido a la derecha por el margen transparente del PNG.
2. Logo recortado. Enlaces verificados (6 de 44px, aviso de privacidad responde 200). Consola sin errores.

## Navbar · 2026-10-09

Capturas: `navbar-375x812.webp`, `navbar-375x812-abierto.webp`, `navbar-1440x900.webp`.

### Qué cambió
- Enlaces en el orden real de la página y con palabras del cliente: Trabajos, Precios, Servicios,
  Cómo trabajamos, Preguntas (fuera Nosotros e Industrias, que viven dentro de otras secciones).
- "Cotiza gratis" (píldora verde) → "WhatsApp 814 807 8309" sobrio con filete; evento `nav`.
- Logo recortado de 40px; nav de 112px → 72px (64px en móvil). Hero, sticky de Servicios y anclas
  pasan a `--alto-nav`.
- Menú móvil: panel a pantalla completa (antes se abría en `top: 73px` y se encimaba con el nav de
  104px), filas de 56px, un solo botón verde de WhatsApp (evento `menu`) y horario, `aria-expanded`,
  cierra con Escape devolviendo el foco, bloquea el scroll de fondo y oculta el botón flotante.
  Sin emoji.
- Fuera: barra de progreso verde y su JS, subrayado verde del enlace activo (ahora blanco).
- Enlace activo: el observador ahora vigila solo las secciones del nav y marca la que cruza la mitad
  de la pantalla (antes, con secciones más altas que la pantalla, no se activaba o marcaba la que no era).

### Auditoría de señales
Syne/Space Grotesk (aceptada) = 1. Verde solo en el logo y en el botón de WhatsApp del menú abierto.
Sin píldora, sin glassmorphism, sin glow, sin emoji. **Total: 1.**

### Prueba de 5 segundos
1440: logo, cinco destinos que se entienden y el número de WhatsApp a la vista. 375: logo y menú;
al abrir, los cinco destinos y "Escríbenos por WhatsApp". Pasa.

### Iteraciones (2 de 3)
1. En móvil no aparecía el botón de menú: la regla base quedaba después del media query.
2. Orden corregido; botón flotante oculto con el menú abierto. Verificado: abre/cierra,
   `aria-expanded`, Escape con retorno de foco, cierre al tocar un enlace, enlace activo en
   Precios. Consola sin errores.

## Componentes compartidos · 2026-10-09
- Botón flotante: de verde WhatsApp #25d366 con pulso y sombra de color a `--verde` con filete carbón,
  sin animación; foco con anillo doble; mensaje de cotización y evento `flotante`.
- `main.js`: el enlace activo del nav acepta `#seccion` y `/#seccion`, así el mismo nav sirve en todas
  las páginas.
- Home: `<title>`, description, `og:*` y `twitter:*` sin "Tecnología que crece negocios" ni
  "resultados reales"; `og:image` con URL absoluta.

## Aviso de privacidad (`aviso-privacidad.html`) · 2026-10-09

Capturas: `aviso-375x812.webp`, `aviso-375x812-arco.webp`, `aviso-1440x900.webp`.

### Qué cambió
- Contenido: responsable David Eduardo Ramos Mireles (persona física, nombre comercial RamosMKT);
  correo `dramosmireles2@gmail.com` (antes con error, 4 veces); los datos se recaban por WhatsApp,
  correo o teléfono (ya no hay formulario); cookies reescrito: la home y `gracias/` usan gtag de
  Google Ads para medir clics en WhatsApp, cómo bloquearlas y adssettings; marco legal sin nombrar al
  INAI ("autoridad competente en la materia"). Tratamiento de usted. Actualizado en octubre de 2026.
- Diseño: documento en papel, columna de 68ch, H1 Syne, índice de 9 apartados con filas de 44px,
  H2 sin borde verde, viñetas de guion en tinta, datos en `<dl>` con filetes.
- Comparte nav, `footer.pie`, botón flotante, `Style.css` y `main.js` con la home. Fuera: CSS propio,
  Google Fonts por CDN, barra de progreso, `motion-effects.js`, `// Legal · Privacidad`,
  "← Volver al sitio".
- `Style.css`: la regla del nav fijo pasa a `body > nav` (el índice del aviso es un `<nav>` y heredaba
  `position: fixed`); las secciones del documento anulan el `section` global heredado.

### Auditoría de señales
Syne/Space Grotesk (aceptada) = 1. Verde solo en el logo y el botón flotante. Sin eyebrow, sin borde
lateral de color, sin "→", sin " · ". **Total: 1.** Frases prohibidas: 0.

### Prueba de 5 segundos
375: "Aviso de privacidad", fecha y el índice de lo que contiene. Se entiende qué es y cómo llegar a
cada apartado. Pasa.

### Iteraciones (2 de 3)
1. Antes de capturar: el `nav` global habría vuelto fijo el índice y el `section` global le metía
   padding; se corrigió el selector.
2. Capturas a 375 y 1440; 9 anclas del índice válidas, menú móvil funciona, enlaces internos 200,
   sin el correo viejo. (Local: recargar `/aviso-privacidad` sin `.html` da 404 solo en el servidor
   de desarrollo; GitHub Pages sí sirve la URL limpia.)

### Pendiente
- **Revisión legal** del texto por alguien con cédula (marco legal tras la reforma de 2025 y autoridad).

### Pendiente fuera de esta sección
- ~~`<title>`, `og:title` y `twitter:title` de index.html~~ Resuelto en Componentes compartidos.
- Botón flotante de WhatsApp: en la sección de cierre conviven dos verdes (flotante + botón). Quitar
  pulso y sombra de color, y decidir si se oculta cuando el botón del cierre está a la vista.
- CSS y JS del portafolio viejo (`.portfolio-*` en `Style.css`, carrusel en `main.js`,
  `motion-effects.js`) ya no se usan en el home; quitar al final del rediseño si ninguna otra página
  los ocupa.
- El nav marca "Industrias" como activo mientras se ve `#proyectos` (resaltado por scroll heredado;
  se revisa cuando cambie el orden de las demás secciones).
