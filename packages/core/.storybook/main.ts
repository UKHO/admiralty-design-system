export default {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-a11y'],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite', // 👈 The builder enabled here.
  },
  staticDirs: ['../dist', '../src/assets', '../styles', '../src/themes'],
  docs: {
    autodocs: true,
  },
};
