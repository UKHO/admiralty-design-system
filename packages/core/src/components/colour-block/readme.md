# admiralty-colour-block



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description                              | Type                                          | Default            |
| ------------ | ------------- | ---------------------------------------- | --------------------------------------------- | ------------------ |
| `actionText` | `action-text` | The text to display on the action button | `string`                                      | `undefined`        |
| `colour`     | `colour`      | The background colour of the component.  | `"admiralty-blue" \| "bright-blue" \| "teal"` | `'admiralty-blue'` |
| `heading`    | `heading`     | The heading text to display.             | `string`                                      | `undefined`        |
| `height`     | `height`      | The height in pixels of the component.   | `number`                                      | `undefined`        |
| `width`      | `width`       | The width in pixels of the component.    | `number`                                      | `undefined`        |


## Events

| Event                    | Description                                             | Type                  |
| ------------------------ | ------------------------------------------------------- | --------------------- |
| `colourBlockLinkClicked` | An event emitted when this Colour Block link is clicked | `CustomEvent<string>` |


## Dependencies

### Depends on

- [admiralty-button](../button)

### Graph
```mermaid
graph TD;
  admiralty-colour-block --> admiralty-button
  admiralty-button --> admiralty-icon
  style admiralty-colour-block fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
