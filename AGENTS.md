# AGENTS.md

## What this repo is
- Monorepo for the ADMIRALTY Design System: Stencil web components (`packages/core`) are the source of truth; Angular and React packages are generated wrappers around core outputs.
- Workspace tooling is `pnpm` + Nx/Lerna (`package.json`, `nx.json`, `lerna.json`, `pnpm-workspace.yaml`).

## Architecture map (read this first)
- `packages/core`: Stencil components, styles, themes, Storybook, and docs JSON generation (`packages/core/stencil.config.ts`).
- `packages/angular`: Angular wrappers + value accessors; relies on generated files in `src/lib/stencil-generated/*`.
- `packages/react`: React wrappers generated to `packages/react/lib` from Stencil output target.
- `packages/docs`: Generates MDX docs from `@ukho/admiralty-core/docs/docs.json` (`packages/docs/build.ts`, `packages/docs/plugins/websiteDocsGenerator.ts`).
- `packages/website`: Next.js site consuming React components and generated docs via `@docs/* -> ../../docs/components/*` alias (`packages/website/tsconfig.json`).
- `packages/test-app`: Angular integration app for manual validation.

## Critical workflows
- Install deps: `pnpm install --frozen-lockfile` (CI uses this).
- Build all packages: `pnpm build:all` (root script).
- Build individual packages: `pnpm build:core`, `pnpm build:angular`, `pnpm build:react`, `pnpm build:docs`, `pnpm build:website`.
- Guided component validation order (from `.github/copilot-instructions.md`): `pnpm build:core` -> `cd packages/core && pnpm test:spec` -> `pnpm build:docs` -> `pnpm build:website`.
- Core tests: `cd packages/core && pnpm test:spec` (CI runs `npm run test:spec -- --ci`).
- Core local dev: `cd packages/core && pnpm start`; Storybook: `cd packages/core && pnpm storybook`.
- Website local dev: `cd packages/website && pnpm dev`.

## Project-specific patterns to follow
- Implement component behavior in Stencil first (`packages/core/src/components/**`); wrappers are generated from `stencil.config.ts` output targets.
- Prefer ADMIRALTY custom events (`admiraltyInput`, `admiraltyChange`, etc.) and `@Watch`-driven state sync patterns (see `packages/core/src/components/input/input.tsx`, `packages/core/src/components/radio/radio.tsx`).
- Angular form integration depends on configured value accessors in `stencil.config.ts` and `DesignSystemModule.forRoot()` custom element registration (`packages/angular/src/lib/design-system.module.ts`).
- Website docs pages import generated MDX artifacts, e.g. `import Props from "@docs/button/props.mdx"` (`packages/website/src/app/components/button/button.mdx`).

## Integration boundaries and gotchas
- Treat `packages/docs/components/*` as generated; `packages/docs/README.md` warns changes are overwritten on build.
- Treat `packages/angular/src/lib/stencil-generated/*` and `packages/react/lib/*` as generated from core build.
- CSS usage is split bundle + theme: import both `@ukho/admiralty-core/styles/admiralty.bundle.css` and `@ukho/admiralty-core/themes/default.css` (see `packages/website/src/app/layout.tsx`, `MIGRATION_GUIDE.md`).
- Website is static-exported Next app (`output: "export"` in `packages/website/next.config.mjs`); Turbopack root is pinned to the monorepo root there.

## CI/release facts that affect changes
- CI node version is `20.x` (`.github/workflows/*.yml`).
- Required checks for release automation include `build`, `test-core-spec`, `chromatic-deployment` (`package.json` auto config).
- Release pipeline uploads build artifacts for core/angular/react, runs `auto shipit`, then runs release notification email action (`.github/workflows/actions/release-packages/action.yml`, `.github/workflows/actions/release-email/action.yml`).

## Practical edit strategy for agents
- If changing a component API/event in `packages/core`, also validate generated wrapper behavior and docs generation path.
- For docs/content changes, prefer editing website MDX under `packages/website/src/app/**`; regenerate docs when API tables must update.
- Keep formatting aligned with repo config (`.editorconfig`, `.prettierrc.yml`) and avoid line-ending churn-only commits.

## Prompt templates and IDE usage
- **Guided agent prompts** live in `.github/prompts/`:
  - `new-component.prompt.md` — interactively scaffolds all files for a new Stencil component
- Copilot workspace guidance lives in `.github/copilot-instructions.md`.
- Scoped agent guidance files live in `.github/instructions/`.
- **JetBrains / WebStorm**: no repo-specific `.junie/guidelines.md` is currently present; when needed, start prompts with explicit repo context.
- **Cursor**: `.cursor/rules/` is not present in this repo; do not assume repo-specific auto-loaded rules.
- For any tool without auto-discovery, start prompts with: `Follow AGENTS.md in this repo.`

