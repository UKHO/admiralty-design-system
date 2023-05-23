module.exports = {
  //stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  stories: ['../src/components/button/button.stories.ts'],
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
