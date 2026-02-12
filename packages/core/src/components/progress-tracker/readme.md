# admiralty-progress-tracker

A progress tracker component that displays a vertical list of steps in a multi-step process. Each step can have a status (complete, current, upcoming, or error) and can display summary information and bullet points.

## Usage

### Declarative Approach (Recommended)

Use child `admiralty-progress-tracker-step` components to define your steps:

```html
<admiralty-progress-tracker allow-back-navigation>
  <admiralty-progress-tracker-step step-id="location" step-title="Choose location" status="complete" summary="Specify geographic coordinates">
    <ul slot="bullet-summaries">
      <li>Latitude: 51deg 30m 35s N</li>
      <li>Longitude: 0deg 7m 5s W</li>
    </ul>
  </admiralty-progress-tracker-step>

  <admiralty-progress-tracker-step step-id="object" step-title="Choose object" status="current"></admiralty-progress-tracker-step>

  <admiralty-progress-tracker-step step-id="date" step-title="Choose date" status="upcoming"></admiralty-progress-tracker-step>
</admiralty-progress-tracker>
```

### With Angular

```html
<admiralty-progress-tracker [allowBackNavigation]="true" (stepClicked)="onStepClicked($event)">
  <admiralty-progress-tracker-step
    *ngFor="let step of steps"
    [stepId]="step.id"
    [stepTitle]="step.title"
    [status]="step.status"
    [summary]="step.summary"
    [errorMessage]="step.errorMessage"
  >
    <ul slot="bullet-summaries" *ngIf="step.bulletSummaries?.length">
      <li *ngFor="let bullet of step.bulletSummaries">{{ bullet }}</li>
    </ul>
  </admiralty-progress-tracker-step>
</admiralty-progress-tracker>
```

### Legacy JavaScript Approach (Deprecated)

The legacy approach using the `steps` prop is still supported for backward compatibility but is deprecated:

```javascript
const tracker = document.querySelector('admiralty-progress-tracker');
tracker.steps = [
  { id: 'step1', title: 'First Step', status: 'complete' },
  { id: 'step2', title: 'Second Step', status: 'current' },
  { id: 'step3', title: 'Third Step', status: 'upcoming' },
];
```

## Features

- **Visual Status Indicators**: Each step displays a visual marker showing its status (complete, current, upcoming, or error)
- **Navigation**: Optionally allow users to navigate back to previous steps
- **Validation**: Validate steps before allowing forward navigation
- **Error States**: Display error messages for steps that fail validation
- **Summary Information**: Show bullet point summaries under each step
- **Accessibility**: Full keyboard navigation and screen reader support

<!-- Auto Generated Below -->


## Properties

| Property                   | Attribute                    | Description                                                                                                                                                                                                        | Type                                                                 | Default     |
| -------------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------- | ----------- |
| `allowBackNavigation`      | `allow-back-navigation`      | Whether navigation to previous steps is allowed                                                                                                                                                                    | `boolean`                                                            | `true`      |
| `steps`                    | --                           | <span style="color:red">**[DEPRECATED]**</span> Use child admiralty-progress-tracker-step components instead. Array of steps to display in the progress tracker (legacy prop for backward compatibility)<br/><br/> | `ProgressStep[]`                                                     | `[]`        |
| `validateBeforeNavigation` | `validate-before-navigation` | Whether to validate the current step before allowing navigation                                                                                                                                                    | `boolean`                                                            | `false`     |
| `validateStep`             | --                           | Function to validate a step (returns true if valid)                                                                                                                                                                | `(stepId: string, stepIndex: number) => boolean \| Promise<boolean>` | `undefined` |


## Events

| Event                     | Description                               | Type                                |
| ------------------------- | ----------------------------------------- | ----------------------------------- |
| `stepClicked`             | Emitted when user clicks on a step        | `CustomEvent<StepNavigationDetail>` |
| `stepValidationRequested` | Emitted when step validation is requested | `CustomEvent<StepValidationDetail>` |


## Slots

| Slot | Description                                           |
| ---- | ----------------------------------------------------- |
|      | Place admiralty-progress-tracker-step components here |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
