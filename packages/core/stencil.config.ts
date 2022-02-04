import { Config } from '@stencil/core';
import { angularOutputTarget as angular } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'design-system-core',
  outputTargets: [
    angular({
      componentCorePackage: `@ukho/design-system-core`,
      directivesProxyFile: `../angular/projects/component-library/src/lib/stencil-generated/components.ts`
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
