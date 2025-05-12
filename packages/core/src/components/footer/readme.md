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

| Name                                           | Description                              |
| ---------------------------------------------- | ---------------------------------------- |
| `--admiralty-footer-compact-background-colour` | Background colour for the compact footer |
| `--admiralty-footer-compact-font-size`         | Font size for the compact footer         |
| `--admiralty-footer-compact-font-weight`       | Font weight for the compact footer       |
| `--admiralty-footer-compact-text-colour`       | Text colour for the compact footer       |
| `--admiralty-footer-links-font-weight`         | Font weight of the footer links          |
| `--admiralty-footer-text-weight`               | Font weight of the footer text           |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
