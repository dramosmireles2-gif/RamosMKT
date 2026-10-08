# REVISIÓN · Hero de ramosmkt.lat

## Antes (2026-10-08)
Capturas: `antes/hero-375x812.png`, `antes/hero-1440x900.png`

### Conteo de señales genéricas: 9 de 20

| # | Señal | ¿Aparece? | Dónde |
| --- | --- | --- | --- |
| 1 | Inter/Geist/Space Grotesk/Syne/Instrument Serif | Sí | Syne 800 en H1, Space Grotesk en texto (marca) |
| 2 | Morado/índigo | No | |
| 3 | Degradado decorativo | Sí | `.hero-glow` (radial-gradient verde) |
| 4 | Crema + terracota | No | |
| 5 | Casi negro + un acento ácido | Sí | `#0a0a0a` + `#00FF98` |
| 6 | Hero con badge (y dos botones) | Sí | Píldora "Disponible · Reynosa, México" con punto pulsante + 2 botones píldora |
| 7 | 3 o 6 tarjetas idénticas con icono | No (en el hero) | |
| 8 | Banda de stats | Sí | "10+ / 100% / <1h" (sin fuente verificable) |
| 9 | 01/02/03 sin secuencia | No | |
| 10 | Eyebrow en MAYÚSCULAS | No (en el hero) | |
| 11 | "→" en botones | Sí | "Quiero hacer crecer mi negocio →" |
| 12 | "A · B · C" | Sí | "Disponible · Reynosa, México" |
| 13 | Palabra resaltada en el H1 | Sí | "no más caos." en verde |
| 14 | Borde de color lateral | No | |
| 15 | Glassmorphism | Sí | Nav con `backdrop-filter: blur` sobre negro translúcido |
| 16 | Glow de color | (contado en 3) | El mismo `.hero-glow`; también la barra de progreso con `box-shadow` verde |
| 17 | Emojis como iconos | No en el hero | "💬" en el menú móvil |
| 18 | Fade-in en todas las secciones | Fuera del hero | `.fade-up` en 8 secciones |
| 19 | Sombra gris idéntica en todo | No | |
| 20 | Frase prohibida | No exacta | "Quiero hacer crecer mi negocio" y "resultados reales" rozan "impulsa tu negocio" |

Otros problemas (no están en la lista, pero rompen la regla cero):
- Mockup de dashboard inventado: URL `als-dress.ramosmkt.lat/admin` y cifras 68 / 2x / 99% que no existen.
- Insignias flotantes "Sitio en vivo" y "✓ Entregado a tiempo" animadas.
- A 375px el mockup se oculta: en móvil no se ve ningún trabajo real.
- Prueba de 5 segundos (375): se entiende "más clientes", pero no que vende páginas web ni cuánto
  cuesta; el H1 ocupa 6 líneas y empuja el CTA hasta y≈680.

## Iteraciones (3 de 3)

| Iteración | Capturas | Qué se vio | Qué se cambió |
| --- | --- | --- | --- |
| 1 | `despues/it1-375x812.png`, `despues/it1-1440x900.png` | A 375 el texto se salía de la pantalla: la tira horizontal del pliego ensanchaba la columna del grid (botón verde sin texto visible). El icono de WhatsApp salía como un teléfono incompleto (dos `d=` en un solo `<path>`). A 1440, "linajeescogidoreynosa.org" se partía a media palabra. | Columnas `minmax(0, …)`, icono con sus dos `<path>`, sin `overflow-wrap: anywhere`. |
| 2 | `despues/it2-375x812.png`, `despues/it2-1440x900.png` | Móvil correcto. A 1440, Linaje más ancha empujó Integral FR fuera de la pantalla. "19:00" quedaba sola en su línea a 375. | Vuelta a la retícula de la iteración 1, dominio con `nowrap`, `9:00&nbsp;a&nbsp;19:00`. |
| 3 | `despues/it3-*.png` (incluye 768×1024) | Las cuatro pruebas caben en 900px. A 768 el botón medía 718px de ancho. Deriva: `column-gap: 28px` fuera de la escala. | Botón con `max-width: 420px` en tableta; separación con `--e-6`. Capturas finales: `despues/hero-375x812.png`, `despues/hero-1440x900.png`. |

Accesorio quitado antes de entregar: el botón a todo lo ancho en tableta (y antes, en la implementación,
el badge, los stats, el mockup, las insignias flotantes, la rejilla, el glow y el parallax).

## Después (2026-10-08)
Capturas: `despues/hero-375x812.png`, `despues/hero-1440x900.png` (más `despues/it3-768x1024.png`)

### Conteo de señales genéricas: 1 de 20 (antes: 9)

| Señal | Antes | Después |
| --- | --- | --- |
| Syne / Space Grotesk | Sí | **Sí (marca existente, decisión de David)** |
| Degradado decorativo / glow | Sí | No (`.hero-glow` y el glow de la barra de progreso eliminados) |
| Casi negro + acento ácido | Sí | Mitigado: el papel #E7E2E3 ocupa el 58% del hero a 1440, el verde va en un solo elemento del hero y el color lo ponen las capturas de los clientes. No lo cuento. |
| Hero con badge y dos botones | Sí | No (un CTA; el secundario es un enlace de texto) |
| Banda de stats | Sí | No |
| "→" en botones | Sí | No |
| "A · B · C" | Sí | No (los pies van en dos líneas) |
| Palabra resaltada en el H1 | Sí | No |
| Glassmorphism | Sí | No (nav carbón sólido) |
| Frase prohibida | No exacta | 0 coincidencias (grep sobre el HTML del hero) |

### Pruebas
- **5 segundos (375):** el H1 dice qué (páginas web), dónde (Reynosa) y cuánto (desde $1,500 MXN). El
  botón de WhatsApp termina en y=529 (sin scroll) y las primeras dos capturas asoman en y≈690.
- **Prompt gemelo:** sin los cuatro dominios reales el hero no se sostiene; no es intercambiable con otra agencia.
- **Prueba inversa (sesión sin contexto):** PENDIENTE. Hay que hacerla en una sesión nueva con
  `despues/hero-375x812.png` y la pregunta de la skill.
- **Piso técnico:** sin scroll horizontal a 375, 768 ni 1440; 0 errores ni advertencias en consola; botón de
  56px y enlaces de 44px; foco visible con anillo verde; `prefers-reduced-motion` desactiva el único
  movimiento; contraste AA en todo el texto del hero (mínimo 5.5:1).

### Residuos fuera del alcance del hero (para otra pasada)
- El botón "Cotiza gratis" del nav sigue siendo una píldora verde: a 1440 hay dos elementos verdes en la
  primera pantalla. Sugerencia: pasarlo a contorno.
- El botón flotante de WhatsApp (#25d366) tiene un glow pulsante (`wa-pulse`).
- El resto de la página conserva eyebrows en mayúsculas ("// SERVICIOS · SERVICES"), H2 en Syne 800 con
  tracking muy cerrado, `.fade-up` en todas las secciones, "💬" en el menú móvil y `motion@latest`
  sin versión fija.
- Las demás páginas (contacto, industrias) siguen pidiendo Google Fonts además de las fuentes locales.
