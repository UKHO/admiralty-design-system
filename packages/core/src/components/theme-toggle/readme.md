# admiralty-theme-toggle



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description                                                                                                   | Type                          | Default              |
| ----------- | ------------ | ------------------------------------------------------------------------------------------------------------- | ----------------------------- | -------------------- |
| `ariaLabel` | `aria-label` | Label for accessibility. Defaults to "Toggle dark mode".                                                      | `string`                      | `'Toggle dark mode'` |
| `disabled`  | `disabled`   | Whether the toggle should be disabled.                                                                        | `boolean`                     | `false`              |
| `theme`     | `theme`      | The current theme preference. Can be 'light', 'dark', or 'auto' (system preference). Default value is 'auto'. | `"auto" \| "dark" \| "light"` | `'auto'`             |


## Events

| Event                  | Description                                      | Type                                        |
| ---------------------- | ------------------------------------------------ | ------------------------------------------- |
| `admiraltyThemeChange` | Event is fired when the theme preference changes | `CustomEvent<ThemeToggleChangeEventDetail>` |


## Dependencies

### Depends on

- [admiralty-icon](../icon)

### Graph
```mermaid
graph TD;
  admiralty-theme-toggle --> admiralty-icon
  style admiralty-theme-toggle fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
