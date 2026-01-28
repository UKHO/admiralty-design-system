# admiralty-breadcrumb



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                                                                                                                                       | Type      | Default     |
| -------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `active` | `active`  | When `true` the breadcrumb will by styled to show that it is the currently active breadcrumb. Defaults to `true` for the last breadcrumb if it is not set on any. | `boolean` | `false`     |
| `href`   | `href`    | Contains a URL or a URL fragment that the hyperlink points to.                                                                                                    | `string`  | `undefined` |


## CSS Custom Properties

| Name                                        | Description                           |
| ------------------------------------------- | ------------------------------------- |
| `--admiralty-breadcrumb-font-size`          | Font size for the breadcrumb          |
| `--admiralty-breadcrumb-font-weight`        | Font weight for the breadcrumb        |
| `--admiralty-breadcrumb-font-weight-active` | Font weight for the breadcrumb active |
| `--admiralty-breadcrumb-href-margin`        | Margin for the hyperlink              |
| `--admiralty-breadcrumb-icon-font-size`     | Font size for the breadcrumb icon     |
| `--admiralty-breadcrumb-icon-margin`        | Margin for the breadcrumb icon        |


## Dependencies

### Depends on

- [admiralty-icon](../icon)

### Graph
```mermaid
graph TD;
  admiralty-breadcrumb --> admiralty-icon
  admiralty-icon --> admiralty-skeleton
  style admiralty-breadcrumb fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
