[![Build Status](https://dev.azure.com/ukhogov/Pipelines/_apis/build/status/UKHO.design-system?branchName=master)](https://dev.azure.com/ukhogov/Pipelines/_build/latest?definitionId=48&branchName=master) ![Components Version](https://img.shields.io/npm/v/@ukho/components?label=%40ukho%2Fcomponents) ![Styles Version](https://img.shields.io/npm/v/@ukho/styles?label=%40ukho%2Fstyles) [![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://design.ukho.dev/storybook)

<img src="projects/site/public/images/UKHO%20stacked%20logo.svg" height=100>

# UKHO Design System

This repository contains a monorepo structure with three projects: site, styles and components.

## @ukho/styles (styles)

SCSS stylesheets package containing all the style required for implementing the UKHO Design System.

After having altered the styles project, to see changes in the Harp site, you will have to re-run the asset copy commands via Lerna:

```bash
yarn run lerna bootstrap --scope @ukho/design-system
```

## @ukho/components (components)

Angular library with custom component implementations for the UKHO Design System, using styles from @ukho/styles.

### Storybook

This project features a component sandbox using Storybook. This tool is aimed at developers using the Design System in products and contains information on component props. 

https://design.ukho.dev/storybook/

#### Local Development

To start storybook locally:

- Go to `design-system/projects/components`

- Install all dependencies using `yarn install`

- Run `yarn run storybook`

- Storybook will launch in your browser

### Installation

To install the Design System in a web application project, ensure you are running Angular 9 or higher.

Install the Design System components library and it's dependencies as follows:

```shell script
yarn install @angular/cdk @ukho/{styles,components} @fortawesome/fontawesome-free
```

## design.ukho.dev (site)

Static website to showcase the UKHO Design System, including components for HTML and Angular, principles and patterns.

### Static HTML Site

This project uses a Node based static site generator called Harp (http://harpjs.com/)
to compile EJS (https://ejs.co/) from the **public** folder into static HTML in **dist**.
Harp has built-in support for SASS which is similarly compiled into plan CSS. Resources
such as fonts and images in the **assets** folder are copied as-is.

The build system relies on JSON metadata which describes the basic structure of the site
and is contained in _harp.json_ at the top level (for globals) and in _\_data.json_ files
in each sub-folder. This data is then available as variables in the layout, template and
partial EJS files at build time.

### Installation

- Prerequisites: Ensure that a recent release of Node and Yarn are installed

- Install NPM packages, including Harp: `yarn install`

### Development & Build

You can develop locally by running the Harp server which compiles and serves on-the-fly,
watching for changes:

```bash
yarn run start
```

The site will be available at: http://localhost:9000/

If you find that Harp fails to serve the site correctly but doesn't provide a useful
error message in the browser or in the terminal, you should run _compile_ (see below)
which should show more useful error messages in the terminal.

Once you're done with modifications you can compile the final site to the _dist_ folder:

```bash
yarn run build
```

As a static site the resulting _dist_ can then be uploaded to any web host
(e.g. GithubPages or Netlify) with no requirement for server side processing.
