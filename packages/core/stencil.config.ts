import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { angularOutputTarget as angular, ValueAccessorConfig } from '@stencil/angular-output-target';

const angularValueAccessorBindings: ValueAccessorConfig[] = [
  {
    elementSelectors: ['admiralty-input:not([type=number])', 'admiralty-textarea'],
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
  {
    elementSelectors: ['admiralty-select', 'admiralty-radio-group'],
    event: 'admiraltyChange',
    targetAttr: 'value',
    type: 'select',
  },
  {
    elementSelectors: ['admiralty-checkbox'],
    event: 'admiraltyChange',
    targetAttr: 'checked',
    type: 'boolean',
  },
  {
    elementSelectors: ['admiralty-input[type=number]'],
    event: 'admiraltyChange',
    targetAttr: 'value',
    type: 'number',
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
      copy: [{ src: '../src/scss/webfonts', dest: '../../styles/webfonts' }],
    },
    {
      type: 'dist-custom-elements',
    },
  ],
  plugins: [sass()],
};
