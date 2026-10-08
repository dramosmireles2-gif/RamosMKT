# Plan de trabajo · Rediseño RamosMKT (ramosmkt.lat)

Ir en orden. Al terminar cada paso: revisar en móvil (375px) y confirmar que WhatsApp, formulario de contacto y navegación siguen funcionando antes de seguir.

Contexto para quien ejecute este plan: el sitio es HTML/CSS/JS estático (sin framework), hosteado en GitHub Pages, un archivo por página. No hay necesidad de migrar a Vite/React — el problema no es la tecnología, es contenido, consistencia y jerarquía visual. No inventar precios, testimonios ni casos de clientes que no existan (ver `notas-contenido.md` en la raíz del repo para las reglas de honestidad ya establecidas). Antes de diseñar, leer el documento "Rediseño RamosMKT — Plan Estratégico" para el diagnóstico y las decisiones de fondo detrás de cada paso de aquí abajo.

**Precios y contrato ya cerrados** (esto ya no está en discusión, es la fuente única de verdad — documentos "Lista de Precios — RamosMKT" y "Términos de Trabajo — RamosMKT"): este plan ya no incluye confirmar cifras con David, solo aplicarlas. Este rediseño es, en buena parte, un rediseño de cómo se presentan los precios: hoy generan desconfianza (cifras distintas para lo mismo, "desde" sin explicar desde qué, sin niveles claros); el objetivo es que la sección de precios se vea tan cuidada y profesional como el resto de la nueva dirección visual.

**Decisión de formato: todo precio visible en el sitio se muestra como "Desde $X MXN"**, sin excepción — incluso los paquetes de alcance ya fijo (Landing Express, Restaurantes, Boutiques, etc.). Esto le da a David margen para ajustar según cada cliente y evita que alguien compare la cifra publicada contra la competencia sin contexto. Como esto reintroduce parte de la ambigüedad que la auditoría original señaló, se compensa con la línea de confianza junto a cada precio (punto 3 más abajo) — el "desde" no debe sentirse como letra chiquita, sino como "esto es lo que cuesta empezar, hablamos si tu caso es distinto".

## 0. Antes de tocar código

- [ ] Confirmar si hay 3–4 testimonios reales disponibles (ej. capturas de WhatsApp de clientes, con permiso) para la nueva sección de prueba social
- [ ] Confirmar si hay una foto real (David o equipo) disponible para la sección Nosotros

## 1. Corrección de inconsistencias (son bugs, no diseño — van primero)

- [ ] Reemplazar TODAS las cifras de precios del sitio (`index.html`, `ads.html`, `meta-ads.html`, páginas de industria) por las de la tabla de abajo, con el prefijo "Desde" en cada una — es la lista oficial, cierra toda ambigüedad anterior
- [ ] Unificar el FAQ visible de `index.html` con el FAQ del Schema.org JSON-LD del mismo archivo, usando estas mismas cifras (hoy dicen cosas distintas: paquetes que no existen como "Web Básico" o "Pro Digital")
- [ ] Revisar si `dramosmirele2@ramosmkt.lat` es un error tipográfico (falta la "s" de "mireles") y corregir en todo el sitio si aplica
- [ ] Confirmar el nombre/URL real de la página de Facebook y usarlo consistente en tarjeta de presentación y carruseles
- [ ] Quitar cualquier mención de "Invitaciones Digitales" que siga apareciendo suelta (RamoStudio es marca aparte y ya no vive en el sitio de RMKT)

### Tabla oficial de precios a usar en el sitio (fuente: "Lista de Precios — RamosMKT")

**Paquetes de sitios web**

| Paquete | Precio | Entrega | Incluye |
| --- | --- | --- | --- |
| Landing Express | Desde $1,500 MXN | 5 días | Página de una sección, WhatsApp directo, formulario + Maps, optimizado a móvil |
| Web Profesional | Desde $3,500 MXN | 10 días | Multipágina, catálogo, galería + Nosotros + testimonios, dominio y hosting 1 año incluido |
| Web Empresarial | Desde $7,500 MXN | 15–20 días | Todo lo anterior + CMS, blog, analytics/SEO técnico, soporte 2 meses |
| Solución a la Medida | Desde $8,000 MXN | Cotización | Ecommerce completo, sistema a medida, app móvil, CRM, integraciones, soporte prioritario |

**Precios por industria**

