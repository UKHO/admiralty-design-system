import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { angularOutputTarget as angular, ValueAccessorConfig } from '@stencil/angular-output-target';

const angularValueAccessorBindings: ValueAccessorConfig[] = [
  {
    elementSelectors: ['admiralty-input[type=text]'],
    event: 'admiraltyChange',
    targetAttr: 'value',
    type: 'text',
  },
  {
    elementSelectors: ['admiralty-radio'],
    event: 'admiraltyRadioChange',
    targetAttr: 'value',
    type: 'radio',
  },
];

export const config: Config = {
  namespace: 'admiralty',
  outputTargets: [
    {
      type: 'docs-readme',
      strict: true,
    },
    angular({
      componentCorePackage: '@ukho/admiralty-core',
      directivesProxyFile: '../angular/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular/src/lib/stencil-generated/index.ts',
      excludeComponents: [
        // only required by storybook example
        'admiralty-paginator-wrapper',
      ],
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [{ src: '../src/styles/webfonts', dest: '../../styles/webfonts' }],
    },
    {
      type: 'dist-custom-elements',
    },
  ],
  plugins: [sass()],
};
