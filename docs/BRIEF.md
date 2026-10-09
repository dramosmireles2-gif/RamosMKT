# BRIEF · ramosmkt.lat (sitio completo)

Alcance: todo el sitio de RMKT. Se trabaja **una sección a la vez**, empezando por `index.html`.
El hero de `index.html` ya está terminado y aprobado (2026-10-08). El sitio queda en tres páginas
(decisión de David, 2026-10-09): `index.html`, `aviso-privacidad.html` y `gracias/`. Las páginas de
industria, `ads.html`, `meta-ads.html`, `contacto.html`, `tarjeta.html` y `flyer-ig.html` se
eliminaron; los giros se cotizan por WhatsApp desde Servicios.

Datos: `experimentos/hero/CONTENIDO.md` (datos verificados con su fuente) y la tabla oficial de
precios en `PLAN-rediseno-rmkt.md`. Lo que no está confirmado dice SUPUESTO o PENDIENTE.

## Negocio
- **Nombre como lo dicen sus clientes:** RamosMKT, "RMKT".
- **Giro:** agencia que hace páginas web, tiendas en línea, sistemas administrativos, chatbots, apps
  y anuncios en Meta y Google para pymes.
- **Ciudad:** Reynosa, Tamaulipas. Colonia: PENDIENTE. Operando desde 2024.
- **Contacto:** WhatsApp y teléfono 814 807 8309 (`https://wa.me/528148078309`). Horario: lunes a
  sábado de 9:00 a 19:00. Correo visible: `dramosmireles2@gmail.com` (decisión de David, 2026-10-09,
  "por el momento"; sustituye a `dramosmirele2@ramosmkt.lat`, que tenía un error).
- **Fundador:** sin foto ni nombre publicado (PENDIENTE). No se inventa ni se usa foto de stock.

## Cómo vende RMKT (clave para precios)
Los clientes **no eligen un paquete**: RMKT les arma la cotización según lo que ocupen (David,
2026-10-09). Los paquetes con "Desde $X MXN" son **puntos de partida** para dar una idea del costo,
no un menú cerrado. Por eso:
- No hay paquete "más elegido", "popular" ni "recomendado".
- Los CTA de precios dicen "Cotizar" y llevan el punto de partida en el mensaje prellenado.

## Diferenciador verificable
Sus sitios están en vivo y se pueden abrir ahora mismo: aiserseguros.com, alsdress.com.mx,
linajeescogidoreynosa.org (Reynosa) e integralfr.com.mx (Escobedo, N.L.). Los precios de entrada
son públicos (siempre "Desde $X MXN") y la entrega más rápida está escrita (Landing Express, 5 días).

## Cliente ideal
Dueño o dueña de una pyme en Reynosa (aseguradora, boutique, iglesia, restaurante, clínica,
gimnasio, taller) que hoy vende por WhatsApp y Facebook y no tiene página, o tiene una que le da
pena. Llega desde Meta Ads, Google Ads (hay conversión AW configurada) o por recomendación. Lo ve en
el celular.

## Tarea #1 del sitio
Escribir por WhatsApp para cotizar. Cada CTA lleva su propio mensaje prellenado y su evento
`gtag('event','whatsapp_click',{ubicacion:'<sección>'})`.

## Acción secundaria
Ver los sitios entregados (`#proyectos`) y, para quien viene de un giro concreto, entrar a su página
de industria.

## Oferta y precios
Fuente única: tabla oficial de `PLAN-rediseno-rmkt.md`. Todo precio visible lleva "Desde". Pago:
50% al iniciar y 50% al entregar, o 3 pagos en proyectos grandes. 2 rondas de cambios incluidas.
Cotización en menos de 24 horas (compromiso escrito en el paso "Propuesta", no estadística).

## Prueba social real disponible
- Cuatro sitios en vivo con dominio propio (capturas reales en el repo).
- El footer de Aiser dice "Sitio realizado por RMKT web & apps".
- Las demos (MARÉ, El Divino Bocado) **no van en el home** (decisión de David, 2026-10-09). Se guardan
  para una futura `proyectos.html`, siempre etiquetadas como sitio de muestra.
- Testimonios y reseñas de Google: PENDIENTE.
- Permiso explícito de cada cliente para salir en el sitio: SUPUESTO (ya salían en Proyectos).

## Vocabulario del oficio (tal como aparece en el sitio)
"cotiza gratis", "página web", "tu negocio", "Desde $X MXN", "botón de WhatsApp directo",
"entrega en 5 días", "50% al iniciar, 50% al entregar", "código real, sin plantillas",
"no desaparecemos al entregar", "tienda en línea", "el panel que reemplaza tu Excel",
"platicamos tu idea sin costo".

## Materiales y objetos del giro
La captura del sitio terminado, el dominio escrito, el celular del cliente con su página abierta,
la conversación de WhatsApp, la cotización. Para una agencia, el "anaquel" son los sitios entregados
y la hoja de cotización.

## Activos reales
- Logo: `Logo RMKT transparente reducido.png` ("R" blanca + "MKT" verde + subrayado verde). Necesita
  fondo oscuro. Se queda en el nav y el footer tal cual.
- Capturas de clientes: `aiser.webp`, `p-alsdress.webp`, `p-linaje.webp`, `p-integralfr.webp` y los
  recortes del hero en `img/hero/`.
- Colores de marca: carbón #191C1D, verde #00FF98, gris claro #E7E2E3, blanco.
- Fuentes de marca: Syne (títulos) + Space Grotesk (texto), autoalojadas en `fonts/`.
- Falta: foto del equipo, testimonios, dirección, perfil de Google.

## Tono
Tú (así está escrito todo el sitio).

## Restricciones
- Marca existente que no se toca: logo, carbón #191C1D, verde #00FF98, Syne + Space Grotesk.
- Verde solo como señal (CTA de WhatsApp, foco y subrayado del logo), sin glows ni rejillas de
  tarjetas; el trabajo real de clientes es el protagonista.
- Técnica: HTML/CSS/JS sin frameworks, GitHub Pages, un archivo por página. 375, 768 y 1440px.
- No parecerse a: la típica landing de agencia o SaaS oscura con rejilla, glow, dashboard falso,
  banda de estadísticas y tarjetas con icono arriba.

## Orden aprobado de `index.html` (David, 2026-10-09)
1. Hero (aprobado) · 2. Sitios entregados `#proyectos` (solo los 4 reales) · 3. Paquetes `#paquetes`
(puntos de partida) · 4. Otros servicios y giros (fusión de Servicios + Industrias) · 5. Cómo
trabajamos (fusión de Proceso + Nosotros) · 6. Preguntas frecuentes · 7. Cierre `#contacto` · Footer.

## Inconsistencias conocidas en `index.html` (se corrigen al trabajar cada sección)
- Servicios: Tienda en línea y Sistemas dicen "Desde $8,000"; la tabla oficial dice Desde $4,500
  (tienda básica) y Desde $5,000 (sistema de un módulo).
- Paquetes: cifras sin "Desde" e insignia "POPULAR" sin respaldo.
- FAQ: menciona paquetes que no existen ("Web Básico", "Pro Digital", "Full Stack") y dice 5 a 7 días
  donde la tabla dice 5. El FAQ del JSON-LD también hay que alinearlo.
- Footer: enlaza a `#contacto`, que no existe; correo con error.
- "Fechas cumplidas, siempre" y "Solo pagas por resultados medibles": promesas sin registro.
- Etiquetas en inglés ("WEB DEVELOPMENT", "// Servicios · Services") y "→" en los botones.
