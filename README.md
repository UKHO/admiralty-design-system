UKHO Design System
==================

The project is made up of two main parts: the static HTML site which documents, and uses,
 the design system, and the *angular* folder which contains the code for the Angular
 components which are part of the design system.  
 
# Usage in other projects

The design system has been developed to be used in UKHO projects, either as Angular 
components or as plain HTML with some minimal Javascript augmentation. In either case
there is a suite of CSS that provides styles for all aspects of the design system.

## Non-Angular sites
Please include all the relevant CSS in your site (see below). To implement components
you should visit the relevant page in the design system site and copy the example HTML 
from the HTML example tab.

## Angular sites
Please include all the relevant CSS in your site (see below). The Angular components 
contained in the *angular* folder of this repository should be published as an NPM
package which can then be included in new or existing Angular projects.  

## CSS
The CSS for the design system can be found as the source SASS files in *public/css*
and are all linked from the main *all.scss* file. Alternatively, building the static
site results in plain CSS files in *dist/css* which can then be used for websites that
don't support SASS.

# Developing the design system

## Static HTML Site
This project uses a Node based static site generator called Harp (http://harpjs.com/)
to compile EJS (https://ejs.co/) from the **public** folder into static HTML in **dist**. 
Harp has built-in support for SASS which is similarly compiled into plan CSS. Resources 
such as fonts and images in the **assets** folder are copied as-is.

The build system relies on JSON metadata which describes the basic structure of the site
and is contained in *harp.json* at the top level (for globals) and in *_data.json* files
in each sub-folder. This data is then available as variables in the layout, template and
partial EJS files at build time.

### Installation
- Prerequisites: Ensure that a recent release of Node and NPM are installed:
https://nodejs.org/en/download/package-manager/

- Install NPM packages, including Harp: `npm install` 

### Development & Build

You can develop locally by running the Harp server which compiles and serves on-the-fly,
watching for changes:

`npm run start-static` 

The site will be available at: http://localhost:9000/

If you find that Harp fails to serve the site correctly but doesn't provide a useful
error message in the browser or in the terminal, you should run *compile* (see below)
which should show more useful error messages in the terminal.  

Once you're done with modifications you can compile the final site to the *dist* folder:

`npm run build-static`

As a static site the resulting *dist* can then be uploaded to any web host 
(e.g. GithubPages or Netlify) with no requirement for server side processing. 

##Angular

This is a standard Angular (sub)project made with the *ng* command line tool. 

Standard ng commands can be used to running, building and testing.
