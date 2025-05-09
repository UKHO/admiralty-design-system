# admiralty-header-profile



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute        | Description                                                                                                                                             | Type      | Default     |
| -------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `isSignedIn`   | `is-signed-in`   | A boolean to indicate if the user is signed in or not                                                                                                   | `boolean` | `false`     |
| `signInOnly`   | `sign-in-only`   | A boolean to indicate if the component should hide the sign-out and account buttons, useful for internal sites where the user must be always signed in. | `boolean` | `false`     |
| `signedInText` | `signed-in-text` | The text that is displayed after the user signs in                                                                                                      | `string`  | `'replace'` |


## Events

| Event                | Description                                                               | Type                |
| -------------------- | ------------------------------------------------------------------------- | ------------------- |
| `signInClicked`      | The event that is fired when the user clicks on the sign in button        | `CustomEvent<void>` |
| `signOutClicked`     | The event that is fired when the user clicks on the 'sign out' button     | `CustomEvent<void>` |
| `yourAccountClicked` | The event that is fired when the user clicks on the 'Your account' button | `CustomEvent<void>` |


## CSS Custom Properties

| Name                                                                | Description                                                           |
| ------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `--admiralty-header-profile-desktop-only-button-padding`            | Padding for the header profile button when in desktop view            |
| `--admiralty-header-profile-desktop-only-margin-bottom`             | Margin bottom for the header profile when in desktop view             |
| `--admiralty-header-profile-desktop-only-padding`                   | Padding for the header profile when in desktop view                   |
| `--admiralty-header-profile-desktop-only-sub-menu-item-margin`      | Margin for the sub menu item of the profile when in desktop view      |
| `--admiralty-header-profile-desktop-only-sub-menu-item-padding`     | padding for the sub menu item of the profile when in desktop view     |
| `--admiralty-header-profile-font-size`                              | Font size of the header profile                                       |
| `--admiralty-header-profile-font-weight`                            | Font weight of the header profile                                     |
| `--admiralty-header-profile-not-desktop-sub-menu-item-padding`      | Padding for the sub menu item of the profile when not in desktop view |
| `--admiralty-header-profile-not-desktop-sub-menu-item-span-padding` | Padding for the span of the sub menu item when not in desktop view    |
| `--admiralty-header-profile-sub-item-font-weight`                   | Font weight of the header profile sub item                            |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
