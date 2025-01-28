# admiralty-header



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute          | Description                                                 | Type     | Default                            |
| ---------------- | ------------------ | ----------------------------------------------------------- | -------- | ---------------------------------- |
| `headerTitle`    | `header-title`     | The header title that is displayed to the right of the logo | `string` | `undefined`                        |
| `headerTitleUrl` | `header-title-url` | The url that clicking on the nav link will take you too     | `string` | `null`                             |
| `logoAltText`    | `logo-alt-text`    | The alternate image text for the logo image                 | `string` | `'ADMIRALTY'`                      |
| `logoImgUrl`     | `logo-img-url`     | The uri of the logo image                                   | `string` | `'svg/Admiralty stacked logo.svg'` |
| `logoLinkUrl`    | `logo-link-url`    | The destination url when the logo is clicked                | `string` | `'https://www.admiralty.co.uk/'`   |


## Events

| Event           | Description                                                                    | Type                  |
| --------------- | ------------------------------------------------------------------------------ | --------------------- |
| `titledClicked` | Emits an event that can be listened to when the title in the header is clicked | `CustomEvent<string>` |


## Slots

| Slot        | Description                                                                                                                                          |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"items"`   | 'admiralty-header-menu-item menu-title' and 'admiralty-header-menu-link menu-title' components are placed here for appropriate styling and behaviour |
| `"profile"` | 'admiralty-header-profile' components are placed here (the login/logout) options                                                                     |


## CSS Custom Properties

| Name                                                       | Description                                            |
| ---------------------------------------------------------- | ------------------------------------------------------ |
| `--admiralty-header-brand-font-size`                       | Font weight of the header brand                        |
| `--admiralty-header-branding-not-desktop-padding`          |                                                        |
| `--admiralty-header-branding-padding`                      |                                                        |
| `--admiralty-header-font-size`                             | Font size of the header                                |
| `--admiralty-header-font-weight`                           | Font weight of the header                              |
| `--admiralty-header-menu-icon-font-size`                   | Font size of the header menu icon                      |
| `--admiralty-header-menu-icon-font-weight`                 | Font weight of the header menu icon                    |
| `--admiralty-header-menu-mobile-button-icon-padding`       |                                                        |
| `--admiralty-header-menu-section-tablet-only-margin-left`  |                                                        |
| `--admiralty-header-title-font-size`                       | Font size of the header title                          |
| `--admiralty-header-title-font-weight`                     | Font weight of the header title                        |
| `--admiralty-header-title-margin-bottom`                   |                                                        |
| `--admiralty-header-title-margin-top`                      |                                                        |
| `--admiralty-header-title-not-desktop-font-size`           | Font size of the header title when not in desktop view |
| `--admiralty-header-vertical-separator-margin`             |                                                        |
| `--admiralty-header-vertical-separator-not-desktop-margin` |                                                        |


## Dependencies

### Depends on

- [admiralty-icon](../icon)

### Graph
```mermaid
graph TD;
  admiralty-header --> admiralty-icon
  style admiralty-header fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
