# DESIGN · Hero de ramosmkt.lat

## Concepto
**"El pliego de pruebas":** los sitios que RMKT ya entregó en Reynosa, impresos como prueba de imprenta
sobre papel gris claro, con marcas de corte y el dominio real al pie. Del lado carbón, una sola
frase que dice qué, dónde y cuánto, y el botón de WhatsApp.

Por qué este concepto: el diferenciador verificable de RMKT son sus cuatro dominios en vivo. Un dueño
de pyme no confía en "resultados reales"; confía en ver la página de la aseguradora de la Col.
Anzaldúas o de la boutique que ya conoce.

## Color (5 tokens)

| Token | Hex | OKLCH | Rol | De dónde sale |
| --- | --- | --- | --- | --- |
| `--carbon` | #191C1D | oklch(22.4% 0.005 219.7) | Dominante: fondo de la columna de texto | Marca RMKT |
| `--papel` | #E7E2E3 | oklch(91.7% 0.006 3.3) | Superficie del pliego (mitad derecha a 1440, banda inferior a 375) | Gris claro de marca; el papel de una prueba de imprenta |
| `--blanco` | #FFFFFF | oklch(100% 0 0) | Texto sobre carbón | Marca RMKT (la "R" del logo) |
| `--gris-texto` | #B4B9BA | oklch(78.2% 0.006 211.0) | Texto secundario sobre carbón | Derivado del carbón (mismo tono, más luz) |
| `--tinta-2` | #55595A | oklch(46.1% 0.005 214.4) | Pies de foto y marcas de corte sobre papel | Derivado del carbón |
| `--verde` | #00FF98 | oklch(87.9% 0.214 155.7) | Solo el botón de WhatsApp y el anillo de foco | Marca RMKT (el "MKT" y el subrayado del logo) |

Contrastes medidos: blanco/carbón 17.1:1 · gris-texto/carbón 8.6:1 · carbón sobre verde (texto del
botón) 12.9:1 · carbón/papel 13.4:1 · tinta-2/papel 5.5:1. Todo pasa AA.

Cómo compensamos "casi negro + verde ácido" (señal de la lista que trae la marca): el papel #E7E2E3
ocupa más de la mitad del hero a 1440, el verde aparece en UN solo elemento, y el resto del color lo
ponen las capturas de los clientes (azul de Aiser, rosa de Als Dress).

## Tipografía
- **Display:** Syne 700 (no 800), sentence case, tracking −0.02em (hoy −3px). Escala: 34px / 1.08 a
  375px → `clamp(34px, 4.2vw, 60px)` / 1.02 a 1440px. Máximo 3 líneas a 1440.
- **Texto:** Space Grotesk 400, 17px / 1.55 en móvil, 18px / 1.55 en escritorio. Máx. 46ch.
- **Botón:** Space Grotesk 700, 17px.
- **Pies del pliego:** Space Grotesk 500 (dominio) y 400 (giro y ciudad), 13px / 1.35, `--tinta-2`.
- Sin eyebrow, sin palabra resaltada en el H1.
- Licencias: ambas OFL (Google Fonts). Ver decisión 2 sobre autoalojarlas.

## Radios
| Token | Valor | Uso |
| --- | --- | --- |
| `--r-impreso` | 0 | Capturas y papel (lo impreso no tiene esquinas redondas) |
| `--r-boton` | 6px | Botón de WhatsApp (hoy es píldora de 100px) |
| `--r-foco` | 4px | Anillo de foco |

## Espaciado
Escala: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 72 · 112 px (`--e-1` a `--e-9`). Gutter lateral 20px a 375,
72px a 1440.

## Sombras
Ninguna. Las capturas se separan del papel con un filete de 1px `rgba(25,28,29,.14)` y las marcas de
corte. Se eliminan el glow, la rejilla y las sombras del mockup.

## Movimiento: un solo momento
Al cargar, las capturas "se asientan" en el papel una tras otra: de `translateY(14px)` y opacidad 0 a
su lugar, 520ms, `cubic-bezier(.22,1,.36,1)`, 90ms de escalonado. Solo CSS. Con
`prefers-reduced-motion: reduce` aparecen quietas. Se eliminan: parallax de rejilla/glow, contador
animado, puntos pulsantes, insignias flotantes y el giro 3D del mockup.

