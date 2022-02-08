import { Config } from '@stencil/core';
import { angularOutputTarget as angular } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'ukho',
  outputTargets: [
    angular({
      componentCorePackage: `@ukho/design-system-core`,
      directivesProxyFile: `../angular/src/lib/stencil-generated/components.ts`
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
  ],
};
