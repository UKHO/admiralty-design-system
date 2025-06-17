# admiralty-side-bar

<!-- Auto Generated Below -->


## Properties

| Property       | Attribute        | Description                                                                         | Type      | Default                |
| -------------- | ---------------- | ----------------------------------------------------------------------------------- | --------- | ---------------------- |
| `label`        | `label`          | A label for accessibility purposes to describe what this navigation is for.         | `string`  | `undefined`            |
| `logoImgUrl`   | `logo-img-url`   | The URI of the logo image                                                           | `string`  | `'svg/UKHO crest.svg'` |
| `showLogo`     | `show-logo`      | Set this to false to hide the logo that is displayed in the bottom of the side bar. | `boolean` | `true`                 |
| `sideBarWidth` | `side-bar-width` | Sets the sidebar width                                                              | `string`  | `'100px'`              |


## Slots

| Slot       | Description                                                                                                                |
| ---------- | -------------------------------------------------------------------------------------------------------------------------- |
| `"footer"` | additional 'admiralty-side-bar-item' components can be placed in the footer slot to display at the bottom of the side bar. |
| `"items"`  | 'admiralty-side-bar-item' components should be placed here in the items slot                                               |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
