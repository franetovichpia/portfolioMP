# Agency Portfolio

Estructura base de un portfolio profesional para agencia digital.
**Ninguna sección de contenido está implementada todavía** — este es
el andamiaje (scaffolding) del proyecto, listo para empezar a construir.

## Stack

- **Next.js 15** (App Router)
- **React 19** + **TypeScript** (modo estricto)
- **Tailwind CSS** + **shadcn/ui**
- **Framer Motion** (animaciones)
- **Lucide React** (iconografía)
- **next-themes** (dark mode)

## Cómo empezar

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando              | Descripción                          |
| --------------------- | ------------------------------------- |
| `npm run dev`          | Servidor de desarrollo               |
| `npm run build`        | Build de producción                  |
| `npm run start`        | Servir el build de producción        |
| `npm run lint`         | Lint con ESLint                      |
| `npm run lint:fix`     | Lint con auto-fix                    |
| `npm run type-check`   | Chequeo de tipos sin emitir output   |

## Estructura de carpetas

```
app/                  → Rutas, layout raíz, metadata, SEO (App Router)
  layout.tsx          → Layout principal (fonts, ThemeProvider, Header/Footer)
  page.tsx            → Home (placeholder)
  loading.tsx         → Loading state global
  error.tsx           → Error boundary global
  not-found.tsx       → Página 404
  sitemap.ts          → Sitemap dinámico
  robots.ts           → robots.txt dinámico

components/
  ui/                 → Componentes base de shadcn/ui (Button, Input, etc.)
  layout/             → Header, Footer, ThemeProvider
  shared/             → Componentes reutilizables (ThemeToggle, etc.)

sections/             → Secciones de página (Hero, Servicios, Proyectos...)
                        [vacío intencionalmente, se desarrolla después]

hooks/                → Custom hooks (useMediaQuery, useScrollPosition...)
lib/                  → utils.ts (cn), fonts.ts (next/font), constants.ts
utils/                → Funciones puras de formato/transformación
types/                → Tipos e interfaces compartidas
data/                 → Datos estáticos/mock (services, projects...)
public/               → Assets estáticos (imágenes, favicon)
styles/               → globals.css (Tailwind + variables de tema)
```

## Alias de importación

Configurado `@/*` → raíz del proyecto. Ejemplo:

```ts
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
```

## Dark Mode

Implementado con `next-themes`. El `ThemeProvider` envuelve la app en
`app/layout.tsx` con `attribute="class"` y `defaultTheme="system"`.
El toggle está en `components/shared/theme-toggle.tsx`.

## SEO

Metadata centralizada en `lib/constants.ts` (`SITE_CONFIG`) y consumida
desde `app/layout.tsx` (Open Graph, Twitter Card, robots). `sitemap.ts`
y `robots.ts` generan los archivos correspondientes automáticamente.

## Próximos pasos

1. Instalar componentes de shadcn/ui según se necesiten (`npx shadcn@latest add ...`).
2. Desarrollar las secciones dentro de `sections/` (Hero, Servicios, Proyectos, Nosotros, Contacto).
3. Completar `data/services.ts` y `data/projects.ts` con contenido real.
4. Reemplazar placeholders de `SITE_CONFIG` en `lib/constants.ts`.
5. Agregar imágenes reales en `public/images` y actualizar `og-image`.
