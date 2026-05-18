# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at localhost:3000
npm run build    # production build
npm run lint     # ESLint (TypeScript + React hooks rules)
```

No test suite is configured.

Commits are enforced by `husky` + `commitlint` (Conventional Commits). All commit messages must follow the `type(scope): message` format. Versioning is automated via `semantic-release`.

## Architecture

Single-page Next.js 16 (App Router) portfolio. The page is a single route with scroll-snapping sections.

**Data flow**: `src/data/data.json` is the sole source of truth for all content (personal details, skills, work history, projects, certifications, social links). `src/app/page.tsx` is a server component that imports this JSON and passes it as a typed `Source` prop to `src/components/HomeClient.tsx`, which is the `"use client"` boundary where all rendering and animations live.

**Types**: `src/types/index.ts` defines the TypeScript types (`Source`, `Skill`, `Work`, `Project`, `Achievement`) that mirror the shape of `data.json`. When adding new fields to `data.json`, update the types here too.

**Components**: Each portfolio section (`Hero`, `Skill`, `WorkCard`, `ProjectCard`, `CertificationCard`, `Footer`, `Navbar`, `Title`) is a standalone component in `src/components/`. `Hero` has its content hardcoded (not from `data.json`).

**Styling**: Tailwind CSS v4 — uses `@import "tailwindcss"` and a `@theme {}` block (not the v3 `tailwind.config.js` approach). Design tokens are defined in `src/app/globals.css`:
- `--color-primary`: `#f6f1d5` (warm cream)
- `--color-space`: `#0e0e0e` (near-black background)
- `--color-secondary`: `#27272a`

Custom animations (`float`, `glow-pulse`, `orbit-cw`, `orbit-ccw`, `shimmer`, `star-twinkle`, `comet-pass`) and utility classes (`.glass-card`, `.gradient-text`, `.hero-name`, `.title-reflect`, `.icon-reflect`) are all defined in `globals.css`.

**Animations**: Uses `motion/react` (the Motion library, successor to Framer Motion) — **not** `framer-motion`. Staggered entrance animations use a shared `listVariants`/`itemVariants` pattern in `HomeClient.tsx`.

**Static assets**: Profile image (`me.jpeg`), project screenshots (`proj-*.png`), and `resume.pdf` live in `public/`. External images are restricted to `cdn.jsdelivr.net` only (see `next.config.ts`).

**Path alias**: `@/` maps to `src/`.
