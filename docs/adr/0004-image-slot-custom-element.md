# ADR 0004 — `<image-slot>` como custom element nativo (no componente React)

- **Fecha:** 2026-05-21
- **Estado:** Aceptada

## Contexto

Queríamos que Paula pudiese **arrastrar y soltar imágenes** sobre el retrato del hero o las thumbnails de proyectos sin recargar ni tocar código, y que esas imágenes **persistiesen entre sesiones**. Además debía haber siempre un `src` por defecto (fallback) para que la web se vea bien en la primera carga.

Opciones:

1. Componente React con `useState` + `useEffect` + `localStorage`. Funcional pero acoplado al ciclo de vida de React.
2. **Custom element nativo (Web Component) con Shadow DOM**, completamente desacoplado de React, manipulable también desde HTML estático.

## Decisión

Implementar `<image-slot>` como **custom element en vanilla JS** (`image-slot.js`). Características:

- Atributos: `src` (URL fallback), `placeholder`, `shape`, `radius`, `fit`, `position`, `id`.
- Drag-and-drop nativo que convierte el archivo a `data:image/...` URL.
- Persistencia en `localStorage` con clave `image-slot:<id>`. Si el slot tiene `id`, la imagen sobrevive entre recargas.
- Limpiar el slot (UI propia) revela el `src` original.
- Shadow DOM para aislar estilos del resto del sitio.

Se usa desde JSX como cualquier HTML: `<image-slot src="..." id="hero-portrait" />`. React no sabe ni necesita saber qué hay dentro.

## Consecuencias

### A favor
- **Funciona también en páginas estáticas sin React** (los antiguos `project-1.html` podrían usarlo si quisieran). Reutilizable.
- **No re-renderiza con cada cambio de estado de React.** Es pesado solo durante el drop.
- **Shadow DOM** aísla el CSS interno del slot del resto del sitio: imposible que un estilo global rompa el slot.
- **API declarativa muy simple** desde el HTML/JSX.

### En contra
- **Curva de aprendizaje:** trabajar con `attributeChangedCallback`, `connectedCallback` y Shadow DOM no es lo mismo que un componente React. Si Paula quiere modificarlo, requiere leer las MDN docs de custom elements.
- **No reactivo a props como un componente React:** si quieres cambiar el `src` desde fuera, tienes que usar `slot.setAttribute('src', '...')`, no pasar una prop nueva.
- **Sin TypeScript**, sin autocompletado en editores.

### A vigilar
- Si en algún momento queremos lazy-load real (`loading="lazy"`) o `srcset` para responsive, hay que añadir esos atributos manualmente al custom element. Hoy no se hace.
- Comprobar que los archivos guardados en localStorage no superan el límite (~5MB típico). Si la web crece y guardamos muchas, refactorizar a IndexedDB.

## Alternativas consideradas

- **`<img>` + componente wrapper React**: más simple pero pierde la posibilidad de usarlo desde HTML plano.
- **Subir imágenes a un servicio externo (Cloudinary, etc.)**: overkill para un portfolio. El drop local + localStorage cubre el caso real.