| Industria | Precio | Dominio | Entrega |
| --- | --- | --- | --- |
| Restaurantes | Desde $2,500 MXN | RMKT (incluido) | 2–3 semanas |
| Boutiques | Desde $2,500 MXN | RMKT (incluido) | 3–4 semanas |
| Clínicas | Desde $2,500 MXN | RMKT (incluido) | 3–4 semanas |
| Gimnasios | Desde $2,500 MXN | RMKT (incluido) | 3–4 semanas |
| Iglesias | Por ofrenda (monto variable) | La iglesia | 3–4 semanas |

**Ecommerce y Sistemas Administrativos** (antes tenían dos precios distintos para lo mismo — ahora son dos niveles reales):

| Servicio | Nivel Básico | Nivel Completo |
| --- | --- | --- |
| Ecommerce | Desde $4,500 MXN — catálogo, carrito, pagos por transferencia/WhatsApp, sin panel de inventario avanzado | Desde $8,000 MXN — pasarela de pago integrada, panel de pedidos e inventario, cuentas de cliente |
| Sistemas Administrativos | Desde $5,000 MXN — un módulo (ej. solo inventario, o solo clientes) | Desde $8,000 MXN — sistema completo (inventario + proveedores + órdenes + clientes) desde un panel |

**Publicidad digital** (setup inicial separado de la gestión mensual):

| Concepto | Precio |
| --- | --- |
| Configuración inicial Meta Ads | Desde $1,500 MXN (único pago) |
| Configuración inicial Google Ads | Desde $1,500 MXN (único pago) |
| Gestión mensual (una plataforma) | Desde $2,000 MXN/mes |
| Gestión mensual (Meta + Google) | Desde $3,200 MXN/mes |

**Mantenimiento** (nuevo — hoy el sitio no explica esto, es uno de los huecos más grandes):

| Plan | Precio mensual | Incluye |
| --- | --- | --- |
| Básico | Desde $500 MXN/mes | Cambios de texto/precios/imágenes (hasta 2 al mes), respaldo mensual, soporte por WhatsApp |
| Intermedio | Desde $900 MXN/mes | Todo lo del Básico + hasta 2h de desarrollo/mes, monitoreo de actividad |
| Completo | Desde $1,500 MXN/mes | Todo lo del Intermedio + hasta 5h de desarrollo/mes, respuesta priorizada, reporte mensual |

Pago anual: 10 meses, 2 gratis. Renovación de dominio (a partir del 2do año, donde no viene incluido de por vida): $350 MXN/año.

**Chatbots, automatizaciones y apps móviles**

| Servicio | Precio |
| --- | --- |
| Chatbots + Automatizaciones | Desde $500 MXN/mes |
| Apps Móviles (iOS/Android) | Desde $20,000 MXN |

**Política de pago** (igual para todo lo anterior): 50% al iniciar / 50% contra entrega, o 3 pagos en proyectos grandes (Web Empresarial, Ecommerce Completo, Sistemas, Apps Móviles, a la medida).

## 2. Sistema de diseño (base para todo lo demás)

- [ ] Partir de los tokens ya en uso y ya corregidos: `--green:#00FF98`, `--green-dim:#00CC7A`, `--black:#0a0a0a`, tipografías Syne (headlines) / Space Grotesk (cuerpo) — no crear un sistema nuevo desde cero
- [ ] Revisar contraste del texto gris secundario (`--gray:#888888`) sobre fondo negro contra WCAG AA; ajustar si no pasa — accesibilidad ya no es opcional en 2026, y ayuda directo al SEO
- [ ] Definir 1–2 variantes de layout asimétrico para el hero y la sección Nosotros — la tendencia 2026 es romper la grilla simétrica repetitiva (ver fuentes abajo); **no aplicar esto a las tarjetas de precio o comparativas, donde la simetría sí ayuda a comparar**
- [ ] Mantener intactas las microinteracciones que ya existen (scroll animations, contadores animados del hero) — ya están alineadas con la tendencia 2026; el trabajo aquí es extender ese mismo nivel de pulido a las páginas de industria y a la sección de precios, que hoy se sienten más planas que el home
- [ ] Diseñar un componente de "tarjeta de precio" reutilizable (nombre del paquete, "Desde $X MXN" en grande, entrega, lista de lo que incluye, botón de WhatsApp con mensaje precargado) — se usa en Paquetes, en cada página de industria y en Ecommerce/Sistemas — hoy cada sección de precios tiene su propio layout improvisado. El "Desde" va en tipografía más chica que la cifra, nunca escondido ni en letra diminuta — es parte del precio, no un asterisco

## 3. Nueva arquitectura de páginas

