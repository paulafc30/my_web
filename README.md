# Portfolio · Paula Fernández Cañas

Sitio web personal de [Paula Fernández Cañas](https://www.linkedin.com/in/paula-fernandez-canas/), desarrolladora fullstack junior.

> **Stack del sitio:** HTML5, CSS3 y JavaScript vanilla. Sin frameworks, sin build step. Funciona abriendo `index.html` directamente en un navegador.

## Estructura

```
my_web/
├── index.html         · Home con proyectos destacados
├── about.html         · Sobre mí, experiencia, formación, stack, certificaciones
├── project-1.html     · Caso de estudio · Secure Files App (Toomba)
├── project-2.html     · Caso de estudio · Compiso (TFG en MEDAC)
├── css/
│   ├── normalize.css
│   └── style.css      · Estilos del sitio (variables, layout, responsive)
├── js/
│   └── main.js        · Sticky header, smooth scroll, fade-in con IntersectionObserver
└── README.md
```

## Cómo verlo en local

Solo tienes que abrir `index.html` en cualquier navegador. No hay servidor ni instalación.

Si prefieres servirlo (algunas cosas como el cacheo de fuentes funcionan mejor con `http://`):

```bash
# Opción 1: Python
python3 -m http.server 8000

# Opción 2: Node
npx serve .
```

Luego abres `http://localhost:8000`.

---

## Cómo publicarlo gratis (GitHub Pages, 1 minuto)

Como ya está en GitHub, esta es la opción más rápida. La URL será del tipo `https://paulafc30.github.io/<nombre-del-repo>/`.

1. Ve al repo en github.com.
2. Pestaña **Settings** → menú lateral **Pages**.
3. En **Build and deployment** → **Source**, elige **Deploy from a branch**.
4. En **Branch** elige **main** y carpeta `/ (root)`. Pulsa **Save**.
5. En 1–2 minutos, GitHub te dará la URL pública arriba. Copia esa URL en tu LinkedIn y CV.

> Si más adelante quieres un dominio propio (ej. `paulafernandez.dev`), GitHub Pages permite configurarlo gratis desde la misma pantalla en **Custom domain**.

## Alternativas igual de gratis y rápidas

- **Netlify** — ve a [app.netlify.com](https://app.netlify.com), conecta el repo de GitHub y listo. Despliegue automático en cada push. Permite dominio gratis tipo `paulafernandez.netlify.app`.
- **Vercel** — [vercel.com](https://vercel.com), mismo flujo. URL tipo `paulafernandez.vercel.app`.
- **Cloudflare Pages** — [pages.cloudflare.com](https://pages.cloudflare.com), también desde GitHub. Muy rápida.

Cualquiera de las tres detecta que es un sitio estático sin configuración.

---

## Notas técnicas

- **Accesibilidad:** el contenido es visible sin JavaScript. La animación de entrada solo se aplica si el navegador soporta `IntersectionObserver` y el usuario no ha pedido `prefers-reduced-motion`.
- **Tipografía:** Inter (UI), Space Grotesk (titulares), JetBrains Mono (código y etiquetas), todas servidas desde Google Fonts.
- **Responsive:** mobile-first, breakpoints en 480px y 768px.
- **SEO básico:** `meta description`, `lang="es"`, Open Graph tags en `index.html`.

## Cómo actualizarlo

Toda la información personal (proyectos, experiencia, formación) está en los HTML. Para cambiar algo:

- **Añadir un proyecto:** duplica `project-2.html`, edita el contenido y añade una nueva tarjeta en `index.html` dentro de `<div class="project-list">`.
- **Cambiar colores:** edita las variables al principio de `css/style.css` (`--color-accent`, `--color-bg`, etc.).
- **Cambiar el texto del hero:** edita `<h1 class="intro-headline">` en `index.html`.

---

© Paula Fernández Cañas
