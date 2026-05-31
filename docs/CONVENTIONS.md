# Convenciones del proyecto

> Reglas no negociables para mantener coherencia. Útil tanto para Paula como para cualquier IA que vaya a escribir código aquí.

## Idioma

- **Strings de UI** (lo que ve el usuario): siempre dentro de `copy.jsx`, nunca hardcodeadas en componentes. ES y EN obligatorios.
- **Comentarios técnicos** (en JSX/JS/CSS): preferiblemente en español si son sobre lógica del producto ("Calcula meses desde la fecha de inicio en BNT") o en inglés si son sobre patrones genéricos ("Debounced scroll handler"). Mantener consistencia dentro del mismo archivo.
- **Nombres de variables y funciones**: inglés. `monthsAtBNT()`, no `mesesEnBNT()`.
- **Nombres de clases CSS**: inglés en kebab-case. `.section-head`, no `.cabecera-seccion`.

## Estilo de código

### JSX / JavaScript
- **Comillas:** dobles `"` en JSX, simples `'` en JS plano.
- **Sin semicolons opcionales:** sí semicolons al final de cada sentencia (consistencia con el código existente).
- **Funciones de componente:** declaradas con `function ComponentName() {}`, no `const ComponentName = () =>`. Es lo que hay en el código actual.
- **Hooks personalizados:** prefijo `use`, en camelCase: `useTweaks`, `useCustomCursor`.
- **Imports:** no hay imports porque no hay módulos. Todo carga como scripts globales en el navegador. Si necesitas algo de una librería externa, añádela como `<script>` en `index.html`.
- **No usar APIs experimentales** sin justificación (ej. `useTransition` solo si hay motivo).

### CSS
- **Variables CSS** para todos los colores, espacios y fuentes. Definidas en `:root` (modo claro) y `[data-theme="dark"]` (modo oscuro). No hardcodear colores en componentes.
- **Selectores planos**, evitar anidamiento profundo. Máximo 2 niveles (`.section .title`).
- **Nada de `!important`.** Si lo necesitas, repiensa el selector.
- **Mobile-first opcional**, lo importante es que sea responsive con breakpoints definidos arriba del archivo. Breakpoints actuales: 720px y 900px.

## Comentarios: el "porqué" sobre el "qué"

❌ **Mal** (explica lo obvio):
```js
// Incrementar months en 1
months++;
```

✅ **Bien** (explica decisión):
```js
// Redondeo al mes más cercano: si pasan >= 15 días del mes actual, suma 1
// para que en el día 16 el usuario ya vea "X+1 meses" en vez de seguir con X.
if (dayDiff >= 15) months++;
```

❌ **Mal** (renombra el código en lenguaje natural):
```jsx
{/* Renderizar el header */}
<Header />
```

✅ **Bien** (decisión arquitectónica):
```jsx
{/* Header arriba del Hero para que el blur del sticky se note al scrollear el retrato. */}
<Header />
```

### Cuándo usar un comentario

1. **Al lado de un workaround o hack:** "Safari ignora `aspect-ratio` en algunos casos, por eso el padding-bottom de respaldo."
2. **Al lado de una decisión que parece arbitraria:** "Usamos 15 días para redondeo porque queda más cerca del lenguaje natural ('llevo 7 meses')."
3. **Antes de una función exportada o reutilizable:** docstring tipo JSDoc.
4. **Cuando un valor mágico no es obvio:** "60 = altura del header en px, usado para offset del scroll."

### Docstrings JSDoc para funciones

Para funciones que no sean componentes triviales, usar JSDoc:

```js
/**
 * Calcula meses completos transcurridos desde la fecha de inicio en BNT,
 * redondeando al mes más cercano (>= 15 días suma 1).
 *
 * @returns {number} Meses como entero >= 0.
 */
function monthsAtBNT() { ... }
```

Para componentes React con props, también:

```jsx
/**
 * Pinta una card de proyecto con thumbnail, descripción y stack.
 *
 * @param {Object} props
 * @param {Object} props.p  Proyecto desde COPY[lang].projects.list
 */
function ProjectCard({ p }) { ... }
```

## Cuándo crear un nuevo archivo vs. ampliar uno existente

- **Una sección nueva (Blog, Stack, etc.)** → añadir componente dentro de `main.jsx`. No fragmentar todavía.
- **Un componente realmente reutilizable** (usado 3+ veces) → llevarlo a `components.jsx`.
- **Una nueva traducción** → siempre dentro de `copy.jsx`.
- **Un custom element nuevo (no React)** → archivo `.js` propio en la raíz.
- **Una decisión técnica relevante** → un ADR en `docs/adr/`.

## Cómo añadir un texto nuevo

1. Identifica la sección en `copy.jsx` (ej. `hero`, `about`, `contact`).
2. Añade la clave dentro tanto del bloque `es:` como del `en:`. Si solo añades en uno, el otro idioma se rompe.
3. Usa la clave en el componente: `{t.miSeccion.miClave}`.

## Cómo añadir un proyecto al carrusel

1. Abre `copy.jsx`.
2. Dentro de `es.projects.list` (y luego `en.projects.list`), añade un nuevo objeto con la misma forma que los existentes (`n`, `name`, `sub`, `tag`, `status`, `role`, `desc`, `stack`, `year`, `link`).
3. Si quieres que enlace a una página de caso de estudio, créala como archivo HTML en la raíz (mismo patrón que `project-1.html`) y apunta `link` ahí.

## Qué NO hacer

- ❌ Hardcodear strings de UI en componentes React. Todo a `copy.jsx`.
- ❌ Añadir un build step sin justificarlo en un ADR.
- ❌ Importar librerías sin checkear el coste (peso, mantenimiento). El portfolio debe pesar < 200KB JS sin contar React/Babel.
- ❌ Romper compatibilidad con navegadores recientes (últimas 2 versiones de Chrome, Firefox, Safari, Edge).
- ❌ Modificar `index.html` por capricho. Es deliberadamente mínimo.
- ❌ Mezclar idiomas dentro del mismo string (ej. botón "Click aquí" + tooltip en inglés). Coherencia por idioma seleccionado.
