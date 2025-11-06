# admiralty-side-nav-item



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute          | Description                                                                                                                                                                                                                           | Type      | Default     |
| --------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `headingTitle`  | `heading-title`    | The text that is displayed in the SideNavItem                                                                                                                                                                                         | `string`  | `undefined` |
| `navActive`     | `nav-active`       | Represents whether this SideNavItem is 'active' and will be styled differently than SideNavItems that are not 'active'. The intent behind the design for SideNav is for there to only be ONE SideNavItem that is 'active' per SideNav | `boolean` | `false`     |
| `sideNavItemId` | `side-nav-item-id` | A unique id for this SideNavItem                                                                                                                                                                                                      | `string`  | `undefined` |


## Events

| Event                 | Description                                                                       | Type                  |
| --------------------- | --------------------------------------------------------------------------------- | --------------------- |
| `sideNavItemSelected` | An event emitted when this Side Nav item is selected containing the sideNavItemId | `CustomEvent<string>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