## Iconos
Uno solo: logo de WhatsApp de Phosphor (regular, MIT, SVG en línea) dentro del botón. Sin flechas "→".

## Imágenes
- Recortes del primer pantallazo de cada sitio, en WebP con `width`/`height`, `alt` en español que dice
  qué negocio es, sin `loading="lazy"` (es el hero; `fetchpriority="high"` solo en la primera).
- Encuadre: el hero de cada sitio, sin barra de navegador ni teléfono falso. Color sin filtros.
- Aiser (vertical, la más grande) · Als Dress (horizontal) · Linaje (vertical chica) · Integral FR
  (horizontal chica). Tamaños distintos a propósito: no es una rejilla de tarjetas.
- Als Dress: se convierte la captura de hoy a WebP. Esto también arregla la imagen rota
  `p-alsdress.jpg` de Proyectos si David quiere (fuera de alcance, lo pregunto).

## Copy (propuesta)
- **H1:** Páginas web para negocios de Reynosa, desde $1,500 MXN.
- **Texto:** Una página sencilla queda lista en 5 días, con tu botón de WhatsApp y hecha para verse
  bien en el celular. También hacemos tiendas en línea, sistemas y anuncios en Facebook y Google.
- **CTA primario:** Escríbenos por WhatsApp → `wa.me/528148078309?text=Hola, vi su página y quiero
  cotizar una página web para mi negocio.` + evento `gtag('event','whatsapp_click',{ubicacion:'hero'})`.
- **Debajo del botón:** 814 807 8309, de lunes a sábado de 9:00 a 19:00.
- **Secundario (enlace de texto, subordinado):** Ver los sitios que ya entregamos (ancla `#proyectos`).
- **Pies del pliego:** `aiserseguros.com` / Agencia de seguros en Reynosa — `alsdress.com.mx` / Renta de
  vestidos en Reynosa — `linajeescogidoreynosa.org` / Iglesia en Reynosa — `integralfr.com.mx` /
  Monitoreo de flotillas (sin ciudad: PENDIENTE).

## Wireframes

### 375 × 812 (primero)
```
┌───────────────────────────────┐
│ RMKT                      ☰   │  nav actual, sin cambios
├───────────────────────────────┤ carbón
│ Páginas web para              │
│ negocios de Reynosa,          │  H1 Syne 700 34px
│ desde $1,500 MXN.             │
│                               │
│ Una página sencilla queda     │  Space Grotesk 17px
│ lista en 5 días, con tu botón │  gris-texto
│ de WhatsApp...                │
│ ┌───────────────────────────┐ │
│ │ (wa) Escríbenos por WhatsApp│ │  verde, 56px alto, ancho completo
│ └───────────────────────────┘ │
│ 814 807 8309, de lunes a      │  13px
│ sábado de 9:00 a 19:00        │
│ Ver los sitios que ya entregamos │ enlace subrayado
├───────────────────────────────┤ papel  ← empieza ~y 600: se ve sin scroll
│ ┌┐            ┌┐ ┌┐           │
│  [ Aiser     ]   [ Als Dre…   │  tira horizontal con scroll-snap
│  [ captura   ]   [            │  (overflow solo dentro de la tira)
│ └┘            └┘              │
│  aiserseguros.com             │
│  Agencia de seguros en Reynosa│
└───────────────────────────────┘
```

