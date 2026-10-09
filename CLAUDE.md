# CLAUDE.md · ramosmkt.lat

Sitio estático de RamosMKT (HTML/CSS/JS sin frameworks, GitHub Pages).

## Antes de tocar cualquier sección
1. Lee `docs/BRIEF.md` y `docs/DESIGN.md`. Mandan sobre cualquier otra nota del repo.
2. Usa la skill `direccion-arte-rmkt` (dirección de arte, revisión con capturas y auditoría de señales).

## Cómo se trabaja
- **Una sección a la vez.** Termina, revisa con capturas a 375, 768 y 1440, y espera la aprobación de
  David antes de pasar a la siguiente.
- Usa solo los tokens y componentes de `docs/DESIGN.md`. Si algo no existe ahí, propónlo antes de
  inventarlo.
- **No inventes cifras, clientes ni testimonios.** Precios: solo la tabla oficial de
  `PLAN-rediseno-rmkt.md`, siempre con "Desde". Datos del negocio: `experimentos/hero/CONTENIDO.md`.
  Lo que no tenga fuente se marca como PENDIENTE y no se publica.
- No hagas commit ni push a `main` sin que David lo confirme.

## Git en esta carpeta
El repo está en un disco que no guarda dueño de archivos; si git dice "dubious ownership", usa
`git -c safe.directory=D:/RamosMKT/RamosMKT <comando>`.
