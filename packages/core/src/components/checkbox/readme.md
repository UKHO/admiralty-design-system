# admiralty-checkbox



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description                                                                                                                                                                                                                                                  | Type      | Default        |
| --------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | -------------- |
| `checkboxRight` | `checkbox-right` | Whether the checkbox should be positioned to the right of the label.                                                                                                                                                                                         | `boolean` | `false`        |
| `checked`       | `checked`        | If `true`, the checkbox is selected.                                                                                                                                                                                                                         | `boolean` | `false`        |
| `disabled`      | `disabled`       | This dictates whether the form field is disabled.                                                                                                                                                                                                            | `boolean` | `false`        |
| `labelHidden`   | `label-hidden`   | This visually hides the labelText while preserving accessibility.                                                                                                                                                                                            | `boolean` | `false`        |
| `labelText`     | `label-text`     | The label text must be provided and is displayed beside the checkbox, use the labelHidden property to control its visibility.                                                                                                                                | `string`  | `null`         |
| `name`          | `name`           | The name of the control, which is submitted with the form data.                                                                                                                                                                                              | `string`  | `this.inputId` |
| `value`         | `value`          | The value of the checkbox does not mean if it's checked or not, use the `checked` property for that.  The value of a checkbox is analogous to the value of an `<input type="checkbox">`, it's only used when the checkbox participates in a native `<form>`. | `any`     | `undefined`    |


## Events

| Event             | Description                                        | Type                                          |
| ----------------- | -------------------------------------------------- | --------------------------------------------- |
| `admiraltyChange` | Event is fired when the form control changes state | `CustomEvent<CheckboxChangeEventDetail<any>>` |
| `checkboxBlur`    | Event is fired when the form control loses focus   | `CustomEvent<FocusEvent>`                     |
| `checkboxFocus`   | Event is fired when the form control gains focus   | `CustomEvent<FocusEvent>`                     |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