### 1440 × 900
```
┌────────────────────────────────────────────────────────────────────────────┐
│ RMKT          Nosotros Servicios Industrias Proyectos Paquetes  [Cotiza]  │ nav actual
├──────────────────────────────┬─────────────────────────────────────────────┤
│ carbón (5/12)                │ papel (7/12, a sangre a la derecha y abajo) │
│                              │  ┌┐              ┌┐ ┌┐                  ┌┐  │
│ Páginas web para             │   [ Aiser         ]  [ Als Dress          ] │
│ negocios de Reynosa,         │   [ vertical      ]  [ horizontal         ] │
│ desde $1,500 MXN.            │   [ grande        ]  └┘ alsdress.com.mx   └┘│
│                              │   [               ]     Renta de vestidos   │
│ Una página sencilla queda    │   [               ]  ┌┐        ┌┐ ┌┐    ┌┐ │
│ lista en 5 días...           │  └┘              └┘   [Linaje ]  [Integral] │
│                              │  aiserseguros.com     [ vert. ]  [ FR     ] │
│ [(wa) Escríbenos por WhatsApp]│ Agencia de seguros    └┘    └┘  └┘     └┘ │
│ 814 807 8309, de lunes a ... │  en Reynosa            pies...    pies...   │
│ Ver los sitios que ya...     │                                             │
└──────────────────────────────┴─────────────────────────────────────────────┘
```
La audacia está en un solo lugar: el pliego. La columna de texto es sobria.

## Orden dentro del hero (lo dicta la tarea #1)
1. Qué, dónde y cuánto (H1) → 2. qué recibes (texto) → 3. WhatsApp → 4. horario y número →
5. la prueba (los sitios). En móvil la prueba asoma sin scroll para que el CTA no esté solo.

## Prueba del prompt gemelo
Si una agencia de Saltillo pidiera "hero para agencia web de pymes, marca negra y verde", el plan
default sería: rejilla, glow, dashboard falso, stats. Es exactamente el hero actual, así que lo
descarto. Lo que cambié y que solo funciona para RMKT: (1) los cuatro dominios reales con su giro y
ciudad, (2) Reynosa y el precio en el H1, (3) el número y horario reales bajo el botón, (4) el papel
#E7E2E3 de su propia marca como superficie del trabajo. Si quitas los dominios, el diseño se cae;
esa es la prueba de que no es intercambiable.

## Señales esperadas después (meta 0 o 1)
- Syne/Space Grotesk: **se queda** (marca existente, decisión de David). Es la 1 señal aceptada.
- Casi negro + verde ácido: mitigada (papel domina, verde en un solo elemento).
- Todo lo demás de la lista: 0.

## Prohibidos de este proyecto
Mockups de navegador o teléfono, dashboards falsos, cifras sin fuente (10+, 100%, <1h), badge
"Disponible", puntos pulsantes, rejilla de fondo, glow, "→" en botones, separadores " · " en texto
visible, verde en algo que no sea el botón, píldoras de 100px nuevas, contador animado.

## Decisiones de David (2026-10-08)
1. **Carbón: se cambia el token global.** `--black` pasa a #191C1D en todo el sitio. Para mantener la
   jerarquía y el contraste AA de las tarjetas: `--black2` #1F2223, `--black3` #25292A y `--gray`
   #888888 → #9A9FA0 (6.4:1 sobre carbón, 5.5:1 sobre black3).
2. **Fuentes: autoalojadas** en `/fonts` (Syne y Space Grotesk variables, subconjunto latin, licencia OFL
   incluida). Se declaran en Style.css, así que también aplican en las páginas que lo cargan.
3. **Als Dress en Proyectos: arreglada** con `p-alsdress.webp` (captura del sitio en vivo).
4. **Integral FR:** empresa de Escobedo, N.L. Su pie dice "Monitoreo de flotillas en Escobedo, N.L."

## Ajustes durante la implementación
- Icono de WhatsApp: se reutilizó el glifo que ya usa el botón flotante del sitio, en lugar de Phosphor,
  para no tener dos dibujos distintos del mismo logo en la misma pantalla.
- Nav: fondo carbón sólido sin `backdrop-filter` (quita la señal de glassmorphism) y filete neutro en
  lugar de verde. Barra de progreso sin glow. Logo y enlaces sin tocar.
- Valores fuera de la escala, documentados: marcas de corte (8px de largo, 12px de separación, 1px),
  altura del nav (112px a 1440, 104px a 375), botón de 56px, enlace de 44px, `max-width` del pliego
  (760px) y del botón en tableta (420px), filete `rgba(25,28,29,.14)` (carbón al 14%).

Aprobado por: David (respondió las 4 decisiones en el chat) · Fecha: 2026-10-08
