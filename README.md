# UKHO Design System

![Design System CI](https://github.com/UKHO/design-system/workflows/Design%20System%20CI/badge.svg?branch=main) ![Design System Version](https://img.shields.io/npm/v/@ukho/design-system?label=%40ukho%2Fdesign-system)

This repository contains the source for the UKHO's design system, our library of UI components that is used in our front end designs.

## Getting Started - Angular

### Prerequisites

- [Node](https://nodejs.org/en/)
- [Angular CLI](https://angular.io/cli#installing-angular-cli)

### Installation

1. For new projects create a brand new angular app following instructions [here](https://angular.io/guide/setup-local)
2. Add design system dependencies to your app

```sh
npm install @angular/cdk @fortawesome/fontawesome-free
```

3. Add design system to your app

```sh
npm install @ukho/design-system
```

4. Add design system stylesheet globally in your app

```scss
// styles.scss
...
@use '~@fortawesome/fontawesome-free/scss/fontawesome';
@use '~@fortawesome/fontawesome-free/scss/solid';
@use '~@fortawesome/fontawesome-free/scss/brands';
@use '~@ukho/design-system/styles/core.scss';
```

5. Add design system assets to your app

```json
// angular.json
...
"assets": [
     ... // Import your other assets as normal
     {
       "glob": "**/*",
       "input": "./node_modules/@ukho/design-system/assets",
       "output": "./assets"
     }
   ],
```

You are now ready to use the design system!

### Usage

Below is an example of how to import the button module into your application.

1. Import modules as you need them

```typescript
// app.module.ts
...
import { ButtonModule } from "@ukho/design-system";
...

@NgModule({
  imports: [..., ButtonModule]
})
```

2. Add component selector to html

```html
<!--app.component.html-->
<ukho-button>Hello Button</ukho-button>
```

### Assets

By importing the assets from the design system following the instructions listed in the installation section you should have access to all the assets e.g. logos. Components that require logos all have the default paths set however there are occasions that these need to be overridden. If you have not changed the default assets path they should be available on the path: `/assets/sub-folder/asset.file`. e.g. `/assets/svg/UKHO stacked logo.svg`

## Getting Started - CDN

We understand that not everyone can use angular when building their projects, so we offer a CSS only alternative which encompasses all of the styles in the design system.

### Prerequisites

1. Add the [fontawesome stylesheet](https://fontawesome.com/how-to-use/on-the-web/setup/hosting-font-awesome-yourself) to your html

```html
<head>
  <link href="/your-path-to-fontawesome/css/all.css" rel="stylesheet" />
  <!--load all styles -->
</head>
```

### Installation

1. Add the [design system stylesheet](https://unpkg.com/browse/@ukho/design-system@latest/styles/css/ukho.min.css) to your html

```html
<head>
  <!-- fontawesome styles -->
  <link href="https://unpkg.com/@ukho/design-system@latest/styles/css/ukho.min.css" rel="stylesheet" />
  <!--load all styles -->
</head>
```

We recommend pinning the version of the css that you are using to avoid be automatically pulling breaking changes. To do this instead of using `@latest`, use `@{npm package version}` instead. e.g `@2.0.0`.

### Usage

Below is an example of how to add a button into your website.

1. Navigate to the design system show case site and locate the component you wish use

2. Add that snippet your html

```html
<ukho-button><button>Hello button!</button></ukho-button>
```

## Contributing

If you would like to contribute to the design system please read the [CONTRIBUTING File](https://github.com/UKHO/design-system/blob/main/CONTRIBUTING.md).
