# Perfil de Negocio — RamosMKT
> Extracción literal de información de negocio del repositorio del sitio web, para alimentar un Google Business Profile.
> Metodología: se leyeron todos los archivos HTML, CSS, JS y de configuración del repositorio (`index.html`, `contacto.html`, `iglesias.html`, `restaurantes.html`, `boutiques.html`, `clinicas.html`, `gimnasios.html`, `aviso-privacidad.html`, `gracias/index.html`, `tarjeta.html`, `ads.html`, `meta-ads.html`, `flyer-ig.html`, `main.js`, `Style.css`, `README.md`). No se modificó ningún archivo del sitio.

---

## 1. Identidad y contacto

**Nombre comercial exacto tal como aparece en el sitio:**
- `RamosMKT` (uso principal, logo, nav, footer, título de página)
- `RMKT` (uso abreviado frecuente: tarjeta de presentación, ads, botones "Cotiza tu proyecto RMKT")
- `Ramos Digital` — usado como **alternateName** en el Schema.org LocalBusiness (`"alternateName": "Ramos Digital"`) y como tagline en la tarjeta de presentación ("Ramos · Digital") y en el `<title>` de `meta-ads.html` ("Meta Ads — RMKT / Ramos Digital")

**Tagline / slogan:**
- Principal (title tag de `index.html`): **"Tecnología que crece negocios"**
- Footer (todas las páginas): "Tecnología que crece negocios. Diseño web, sistemas y marketing digital desde Reynosa, México."
- Tarjeta de presentación: rol declarado = "Agencia Digital" / "Webs · Sistemas · Apps · Publicidad"
- Meta Ads (`meta-ads.html`): "Tu marca, vista como profesional." / "Haz que tu marca se vea profesional." / "Una web que trabaja por tu negocio."

**Teléfono / WhatsApp:**
- `+52 814 807 8309` (mismo número usado como teléfono y WhatsApp en todo el sitio)
- Enlace WhatsApp base: `https://wa.me/528148078309`
- Aparece en: schema `"telephone": "+528148078309"`, footer de todas las páginas, página de contacto, tarjeta de presentación, botón flotante de WhatsApp

**Correo electrónico:**
- `dramosmirele2@ramosmkt.lat` (tal como aparece literalmente en el sitio — footer, página de contacto, aviso de privacidad, fallback de error del formulario)
- ⚠️ Ver nota en "Inconsistencias y huecos": este correo no coincide con el email de la cuenta de usuario asociada al repositorio (`dramosmireles2@gmail.com`), que sí lleva la "s" en "mireles".

**Dirección / zona de servicio:**
- "Reynosa, Tamaulipas, México" (footer, página de contacto — repetido en todas las páginas)
- Schema.org: `addressLocality: "Reynosa"`, `addressRegion: "Tamaulipas"`, `addressCountry: "MX"` (sin calle ni número)
- Aviso de Privacidad (única fuente con código postal): **"Reynosa, Tamaulipas, C.P. 88000, México"**
- No hay calle, número ni colonia en ningún archivo — es una dirección de zona de servicio, no una dirección exacta de local.
- FAQ confirma explícitamente zona de servicio ampliada: "Trabajamos con clientes de toda la república y el extranjero. Todo el proceso es 100% remoto vía WhatsApp, videollamadas y avances en línea."

**Sitio web:** `https://ramosmkt.lat`

**Enlaces a redes sociales:**
| Red | URL/handle tal como aparece |
|---|---|
| WhatsApp | `https://wa.me/528148078309` |
| Instagram | `https://instagram.com/ramos_mkt.rex` (handle: `@ramos_mkt.rex`) |
| Facebook | `https://www.facebook.com/share/1BCvKbkZUP/` (nombre de página mostrado en tarjeta: "RMKT Web & Apps"; en carrusel de flyers aparece también `/ramosmkt`) |
| TikTok | `https://www.tiktok.com/@ramos.mkt21` (handle: `@ramos.mkt21`) — **presente en footer de todas las páginas y en contacto.html, pero AUSENTE del Schema.org `sameAs` y de la tarjeta de presentación** |

**Horarios de atención publicados:**
- Solo existen en el **Schema.org JSON-LD** de `index.html` (no se muestran visualmente en ninguna página al usuario):
  ```
  dayOfWeek: Monday–Saturday
  opens: 09:00
  closes: 19:00
  ```
  → Domingo cerrado (implícito, no está en la lista). No hay horario visible en el footer, contacto ni ninguna otra página.

---

## 2. Servicios

### Servicios principales (sección `#servicios` de `index.html`, copiados literalmente)

| Servicio (nombre EN / ES) | Descripción exacta del sitio | Precio |
|---|---|---|
| WEB DEVELOPMENT / **Sitios Web que Venden** | "Una landing page o un sitio completo — diseñado para que cada visita se convierta en un mensaje, una llamada o una venta." | Desde $1,500 MXN |
| META & GOOGLE ADS / **Publicidad Digital** | "Campañas en Facebook, Instagram y Google que llevan clientes reales a tu negocio. Solo pagas por resultados medibles." | Desde $2,000 MXN/mes |
| ECOMMERCE / **Tiendas en Línea** | "Tu tienda online con catálogo, carrito, pagos integrados y panel de pedidos. Vende las 24 horas sin depender de nadie." | Desde $8,000 MXN |
| ADMIN SYSTEMS / **Sistemas Administrativos** | "El panel que reemplaza tu Excel. Inventario, proveedores, órdenes y clientes controlados desde cualquier dispositivo." | Desde $8,000 MXN |
| CHATBOTS & AUTOMATION / **Chatbots + Automatizaciones** | "Responde y vende 24/7 sin contratar a nadie. Califica prospectos, agenda citas y automatiza los procesos que más tiempo te quitan." | Desde $500 MXN/mes |
| DIGITAL INVITATIONS / **Invitaciones Digitales** | "Bodas, XV años y eventos con invitación interactiva. Cuenta regresiva, RSVP, QR por invitado y panel de gestión de acceso." | Desde $799 MXN |
| MOBILE APPS / **Apps Móviles** | "Tu negocio en el bolsillo de tus clientes. Aplicaciones nativas para iOS y Android con notificaciones push, pagos, login y todo lo que tu operación necesita para escalar." | Desde $20,000 MXN |

