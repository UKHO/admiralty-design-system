module.exports = {
  //stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  stories: ['../src/components/button/button.stories.ts',
  '../src/components/breadcrumb/breadcrumb.stories.ts',
  '../src/components/breadcrumbs/breadcrumbs.stories.ts',
  '../src/components/card/card.stories.ts',
  '../src/components/checkbox/checkbox.stories.ts',
  '../src/components/colour-block/colour-block.stories.ts',
  '../src/components/dialogue/dialogue.stories.ts',
  '../src/components/expansion/expansion.stories.ts',
  '../src/components/file-input/file-input.stories.ts',
  '../src/components/filter/filter.stories.ts'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-a11y'],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  staticDirs: ['../dist', '../src/assets', '../styles'],
  docs: {
    autodocs: true,
  },
};
