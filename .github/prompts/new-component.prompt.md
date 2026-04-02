---
mode: agent
tools:
  - codebase
  - editFiles
  - runCommands
description: Create a new ADMIRALTY Stencil component with all required files
---

You are going to create a brand new component for the ADMIRALTY Design System. Before generating anything, ask the user for the following information **one block at a time** and wait for their response:

1. **Component name** — kebab-case, without the `admiralty-` prefix (e.g. `my-widget`). The tag will become `admiralty-my-widget`.
2. **Short description** — one or two sentences describing what this component does.
3. **Props** — list each prop as `name: type = default (description)`. If none, say "none".
4. **Events** — list each custom event as `eventName: PayloadType (description)`. Use ADMIRALTY naming convention (`admiraltyChange`, `admiraltyInput`, etc.). If none, say "none".
5. **Is this a form control?** (yes/no) — i.e. should it participate in Angular reactive forms via `ngModel` / `formControl`.
6. **Does it use slots?** (yes/no) — if yes, list the slot names and their purpose.

---

Once you have all answers, generate the following files. Use the patterns from `packages/core/src/components/button/button.tsx` (simple component) and `packages/core/src/components/select/select.tsx` (form control with events) as reference.

### Files to generate

**`packages/core/src/components/{name}/{name}.tsx`**
- `@Component` decorator with `tag: 'admiralty-{name}'`, `styleUrl: '{name}.scss'`, `scoped: true`
- One `@Prop()` per prop, each with a JSDoc comment
- One `@Event()` per event, each with a JSDoc comment, emitting the declared payload type
- Use `@Watch` on any prop that must sync state (see `input.tsx` for the value/watch pattern)
- `render()` returning JSX with a `<Host>` wrapper

**`packages/core/src/components/{name}/{name}.scss`**
- Empty scaffold with a `:host` block and a comment referencing `{name}.vars.scss`

**`packages/core/src/components/{name}/{name}.vars.scss`**
- CSS custom property declarations (`--admiralty-{name}-*`) for any themeable values

**`packages/core/src/components/{name}/{name}.interface.ts`** (only if events have a payload type)
- One exported interface per event payload, e.g. `export interface MyWidgetChangeEventDetail { value: string; }`

**`packages/core/src/components/{name}/{name}.spec.ts`**
- Import `newSpecPage` from `@stencil/core/testing`
- `describe('admiralty-{name}', ...)` block with at minimum:
  - a "renders" test asserting the default HTML snapshot
  - one test per significant prop variant

**`packages/core/src/components/{name}/{name}.stories.ts`**
- `Meta` + `StoryObj<{ComponentClass}>` using `@storybook/web-components` and `lit` `html` template tag
- A `Standard` story plus one story per key visual variant

**`packages/website/src/app/components/{name}/{name}.mdx`**
- MDX page following the structure of `packages/website/src/app/components/button/button.mdx`
- Sections: intro paragraph, ## Props, ## Events, ## Methods, ## CSS Shadow Parts, ## CSS Custom Properties, ## Slots
- Each API section imports from `@docs/{name}/props.mdx` etc. (generated, so leave the import in place even though the file doesn't exist until `pnpm build:docs` is run)

---

### Extra steps (do these after file creation)

- If the component **is a form control**, remind the user to add a `ValueAccessorConfig` entry to `packages/core/stencil.config.ts` and show them the exact block to add, referencing the existing entries for guidance.
- Add the new component to the nav list in `packages/website/src/app/layout.tsx` (`componentChildren` array) in alphabetical order.
- Attempt to run the validation commands in order and report pass/fail for each one. If command execution is unavailable in the current session, clearly say so and then print the exact commands for manual execution:
  ```bash
  pnpm build:all
  cd packages/core && pnpm test:spec
  ```

