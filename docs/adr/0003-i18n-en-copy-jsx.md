# ADR 0003 — Internacionalización (ES/EN) centralizada en `copy.jsx`

- **Fecha:** 2026-05-21
- **Estado:** Aceptada

## Contexto

El portfolio tiene que estar disponible en **español** (público local: empresas en Jaén, ofertas en España) e **inglés** (oportunidades remotas internacionales, reclutadores tech globales). Necesitábamos un sistema que permitiese:

1. Cambiar idioma sin recargar la página, con UI visible (un tweak).
2. Mantener traducciones **co-ubicadas** (no en archivos separados perdidos en `locales/`) para que sea trivial editar y revisar.
3. Permitir contenido JSX dentro de las traducciones (negritas, enlaces, ortografía con `<b>`).
4. No introducir una librería adicional (i18next, FormatJS) porque sería desproporcionado.

## Decisión

- Un único objeto `COPY` en `copy.jsx` con esta forma:
  ```js
  const COPY = {
    es: { nav: {...}, hero: {...}, projects: {...}, ... },
    en: { nav: {...}, hero: {...}, projects: {...}, ... },
  };
  ```
- Cada rama de idioma tiene **exactamente las mismas claves**. Si una falta en un idioma, ese idioma se rompe — fallo a propósito para forzar paridad.
- Los componentes reciben `t = COPY[lang]` y usan `t.hero.headline`, `t.about.p1`, etc.
- El idioma seleccionado vive en localStorage (vía `useTweaks`) y se aplica también a `<html lang>` para SEO y accesibilidad.
- Valores dinámicos (ej. meses trabajados) se inyectan con expresiones JS dentro del JSX: `Llevo <b>{MESES_BNT} meses</b>`.

## Consecuencias

### A favor
- **Editar copy de las dos versiones a la vez** es trivial (mismo archivo, mismo scroll).
- **Cero dependencias** añadidas.
- **JSX dentro de la copia** permite formato rico (`<b>`, `<a>`, listas) sin tener que escapar HTML ni inventar un mini-lenguaje de plantillas.
- **Cambio de idioma instantáneo** porque solo cambia una clave del estado React.

### En contra
- **No hay validación de paridad de claves.** Si añades una clave en `es:` y olvidas hacerlo en `en:`, el bug solo aparece cuando alguien cambia el idioma. Mitigación: usar `JSON.stringify(Object.keys(COPY.es))` vs `en` como check rápido si el archivo crece.
- **No hay plurales ni géneros automáticos.** Hay que escribirlos a mano o lógica `{n === 1 ? 'mes' : 'meses'}` dentro del JSX. Aceptable porque el sitio es pequeño.
- **Añadir un tercer idioma** = duplicar todo el árbol. Aceptable si pasamos de 2 a 3, problemático si pasamos a 5+. En ese caso habría que migrar a i18next o similar.

### A vigilar
- Si el archivo `copy.jsx` pasa de ~500 líneas, **dividirlo por idioma o por sección** (ej. `copy.es.jsx`, `copy.en.jsx`).
- Hacer un script de check en CI que compare claves entre idiomas si añadimos `git hooks` o GitHub Actions.

## Alternativas consideradas

- **i18next / react-i18next** — completo y robusto, pero añade ~30KB y requiere config. Sobredimensionado para 2 idiomas y ~50 strings.
- **Archivos JSON por idioma (`locales/es.json`, `locales/en.json`)** — más limpio para sitios grandes pero pierde la capacidad de tener JSX en los strings. Descartado.
- **Renderizar dos copias del sitio (`/`, `/en/`) en build** — bueno para SEO pero rompe la idea de "sin build step" del proyecto.
