# admiralty-pill



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                           | Type                                           | Default            |
| ---------- | ---------- | ------------------------------------- | ---------------------------------------------- | ------------------ |
| `colour`   | `colour`   | The background colour of the pill.    | `"admiralty-blue" \| "bright-blue" \| "white"` | `'admiralty-blue'` |
| `label`    | `label`    | Label the pill.                       | `string`                                       | `undefined`        |
| `number`   | `number`   | The number of the pill.               | `string`                                       | `undefined`        |
| `selected` | `selected` | Whether to show the pill is selected. | `boolean`                                      | `false`            |
| `text`     | `text`     | The text of the pill.                 | `string`                                       | `undefined`        |


## CSS Custom Properties

| Name                                             | Description                                  |
| ------------------------------------------------ | -------------------------------------------- |
| `--admiralty-pill-background-colour`             | Background colour of the pill                |
| `--admiralty-pill-item-number-background-colour` | Background colour for the pill's item number |
| `--admiralty-pill-item-number-colour`            | Colour for the pill's item number            |
| `--admiralty-pill-item-selected-icon`            | Colour of the icon for the pill // TODO      |
| `--admiralty-pill-item-text-colour`              | Item text colour of the pill                 |
| `--admiralty-secondary-pill-border-colour`       | border colour of the pill                    |


## Dependencies

### Depends on

- [admiralty-icon](../icon)

### Graph
```mermaid
graph TD;
  admiralty-pill --> admiralty-icon
  style admiralty-pill fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
