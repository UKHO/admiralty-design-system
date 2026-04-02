# Build and Validation

Use this file for command selection and validation order.

## Command preferences
- Prefer repo scripts from root `package.json` and package scripts from `packages/core/package.json`.
- Use `pnpm` commands from this repo instead of ad-hoc alternatives.
- If validation or generation is needed, attempt commands and report pass/fail results.

## Core commands
- `pnpm install --frozen-lockfile`
- `pnpm build:all`
- `pnpm build:core`
- `pnpm build:angular`
- `pnpm build:react`
- `pnpm build:docs`
- `pnpm build:website`
- `cd packages/core && pnpm test:spec`
- `cd packages/core && pnpm storybook`
- `cd packages/website && pnpm dev`

## Guided component validation order
Run in this order and report each result:
1. `pnpm build:core`
2. `cd packages/core && pnpm test:spec`
3. `pnpm build:docs`
4. `pnpm build:website`

## CI/release facts used by agents
- CI uses Node `20.x` (`.github/workflows/*.yml`).
- Release checks include `build`, `test-core-spec`, and `chromatic-deployment` (`package.json` auto config).
- Release flow runs build/test jobs, `auto shipit`, then release notification email (`.github/workflows/build.yml`, `.github/workflows/actions/release-packages/action.yml`, `.github/workflows/actions/release-email/action.yml`).

