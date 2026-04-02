# GitHub Copilot Instructions

This is a pnpm + Nx monorepo for the ADMIRALTY Design System. `packages/core` (Stencil) is the source of truth; all other packages are generated or consume its outputs.

## Architecture

- `packages/core` — Stencil web components + SCSS. Edit component behavior here first.
- `packages/angular` — Angular wrappers. `src/lib/stencil-generated/*` is generated; never edit manually.
- `packages/react` — React wrappers. `lib/*` is generated; never edit manually.
- `packages/docs` — MDX docs generated from `docs/docs.json`. `components/*` is generated; never edit manually.
- `packages/website` — Next.js static site. Edit content under `src/app/**`.
- `packages/test-app` — Angular integration app; manual validation only.

## Rules

- Always implement new component logic in `packages/core/src/components/**` as a Stencil component first.
- Use ADMIRALTY custom events: `admiraltyInput` (text/number inputs), `admiraltyChange` (select/checkbox/radio-group), `admiraltyRadioChange` (radio). Do not invent new event names.
- Use `@Watch` for prop-driven state sync (see `input.tsx`, `radio.tsx`).
- Angular form controls need a `ValueAccessorConfig` entry in `stencil.config.ts`.
- Always import BOTH: `@ukho/admiralty-core/styles/admiralty.bundle.css` AND `@ukho/admiralty-core/themes/default.css`.
- Formatting: 2-space indent, LF line endings (`.editorconfig`), trailing commas, 120 print width (`.prettierrc.yml`).

## Key commands

```bash
pnpm install --frozen-lockfile
pnpm build:all
pnpm build:core
cd packages/core && pnpm test:spec
cd packages/core && pnpm storybook
cd packages/website && pnpm dev
```

## Command execution behavior

- When a task requires validation or generation, attempt to run the needed `pnpm` command(s) instead of only listing them.
- Prefer repo scripts from `package.json` and package scripts from `packages/core/package.json` over ad-hoc shell commands.
- For guided component creation prompts, attempt validation commands in order and report result for each command:
  1. `pnpm build:core`
  2. `cd packages/core && pnpm test:spec`
  3. `pnpm build:docs`
  4. `pnpm build:website`
- If command execution is blocked (permissions/tooling/session limits), state that clearly and provide the exact command(s) for the user to run manually.

## Never touch these (generated on build)

- `packages/angular/src/lib/stencil-generated/*`
- `packages/react/lib/*`
- `packages/docs/components/*`

