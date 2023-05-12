module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-styling',
      options: {
        sass: {
          // Require your preprocessor
          implementation: require('sass'),
        },
      },
    },
  ],
  framework: '@storybook/html',
  staticDirs: ['../dist', '../src/assets', '../styles'],
  docs: {
    autodocs: true,
  },
};