### Paquetes de sitios web (sección `#paquetes`)

**Landing Express (STARTER)** — $1,500 MXN · Pago único · Entrega en 5 días
- Página diseñada para convertir visitas en clientes
- Sección de servicios o productos
- Galería de fotos
- Botón de WhatsApp directo
- Formulario de contacto + Google Maps
- Optimizado para móvil

**Web Profesional (PROFESSIONAL WEB)** — $3,500 MXN · Pago único · Entrega en 10 días
- Diseño multipágina profesional
- Catálogo de servicios o productos
- Galería + sección Nosotros + testimonios
- WhatsApp + formulario de contacto
- Dominio y hosting 1 año incluido
- Optimizado para móvil

**Web Empresarial (BUSINESS WEB)** — POPULAR — $7,500 MXN · Pago único · Entrega en 15–20 días
- Todo lo del Web Profesional
- CMS: actualiza contenido sin programar
- Blog o sección de noticias
- Analytics + SEO técnico configurado
- Integraciones y formularios avanzados
- Soporte técnico 2 meses incluido

**Solución a la Medida (CUSTOM SOLUTION)** — Desde $8,000 MXN · Cotización personalizada
- Ecommerce completo con pagos en línea
- Sistema administrativo a la medida
- App móvil para iOS y Android
- CRM y dashboards de negocio
- Integraciones con sistemas existentes
- Soporte prioritario incluido

### Paquetes de Invitaciones Digitales (sección `#invitaciones`)

**Estándar (STANDARD)** — $799 MXN · Pago único · Entrega en 2 días
- Diseño personalizado, información del evento, cuenta regresiva, link compartible por WhatsApp, adaptado a móvil

**Premium** — POPULAR — $1,499 MXN · Pago único
- Todo lo del Estándar + pase personalizado por invitado, RSVP, lista de invitados con control, galería de fotos del evento, música de fondo

**Platinum QR** — $2,999 MXN · Pago único
- Todo lo del Premium + códigos QR por invitado, panel de gestión de mesas, control de acceso en puerta, asignación de mesas digital, soporte el día del evento

### Paquetes por industria (páginas dedicadas — todos "Pago único · Entrega en 2–4 semanas", 3 meses de soporte incluido salvo donde se indica)

| Industria | Precio | Entrega | Incluye |
|---|---|---|---|
| **Iglesias** (`iglesias.html`) | $2,500 MXN | 3–4 semanas | Sitio responsivo, CMS de sermones (video/audio/texto), calendario de eventos y horarios, formulario de oración con notificaciones, galería, donaciones online integradas, panel de administración completo, 3 meses de soporte |
| **Restaurantes** (`restaurantes.html`) | $2,500 MXN | 2–3 semanas | Sitio responsivo con menú, menú digital QR actualizable, reservaciones online, pedidos a domicilio vía WhatsApp, galería de platillos, integración Google Maps, panel de administración, 3 meses de soporte |
| **Boutiques** (`boutiques.html`) | $2,500 MXN | 3–4 semanas | Sitio con marca, tienda online con carrito, pagos integrados (tarjeta/transferencia), control de inventario automatizado, catálogo compartible por WhatsApp, galería de productos, panel de administración, 3 meses de soporte |
| **Clínicas** (`clinicas.html`) | $2,500 MXN | 3–4 semanas | Sitio profesional, citas online 24/7, recordatorios automáticos por WhatsApp, expediente básico de pacientes, pagos en línea al agendar, panel del médico/administrador, integración Google Maps, 3 meses de soporte |
| **Gimnasios** (`gimnasios.html`) | $2,500 MXN | 3–4 semanas | Sitio profesional, control de membresías completo, cobros automáticos con recordatorios, reserva de clases grupales, acceso por QR personalizado, app para miembros (PWA), dashboard de ingresos/estadísticas, 3 meses de soporte |

### Servicios mencionados en secciones secundarias / footer / FAQ que **no aparecen desarrollados como sección propia** en el sitio principal

- **Meta Ads y Google Ads como líneas de precio independientes**: en el formulario de contacto (`contacto.html`) aparecen como opciones separadas: "Publicidad en Meta Ads" y "Publicidad en Google Ads", pero en la sección de Servicios del home solo existe una categoría combinada "Publicidad Digital" (Desde $2,000 MXN/mes).
- **Planes de mantenimiento mensual**: mencionados solo en el Schema.org FAQ ("Ofrecemos planes de mantenimiento mensual desde $500 MXN/mes que incluyen actualizaciones de contenido, soporte técnico y horas de desarrollo") y en la FAQ visible ("planes de mantenimiento mensual por separado"). No tienen sección, tarjeta de precio ni página propia.
- **Google Ads / Meta Ads como líneas de "Lista de Precios"** (`ads.html`, sección final "Lista de Precios · Google Business Profile" — evidencia de que el sitio ya se preparaba para esto): "Meta Ads — Desde $1,500 MXN" y "Google Ads — Desde $1,500 MXN" — cifras distintas a las del home ($2,000 MXN/mes). Ver inconsistencias.
- **Diseño y Desarrollo Web / Landing Page Profesional / Sitio Web Empresarial** aparecen como líneas sueltas de precio en `ads.html` con montos que no coinciden con los paquetes reales del home (ver inconsistencias).

