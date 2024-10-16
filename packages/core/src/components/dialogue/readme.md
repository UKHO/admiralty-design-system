# admiralty-dialogue



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                                                                                               | Type                                          | Default     |
| ------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ----------- |
| `heading`     | `heading`      | The heading to display.                                                                                                   | `string`                                      | `undefined` |
| `sectionRole` | `section-role` | The role to give the dialogue section. Set this to `alert` if the dialogue box is being used to summarise error messages. | `"alert"`                                     | `undefined` |
| `type`        | `type`         | The type of dialogue box to render.                                                                                       | `"error" \| "info" \| "success" \| "warning"` | `'info'`    |


## CSS Custom Properties

| Name                                     | Description                       |
| ---------------------------------------- | --------------------------------- |
| `--admiralty-dialogue-title-font-size`   | Font size of the dialogue title   |
| `--admiralty-dialogue-title-font-weight` | Font weight of the dialogue title |


## Dependencies

### Used by

 - [admiralty-error-summary](../error-summary)

### Depends on

- [admiralty-icon](../icon)

### Graph
```mermaid
graph TD;
  admiralty-dialogue --> admiralty-icon
  admiralty-error-summary --> admiralty-dialogue
  style admiralty-dialogue fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
