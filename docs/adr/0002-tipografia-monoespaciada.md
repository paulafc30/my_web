# ADR 0002 — Tipografía monoespaciada (JetBrains Mono) en todo el sitio

- **Fecha:** 2026-05-21
- **Estado:** Aceptada

## Contexto

El portfolio se dirige a **reclutadores técnicos y otros desarrolladores**. La elección tipográfica condiciona la primera impresión más que cualquier otro elemento de diseño. Necesitábamos algo que comunicase "esta persona es desarrolladora" sin tener que decirlo, y que se distinguiese de los portfolios genéricos con Inter / Geist / Satoshi que abundan en LinkedIn.

## Decisión

Usar **JetBrains Mono** como única fuente del sitio (titulares, body, UI, código).

- Se carga desde Google Fonts en `index.html` con pesos 300, 400, 500, 700, 800 e itálica 400.
- Variable CSS: `--mono: 'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, Consolas, monospace;`
- Aplicada a `html` para que cascadee a todo.

## Consecuencias

### A favor
- **Identidad visual fuerte e inmediata.** Lo monoespaciado evoca terminal, código, herramientas dev. Coherente con el público objetivo.
- **Una sola fuente** = menos peso, menos parpadeo, FOIT/FOUT controlados.
- **Tipografía cuidada en datos tabulares** (versiones, fechas, métricas) porque las cifras se alinean por columna.
- **Diferenciación.** Casi nadie usa monoespaciada para todo el sitio. Memorable.

### En contra
- **Densidad de texto menor.** El cuerpo del texto rinde menos palabras por línea que una sans-serif. Hay que cuidar `max-width` (54-65ch) y `line-height` (1.6-1.75).
- **Riesgo de "aspecto retro/terminal"** si no se compensa con buen espaciado y un color de acento cálido.
- **Pesos limitados.** JetBrains Mono no llega a 900 ni a una extra-thin elegante. Usamos 700/800 para el `headline` como compromiso.

### A vigilar
- Si en algún momento aparece feedback de que el texto largo "cansa", introducir una **segunda fuente sans-serif** solo para body de párrafos largos (ej. About, Blog), manteniendo mono para titulares y UI. Sería un ADR nuevo.
- Comprobar que los CTAs siguen siendo claros: lo mono puede ocultar la jerarquía visual si no se ajustan tamaños.

## Alternativas consideradas

- **Inter (body) + Space Grotesk (titulares)** — versión anterior del portfolio. Limpia y profesional, pero indistinguible de cientos de portfolios.
- **JetBrains Mono solo para titulares, sans-serif para body** — opción de compromiso. Descartada en favor de una identidad más fuerte y consistente.
- **Berkeley Mono / Commit Mono / IBM Plex Mono** — alternativas mono más elegantes pero o son de pago, o tienen peor pinta en Windows ClearType.
