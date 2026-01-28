# admiralty-input-invalid

<!-- Auto Generated Below -->


## Slots

| Slot | Description                                                                                                                     |
| ---- | ------------------------------------------------------------------------------------------------------------------------------- |
|      | The error content should be placed in the slot e.g. `<admiralty-input-invalid>This field is required</admiralty-input-invalid>` |


## CSS Custom Properties

| Name                                    | Description                       |
| --------------------------------------- | --------------------------------- |
| `--admiralty-input-invalid-icon-margin` | Margin for the invalid input icon |
| `--admiralty-input-invalid-text-margin` | Margin for the invalid input text |


## Dependencies

### Used by

 - [admiralty-autocomplete](../autocomplete)
 - [admiralty-file-input](../file-input)
 - [admiralty-input](../input)
 - [admiralty-radio-group](../radio-group)
 - [admiralty-select](../select)
 - [admiralty-textarea](../textarea)

### Depends on

- [admiralty-icon](../icon)

### Graph
```mermaid
graph TD;
  admiralty-input-invalid --> admiralty-icon
  admiralty-icon --> admiralty-skeleton
  admiralty-autocomplete --> admiralty-input-invalid
  admiralty-file-input --> admiralty-input-invalid
  admiralty-input --> admiralty-input-invalid
  admiralty-radio-group --> admiralty-input-invalid
  admiralty-select --> admiralty-input-invalid
  admiralty-textarea --> admiralty-input-invalid
  style admiralty-input-invalid fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
