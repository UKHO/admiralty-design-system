# UKHO Design System

![Design System CI](https://github.com/UKHO/design-system/workflows/Design%20System%20CI/badge.svg?branch=main) ![Design System Version](https://img.shields.io/npm/v/@ukho/design-system?label=%40ukho%2Fdesign-system)

This repository contains the source for the UKHO's design system, our library of UI components that is used in our front end designs.

## Getting Started

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

```json
// angular.json
...
"architect": {
        "build": {
          "options": {
            "styles": ["...", "node_modules/@ukho/design-system/styles/core.scss"],
          }
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

## Contributing

If you would like to contribute to the design system please read the [CONTRIBUTING File](https://github.com/UKHO/design-system/blob/main/CONTRIBUTING.md).
