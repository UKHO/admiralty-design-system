# admiralty-read-more



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description                                                   | Type     | Default     |
| --------- | --------- | ------------------------------------------------------------- | -------- | ----------- |
| `heading` | `heading` | The text to display in the heading of the readmore component. | `string` | `undefined` |


## Events

| Event              | Description                                                       | Type                   |
| ------------------ | ----------------------------------------------------------------- | ---------------------- |
| `admiraltyToggled` | The event that is dispatched when the expanded status is toggled. | `CustomEvent<boolean>` |


## CSS Custom Properties

| Name                                                  | Description                                     |
| ----------------------------------------------------- | ----------------------------------------------- |
| `--admiralty-read-more-button-margin`                 | Margin for the read more button                 |
| `--admiralty-read-more-button-padding`                | Padding for the read more button                |
| `--admiralty-read-more-expanded-content-padding`      | Padding for the read more expanded content      |
| `--admiralty-read-more-expansion-heading-icon-margin` | Margin for the read more expansion heading icon |
| `--admiralty-read-more-font-weight`                   | Font weight for the read more text              |
| `--admiralty-read-more-padding`                       | Padding for the read more expansion             |


## Dependencies

### Depends on

- [admiralty-icon](../icon)

### Graph
```mermaid
graph TD;
  admiralty-read-more --> admiralty-icon
  admiralty-icon --> admiralty-skeleton
  style admiralty-read-more fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
