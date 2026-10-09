# DESIGN · Sistema de diseño de ramosmkt.lat

Sistema único para todo el sitio. Nació en el hero de `index.html` (aprobado 2026-10-08) y se extiende
sección por sección. Brief: `docs/BRIEF.md`. Datos: `experimentos/hero/CONTENIDO.md`.
Cualquier valor que no salga de aquí se documenta en "Valores fuera de escala" o no entra.

## Concepto
**"El pliego de pruebas":** el sitio es la mesa de un taller de imprenta. El **carbón** es el taller,
donde se habla, se decide y se escribe por WhatsApp. El **papel** es lo impreso: los sitios que
RMKT ya entregó, la hoja de cotización y el cierre. Lo que se ve en papel es trabajo o compromiso
concreto; lo que va en carbón es explicación.

- La audacia está en **un solo lugar por página**: en `index.html`, el pliego del hero. El resto es
  sobrio, con ritmo de densidad y de anchos, no con efectos.
- Las secciones alternan carbón y papel; nunca dos superficies distintas de carbón seguidas para
  "separar". Si dos secciones de carbón van juntas, las separa un filete de 1px.

## Color

| Token | Hex | OKLCH | Rol | De dónde sale |
| --- | --- | --- | --- | --- |
| `--carbon` | #191C1D | oklch(22.4% 0.005 219.7) | Dominante: fondo del taller, texto sobre papel | Marca RMKT |
| `--papel` | #E7E2E3 | oklch(91.7% 0.006 3.3) | Superficie de lo impreso (pruebas, cotización, cierre) | Gris claro de marca |
| `--blanco` | #FFFFFF | oklch(100% 0 0) | Texto principal sobre carbón | Marca RMKT (la "R" del logo) |
| `--gris-texto` | #B4B9BA | oklch(78.2% 0.006 211.0) | Texto secundario sobre carbón | Derivado del carbón |
| `--tinta-2` | #55595A | oklch(46.1% 0.005 214.4) | Texto secundario, pies y marcas de corte sobre papel | Derivado del carbón |
| `--verde` | #00FF98 | oklch(87.9% 0.214 155.7) | Solo botones de WhatsApp y anillo de foco | Marca RMKT ("MKT" y subrayado del logo) |

Contrastes medidos: blanco/carbón 17.1:1 · gris-texto/carbón 8.6:1 · carbón sobre verde 12.9:1 ·
carbón/papel 13.4:1 · tinta-2/papel 5.5:1. Todo pasa AA. **Combinaciones no permitidas:** gris-texto
sobre papel, tinta-2 sobre carbón, verde como texto o como fondo de sección.

Filetes: `rgba(25,28,29,.14)` sobre papel (carbón al 14%) y `rgba(255,255,255,.08)` sobre carbón.

**Tokens heredados** (siguen en `Style.css` para las páginas que aún no se rediseñan; el código
nuevo no los usa): `--black` = carbón, `--black2` #1F2223, `--black3` #25292A, `--white` #f5f5f5,
`--gray` #9A9FA0 (6.4:1 sobre carbón), `--gray2` #333333, `--green` = verde, `--green-dim` #00CC7A.
Se eliminan cuando la última página que los usa se rediseñe.

## Tipografía
Syne + Space Grotesk, autoalojadas en `fonts/` (OFL, licencias incluidas). Es la única señal de la
lista que se acepta, por ser marca existente.

