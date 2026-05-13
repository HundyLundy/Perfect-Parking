# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Structure

```text
artifacts-monorepo/
├── artifacts/              # Deployable applications
│   └── api-server/         # Express API server
├── lib/                    # Shared libraries
│   ├── api-spec/           # OpenAPI spec + Orval codegen config
│   ├── api-client-react/   # Generated React Query hooks
│   ├── api-zod/            # Generated Zod schemas from OpenAPI
│   └── db/                 # Drizzle ORM schema + DB connection
├── scripts/                # Utility scripts (single workspace package)
│   └── src/                # Individual .ts scripts, run via `pnpm --filter @workspace/scripts run <script>`
├── pnpm-workspace.yaml     # pnpm workspace (artifacts/*, lib/*, lib/integrations/*, scripts)
├── tsconfig.base.json      # Shared TS options (composite, bundler resolution, es2022)
├── tsconfig.json           # Root TS project references
└── package.json            # Root package with hoisted devDeps
```

## TypeScript & Composite Projects

Every package extends `tsconfig.base.json` which sets `composite: true`. The root `tsconfig.json` lists all packages as project references. This means:

- **Always typecheck from the root** — run `pnpm run typecheck` (which runs `tsc --build --emitDeclarationOnly`). This builds the full dependency graph so that cross-package imports resolve correctly. Running `tsc` inside a single package will fail if its dependencies haven't been built yet.
- **`emitDeclarationOnly`** — we only emit `.d.ts` files during typecheck; actual JS bundling is handled by esbuild/tsx/vite...etc, not `tsc`.
- **Project references** — when package A depends on package B, A's `tsconfig.json` must list B in its `references` array. `tsc --build` uses this to determine build order and skip up-to-date packages.

## Root Scripts

- `pnpm run build` — runs `typecheck` first, then recursively runs `build` in all packages that define it
- `pnpm run typecheck` — runs `tsc --build --emitDeclarationOnly` using project references

## Packages

### `artifacts/api-server` (`@workspace/api-server`)

Express 5 API server. Routes live in `src/routes/` and use `@workspace/api-zod` for request and response validation and `@workspace/db` for persistence.

- Entry: `src/index.ts` — reads `PORT`, starts Express
- App setup: `src/app.ts` — mounts CORS, JSON/urlencoded parsing, routes at `/api`
- Routes: `src/routes/index.ts` mounts sub-routers; `src/routes/health.ts` exposes `GET /health` (full path: `/api/health`)
- Depends on: `@workspace/db`, `@workspace/api-zod`
- `pnpm --filter @workspace/api-server run dev` — run the dev server
- `pnpm --filter @workspace/api-server run build` — production esbuild bundle (`dist/index.cjs`)
- Build bundles an allowlist of deps (express, cors, pg, drizzle-orm, zod, etc.) and externalizes the rest

### `lib/db` (`@workspace/db`)

Database layer using Drizzle ORM with PostgreSQL. Exports a Drizzle client instance and schema models.

- `src/index.ts` — creates a `Pool` + Drizzle instance, exports schema
- `src/schema/index.ts` — barrel re-export of all models
- `src/schema/<modelname>.ts` — table definitions with `drizzle-zod` insert schemas (no models definitions exist right now)
- `drizzle.config.ts` — Drizzle Kit config (requires `DATABASE_URL`, automatically provided by Replit)
- Exports: `.` (pool, db, schema), `./schema` (schema only)

Production migrations are handled by Replit when publishing. In development, we just use `pnpm --filter @workspace/db run push`, and we fallback to `pnpm --filter @workspace/db run push-force`.

### `lib/api-spec` (`@workspace/api-spec`)

Owns the OpenAPI 3.1 spec (`openapi.yaml`) and the Orval config (`orval.config.ts`). Running codegen produces output into two sibling packages:

1. `lib/api-client-react/src/generated/` — React Query hooks + fetch client
2. `lib/api-zod/src/generated/` — Zod schemas

Run codegen: `pnpm --filter @workspace/api-spec run codegen`

### `lib/api-zod` (`@workspace/api-zod`)

Generated Zod schemas from the OpenAPI spec (e.g. `HealthCheckResponse`). Used by `api-server` for response validation.

### `lib/api-client-react` (`@workspace/api-client-react`)

Generated React Query hooks and fetch client from the OpenAPI spec (e.g. `useHealthCheck`, `healthCheck`).

### `scripts` (`@workspace/scripts`)

Utility scripts package. Each script is a `.ts` file in `src/` with a corresponding npm script in `package.json`. Run scripts via `pnpm --filter @workspace/scripts run <script>`. Scripts can import any workspace package (e.g., `@workspace/db`) by adding it as a dependency in `scripts/package.json`.

### `artifacts/perfect-parking` (`@workspace/perfect-parking`)

Marketing website for Perfect Parking — a Texas-based parking revenue management platform.

- **Stack**: React + Vite + Tailwind CSS + wouter (routing) + framer-motion
- **Brand**: Primary #1965b1, Navy #0f3d6e (bg-navy), Gold/secondary #dec600
- **Contact**: (361) 585-1111 | support@perfectparking.com
- **GHL Webhook**: `https://services.leadconnectorhq.com/hooks/ZF2Qjd4J1GmT9w5XbinN/webhook-trigger/KkGW9R8Rqu2pZUvyYS6P`
- **GA4**: Hardcoded in `index.html` via gtag

**City landing pages (SEO/programmatic)**:
- Data file: `src/data/texasCities.ts` — 406 Texas cities with slug, population, region
- Component: `src/pages/CityPage.tsx` — dynamic template driven by data (NOT individual files)
- Route: `/locations/:citySlug` in `App.tsx`
- Locations index: `src/pages/Locations.tsx` — includes searchable city grid grouped by region
- Sitemap: `public/sitemap.xml` — 414 URLs (406 city pages + static pages)

**Key pages**: `/` (home), `/locations`, `/locations/:citySlug`, `/faq`, `/contact`, `/solutions`, `/industries`, `/case-studies`, `/about`, `/lp` (landing), `/thank-you`

**Deployment**: Static deploy on Vercel. `vite.config.ts` uses `PORT || 3000` and `BASE_PATH || "/"` fallbacks so Vercel builds work without env vars.

## Perfect Parking — Design Rules

**Text color on dark backgrounds (ENFORCED)**
- Never use black or default `text-foreground` on dark backgrounds (`bg-navy`, `bg-brand-teal`, `style background #00305b`, or any other dark surface).
- Always add `text-white` explicitly to every heading (`h1`, `h2`, `h3`) and body text element on dark backgrounds. Do NOT rely on CSS inheritance — Tailwind base styles can override inherited color on heading elements.
- Allowed text color combinations:
  - Dark navy / teal background → `text-white` or `text-white/70` (muted body) or `text-secondary` (gold accents)
  - White or `#E8EFF7` (light blue) background → `text-foreground` / `text-navy` / `#00305b`
  - Gold `#DEC600` background → `#00305b` dark navy text only
- Black text is only permitted on white or light blue (`#E8EFF7`) backgrounds.
