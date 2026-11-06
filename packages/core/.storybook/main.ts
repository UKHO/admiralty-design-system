import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    {
      name: 'addon-storybook-sync',
      options: {
        port: Number(process.env.WEBSTORM_ADDON_STORYBOOK_SYNC_PORT) || undefined,
      },
    },
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
  ],

  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },

  core: {
    builder: '@storybook/builder-vite',
  },

  staticDirs: ['../dist', '../src/assets', '../styles', '../src/themes'],

  async viteFinal(config) {
    config.build.emptyOutDir = false; // Workaround so that vite doesn't ignore the dist folder
    return config;
  },
};

export default config;