| Rol | Familia y peso | 375px | 1440px | Notas |
| --- | --- | --- | --- | --- |
| H1 (hero) | Syne 700 | 34px / 1.08 | `clamp(34px, 3.4vw, 50px)` / 1.06 | Máx. 16ch, tracking −0.02em |
| H2 (sección) | Syne 700 | 28px / 1.12 | `clamp(28px, 2.8vw, 40px)` / 1.08 | Máx. 22ch, tracking −0.015em |
| H3 (bloque) | Space Grotesk 600 | 19px / 1.3 | 21px / 1.3 | Nombre de cliente, paquete o pregunta |
| Texto | Space Grotesk 400 | 17px / 1.55 | 18px / 1.55 | Máx. 46ch (60ch en FAQ) |
| Pequeño | Space Grotesk 400/500 | 14px / 1.45 | 14px / 1.45 | Horario, giro y ciudad, condiciones |
| Pie de prueba | Space Grotesk 500 + 400 | 13px / 1.35 | 13px / 1.35 | Solo sobre papel, en `--tinta-2` |
| Cifra de precio | Syne 700 | 36px / 1 | 44px / 1 | Tabular; "MXN" en el tamaño del texto |
| "Desde" | Space Grotesk 500 | 15px | 16px | Encima de la cifra, legible, nunca asterisco |
| Botón | Space Grotesk 700 | 17px | 17px | |

Reglas: sentence case siempre, sin eyebrows (`// Sección · Section`), sin nombres en inglés, sin
palabra resaltada en títulos, sin `<br>` para forzar cortes (se controla con `max-width` en ch).

## Radios
| Token | Valor | Uso |
| --- | --- | --- |
| `--r-impreso` | 0 | Capturas, tarjetas de precio, todo lo que va en papel |
| `--r-boton` | 6px | Botones |
| `--r-foco` | 4px | Anillo de foco |

No hay píldoras ni tarjetas de 16 a 20px de radio en código nuevo.

## Espaciado
Escala `--e-1` a `--e-9`: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 72 · 112 px.
- Gutter lateral: 20px a 375 · 48px a 768 · 72px a 1440. Contenido máx. 1200px.
- Padding vertical de sección: `--e-8` (72) en móvil, `--e-9` (112) en escritorio.
- Título de sección → contenido: `--e-6` (32) móvil, `--e-7` (48) escritorio.

## Sombras
Ninguna. Lo impreso se separa con el filete de 1px y las marcas de corte. Sin glow.

## Movimiento
Un solo momento en todo `index.html`: las pruebas del hero "se asientan" (520ms,
`cubic-bezier(.22,1,.36,1)`, 90ms de escalonado, solo CSS). **Ninguna otra sección se anima al
entrar en pantalla.** Interacciones: subrayado en hover y el anillo de foco; nada de escalas, giros ni
desplazamientos. Con `prefers-reduced-motion: reduce`, nada se mueve.

## Iconos
- WhatsApp: el glifo que ya usa el botón flotante, en línea, dentro de cada botón de WhatsApp.
- Si una sección necesita otro icono: Phosphor regular (MIT), en línea, 20px, del color del texto.
  Nunca un icono encima de una tarjeta como decoración. Sin emojis como iconos. Sin "→".
- Indicador de fila enlazada: chevron de Phosphor (`caret-right`) 16px en `--gris-texto`.

## Imágenes
- Solo capturas reales de sitios entregados, en WebP con `width`/`height`, `alt` en español que dice
  qué negocio es y dónde. `loading="lazy"` en todo lo que no es hero.
- Encuadre: la página del cliente sin barra de navegador ni teléfono falso. Color sin filtros.
- Recortes nuevos se guardan en `img/<sección>/`.
- Sin foto del fundador por ahora (PENDIENTE). Sin stock.

## Componentes

### Botón de WhatsApp (construido en el hero)
Verde, texto carbón, Space Grotesk 700 17px, glifo de WhatsApp 22px, alto mínimo 56px, `--r-boton`,
ancho completo hasta 420px en móvil. Hover: subrayado. Foco: 3px verde con offset 3px.
`href` a `wa.me/528148078309?text=<mensaje de esa sección>`, `target="_blank" rel="noopener"`,
`aria-label` que diga qué se cotiza, `data-ubicacion` para el evento `whatsapp_click`.
**Máximo uno por pantalla** (excepción: las tarjetas de precio, ver abajo).

### Enlace secundario (construido en el hero)
Texto subrayado, alto mínimo 44px, color del texto principal de la superficie, subrayado en el
secundario. Nunca un botón con contorno.

