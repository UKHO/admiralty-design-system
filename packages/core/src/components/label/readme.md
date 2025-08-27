# admiralty-label



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                               | Type      | Default     |
| ---------- | ---------- | --------------------------------------------------------- | --------- | ----------- |
| `disabled` | `disabled` | The disabled option can be used to disable the component. | `boolean` | `undefined` |
| `for`      | `for`      | The id of the input the label is attached to              | `string`  | `undefined` |


## Slots

| Slot | Description                                                                                         |
| ---- | --------------------------------------------------------------------------------------------------- |
|      | The label content should be placed in the slot e.g. `<admiralty-label>First Name</admiralty-label>` |


## CSS Custom Properties

| Name                              | Description                 |
| --------------------------------- | --------------------------- |
| `--admiralty-label-font-weight`   | Font weight of the label    |
| `--admiralty-label-margin-bottom` | Margin bottom for the label |


## Dependencies

### Used by

 - [admiralty-autocomplete](../autocomplete)
 - [admiralty-input](../input)
 - [admiralty-progress-bar](../progress-bar)
 - [admiralty-select](../select)
 - [admiralty-textarea](../textarea)

### Graph
```mermaid
graph TD;
  admiralty-autocomplete --> admiralty-label
  admiralty-input --> admiralty-label
  admiralty-progress-bar --> admiralty-label
  admiralty-select --> admiralty-label
  admiralty-textarea --> admiralty-label
  style admiralty-label fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
