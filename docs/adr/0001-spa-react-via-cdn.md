# ADR 0001 — SPA en React, cargado desde CDN sin build step

- **Fecha:** 2026-05-21
- **Estado:** Aceptada

## Contexto

Necesitábamos un portfolio personal que:

1. Tuviera componentes interactivos (panel de tweaks, idioma ES/EN, modo claro/oscuro, carrusel).
2. Se pudiera desplegar en Vercel/Netlify/GitHub Pages **sin proceso de build**.
3. Fuera mantenible por una sola persona junior, sin pelearse con configs de Webpack/Vite cada vez que cambia un texto.
4. Funcionase abriendo `index.html` directamente desde el explorador de archivos para iterar rápido en local.

## Decisión

Cargar **React 18, ReactDOM y `@babel/standalone` desde CDN** (`unpkg`) en `index.html`, y escribir los componentes JSX como `<script type="text/babel">`. Babel compila el JSX en el navegador cada vez que carga la página.

## Consecuencias

### A favor
- **Cero build step.** Editar un `.jsx`, guardar y refrescar es todo lo que hace falta.
- **Despliegue trivial:** cualquier hosting estático sirve los archivos tal cual.
- **Onboarding de 0 segundos:** no hay `npm install`, no hay `node_modules`, no hay `package-lock.json`.
- **Lectura más fácil para IAs:** todo el código está en archivos planos, sin transpiladores intermedios que oculten la fuente real.

### En contra
- **Penalización en performance del primer render:** Babel pesa ~3MB y compila en cliente. Es aceptable para un portfolio (no es un producto SaaS).
- **No hay tree-shaking.** Cualquier librería que añadamos viene entera.
- **Sin TypeScript.** Habría que añadir build step.
- **Errores se ven en runtime.** No hay lint estricto antes de desplegar.

### A vigilar
- Si el portfolio crece a >5 secciones complejas o necesita rutas reales, **migrar a Vite + React** y abrir un nuevo ADR que supere este.
- Mantener los CDN pinneados a versiones concretas (`react@18.3.1`, no `react@latest`) para que un cambio mayor no rompa el sitio sin aviso.

## Alternativas consideradas

- **Vite + React build estático.** Mejor performance, mejor DX para programadores con experiencia. Descartada porque añade fricción para iterar copy y diseño rápido. Reservada como evolución futura.
- **Astro o Eleventy (estático puro).** Excelente performance y SEO. Descartada porque queríamos interactividad (panel de tweaks, traducción en vivo) sin saltar a islas.
- **HTML/CSS/JS vanilla** (como estaba antes del rediseño). Funciona, pero el panel de tweaks y la traducción ES/EN en vivo se vuelven complejos de mantener sin reactividad declarativa.
