# admiralty-input

<!-- Auto Generated Below -->


## Overview

Once this component works, review whether a form field component should be created so
that shared properties such as `label`, `hint`, `disabled` etc. can be defined once.
Examples of similar components that can extend that base component are area, select
and checkbox.

## Properties

| Property         | Attribute         | Description                                                                               | Type                                                                    | Default        |
| ---------------- | ----------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | -------------- |
| `autocomplete`   | `autocomplete`    | Indicates whether the value of the control can be automatically completed by the browser. | `string`                                                                | `'off'`        |
| `disabled`       | `disabled`        | This dictates whether the form field is disabled.                                         | `boolean`                                                               | `false`        |
| `hint`           | `hint`            | The hint which will be used under the label to describe the input.                        | `string`                                                                | `undefined`    |
| `invalid`        | `invalid`         | Whether to show the input in an invalid state                                             | `boolean`                                                               | `false`        |
| `invalidMessage` | `invalid-message` | The message to show when the input is invalid                                             | `string`                                                                | `undefined`    |
| `label`          | `label`           | The label which will be used above the input to describe the input.                       | `string`                                                                | `undefined`    |
| `maxLength`      | `max-length`      | The maximum string length for the input field.                                            | `number`                                                                | `undefined`    |
| `name`           | `name`            | The name of the control, which is submitted with the form data.                           | `string`                                                                | `this.inputId` |
| `placeholder`    | `placeholder`     | The placeholder text to show in the input                                                 | `string`                                                                | `undefined`    |
| `required`       | `required`        | This dictates whether the input is required or not                                        | `boolean`                                                               | `false`        |
| `type`           | `type`            | The input type, options are: `text \| date \| time \| email \| password \| tel \| url`    | `"date" \| "email" \| "password" \| "tel" \| "text" \| "time" \| "url"` | `'text'`       |
| `value`          | `value`           | The value of the input.                                                                   | `number \| string`                                                      | `''`           |
| `width`          | `width`           | The maximum width for the input field.                                                    | `number`                                                                | `undefined`    |


## Events

| Event            | Description                         | Type                                  |
| ---------------- | ----------------------------------- | ------------------------------------- |
| `admiraltyInput` | Emitted when the value has changed. | `CustomEvent<InputChangeEventDetail>` |


## Dependencies

### Used by

 - [admiralty-type-ahead](../type-ahead)

### Depends on

- [admiralty-label](../label)
- [admiralty-hint](../hint)
- [admiralty-input-invalid](../input-invalid)

### Graph
```mermaid
graph TD;
  admiralty-input --> admiralty-label
  admiralty-input --> admiralty-hint
  admiralty-input --> admiralty-input-invalid
  admiralty-input-invalid --> admiralty-icon
  admiralty-type-ahead --> admiralty-input
  style admiralty-input fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
