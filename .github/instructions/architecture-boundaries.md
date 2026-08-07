# Architecture Boundaries

Use this file for package ownership and generated-file boundaries.

## Source of truth
- Implement component behavior in `packages/core/src/components/**` first (Stencil web components).
- Treat `packages/angular` and `packages/react` as wrappers generated from core outputs.

## Package responsibilities
- `packages/core`: components, styles/themes, Storybook, and docs JSON generation (`packages/core/stencil.config.ts`).
- `packages/angular`: Angular wrappers and value accessors (`packages/angular/src/lib/design-system.module.ts`).
- `packages/react`: React wrappers generated to `packages/react/lib` from Stencil output targets.
- `packages/docs`: generated MDX content from `@ukho/admiralty-core/docs/docs.json` (`packages/docs/build.ts`).
- `packages/website`: Next.js app content under `packages/website/src/app/**`, imports generated docs via `@docs/*` alias.
- `packages/test-app`: Angular integration app for manual validation.

## Generated paths (do not edit manually)
- `packages/angular/src/lib/stencil-generated/*`
- `packages/react/lib/*`
- `packages/docs/components/*`

## Integration notes
- Import both CSS files where app styling is wired: `@ukho/admiralty-core/styles/admiralty.bundle.css` and `@ukho/admiralty-core/themes/default.css` (see `packages/website/src/app/layout.tsx`).
- Website is static-exported (`output: "export"`) and sets Turbopack root to monorepo root in `packages/website/next.config.mjs`.

