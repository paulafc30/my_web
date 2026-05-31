# Architecture Decision Records (ADR)

Esta carpeta guarda las decisiones técnicas importantes del proyecto y **el porqué** de cada una. Cuando alguien (humano o IA) se pregunte "¿por qué esto se hizo así?", la respuesta vive aquí.

## Formato de un ADR

Un ADR es un Markdown corto con esta estructura:

```markdown
# ADR NNNN — Título corto en imperativo

- **Fecha:** YYYY-MM-DD
- **Estado:** propuesta | aceptada | superada por ADR-XXXX | rechazada
- **Contexto:** qué problema o restricción enfrentábamos.
- **Decisión:** qué elegimos hacer.
- **Consecuencias:** qué ganamos, qué perdemos, qué hay que vigilar.
- **Alternativas consideradas:** otras opciones y por qué se descartaron.
```

## Cómo añadir uno

1. Mira el último número usado en esta carpeta.
2. Crea `NNNN-titulo-corto.md` con el siguiente número (con padding de 4 dígitos).
3. Mantén el ADR **corto** (máximo 1 página). Si necesita más, probablemente toca dividirlo.
4. Una vez aceptado, **no se edita el contenido principal**. Si una decisión se invalida, crea un nuevo ADR que la supere y marca el viejo como `superado por ADR-XXXX`.

## Índice actual

| Nº   | Título                                              | Estado    |
| ---- | --------------------------------------------------- | --------- |
| 0001 | [SPA en React vía CDN](0001-spa-react-via-cdn.md)   | Aceptada  |
| 0002 | [Tipografía monoespaciada](0002-tipografia-monoespaciada.md) | Aceptada  |
| 0003 | [i18n centralizado en copy.jsx](0003-i18n-en-copy-jsx.md) | Aceptada |
| 0004 | [image-slot como custom element](0004-image-slot-custom-element.md) | Aceptada |
| 0005 | [Antigüedad calculada en runtime](0005-meses-calculados-en-runtime.md) | Aceptada |
