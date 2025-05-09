# admiralty-radio



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                                    | Type      | Default     |
| ---------- | ---------- | -------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `checked`  | `checked`  | Determines whether the radio button is selected (or checked)                                                   | `boolean` | `false`     |
| `disabled` | `disabled` | Determines whether the radio button is disabled. A button in disabled state will not fire click output events. | `boolean` | `false`     |
| `invalid`  | `invalid`  | Determines whether to add the invalid stying to the radio button                                               | `boolean` | `false`     |
| `name`     | `name`     | The name of the radio button for use on selection within a radio group                                         | `string`  | `undefined` |
| `value`    | `value`    | The value of the radio button for use on selection within a radio group                                        | `string`  | `undefined` |


## Events

| Event             | Description                                | Type                |
| ----------------- | ------------------------------------------ | ------------------- |
| `admiraltyBlur`   | Emitted when the radio button loses focus. | `CustomEvent<void>` |
| `admiraltyChange` | Emitted when the radio is selected         | `CustomEvent<void>` |
| `admiraltyFocus`  | Emitted when the radio button gains focus. | `CustomEvent<void>` |


## CSS Custom Properties

| Name                                         | Description                           |
| -------------------------------------------- | ------------------------------------- |
| `--admiralty-radio-conditional-margin`       | Margin for the conditional slot       |
| `--admiralty-radio-conditional-margin-empty` | Margin for when slot is empty         |
| `--admiralty-radio-conditional-padding-left` | Padding left for the conditional slot |
| `--admiralty-radio-input-margin-right`       | Margin right for the radio input      |
| `--admiralty-radio-label-font-weight`        | Font weight for the radio label       |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
