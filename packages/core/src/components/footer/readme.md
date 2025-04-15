# admiralty-footer



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description                                                                                                                            | Type                      | Default                                                                  |
| ----------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- | ------------------------------------------------------------------------ |
| `imageAlt`  | `image-alt`  | A description for the image displayed in the footer. This might be shown if the image fails to load or get read out by screen readers. | `string`                  | `'Admiralty Maritime Data Solutions \| UK Hydrographic Office'`          |
| `imageLink` | `image-link` | The URL that the image links to.                                                                                                       | `string`                  | `'https://www.admiralty.co.uk/'`                                         |
| `imageSrc`  | `image-src`  | The source of the image displayed in the footer.                                                                                       | `string`                  | `'svg/UKHO stacked logo.svg'`                                            |
| `text`      | `text`       | The text to display in the footer. The default value displays crown copyright, the current year and `UK Hydrographic Office`.          | `string`                  | ``© Crown copyright ${new Date().getFullYear()} UK Hydrographic Office`` |
| `variant`   | `variant`    | The type of footer to render. Valid values are `standard`, `compact`. Default value is `standard`.                                     | `"compact" \| "standard"` | `FooterType.Standard`                                                    |


## Slots

| Slot | Description                                                                                                                    |
| ---- | ------------------------------------------------------------------------------------------------------------------------------ |
|      | Footer links should be placed in the slot e.g. `<admiralty-link href="http://www.example.com">Privacy Policy</admiralty-link>` |


## CSS Custom Properties

| Name                                                         | Description                                                       |
| ------------------------------------------------------------ | ----------------------------------------------------------------- |
| `--admiralty-footer-branding-image-desktop-margin-bottom`    | Margin bottom for the branding image when in desktop view         |
| `--admiralty-footer-branding-image-margin-bottom`            | Margin bottom for the branding image.                             |
| `--admiralty-footer-compact-background-colour`               | Background colour for the compact footer                          |
| `--admiralty-footer-compact-content-text-margin-left`        | Margin left for compact footer text                               |
| `--admiralty-footer-compact-content-text-margin-top`         | Margin top for compact footer text                                |
| `--admiralty-footer-compact-content-text-phone-margin-right` | Margin right for compact footer text when in phone view           |
| `--admiralty-footer-compact-font-size`                       | Font size for the compact footer                                  |
| `--admiralty-footer-compact-font-weight`                     | Font weight for the compact footer                                |
| `--admiralty-footer-compact-links-margin-left`               | Margin left for the compact links.                                |
| `--admiralty-footer-compact-links-not-desktop-padding-top`   | Padding top for the footer compact links when not in desktop view |
| `--admiralty-footer-compact-padding`                         | Padding for the footer compact view                               |
| `--admiralty-footer-compact-text-colour`                     | Text colour for the compact footer                                |
| `--admiralty-footer-content-links-desktop-margin-left`       | Margin left for content links when in desktop view                |
| `--admiralty-footer-content-links-margin-left`               | Margin left for content links                                     |
| `--admiralty-footer-content-text-desktop-margin-left`        | Margin left for footer text when in desktop view.                 |
| `--admiralty-footer-content-text-margin-left`                | Margin left for footer text.                                      |
| `--admiralty-footer-content-text-margin-top`                 | Margin top for footer text.                                       |
| `--admiralty-footer-content-text-paragraph-margin`           | Margin for footer text paragraph.                                 |
| `--admiralty-footer-desktop-padding`                         | Padding for the footer when in desktop view                       |
| `--admiralty-footer-links-font-weight`                       | Font weight of the footer links                                   |
| `--admiralty-footer-padding`                                 | Padding for the footer                                            |
| `--admiralty-footer-text-weight`                             | Font weight of the footer text                                    |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
