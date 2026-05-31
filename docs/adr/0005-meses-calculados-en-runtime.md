# ADR 0005 — Antigüedad ("X meses en BNT") calculada en runtime, no hardcodeada

- **Fecha:** 2026-05-21
- **Estado:** Aceptada

## Contexto

El copy del hero dice "Llevo **N meses** trabajando como desarrolladora junior en BNT Business Telecom" y aparece en 4 sitios (hero ES, hero EN, about ES, about EN). Originalmente estaba escrito como **7 meses** literal.

Problemas del valor hardcodeado:

1. Paula tiene que acordarse de actualizarlo cada mes. Inevitablemente lo olvida y queda desactualizado.
2. Un reclutador puede ver "7 meses" en agosto cuando ya son 9. Da impresión de portfolio abandonado.
3. Hay que cambiar 4 sitios cada vez, con riesgo de inconsistencias (hero dice 7, about dice 6).

## Decisión

Implementar `monthsAtBNT()` en `copy.jsx` que:

- Toma la fecha de inicio **fija** (3 noviembre 2025).
- Calcula meses completos transcurridos hasta `new Date()` (momento de carga de la página).
- Redondea **al mes más cercano**: si han pasado >= 15 días del mes en curso, suma 1. Esto evita el problema de "llevo 6 meses y 28 días" diciendo "6 meses" cuando claramente está más cerca de 7.
- Expone `MESES_BNT` y `MESES_ES` (forma singular/plural) como constantes globales del archivo, usadas dentro de JSX: `{MESES_BNT} {MESES_ES}`.

```js
function monthsAtBNT() {
  const start = new Date(2025, 10, 3); // 3 noviembre 2025 (mes 0-indexed)
  const now = new Date();
  let months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
  const dayDiff = now.getDate() - start.getDate();
  if (dayDiff >= 15) months++;
  else if (dayDiff < 0 && dayDiff > -15) months--;
  return Math.max(0, months);
}
```

## Consecuencias

### A favor
- **Cero mantenimiento.** El portfolio siempre muestra la cifra correcta.
- **Un único punto de cambio.** Si en el futuro Paula cambia de empresa, solo hay que tocar la fecha en `monthsAtBNT()` y, eventualmente, el nombre de la empresa.
- **Misma cifra en hero y about.** Imposible que se desincronicen.
- **Manejo correcto de plurales.** "1 mes" vs "2 meses" en ES.

### En contra
- **Depende del reloj del cliente.** Si alguien tiene la fecha del sistema mal, verá una cifra incorrecta. Riesgo despreciable.
- **No funciona si JS está deshabilitado.** En ese caso no se ve nada del sitio porque es SPA — no añade riesgo extra.

### A vigilar
- **Cambio de empresa:** actualizar `start` y el resto del copy ("en BNT Business Telecom" → nueva empresa). Quizá merece la pena llevar `start` a una constante separada del proyecto en lugar de hardcodear `new Date(2025, 10, 3)` dentro de la función.
- **Cuando llegue a años:** revisar si el copy "Llevo 13 meses" suena bien o conviene un "Llevo más de un año". Lógica posible:
  - 1-23 meses → "X meses"
  - 24+ → "X años" (redondeando).

## Alternativas consideradas

- **Valor hardcodeado actualizado manualmente.** El problema que originó esta decisión.
- **Calcular en CI antes del despliegue y meterlo en el HTML.** No tenemos CI ni build step. Más complejo que el runtime.
- **Decir "trabajando desde noviembre de 2025"** y dejar al lector calcular. Pierde la fuerza retórica de "llevo X meses" y obliga al reclutador a hacer la cuenta.
