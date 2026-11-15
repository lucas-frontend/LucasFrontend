# Portfolio — Lucas Benítez

Portfolio profesional construido con **React 19 + Vite 8 + CSS moderno** a partir de una copia de `portfolio-react-pro - evolucion`. El proyecto original no se ha modificado.

## Abrir en Antigravity / Windows

1. Descomprime este proyecto en una carpeta nueva, por ejemplo `C:\Dev\Portfolio_Lucas_Moderno`.
2. Abre esa carpeta desde Antigravity.
3. En el terminal PowerShell ejecuta:

```powershell
npm install
npm run dev
```

4. Abre la URL local que muestra Vite (normalmente http://localhost:5173).
5. Para comprobar la compilación: `npm run build`.

## Antes de publicar (importante)

- **Correo de contacto:** en `src/App.jsx` revisa `const EMAIL`. Se tomó del CV antiguo y puedes sustituirlo por tu correo profesional.
- **Monaster:** las pantallas de la tarjeta son recreaciones con nombres y turnos ficticios, **no capturas de la base de datos del hotel**. Su código no se publica.
- **Haloclock:** el botón GitHub enlaza a `https://github.com/lucas-frontend/haloclock`.
- **LinkedIn:** no se incluyó porque no se facilitó una URL real. Añádelo si lo deseas.
- **CV:** no se enlazó el CV antiguo, porque no presenta todavía tus proyectos de desarrollo. Cuando tengas el CV nuevo, podrá añadirse como descarga.
- **Foto:** `src/assets/lucas-profile.webp` y `src/assets/lucas-avatar.webp` derivan de la fotografía que facilitaste, sin sustituir tu identidad ni inventar un retrato.

## Estructura

- `src/App.jsx`: componentes, datos de los proyectos y contenido del portfolio.
- `src/styles/global.css`: diseño y responsive.
- `src/assets/`: fotografías optimizadas.
- `index.html`: metadatos básicos de SEO.

Sin backend, sin claves privadas, sin `.env`, sin dependencias de animación extra. El código sigue en JavaScript/JSX para conservar la compatibilidad del proyecto original; TypeScript se puede añadir posteriormente, después de publicar una versión funcional.
