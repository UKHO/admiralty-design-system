/*
 * Public API Surface of component-library
 */

export * from './lib/design-system.module';
export { DIRECTIVES } from './lib/stencil-generated';
export * from './lib/stencil-generated/components';

export { TextValueAccessor } from './lib/stencil-generated/text-value-accessor';
export { RadioValueAccessor } from './lib/stencil-generated/radio-value-accessor';
export { BooleanValueAccessor } from './lib/stencil-generated/boolean-value-accessor';
export { NumericValueAccessor } from './lib/stencil-generated/number-value-accessor';
export { SelectValueAccessor } from './lib/stencil-generated/select-value-accessor';

export { CheckboxChangeEventDetail, SelectChangeEventDetail, RadioGroupChangeEventDetail } from '@ukho/admiralty-core';
