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

| Name                                              | Description                                |
| ------------------------------------------------- | ------------------------------------------ |
| `--admiralty-header-profile-font-size`            | Font size of the header profile            |
| `--admiralty-header-profile-font-weight`          | Font weight of the header profile          |
| `--admiralty-header-profile-sub-item-font-weight` | Font weight of the header profile sub item |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
