# admiralty-progress-tracker



<!-- Auto Generated Below -->


## Properties

| Property                   | Attribute                    | Description                                                     | Type                                                                 | Default     |
| -------------------------- | ---------------------------- | --------------------------------------------------------------- | -------------------------------------------------------------------- | ----------- |
| `allowBackNavigation`      | `allow-back-navigation`      | Whether navigation to previous steps is allowed                 | `boolean`                                                            | `true`      |
| `steps`                    | --                           | Array of steps to display in the progress tracker               | `ProgressStep[]`                                                     | `[]`        |
| `validateBeforeNavigation` | `validate-before-navigation` | Whether to validate the current step before allowing navigation | `boolean`                                                            | `false`     |
| `validateStep`             | --                           | Function to validate a step (returns true if valid)             | `(stepId: string, stepIndex: number) => boolean \| Promise<boolean>` | `undefined` |


## Events

| Event                     | Description                               | Type                                |
| ------------------------- | ----------------------------------------- | ----------------------------------- |
| `stepClicked`             | Emitted when user clicks on a step        | `CustomEvent<StepNavigationDetail>` |
| `stepValidationRequested` | Emitted when step validation is requested | `CustomEvent<StepValidationDetail>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
