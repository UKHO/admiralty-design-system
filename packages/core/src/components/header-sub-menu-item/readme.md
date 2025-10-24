# header-sub-menu-item



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute           | Description                                                                                                                                                                                  | Type      | Default     |
| ------------------ | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `href`             | `href`              | The URL to link to.                                                                                                                                                                          | `string`  | `undefined` |
| `menuTitle`        | `menu-title`        | The text that will be displayed in the menu                                                                                                                                                  | `string`  | `undefined` |
| `suppressRedirect` | `suppress-redirect` | Causes the default browser redirect to be suppressed. Can be used in conjunction with the `onMenuItemClick` event to use a navigation router and prevent a full page reload when navigating. | `boolean` | `false`     |


## Events

| Event              | Description                                                                                     | Type                  |
| ------------------ | ----------------------------------------------------------------------------------------------- | --------------------- |
| `subMenuItemClick` | The event that is fired when a user clicks on the menu item. Event contains the menu item text. | `CustomEvent<string>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
