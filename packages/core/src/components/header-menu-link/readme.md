# header-menu-item



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute           | Description                                                                                                                                                                                  | Type      | Default     |
| ------------------ | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `active`           | `active`            | Whether the item is active                                                                                                                                                                   | `boolean` | `false`     |
| `href`             | `href`              | The URL to link to.                                                                                                                                                                          | `string`  | `undefined` |
| `menuTitle`        | `menu-title`        | The text that will be displayed in the menu.                                                                                                                                                 | `string`  | `undefined` |
| `suppressRedirect` | `suppress-redirect` | Causes the default browser redirect to be suppressed. Can be used in conjunction with the `onMenuItemClick` event to use a navigation router and prevent a full page reload when navigating. | `boolean` | `false`     |


## Events

| Event           | Description                                             | Type                |
| --------------- | ------------------------------------------------------- | ------------------- |
| `menuItemClick` | The event that is fired when a user clicks on the menu. | `CustomEvent<void>` |


## CSS Custom Properties

| Name                                                      | Description                                                       |
| --------------------------------------------------------- | ----------------------------------------------------------------- |
| `--admiralty-header-menu-link-desktop-only-margin-bottom` | Margin bottom for the header menu link when in desktop view only. |
| `--admiralty-header-menu-link-desktop-only-padding`       | Padding for the header menu link when in desktop view only.       |
| `--admiralty-header-menu-link-font-size`                  | Font size of the header menu link                                 |
| `--admiralty-header-menu-link-font-weight`                | Font weight of the header menu link                               |
| `--admiralty-header-menu-link-padding`                    | Padding for the header menu link when not in desktop view.        |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
