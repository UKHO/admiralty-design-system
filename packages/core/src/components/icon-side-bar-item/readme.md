# admiralty-icon-side-bar-item



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute           | Description                                                                                                                                                                                         | Type      | Default     |
| ------------------ | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `active`           | `active`            | Represents whether this SideBarItem is 'active' and will be styled differently than SideBarItems that are not 'active'. There should only be one SideBarItem that is 'active' per SideBar.          | `boolean` | `false`     |
| `expanded`         | `expanded`          | Whether the component is expanded.                                                                                                                                                                  | `boolean` | `false`     |
| `href`             | `href`              | The URL to link to.                                                                                                                                                                                 | `string`  | `undefined` |
| `icon`             | `icon`              | The name of the icon to display. A full list of available icons can be viewed at [https://fonts.google.com/icons](https://fonts.google.com/icons)                                                   | `string`  | `undefined` |
| `itemText`         | `item-text`         | Item text for the button or link depending on variant                                                                                                                                               | `string`  | `undefined` |
| `suppressRedirect` | `suppress-redirect` | Causes the default browser redirect to be suppressed. Can be used in conjunction with the `onIconSideBarItemClick` event to use a navigation router and prevent a full page reload when navigating. | `boolean` | `false`     |


## Events

| Event                  | Description                                                                       | Type                   |
| ---------------------- | --------------------------------------------------------------------------------- | ---------------------- |
| `iconSideBarItemClick` | An event emitted when this Side Bar item is selected containing the sideBarItemId | `CustomEvent<string>`  |
| `toggled`              | The event that is dispatched when the expanded status is toggled.                 | `CustomEvent<boolean>` |


## Slots

| Slot                                                         | Description |
| ------------------------------------------------------------ | ----------- |
| `"The text to display under the icon for secondary variant"` |             |


## Dependencies

### Depends on

- [admiralty-icon](../icon)

### Graph
```mermaid
graph TD;
  admiralty-icon-side-bar-item --> admiralty-icon
  admiralty-icon --> admiralty-skeleton
  style admiralty-icon-side-bar-item fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
