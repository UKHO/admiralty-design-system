import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { appInitialise } from './app_initialise';
import { DIRECTIVES } from './stencil-generated';

export interface UkhoDesignSystemConfig {}

@NgModule({
  declarations: [...DIRECTIVES],
  imports: [CommonModule],
  exports: [...DIRECTIVES],
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
