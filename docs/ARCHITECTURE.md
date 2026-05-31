# Arquitectura del portfolio

> Mapa rápido para entender cómo se conectan las piezas. Si vas a tocar código o pedirle algo a una IA sobre este proyecto, lee primero este archivo.

## Visión de 30 segundos

Es un **sitio estático servido como SPA en React** (sin Node, sin build step). Todo el JSX se compila en el navegador con `@babel/standalone`. React, ReactDOM y Babel se cargan desde CDN. El sitio funciona abriendo `index.html` directamente o desde cualquier hosting estático (Vercel, Netlify, GitHub Pages).

```
Usuario abre index.html
        │
        ▼
index.html carga ─► fuentes (Google Fonts: JetBrains Mono)
        │       ─► styles.css
        │       ─► React 18 + ReactDOM (UMD, CDN)
        │       ─► @babel/standalone (CDN)
        │       ─► image-slot.js (custom element <image-slot>)
        │       ─► tweaks-panel.jsx (compila con Babel)
        │       ─► main.jsx (compila con Babel)
        │
        ▼
main.jsx monta <App /> en #root
        │
        ▼
<App /> lee COPY (de copy.jsx) según el idioma seleccionado
        │
        ▼
Componentes pintan: Header, Hero, Projects, Stack, About, Contact, Blog, Footer
        │
        ▼
TweaksPanel (esquina) permite cambiar idioma, tema, color y tamaño de fuente
        │
        ▼
Cualquier cambio en TweaksPanel se persiste en localStorage
```

## Archivos clave y su responsabilidad

| Archivo | Qué hace | Cuándo tocarlo |
|---|---|---|
| `index.html` | Shell HTML, carga CDNs, define `#root`, `#cursor`, `#grain` | Solo si añades scripts globales o cambias el `<title>` / meta tags |
| `main.jsx` | Define `<App />` y todos los componentes de sección (Header, Hero, Projects, Stack, About, Contact, Blog, Footer) | Cuando añades secciones nuevas o cambias estructura visual |
| `app.jsx` | Versión alternativa de App (no se usa actualmente — `main.jsx` lleva todo) | — |
| `components.jsx` | Componentes auxiliares compartidos | Cuando creas un componente reutilizable |
| `copy.jsx` | **Toda la copia textual**, en ES y EN, dentro de un objeto `COPY`. También expone `monthsAtBNT()` (cálculo dinámico de antigüedad) | Cuando cambias cualquier texto del sitio |
| `tweaks-panel.jsx` | Panel flotante de ajustes (idioma, tema, color, fuente) + hook `useTweaks` que persiste en localStorage | Si añades un nuevo "tweak" |
| `cursor.jsx` | Cursor personalizado (hook `useCustomCursor`) | Casi nunca |
| `image-slot.js` | Custom element `<image-slot>` (vanilla JS, sin React). Permite drag-and-drop de imágenes y persistencia en localStorage | Cuando necesites añadir un slot de imagen nuevo |
| `styles.css` | Estilos globales con variables CSS. Soporta `[data-theme="dark"]` | Cuando cambias diseño, colores o layout |
| `assets/paula-fernandez-cv.pdf` | CV descargable | Cuando actualices tu CV |
| `assets/images/paula.jpg` | Foto del hero | Cuando cambies de foto |

## Flujos de datos

### Idioma y tema
1. Usuario abre la web → `useTweaks(TWEAK_DEFAULTS)` lee localStorage (clave `tweaks-v1` o similar). Si no hay nada guardado, usa los defaults.
2. `App` aplica el idioma, color y tema al `<html>` (`document.documentElement.dataset.theme`, `--accent`, `lang`).
3. Cuando el usuario cambia algo en `TweaksPanel` → `setTweak('lang', 'en')` actualiza estado React y persiste en localStorage.
4. React re-renderiza con `COPY[lang]`, así que todos los textos se traducen al instante sin recarga.

### Textos (i18n)
- Todo está en `copy.jsx`, dentro de `const COPY = { es: {...}, en: {...} }`.
- Para añadir un idioma nuevo: copia la rama `es:`, tradúcela y añádela como `fr:` o `pt:`. Luego añade la opción en el `<TweakRadio options={['es','en','fr']}/>` de `app.jsx` / `main.jsx`.

### Antigüedad ("X meses trabajando")
Calculada en runtime por `monthsAtBNT()` en `copy.jsx`. Redondea al mes más cercano (>= 15 días suma 1 mes) desde el 3 de noviembre de 2025. Ver [ADR 0005](adr/0005-meses-calculados-en-runtime.md).

### Imagen del retrato
1. `main.jsx` renderiza `<image-slot src="assets/images/paula.jpg" id="hero-portrait" />`.
2. `image-slot.js` lee el atributo `src` y lo muestra como fallback.
3. Si un usuario arrastra una imagen encima, se convierte a `data:` URL, se guarda en localStorage con la clave `image-slot:hero-portrait`, y se prioriza sobre el `src`.
4. Vaciar el slot → reaparece el `src` original.

Esto permite a Paula iterar con fotos sin tocar código, **y** garantiza que en una sesión nueva (sin localStorage) la foto del hero aparece desde el archivo.

## Lo que NO hay en este proyecto

- **No hay backend.** Cero llamadas a API. Si en el futuro hace falta un formulario de contacto que envíe email, se hará con un servicio tercero (EmailJS, Formspree) o una Vercel Function.
- **No hay build step.** Nada de Vite, Webpack, esbuild. La razón está en [ADR 0001](adr/0001-spa-react-via-cdn.md).
- **No hay tests.** Es un portfolio personal, no se justifica el coste. Si en algún momento crece (blog dinámico, multiidioma 3+), se puede añadir Vitest.
- **No hay router.** Todo es una sola página con scroll. Los antiguos `project-1.html` y `project-2.html` son páginas estáticas independientes y se enlazan con `<a href>` normales.

## Convenciones rápidas

- **Idioma del código:** comentarios y nombres en inglés cuando son técnicos puros. Strings de UI en `copy.jsx` siempre en ES + EN.
- **CSS:** una sola hoja (`styles.css`), variables en `:root`, dark mode con `[data-theme="dark"]`.
- **No usar frameworks de estilo** (Tailwind, etc.) dentro del portfolio. Mantener CSS escrito a mano.
- **Comentarios:** explicar el **porqué**, no el **qué**. Ver `CONVENTIONS.md`.
