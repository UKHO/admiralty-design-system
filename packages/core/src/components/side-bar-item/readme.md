# admiralty-side-nav-item



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute           | Description                                                                                                                                                                                     | Type      | Default     |
| ------------------ | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `active`           | `active`            | Represents whether this SideBarItem is 'active' and will be styled differently than SideBarItems that are not 'active'. There should only be one SideBarItem that is 'active' per SideBar.      | `boolean` | `false`     |
| `href`             | `href`              | The URL to link to.                                                                                                                                                                             | `string`  | `undefined` |
| `icon`             | `icon`              | The name of the icon to display. A full list of available icons can be viewed at [https://fonts.google.com/icons](https://fonts.google.com/icons)                                               | `string`  | `undefined` |
| `suppressRedirect` | `suppress-redirect` | Causes the default browser redirect to be suppressed. Can be used in conjunction with the `onSideBarItemClick` event to use a navigation router and prevent a full page reload when navigating. | `boolean` | `false`     |


## Events

| Event              | Description                                                                       | Type                  |
| ------------------ | --------------------------------------------------------------------------------- | --------------------- |
| `sideBarItemClick` | An event emitted when this Side Bar item is selected containing the sideBarItemId | `CustomEvent<string>` |


## Slots

| Slot                                   | Description |
| -------------------------------------- | ----------- |
| `"The text to display udner the icon"` |             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
