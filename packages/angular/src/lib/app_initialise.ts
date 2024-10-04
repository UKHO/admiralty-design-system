import { applyPolyfills, defineCustomElements } from '@ukho/admiralty-core/loader';
export const appInitialise = () => {
  return (): any => {
    return applyPolyfills().then(() => {
      return defineCustomElements();
    });
  };
};
