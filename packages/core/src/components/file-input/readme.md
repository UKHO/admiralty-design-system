# file-input



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description                                                                                | Type      | Default                               |
| ---------------- | ----------------- | ------------------------------------------------------------------------------------------ | --------- | ------------------------------------- |
| `invalid`        | `invalid`         | Whether to show that the file input is in an invalid state.                                | `boolean` | `false`                               |
| `invalidMessage` | `invalid-message` | The message to show when the file input is invalid.                                        | `string`  | `null`                                |
| `label`          | `label`           | Used to display instructions to the user and is replaced with the filename the user inputs | `string`  | `'Click to choose a file or drag it'` |
| `multiple`       | `multiple`        | If true, enables multiple files to be selected or dragged                                  | `boolean` | `false`                               |


## Events

| Event             | Description                            | Type                                      |
| ----------------- | -------------------------------------- | ----------------------------------------- |
| `fileInputChange` | Emitted when the added file(s) changes | `CustomEvent<FileInputChangeEventDetail>` |


## CSS Custom Properties

| Name                                       | Description                         |
| ------------------------------------------ | ----------------------------------- |
| `--admiralty-file-input-font-size`         | Font size of the file input         |
| `--admiralty-file-input-font-weight`       | Font weight of the file input       |
| `--admiralty-file-input-icon-font-size`    | Font size of the file input icon    |
| `--admiralty-file-input-icon-font-weight`  | Font weight of the file input icon  |
| `--admiralty-file-input-icon-margin`       | Margin for the file input icon.     |
| `--admiralty-file-input-label-font-size`   | Font size of the file input label   |
| `--admiralty-file-input-label-font-weight` | Font weight of the file input label |
| `--admiralty-file-input-label-margin`      | Margin for the file input label.    |
| `--admiralty-file-input-margin`            | Margin for the file input.          |


## Dependencies

### Depends on

- [admiralty-icon](../icon)
- [admiralty-input-invalid](../input-invalid)

### Graph
```mermaid
graph TD;
  admiralty-file-input --> admiralty-icon
  admiralty-file-input --> admiralty-input-invalid
  admiralty-input-invalid --> admiralty-icon
  style admiralty-file-input fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