---

## 3. Propuesta de valor y copy

**Headline principal del hero (`index.html`):**
> "Tu negocio merece más clientes, no más caos."

**Subheadline del hero:**
> "Construimos la tecnología que hace crecer negocios en México — sitios web, sistemas, apps y publicidad que generan resultados reales."

**Badge del hero:** "Disponible · Reynosa, México"

**Botones del hero:**
- "Quiero hacer crecer mi negocio →" (WhatsApp)
- "Ver proyectos" (ancla a #proyectos)

**Trust bar del hero:** "Sin compromiso" · "Cotización en 24h" · "Código real, sin plantillas" · "Fechas cumplidas"

**Estadísticas del hero (contadores animados):**
- "10+ Negocios digitales activos"
- "100% Fechas cumplidas"
- "<1h Tiempo de respuesta"
- (Adicional, solo en `flyer-ig.html`, story de Instagram: "Más de 10 proyectos entregados")

### Sección "Nosotros" (texto literal, `id="nosotros"`)

**Título:** "Empezó construyendo para sus padres."

**Texto principal (about-lead):**
> "Los fundadores de RMKT no empezaron en una agencia — empezaron construyendo el sitio web para el negocio de sus padres. Lo hicieron ellos mismos, de cero, y ahí vieron la oportunidad."

**Texto secundario (about-body):**
> "Hoy ayudamos a negocios, iglesias y emprendedores a tener presencia digital real — con la misma tecnología que usan las empresas grandes, a precios que tienen sentido. Sin plantillas genéricas, sin promesas infladas, sin desaparecer al entregar."

**Origen:** "2024 · Reynosa, Tamaulipas · México"

### Diferenciadores / valores (4 tarjetas de la sección Nosotros)

1. **Código real** — "Sin plantillas de $10. Todo construido a medida para tu negocio y tus procesos."
2. **Fechas cumplidas** — "Te damos una fecha comprometida antes de arrancar — y la respetamos, siempre."
3. **Precio claro** — "Sin sorpresas ni letras chicas. Sabes exactamente cuánto pagas y qué recibes."
4. **Soporte real** — "No desaparecemos al entregar. Estamos disponibles cuando nos necesitas."

### Proceso de trabajo (sección `#proceso`, "Así trabajamos contigo")

1. **Consulta** — "Platicamos tu idea sin costo. Entendemos tu negocio, tu presupuesto y qué necesitas lograr."
2. **Propuesta** — "En menos de 24 horas te enviamos una cotización detallada con tiempos y costos claros."
3. **Desarrollo** — "Construimos tu proyecto con avances semanales. Tú apruebas cada etapa antes de continuar."
4. **Entrega** — "Lanzamos, te capacitamos y te dejamos funcionando. Con soporte incluido según tu paquete."

### Preguntas frecuentes

> ⚠️ El sitio contiene **dos versiones distintas** del FAQ (una en el Schema.org JSON-LD de `<head>`, y otra visible en el body bajo `id="faq"`). Se transcriben ambas literalmente porque no coinciden del todo — ver "Inconsistencias y huecos".

**FAQ visible en la página (`id="faq"`):**

1. **¿Cuánto tiempo tarda un proyecto?**
   "Una página web básica la entregamos en 5–7 días. Un sistema de administración toma entre 3 y 6 semanas. Una app móvil entre 6 y 12 semanas. Siempre te damos una fecha comprometida antes de arrancar."
2. **¿Puedo pagar a meses?**
   "Sí. Manejamos esquemas de 50% al inicio y 50% en entrega, o en 3 pagos para proyectos más grandes. Platicamos lo que mejor funcione para ti."
3. **¿El dominio y hosting están incluidos?**
   "En el paquete Web Básico incluimos dominio y hosting por 1 año. En los demás paquetes el hosting depende de los requerimientos del sistema; te asesoramos sobre la mejor opción."
4. **¿Qué pasa si no me gusta el diseño?**
   "Trabajamos con rondas de revisión. Antes de desarrollar, apruebas el diseño. Incluimos hasta 2 rondas de cambios sin costo extra para asegurarnos que quedes satisfecho."
5. **¿Trabajan con negocios fuera de Reynosa?**
   "Sí, trabajamos con clientes de toda la república y el extranjero. Todo el proceso es 100% remoto vía WhatsApp, videollamadas y avances en línea."
6. **¿Ofrecen mantenimiento después de entregar?**
   "Sí. El paquete Pro Digital incluye 3 meses de soporte y el Full Stack 6 meses. También ofrecemos planes de mantenimiento mensual por separado si lo necesitas."

**FAQ en Schema.org JSON-LD (`<head>` de `index.html`):**

1. ¿Cuánto tiempo tarda un proyecto? — (idéntica a la visible)
2. ¿Puedo pagar a meses? — (idéntica a la visible)
3. ¿El dominio y hosting están incluidos? — "En el paquete Web Profesional incluimos dominio y hosting por 1 año. En los demás paquetes el hosting depende de los requerimientos del sistema; te asesoramos sobre la mejor opción."
4. ¿Trabajan con negocios fuera de Reynosa? — (idéntica a la visible)
5. ¿Ofrecen mantenimiento después de entregar? — "Sí. Ofrecemos planes de mantenimiento mensual desde $500 MXN/mes que incluyen actualizaciones de contenido, soporte técnico y horas de desarrollo."
6. **¿Cuánto cuesta una página web en RamosMKT?** (pregunta exclusiva del schema, no aparece visible en la página) — "Nuestros paquetes web van desde $1,500 MXN (Landing Express, entrega en 5 días) hasta $7,500 MXN (Web Empresarial con CMS, analytics y soporte 2 meses). También ofrecemos ecommerce y sistemas a la medida desde $8,000 MXN."

---

## 4. Prueba social

**Testimonios (texto y autor):** [NO ENCONTRADO] — El paquete "Web Profesional" promete incluir "sección Nosotros + testimonios" como entregable para clientes, pero el propio sitio de RamosMKT no publica ningún testimonio de cliente en ninguna página.

**Clientes o logos mencionados (como marca, sin testimonio):**
- Linaje Escogido (iglesia)
- MARÉ — Tienda de Moda (demo)
- Alsdress (boutique — "Alsdress.com.mx")
- El Divino Bocado (restaurante, demo)
- Aiser Seguros (aseguradora)
- Andrea & Saúl (invitación de boda, demo)

### Portafolio (sección `#proyectos`, con nombre, industria y descripción exacta)

| Proyecto | Industria / etiqueta | Descripción exacta | Enlace | Notas |
|---|---|---|---|---|
| **Linaje Escogido** | IGLESIA · CMS | "Plataforma administrable para iglesia con CMS, horarios dinámicos, galería y formularios de oración." | linajeescogidoreynosa.org | Proyecto real, en vivo |
| **MARÉ — Tienda de Moda** | ECOMMERCE | "Ecommerce de moda con catálogo, colecciones, carrito de compra y experiencia de compra premium." | ecommercedemo-eight.vercel.app | Marcado como **DEMO** |
| **Andrea & Saúl — Boda** | INVITACIÓN DIGITAL | "Invitación digital con cuenta regresiva, RSVP, pases personalizados y panel de control de invitados." | dramosmireles2-gif.github.io/demoInvitacion/ | Marcado como **DEMO** |
| **Dashboard de Control** | PANEL ADMIN · INVITACIONES | "Panel de gestión de invitados, confirmaciones RSVP, asignación de mesas y actividad en tiempo real." | dramosmireles2-gif.github.io/demoInvitacion/admin.html | **DEMO** — contraseña de demo pública en el sitio: `Andrea2027` |
| **El Divino Bocado** | RESTAURANTE | "Sitio premium para restaurante de cocina mexicana con menú interactivo, galería y sistema de reservas." | dramosmireles2-gif.github.io/Restaurante-demo/ | Marcado como **DEMO** |
| **Sistemas Administrativos** | ADMIN SYSTEMS | "Dashboards a la medida para controlar inventario, proveedores, órdenes y clientes desde cualquier dispositivo." | (CTA cotizar por WhatsApp, sin link a proyecto) | Genérico, no un cliente específico |
| **Aiser Seguros** | SEGUROS · WEB PROFESIONAL | "Sitio web profesional para aseguradora con presentación de servicios, información clara y contacto directo." | aiserseguros.com | Proyecto real, en vivo |

**Boutique adicional (solo en `boutiques.html`, no aparece en el portafolio del home):**
- **Alsdress — Boutique de Moda**: "Tienda en línea de moda con catálogo por colecciones, experiencia de compra fluida y diseño visual premium que refleja la identidad de la marca." → alsdress.com.mx (etiquetado como "Caso de éxito · Proyecto real")

**Industrias marcadas como "próximo proyecto" (sin caso de éxito todavía):**
- Clínicas (`clinicas.html`): "¿Tu clínica podría ser la primera? ... Sé el primer caso de éxito en el sector salud de Reynosa."
- Gimnasios (`gimnasios.html`): "¿Tu gimnasio podría ser el primero? ... Sé el primer caso de éxito en el sector fitness de Reynosa."

**Números / estadísticas que se presumen en el sitio:**
- "10+ Negocios digitales activos" (hero, index.html)
- "100% Fechas cumplidas" (hero, index.html)
- "<1h Tiempo de respuesta" (hero, index.html; también "Respondemos en menos de 1 hora" repetido en contacto y páginas de industria)
- "Más de 10 proyectos entregados" (flyer-ig.html, story de Instagram)
- "El 75% de tus clientes buscó en Google antes de comprarte" (ads.html — dato usado como copy publicitario, no como estadística propia de la empresa)
- "El 81% de los consumidores investiga en internet antes de comprar" (flyer-ig.html — mismo tipo de dato genérico usado como copy)
- Recordatorios automáticos en clínicas "reducen las inasistencias hasta un 60%" (clinicas.html — afirmación de beneficio, no estadística de casos propios)
- Fundación: año **2024**, Reynosa, Tamaulipas

---

## 5. SEO y palabras clave

### Title, meta description y Open Graph por página

| Página | `<title>` | Meta description |
|---|---|---|
| `index.html` | "RamosMKT — Tecnología que crece negocios \| Reynosa, México" | "Agencia tecnológica en Reynosa, México. Sitios web, sistemas, apps, ecommerce y publicidad digital que hacen crecer tu negocio. Resultados reales desde el primer mes." |
| `contacto.html` | "Contacto — RamosMKT \| Cotiza tu proyecto" | "Contáctanos para cotizar tu sitio web, tienda en línea, app o campaña digital. Respondemos en menos de 1 hora. Reynosa, México." |
| `iglesias.html` | "Sitio Web para Iglesias — RamosMKT \| Reynosa, México" | "Plataforma digital para iglesias y ministerios: sermones, horarios, donaciones, RSVP y app para tu congregación. Desde $2,500 MXN. Reynosa, México." |
| `restaurantes.html` | "Sitio Web para Restaurantes — RamosMKT \| Reynosa, México" | "Menú digital QR, reservaciones online y sistema de pedidos para tu restaurante. Más comensales, menos llamadas. Desde $2,500 MXN." |
| `boutiques.html` | "Tienda Online para Boutiques — RamosMKT \| Reynosa, México" | "Catálogo online, tienda con pagos integrados y control de inventario para tu boutique o tienda de ropa. Tu negocio abierto 24/7. Desde $2,500 MXN." |
| `clinicas.html` | "Plataforma Digital para Clínicas — RamosMKT \| Reynosa, México" | "Citas online, recordatorios automáticos y expediente digital para tu clínica o consultorio. Menos llamadas, más pacientes. Desde $2,500 MXN." |
| `gimnasios.html` | "Sistema para Gimnasios — RamosMKT \| Reynosa, México" | "Control de membresías, pagos recurrentes y reserva de clases para tu gimnasio. Gestiona todo desde una sola plataforma. Desde $2,500 MXN." |
| `aviso-privacidad.html` | "Aviso de Privacidad — RamosMKT" | "Aviso de Privacidad de RamosMKT conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares." (`<meta name="robots" content="noindex">`) |
| `gracias/index.html` | "¡Solicitud recibida! — RamosMKT" | [NO ENCONTRADO] (`<meta name="robots" content="noindex, nofollow">`) — página de agradecimiento/confirmación con conversión de Google Ads (`AW-18153774300/DSp9CPra86ocENy5stBD`) |
| `tarjeta.html` | "RMKT — Tarjeta de Presentación" | [NO ENCONTRADO] |
| `ads.html` | "Assets de Conversión — RamosMKT" | [NO ENCONTRADO] (herramienta interna de generación de creativos, no indexable como página de marca) |
| `meta-ads.html` | "Meta Ads — RMKT / Ramos Digital" | [NO ENCONTRADO] |
| `flyer-ig.html` | "Flyers RMKT — Redes Sociales" | [NO ENCONTRADO] |

**Open Graph / Twitter Card:** solo configurados en `index.html`:
- `og:title`: "RamosMKT — Tecnología que crece negocios"
- `og:description`: "Construimos la tecnología que hace crecer negocios en México — sitios web, sistemas, apps y publicidad que generan resultados reales."
- `og:type`: "website"
- `og:image`: "4.png"
- `twitter:card`: "summary_large_image"
- `twitter:title` / `twitter:description`: idénticos a los de Open Graph
- ⚠️ El tag `twitter:description` en el código fuente **no cierra la comilla del atributo `content`** (le falta el `>` de cierre), lo cual es un error de sintaxis HTML en el `<head>` de `index.html`.
- Ninguna otra página (`contacto.html`, páginas de industria, etc.) tiene meta tags Open Graph propios.

### Schema.org / JSON-LD

Solo presente en `index.html`, dos bloques:

**1. ProfessionalService (LocalBusiness):**
```json
{
  "@type": "ProfessionalService",
  "name": "RamosMKT",
  "alternateName": "Ramos Digital",
  "url": "https://ramosmkt.lat",
  "logo": "https://ramosmkt.lat/Logo%20RMKT%20transparente%20reducido.png",
  "image": "https://ramosmkt.lat/4.png",
  "description": "Agencia tecnológica en Reynosa, México. Sitios web, sistemas, apps, ecommerce y publicidad digital que hacen crecer tu negocio.",
  "telephone": "+528148078309",
  "address": { "addressLocality": "Reynosa", "addressRegion": "Tamaulipas", "addressCountry": "MX" },
  "openingHoursSpecification": { "dayOfWeek": ["Monday",...,"Saturday"], "opens": "09:00", "closes": "19:00" },
  "sameAs": ["https://instagram.com/ramos_mkt.rex", "https://www.facebook.com/share/1BCvKbkZUP/"],
  "priceRange": "$$",
  "currenciesAccepted": "MXN",
  "paymentAccepted": "Transferencia, Efectivo, Tarjeta"
}
```
Nota: el tipo usado es **"ProfessionalService"**, no **"LocalBusiness"** explícitamente (ProfessionalService es un subtipo de LocalBusiness en Schema.org, pero no incluye `geo`, `streetAddress` ni `postalCode`).

**2. FAQPage:** ver preguntas transcritas en la sección 3.

No hay Schema.org de tipo `Organization`, `Review`, `AggregateRating`, `Product`, `Offer` ni `BreadcrumbList` en ninguna página.

### Palabras clave y ciudades ya usadas en el copy

- **Ciudad/región:** "Reynosa" (constante en todo el sitio), "Tamaulipas", "México" — no se menciona ninguna otra ciudad como zona de servicio específica (solo la declaración genérica "toda la república y el extranjero").
- **Palabras/frases clave repetidas:** "tecnología que crece negocios", "agencia tecnológica" / "agencia digital", "sitios web", "sistemas administrativos", "apps móviles", "publicidad digital" / "Meta Ads" / "Google Ads", "ecommerce" / "tienda en línea", "chatbots y automatizaciones", "invitaciones digitales", "código real, sin plantillas", "fechas cumplidas", "precio claro", "cotiza gratis", "resultados reales".
- **Palabras clave por industria (usadas como diferenciación de nicho):** iglesias/ministerio, restaurantes, boutiques/moda, clínicas/consultorio, gimnasios/fitness, bodas/XV años.

### Nombres de archivo y alt text de imágenes

| Archivo | Alt text (donde se usa en `<img>`) |
|---|---|
| `Logo RMKT transparente reducido.png` | "RamosMKT" (nav-logo-img, footer-logo-img) |
| `p-linaje.webp` | "Linaje Escogido — RamosMKT" |
| `p-ecommerce.webp` | "MARÉ Ecommerce Demo — RamosMKT" |
| `p-invitacion.webp` | "Invitación Digital Boda — RamosMKT" |
| `p-admininvitacion.webp` | "Panel Admin Invitaciones — RamosMKT" |
| `p-restaurante.webp` | "El Divino Bocado Restaurante — RamosMKT" |
| `p-adminals.webp` | "Sistemas Administrativos — RamosMKT" |
| `aiser.webp` | "Aiser Seguros — RamosMKT" |
| `iglesia-hero.webp` | "Plataforma digital para iglesias — RamosMKT" |
| `iglesia-ambiente.webp` | "Comunidad digital de iglesia — RamosMKT" |
| `restaurante-hero.webp` | "Sistema web para restaurante — RamosMKT" |
| `restaurante-ambiente.webp` | "Restaurante con menú digital — RamosMKT" |
| `boutique-hero.webp` | "Ecommerce de boutique de moda — RamosMKT" |
| `boutique-ambiente.webp` | "Boutique online — RamosMKT" |
| `clinica-hero.webp` | "Plataforma digital para clínicas — RamosMKT" |
| `clinica-ambiente.webp` | "Clínica con citas online — RamosMKT" |
| `gym-hero.webp` | "Sistema digital para gimnasio — RamosMKT" |
| `gym-ambiente.webp` | "Gimnasio con membresías digitales — RamosMKT" |
| `5.png` | usado como favicon (`rel="icon"`) en todas las páginas, sin alt (no es `<img>`) |
| `4.png` | usado como `og:image`, sin alt (meta tag) |
| `1.png`, `2.png`, `3.png`, `Aiser ss.png`, `Linaje1.png`, `linaje.png`, `ramosmkt.lat_ (1).png` | presentes en el repositorio pero **no referenciados por ningún `<img>` en las páginas revisadas** — probablemente assets de trabajo o versiones sin usar |
| Todos los `p-*.png` (versión PNG de cada `p-*.webp`) y `*-hero.png` / `*-ambiente.png` | versión PNG paralela de cada imagen `.webp`, usada únicamente dentro de `ads.html` / `meta-ads.html` / `flyer-ig.html` (creativos publicitarios), no en las páginas del sitio público |

Convención de nombres: minúsculas, con guiones, en español/inglés mixto (`p-` = "proyecto", `-hero` / `-ambiente` = posición de la imagen en la página de industria).

---

## 6. Estructura

### Páginas / rutas del sitio y su propósito

| Ruta | Propósito |
|---|---|
| `/index.html` (home) | Página principal: hero, Nosotros, Servicios, Industrias, Proyectos/Portafolio, Paquetes, Invitaciones Digitales, Proceso, FAQ, Footer |
| `/contacto.html` | Página de contacto con formulario y datos de contacto/redes |
| `/iglesias.html` | Landing de industria: Iglesias |
| `/restaurantes.html` | Landing de industria: Restaurantes |
| `/boutiques.html` | Landing de industria: Boutiques |
| `/clinicas.html` | Landing de industria: Clínicas |
| `/gimnasios.html` | Landing de industria: Gimnasios |
| `/aviso-privacidad.html` | Aviso de privacidad legal (LFPDPPP), `noindex` |
| `/gracias/index.html` | Página de agradecimiento/confirmación post-envío de formulario, con disparo de conversión de Google Ads, `noindex, nofollow` |
| `/tarjeta.html` | Generador de tarjeta de presentación digital descargable (PNG), con QR de WhatsApp — herramienta interna, no parte de la navegación pública |
| `/ads.html` | Generador de creativos publicitarios (Meta Ads) por servicio — herramienta interna de marketing, no indexada ni enlazada desde el sitio |
| `/meta-ads.html` | Generador de creativos publicitarios (variantes A/B/C + Stories) — herramienta interna |
| `/flyer-ig.html` | Generador de posts/flyers/carruseles para Instagram — herramienta interna |

Nota: `ads.html`, `meta-ads.html`, `flyer-ig.html` y `tarjeta.html` no están enlazados desde la navegación (`<nav>`) ni el footer de ninguna página pública — son herramientas de generación de assets de marketing para uso propio de RamosMKT, no páginas de cara al cliente.

### CTA y a dónde llevan

| CTA (texto exacto) | Destino |
|---|---|
| "Cotiza gratis" (nav, todas las páginas) | `contacto.html` |
| "💬 Cotiza gratis" (menú móvil) | `contacto.html` |
| "Quiero hacer crecer mi negocio →" (hero) | WhatsApp: `wa.me/528148078309?text=Hola%20RamosMKT%2C%20quiero%20hacer%20crecer%20mi%20negocio` |
| "Ver proyectos" (hero) | Ancla `#proyectos` |
| "Cotizar →" (cada tarjeta de servicio) | WhatsApp con mensaje pre-llenado específico del servicio |
| "Ver paquetes →" (tarjeta Invitaciones Digitales) | Ancla `#invitaciones` |
| "Ver solución →" (tarjetas de industria) | Página de industria correspondiente |
| "Ver proyecto →" / "Ver demo →" (portafolio) | URL externa del proyecto/demo |
| "Cotizar →" (paquetes web e invitaciones) | WhatsApp con mensaje pre-llenado por paquete |
| "Solicitar cotización →" (Solución a la Medida) | WhatsApp con mensaje genérico de solución a la medida |
| "Cotiza tu plataforma/solución/tienda/sistema →" (hero de cada página de industria) | `contacto.html?servicio={iglesia\|restaurante\|boutique\|clinica\|gimnasio}` |
| "Ver qué incluye" (hero de industria) | Ancla `#incluye` en la misma página |
| "Cotizar mi plataforma/restaurante/tienda/sistema →" (tarjeta de precio de industria) | `contacto.html?servicio={industria}` |
| "Cotiza gratis →" (CTA final de página de industria) | `contacto.html?servicio={industria}` |
| Botón flotante de WhatsApp (todas las páginas) | `wa.me/528148078309` con mensaje genérico o específico de la página |
| "Enviar mensaje →" (formulario de contacto) | Envía vía JS (Web3Forms) — ver formularios abajo |
| Enlaces de footer "Aviso de Privacidad" | `aviso-privacidad.html` |
| Íconos sociales de footer | WhatsApp, Instagram, Facebook, TikTok (URLs de la sección 1) |

### Campos del formulario y a dónde envían

**Formulario de contacto** (`contacto.html`, procesado por `main.js` función `enviarFormulario()`):

Campos:
1. Nombre (texto, placeholder "Tu nombre / Your name")
2. Correo (email, placeholder "Tu correo / Your email")
3. Negocio (texto, placeholder "Tu negocio / Your business")
4. Select "¿Qué necesitas?" con opciones: Landing Express ($1,500), Web Profesional ($3,500), Web Empresarial ($7,500), Ecommerce/Tienda en Línea, Sistema Administrativo, App Móvil iOS y Android, Publicidad en Meta Ads, Publicidad en Google Ads, Chatbot + Automatizaciones, Invitación Digital Estándar ($799), Invitación Digital Premium ($1,499), Invitación Platinum QR ($2,999), "No sé, necesito asesoría"
5. Mensaje (textarea, placeholder "Cuéntanos más sobre tu proyecto / Tell us about your project")

**Destino técnico:** el formulario envía un `POST` a la API de terceros **Web3Forms** (`https://api.web3forms.com/submit`) con una `access_key` embebida en el código fuente de `main.js` (`9642a55b-eaa5-4627-83b7-67df79504214`), que reenvía el contenido por correo. El asunto se arma como `RamosMKT — {servicio}` y el cuerpo incluye Negocio, Servicio y Mensaje. Si falla, el mensaje de error visible en pantalla indica al usuario escribir directamente a `dramosmirele2@ramosmkt.lat`.

**Nota de flujo:** el formulario **no redirige** visiblemente a `/gracias/index.html` dentro del código de `main.js` revisado — la página de gracias existe con su propio disparo de conversión de Google Ads, pero no se encontró el enlace/redirect que la conecte con el envío del formulario de `contacto.html`. Es posible que se use como landing page de una campaña de Google Ads separada. [Ver huecos]

**Parámetro de query en URLs de industria:** `contacto.html?servicio=iglesia|restaurante|boutique|clinica|gimnasio` — no se encontró en `contacto.html` ni `main.js` ningún código que lea este parámetro para pre-seleccionar el `<select>` del formulario; el parámetro llega pero, según el código revisado, no se usa.

---

## Inconsistencias y huecos

### A. Datos que aparecen distintos en dos (o más) lugares del sitio

1. **FAQ "¿El dominio y hosting están incluidos?"**: la versión visible en la página dice *"En el paquete **Web Básico** incluimos dominio..."*; la versión en Schema.org JSON-LD dice *"En el paquete **Web Profesional** incluimos dominio..."*. No existe ningún paquete llamado "Web Básico" en el sitio — solo Landing Express, Web Profesional, Web Empresarial y Solución a la Medida. La versión del schema es la correcta según los paquetes reales.
2. **FAQ "¿Ofrecen mantenimiento después de entregar?"**: la versión visible dice *"El paquete **Pro Digital** incluye 3 meses de soporte y el **Full Stack** 6 meses"* — **estos dos nombres de paquete ("Pro Digital", "Full Stack") no existen en ninguna otra parte del sitio**. La versión del schema, en cambio, dice *"Ofrecemos planes de mantenimiento mensual desde $500 MXN/mes"*, coherente con el resto del sitio.
3. **Precio de Ecommerce**: el home (`index.html`) dice "Desde $8,000 MXN" (tarjeta de servicio y paquete "Solución a la Medida"); pero `meta-ads.html`/`ads.html` (creativos publicitarios y la "Lista de Precios" interna) dicen "Desde $4,500 MXN".
4. **Precio de Sistemas Administrativos**: el home dice "Desde $8,000 MXN"; `ads.html` (anuncio y lista de precios) dice "Desde $5,000 MXN".
5. **Precio de plataforma para Iglesias**: `iglesias.html` y la sección Industrias del home dicen "$2,500 MXN"; `ads.html` (anuncio y lista de precios) dice "Desde $2,000 MXN".
6. **Precio de Meta Ads / Google Ads**: el home dice "Publicidad Digital — Desde $2,000 MXN/mes" (categoría combinada); la "Lista de Precios" de `ads.html` separa "Meta Ads — Desde $1,500 MXN" y "Google Ads — Desde $1,500 MXN" (sin indicar "/mes").
7. **"Sitio Web Empresarial"**: la Lista de Precios de `ads.html` lo lista en "Desde $2,500 MXN", cifra que en realidad coincide con los paquetes de industria ($2,500), no con el paquete real "Web Empresarial" del home, que cuesta **$7,500 MXN**. Riesgo de confundir un paquete con otro si se usa este documento tal cual para el Google Business Profile.
8. **Correo de contacto**: aparece siempre como `dramosmirele2@ramosmkt.lat` en el sitio (footer, contacto, aviso de privacidad, fallback de error) — pero el email de la cuenta vinculada a este repositorio es `dramosmireles2@gmail.com` (con "s" en "mireles"). No se puede determinar desde el repo si el dominio de correo del sitio tiene una errata (falta la "s") o si es intencional y distinto del Gmail personal.
9. **Nombre de página de Facebook**: la URL de Facebook enlazada es un link de "share" genérico (`facebook.com/share/1BCvKbkZUP/`) que no revela el nombre real de la página; la tarjeta de presentación (`tarjeta.html`) muestra el texto "RMKT Web & Apps" junto al ícono de Facebook, y el carrusel final de `flyer-ig.html` usa el handle "/ramosmkt" — no queda claro cuál es el nombre/usuario real y definitivo de la página de Facebook.
10. **Dirección**: el Schema.org y el footer solo dan "Reynosa, Tamaulipas, México" (sin CP); el Aviso de Privacidad agrega "C.P. 88000" — es la única fuente con código postal, y no se puede confirmar si ese CP es el del domicilio fiscal/de operación real o un dato genérico de la ciudad.

### B. Información que un Google Business Profile normalmente pide y que el sitio no tiene

- **Dirección física/calle exacta o indicación de "sin local visible al público"**: el sitio nunca da una dirección de calle — solo ciudad/estado (y un CP únicamente en el aviso de privacidad). Para un GBP hay que decidir si se da de alta como "área de servicio" (sin dirección visible) o con una dirección real que no está en el repo. **[NO ENCONTRADO]**
- **Categoría de negocio de Google (ej. "Diseñador de sitios web", "Agencia de marketing")**: no se declara explícitamente en ningún archivo. **[NO ENCONTRADO]**
- **Fotos del local / equipo / fundadores**: no existen en el repositorio (solo mockups, screenshots de proyectos y logo). **[NO ENCONTRADO]**
- **Nombre(s) de los fundadores o del equipo**: el texto de "Nosotros" habla de "los fundadores" en plural, pero no da nombres. **[NO ENCONTRADO]**
- **RFC / razón social fiscal formal**: el aviso de privacidad solo dice "Razón social: RamosMKT", sin persona física/moral, RFC ni datos fiscales. **[NO ENCONTRADO]**
- **Reseñas o calificaciones de clientes**: no hay testimonios, ni enlaces a reseñas externas (Google, Facebook) en ningún archivo. **[NO ENCONTRADO]**
- **Horario de domingo**: el schema no lista domingo, lo que implícitamente indica cerrado, pero nunca se declara explícitamente "domingo cerrado" en ningún texto visible. **[NO ENCONTRADO — inferido, no confirmado]**
- **Número de teléfono fijo/alternativo (no WhatsApp)**: todo el sitio usa un único número de WhatsApp/celular; no hay línea fija. **[NO ENCONTRADO]**
- **Video institucional o de marca**: no hay ningún video embebido o enlazado en el repositorio. **[NO ENCONTRADO]**

### C. Servicios mencionados de pasada que no están desarrollados en ninguna página

- **Chatbots + Automatizaciones**: tiene tarjeta de servicio y precio en el home ("Desde $500 MXN/mes"), pero a diferencia de las demás líneas de negocio (web, ecommerce, sistemas, industrias) **no tiene página propia** con features detalladas, showcase de proyecto real ni tarjeta de precio dedicada como sí la tienen Iglesias/Restaurantes/Boutiques/Clínicas/Gimnasios.
- **Apps Móviles**: igual que el anterior — tiene tarjeta y precio ("Desde $20,000 MXN") pero ningún caso de éxito, demo ni página dedicada en todo el repositorio.
- **Publicidad en Google Ads** específicamente: solo aparece como opción del `<select>` del formulario de contacto y como línea suelta en la Lista de Precios de `ads.html`; no tiene tarjeta ni sección propia en el home (está fusionada dentro de "Publicidad Digital" con Meta Ads).
- **CRM y dashboards de negocio**: mencionado solo como ítem de bullet dentro del paquete "Solución a la Medida", sin ninguna explicación adicional en el resto del sitio.
- **Programa de puntos/descuentos para clientes frecuentes** (mencionado en `boutiques.html` como feature "Clientes frecuentes"): no se explica cómo funciona ni aparece en ninguna otra parte del sitio.
- **Planes de mantenimiento mensual** (desde $500 MXN/mes, solo mencionado en el FAQ del schema y la FAQ visible): no tiene tarjeta de precio, página ni detalle de qué incluye más allá de la frase genérica "actualizaciones de contenido, soporte técnico y horas de desarrollo".