### Captura impresa (construida en el hero: `.prueba`)
Imagen con filete de 1px y marcas de corte en las 4 esquinas (8px de largo, 12px de separación, 1px,
`--tinta-2`), sobre papel. Pie: dominio (500, carbón, enlace al sitio en vivo) + giro y ciudad (400,
`--tinta-2`).

### Encabezado de sección
H2 + como mucho un párrafo de entrada. Sin etiqueta encima. Alineado a la izquierda.

### Tarjeta de precio (para `#paquetes`, páginas de industria y la futura `precios.html`)
Hoja de cotización en papel: radio 0, filete de 1px, sin sombra. Orden: nombre (H3) → "Desde" →
cifra + MXN → entrega → lo que incluye (lista de máx. 5 líneas, viñeta de guion) → línea de confianza
"50% al iniciar y 50% al entregar. 2 rondas de cambios." en `--tinta-2` → botón "Cotizar".
- Todas iguales: nunca una "destacada", "popular" ni "más elegida" (los clientes no eligen paquete;
  ver BRIEF).
- El botón de cada tarjeta es la única excepción a "un verde por pantalla" y por eso va en su versión
  sobria: carbón con texto blanco y glifo de WhatsApp. El verde se reserva para el cierre.

### Fila de servicio (para "Otros servicios y giros")
Toda la fila es el enlace (mín. 56px): nombre a la izquierda, "Desde $X MXN" a la derecha, chevron.
Filete de 1px entre filas. Va a la página del servicio o del giro si existe; si no, a WhatsApp con el
servicio prellenado.

### Pregunta frecuente
`<details>`/`<summary>` nativo, sin JS. Pregunta en H3, respuesta en texto máx. 60ch. Indicador
"+"/"−" dibujado con CSS. Filete entre preguntas. Las respuestas coinciden palabra por palabra con
el FAQ del JSON-LD.

### Nav (construido)
Fondo carbón sólido, sin `backdrop-filter`, filete neutro. Logo y enlaces sin cambios.

### Botón flotante de WhatsApp (heredado)
Se queda, pero sin pulso ni sombra de color (pendiente de ajustar cuando se trabaje el cierre).

## Copy
- Tú. Datos concretos: precio con "Desde", días de entrega, ciudad, horario, número.
- CTA dice lo que pasa: "Escríbenos por WhatsApp", "Cotizar mi tienda en línea", "Abrir aiserseguros.com".
- Precios solo de la tabla oficial de `PLAN-rediseno-rmkt.md`.
- Antes de entregar cada sección: grep de las frases prohibidas de la skill `direccion-arte-rmkt`.

## Prohibidos de este proyecto
Mockups de navegador o teléfono, dashboards falsos, cifras sin fuente (10+, 100%, <1h), badge
"Disponible", "Popular" o "Más elegido", puntos pulsantes, rejilla de fondo, glow, "→" en botones,
separadores " · " en texto visible, etiquetas en inglés, eyebrows, verde fuera de botones de WhatsApp
y foco, píldoras de 100px, contadores animados, tarjetas con icono arriba, animaciones al hacer
scroll, demos presentadas como clientes, testimonios o fotos inventados.

## Valores fuera de escala (documentados)
Marcas de corte (8px, 12px, 1px) · alto del nav (112px a 1440, 104px a 375) · botón 56px · enlace
44px · `max-width` del pliego (760px) y del botón en tableta (420px) · filetes de 1px.

## Historial de decisiones
- 2026-10-08 (David, hero): `--black` pasa a #191C1D en todo el sitio; fuentes autoalojadas; Als Dress
  arreglada con `p-alsdress.webp`; Integral FR es de Escobedo, N.L. El glifo de WhatsApp se reusa del
  botón flotante en lugar de Phosphor.
- 2026-10-09 (David, sitio): el sistema del hero se vuelve el del sitio; orden de `index.html`
  aprobado (ver BRIEF); fuera las demos del home; sin paquete destacado; sin foto de fundador por ahora.

Aprobado por: David · Hero: 2026-10-08 · Extensión al sitio: 2026-10-09 (los componentes nuevos se
validan con capturas al construir su sección).
