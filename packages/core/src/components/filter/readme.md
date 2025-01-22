# admiralty-filter



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description             | Type     | Default    |
| ------------- | -------------- | ----------------------- | -------- | ---------- |
| `filterTitle` | `filter-title` | The title of the filter | `string` | `'Filter'` |


## Events

| Event           | Description                                        | Type                |
| --------------- | -------------------------------------------------- | ------------------- |
| `filterApplied` | Event that is emitted when the filters are applied | `CustomEvent<void>` |
| `filterCleared` | Event that is emitted when the filters are cleared | `CustomEvent<void>` |


## Slots

| Slot | Description                                                                                                                                            |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
|      | 'admiralty-filter-group' components can be placed inside of this element to render groups of filter controls. You can also place any elements you wish |


## CSS Custom Properties

| Name                                       | Description                           |
| ------------------------------------------ | ------------------------------------- |
| `--admiralty-filter-button-text-padding`   | Padding for the filter button.        |
| `--admiralty-filter-button-wrapper-margin` | Margin for the filter button wrapper. |
| `--admiralty-filter-reset-font-weight`     | Font weight of the filter reset       |
| `--admiralty-filter-title-font-size`       | Font size of the filter title         |
| `--admiralty-filter-title-font-weight`     | Font weight of the filter title       |
| `--admiralty-filter-title-margin`          | Margin for the filter title           |


## Dependencies

### Depends on

- [admiralty-button](../button)

### Graph
```mermaid
graph TD;
  admiralty-filter --> admiralty-button
  admiralty-button --> admiralty-icon
  style admiralty-filter fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
