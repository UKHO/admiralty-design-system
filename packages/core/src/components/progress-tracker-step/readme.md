# admiralty-progress-tracker-step

A step component used within `admiralty-progress-tracker` to define individual steps in a progress flow. This component is designed to be used declaratively as a child of the progress tracker.

## Usage

```html
<admiralty-progress-tracker>
  <admiralty-progress-tracker-step step-id="location" step-title="Choose location" status="complete" summary="Specify geographic coordinates">
    <ul slot="bullet-summaries">
      <li>Latitude: 51deg 30m 35s N</li>
      <li>Longitude: 0deg 7m 5s W</li>
    </ul>
  </admiralty-progress-tracker-step>

  <admiralty-progress-tracker-step step-id="object" step-title="Choose object" status="current"> </admiralty-progress-tracker-step>

  <admiralty-progress-tracker-step step-id="date" step-title="Choose date" status="upcoming"> </admiralty-progress-tracker-step>
</admiralty-progress-tracker>
```

<!-- Auto Generated Below -->


## Overview

A step component used within admiralty-progress-tracker to define individual steps in a progress flow.

## Properties

| Property                 | Attribute       | Description                                             | Type                                               | Default      |
| ------------------------ | --------------- | ------------------------------------------------------- | -------------------------------------------------- | ------------ |
| `errorMessage`           | `error-message` | Optional error message displayed when status is 'error' | `string`                                           | `undefined`  |
| `status`                 | `status`        | The current status of the step                          | `"complete" \| "current" \| "error" \| "upcoming"` | `'upcoming'` |
| `stepId` _(required)_    | `step-id`       | Unique identifier for the step                          | `string`                                           | `undefined`  |
| `stepTitle` _(required)_ | `step-title`    | The title text displayed for the step                   | `string`                                           | `undefined`  |
| `summary`                | `summary`       | Optional summary text displayed below the title         | `string`                                           | `undefined`  |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
