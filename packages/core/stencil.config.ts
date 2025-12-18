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
    elementSelectors: ['admiralty-select', 'admiralty-radio-group', 'admiralty-autocomplete'],
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
      outDir: '../react/lib/',
      customElementsDir: 'dist/components',
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
      copy: [{ src: '../src/themes', dest: '../../themes' }],
    },
    {
      type: 'dist-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-json',
      file: 'docs/docs.json',
    },
  ],
  plugins: [sass()],
};
