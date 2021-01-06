# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this
repository before making a change.

## Pull Request Process

When contributing to the design system please ensure that you create a branch off of `master` and then create a PR with a description that outlines the changes that you have made. Creating a PR ensures that you get fast feedback on your code from the Code owners and the UX team.

## Development

Before maintaining or adding to the design system, please read the following information

### Tooling

Our IDE of choice is using [WebStorm](https://www.jetbrains.com/webstorm/) as it provides all of our integrations out of the box.

However for those who do not have access to WebStorm we also recommend using [VSCode](https://code.visualstudio.com/) with the following extensions:

-[Angular Language Service](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template) -[Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest) -[Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) -[Sass](https://marketplace.visualstudio.com/items?itemName=Syler.sass-indented) -[TSLint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)

### Adding new component

To add a new component to the design system, the easiest way is to copy and existing component folder as this will provide you with the correct structure for all of the files.

Every new component should have:

- .html file
- .scss file
- .spec file
- .ts file
- .module file
- .stories file

### Editing existing component

To edit an existing component you will find it in the components folder with a folder named the same as the component.

When editing a component please ensure that any new functionality is covered by unit tests found in the .spec file and that there are new storybook stories written for it written in the .stories file to ensure maximum test coverage.

### Global Styles

There is a folder at the root of the repository that contains the global styles/tokens for the entire design system. It is not common that these styles will need to be edited, however please note any changes that are made to these files will cause styling changes to every single component in the design system and will require a major version bump if the visual styling has changed

### Testing

We use [Jest](https://jestjs.io/docs/en/getting-started.html) as our unit test runner.

To compose the tests we use a package called [spectator](https://github.com/ngneat/spectator). This avoids having to add all the usual Angular boilerplate to the test code.

#### Running the tests

To run the tests simply run the command `npm run test` from the root of the repository.

### Storybook

We use [storybook](https://storybook.js.org/) as a method of viewing the components in a sandbox like environment for testing changes as we develop.

To run storybook during development simply run the command `npm run storybook`. This should automatically start storybook and open a new tab in your default browser.

For guides on writing new stories, existing components are good examples or follow the [offical docs](https://storybook.js.org/docs/react/writing-stories/introduction).

### Chromatic

[Chromatic](https://www.chromatic.com/) is a visual regression tool that is built upon storybook and is publish automatically as part of our PR pipeline. When you create a new PR it will automatically take your new stories and upload them to Chromatic where the UX team will be able to review your changes and provide feedback on them.

Chromatic also offers us visual regression testing so that any changes to existing components be detected and flagged for review, stopping any breaking changes being released.

Every developer with contributor access on this repository should be able to follow the links in the PR to view more details about their Chromatic deployment.

### Pipeline

When a new PR is created the pipeline will automatically trigger and will perform will:

- build
- Run unit tests
- upload to Chromatic
- publish package to npm (master branch only)

The pipeline is created as a Github Workflow and can be located in the `.github` folder of the repository.

### Versioning

The design system uses [Semantic Versioning](https://semver.org/) for its version numbers.

When breaking changes are made (change of selector, existing visual change, removal of component) then please bump the Major up in the `package.json`.

Additions to the design system that do not break existing usage of the design system requires a bump of the Minor versions.

Bug fixes to existing functionality requires the Patch version to be bumped.
