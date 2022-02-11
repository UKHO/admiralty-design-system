import { Config } from '@stencil/core';
import { angularOutputTarget as angular } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'ukho',
  outputTargets: [
    angular({
      componentCorePackage: '@ukho/design-system-core',
      directivesProxyFile: '../angular/src/lib/stencil-generated/components.ts',
      
      /* If true, the output target will import the custom element instance and register it 
      * with the Custom Elements Registry when the component is imported inside of a user's
      * app. This can only be used with the Custom Elements Bundle and will not work with 
      * lazy loaded components. */
      includeImportCustomElements: false,
      customElementsDir: `dist/components`
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',

      /* By default, consumers of the custom-elements output target need to either register 
      * each Stencil component in the bundle manually, or call a convenience method, 
      * defineCustomElements(), that is exported as a part of the bundle to define every 
      * component in the bundle. This behavior can be cumbersome, especially when only a 
      * handful of components are needed and/or those components have several child
      * components (and their children have children, etc.). 
      * 
      * Setting this flag to true will recursively define all children components for a 
      * Stencil component when it is registered. Users of this flag should note that this 
      * may increase their bundle size by automatically defining & registering child 
      * components. */
      autoDefineCustomElements: false
    },
  ],
};
