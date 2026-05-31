# Documentación · Portfolio Paula Fernández Cañas

> Empieza aquí si vas a tocar el proyecto, vas a delegarle algo a una IA, o vienes nuevo al repo.

## Orden de lectura recomendado

1. **[`../README.md`](../README.md)** — qué es el proyecto, cómo levantarlo y desplegarlo.
2. **[`ARCHITECTURE.md`](ARCHITECTURE.md)** — cómo se conectan los archivos, flujos de datos, qué hace cada cosa.
3. **[`CONVENTIONS.md`](CONVENTIONS.md)** — estilo de código, reglas no negociables, cómo añadir cosas nuevas.
4. **[`adr/`](adr/)** — historial de decisiones técnicas importantes y el porqué de cada una.
5. **[`../.cursorrules`](../.cursorrules)** — reglas operativas para asistentes IA (también vale como cheatsheet para humanos).

## Índice de contenidos

### Arquitectura y convenciones
- [Arquitectura del portfolio](ARCHITECTURE.md)
- [Convenciones de código y estilo](CONVENTIONS.md)

### Decisiones técnicas (ADR)
- [ADR 0001 — SPA en React vía CDN](adr/0001-spa-react-via-cdn.md)
- [ADR 0002 — Tipografía monoespaciada](adr/0002-tipografia-monoespaciada.md)
- [ADR 0003 — i18n centralizado en `copy.jsx`](adr/0003-i18n-en-copy-jsx.md)
- [ADR 0004 — `<image-slot>` como custom element](adr/0004-image-slot-custom-element.md)
- [ADR 0005 — Antigüedad calculada en runtime](adr/0005-meses-calculados-en-runtime.md)
- [Cómo añadir un ADR nuevo](adr/README.md)

## Preguntas rápidas

| Quiero…                                  | Mira…                                                              |
| ---------------------------------------- | ------------------------------------------------------------------ |
| Cambiar un texto del sitio               | `copy.jsx` (siempre ES + EN)                                       |
| Añadir un proyecto al carrusel           | `copy.jsx → es.projects.list` y `en.projects.list`                 |
| Cambiar el color de marca                | `styles.css` variable `--accent` (o desde el panel de tweaks)      |
| Cambiar el CV                            | Sustituir `assets/paula-fernandez-cv.pdf`                          |
| Cambiar la foto del hero                 | Sustituir `assets/images/paula.jpg`                                |
| Añadir un idioma                         | Duplicar rama en `copy.jsx` y exponer la opción en el panel        |
| Entender por qué no usamos Vite/Next     | [ADR 0001](adr/0001-spa-react-via-cdn.md)                          |
| Entender el sistema de imágenes drag-and-drop | [ADR 0004](adr/0004-image-slot-custom-element.md)             |
| Saber cómo se cuenta "X meses en BNT"    | [ADR 0005](adr/0005-meses-calculados-en-runtime.md)                |
| Desplegar a Vercel                       | `../README.md` sección "Cómo publicarlo gratis"                    |

## Para asistentes IA (Cursor, Claude, Windsurf, Copilot, ChatGPT)

El archivo [`../.cursorrules`](../.cursorrules) es la fuente de verdad sobre cómo
trabajar en este proyecto. Cualquier IA que vaya a escribir código aquí debería
leerlo primero. Resumen ultra-corto:

- React 18 vía CDN, sin build, sin TypeScript.
- Una sola tipografía: JetBrains Mono.
- Todo el copy en `copy.jsx`, ES+EN siempre en paridad.
- Variables CSS para todo lo visual.
- Comentarios solo cuando aporten el "porqué" de una decisión.
- Si vas a tomar una decisión técnica, crea un ADR antes de implementar.

## Mantenimiento de esta documentación

- **Cuando cambies de stack, librería o patrón importante** → crea un ADR.
- **Cuando un ADR quede obsoleto** → no lo borres, crea uno nuevo que lo supere y marca el viejo como "superado por ADR-NNNN".
- **Cuando cambies convenciones** → actualiza `CONVENTIONS.md` Y `.cursorrules` a la vez para que las IAs y humanos vean lo mismo.
- **Mantén este README como índice puro:** una línea por documento, sin contenido duplicado.
