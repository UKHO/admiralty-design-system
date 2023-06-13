import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { appInitialise } from './app_initialise';
import { DIRECTIVES } from './stencil-generated';
import { TextValueAccessor } from './stencil-generated/text-value-accessor';
import { BooleanValueAccessor } from './stencil-generated/boolean-value-accessor';
import { NumericValueAccessor } from './stencil-generated/number-value-accessor';
import { RadioValueAccessor } from './stencil-generated/radio-value-accessor';
import { SelectValueAccessor } from './stencil-generated/select-value-accessor';

export interface UkhoDesignSystemConfig {}

@NgModule({
  declarations: [
    ...DIRECTIVES,
    TextValueAccessor,
    BooleanValueAccessor,
    NumericValueAccessor,
    RadioValueAccessor,
    SelectValueAccessor,
  ],
  imports: [CommonModule],
  exports: [
    ...DIRECTIVES,
    TextValueAccessor,
    BooleanValueAccessor,
    NumericValueAccessor,
    RadioValueAccessor,
    SelectValueAccessor,
  ],
})
export class DesignSystemModule {
  static forRoot(): ModuleWithProviders<DesignSystemModule> {
    return {
      ngModule: DesignSystemModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: appInitialise,
          multi: true,
        },
      ],
    };
  }
}
