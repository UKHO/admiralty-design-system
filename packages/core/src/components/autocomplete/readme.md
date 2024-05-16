# admiralty-autocomplete



<!-- Auto Generated Below -->


## Properties

| Property             | Attribute               | Description | Type      | Default     |
| -------------------- | ----------------------- | ----------- | --------- | ----------- |
| `defaultValue`       | `default-value`         |             | `string`  | `'blah'`    |
| `id`                 | `id`                    |             | `string`  | `undefined` |
| `minLength`          | `min-length`            |             | `number`  | `1`         |
| `showNoOptionsFound` | `show-no-options-found` |             | `boolean` | `true`      |


## Dependencies

### Depends on

- [admiralty-input](../input)
- [admiralty-icon](../icon)

### Graph
```mermaid
graph TD;
  admiralty-autocomplete --> admiralty-input
  admiralty-autocomplete --> admiralty-icon
  admiralty-input --> admiralty-label
  admiralty-input --> admiralty-hint
  admiralty-input --> admiralty-input-invalid
  admiralty-input-invalid --> admiralty-icon
  style admiralty-autocomplete fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
