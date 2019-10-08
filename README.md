<img src="projects/site/public/assets/images/UKHO%20stacked%20logo.svg" height=100>

# UKHO Design System

This repository contains a monorepo structure with three projects: site, styles and components.

## @ukho/styles (styles)

SCSS Stylesheet package containing all the style required for implementing the UKHO Design System.

## @ukho/components (components)

Angular library with custom component implementations for the UKHO Design System, using styles from @ukho/styles.

## design.ukho.dev (site)

Static website to showcase the UKHO Design System, including components for HTML and Angular, principles and patterns.

### Static HTML Site
This project uses a Node based static site generator called Harp (http://harpjs.com/)
to compile EJS (https://ejs.co/) from the **public** folder into static HTML in **dist**. 
Harp has built-in support for SASS which is similarly compiled into plan CSS. Resources 
such as fonts and images in the **assets** folder are copied as-is.

The build system relies on JSON metadata which describes the basic structure of the site
and is contained in *harp.json* at the top level (for globals) and in *_data.json* files
in each sub-folder. This data is then available as variables in the layout, template and
partial EJS files at build time.

### Installation
- Prerequisites: Ensure that a recent release of Node and Yarn are installed

- Install NPM packages, including Harp: `yarn install` 

### Development & Build

You can develop locally by running the Harp server which compiles and serves on-the-fly,
watching for changes:

`yarn run start` 

The site will be available at: http://localhost:9000/

If you find that Harp fails to serve the site correctly but doesn't provide a useful
error message in the browser or in the terminal, you should run *compile* (see below)
which should show more useful error messages in the terminal.  

Once you're done with modifications you can compile the final site to the *dist* folder:

`yarn run build`

As a static site the resulting *dist* can then be uploaded to any web host 
(e.g. GithubPages or Netlify) with no requirement for server side processing. 
