import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-a11y', '@storybook/addon-docs'],

  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },

  core: {
    builder: '@storybook/builder-vite',
  },

  staticDirs: ['../dist', '../src/assets', '../styles', '../src/themes'],

  docs: {
    docsMode: true,
  },

  async viteFinal(config, options) {
    // Add your configuration here
    config.build ??= {};
    config.build.emptyOutDir = false; // Workaround so that vite doesn't ignore the dist folder
    return config;
  },
};

export default config;