- [ ] Reducir `index.html`: dejar solo hero, franja de resultados, resumen visual de las 4 líneas de negocio principales (cada una con botón a su propia página), **una sección de precios clara con las tarjetas del punto 2** (Landing Express / Web Profesional / Web Empresarial / Solución a la Medida — sin mezclar industrias aquí, solo un link a "ver precios por industria"), prueba social, CTA final
- [ ] Crear `precios.html` como página única de precios: agrupa TODAS las tablas de la sección 1 (paquetes, industrias, ecommerce/sistemas, ads, mantenimiento) usando el componente de tarjeta — hoy los precios están dispersos entre el home, `ads.html` y `meta-ads.html`, lo cual es la causa raíz de las cifras contradictorias
- [ ] Marcar visualmente el paquete "más elegido" (ej. Web Profesional) igual que ya se hace en las tarjetas de industria, para guiar la decisión sin presionar
- [ ] Junto a cada precio, una línea corta de confianza tomada de "Términos de Trabajo" (ej. "50% al iniciar, 50% al entregar" y "2 rondas de cambios incluidas") — construye confianza en el momento exacto en que el cliente está decidiendo, sin necesitar leer el contrato completo. Esta línea importa más ahora que todo precio dice "Desde": es lo que evita que el "desde" se sienta como gancho publicitario
- [ ] Crear `chatbots.html` con el mismo nivel de detalle que `iglesias.html`/`restaurantes.html` (features, precio, ejemplo de conversación tipo)
- [ ] Crear `apps-moviles.html` con el mismo criterio, mostrando para qué tipo de negocio sí conviene una app (ej. gimnasios con membresías) en vez de venderla como genérica
- [ ] Crear `proyectos.html`: el portafolio pasa de ser una sección del home a su propia página, con espacio dedicado a testimonios
- [ ] Actualizar nav y footer de TODAS las páginas del sitio para reflejar la nueva estructura, incluyendo el link a `precios.html` (hoy todas comparten el mismo nav/footer copiado)

## 4. Prueba social (el hueco más grande detectado)

- [ ] Sección de testimonios en `proyectos.html` con 3–4 testimonios reales (capturas de WhatsApp reales funcionan mejor que texto formal para este tipo de cliente)
- [ ] Si no hay testimonios listos todavía: dejar el espacio ya diseñado con un estado honesto ("Casos en camino" o similar) — nunca un testimonio inventado, ni siquiera de relleno temporal

## 5. Contenido y copy

- [ ] Escribir el copy de Chatbots y Apps Móviles (hoy solo tienen una línea de precio, sin desarrollo)
- [ ] Ajustar el mensaje de Clínicas/Gimnasios para apoyarse en los casos reales de otras industrias como prueba de capacidad, sin fingir experiencia específica en salud o fitness que aún no existe
- [ ] Insertar la foto real en la sección Nosotros cuando esté disponible
- [ ] En Iglesias, dejar explícito en la página (no solo en el trato verbal) que el precio es "por ofrenda" y que el dominio corre por cuenta de la iglesia — hoy esto solo vive en la cabeza de David

## 6. QA y consistencia entre piezas

- [ ] Alinear `ads.html`, `meta-ads.html`, `flyer-ig.html` y `tarjeta.html` al mismo sistema de color/tipografía del sitio (hoy usan la fuente Jost en vez de Syne/Space Grotesk — dos marcas visuales distintas conviviendo)
- [ ] Verificar que NINGUNA página fuera de `precios.html` muestre una cifra de precio distinta a la tabla oficial, y que TODAS lleven el prefijo "Desde" — un grep rápido de "$" en el repo antes de dar por terminado, buscando específicamente cifras sin "Desde" delante
- [ ] Revisar las páginas del sitio principal en móvil real a 375px de ancho, con atención especial a que las tarjetas de precio no se corten ni se aplasten
- [ ] Lighthouse en `index.html` y en `precios.html`: Performance y Accesibilidad > 90
- [ ] Confirmar que WhatsApp, formulario de contacto y todos los enlaces del nav siguen funcionando después de todos los cambios

## 7. Entrega

- [ ] Captura antes/después del home, de una página de industria y de `precios.html`, para que David vea el contraste
- [ ] Confirmar con David antes de hacer commit/push a producción (GitHub Pages)

---

## Fuentes usadas para las decisiones de tendencia de este plan

- [Tendencias de diseño web en México para 2026 — NewEmage](https://newemage.com.mx/tendencias-de-diseno-web-en-mexico-para-2026/)
- [Principales tendencias en diseño web para 2026 — Figma](https://www.figma.com/resource-library/web-design-trends/)
