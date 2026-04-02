# Component Authoring

Use this file when adding or changing UI component behavior.

## Authoring rules
- Implement new behavior in Stencil first: `packages/core/src/components/**`.
- Follow existing custom event names:
  - `admiraltyInput` for text/number input patterns
  - `admiraltyChange` for select/checkbox/radio-group patterns
  - `admiraltyRadioChange` for radio patterns
- Use `@Watch` for prop-driven state sync where applicable (see `packages/core/src/components/input/input.tsx` and `packages/core/src/components/radio/radio.tsx`).

## Angular integration
- For form controls, add/update `ValueAccessorConfig` entries in `packages/core/stencil.config.ts`.
- Ensure registration path remains compatible with `DesignSystemModule.forRoot()` in `packages/angular/src/lib/design-system.module.ts`.

## Docs integration
- Website component pages live under `packages/website/src/app/components/**`.
- Keep generated MDX imports in component docs pages (for example `import Props from "@docs/button/props.mdx"` in `packages/website/src/app/components/button/button.mdx`).
- Regenerate docs when component API changes affect generated tables.

## Do not edit generated wrapper outputs
- `packages/angular/src/lib/stencil-generated/*`
- `packages/react/lib/*`
- `packages/docs/components/*`

