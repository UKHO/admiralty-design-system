import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { angularOutputTarget as angular, ValueAccessorConfig } from '@stencil/angular-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';

const angularValueAccessorBindings: ValueAccessorConfig[] = [
  {
    elementSelectors: ['admiralty-input:not([type=number])', 'admiralty-textarea'],
    event: 'admiraltyInput',
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
    event: 'admiraltyInput',
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
    reactOutputTarget({
      componentCorePackage: '@ukho/admiralty-core',
      proxiesFile: '../react/lib/components/stencil-generated/index.ts',
      includePolyfills: true,
      includeDefineCustomElements: true,
      excludeComponents: [
        // only required by storybook example
        'admiralty-paginator-wrapper',
      ],
    }),
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
    {
      type: 'docs-json',
      file: 'docs/docs.json',
    },
  ],
  plugins: [sass()],
};
