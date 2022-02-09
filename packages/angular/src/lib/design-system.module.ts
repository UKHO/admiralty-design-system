import { NgModule } from '@angular/core';
import { defineCustomElements } from "@ukho/design-system-core/loader";

import { MyButton, MyComponent } from './stencil-generated/components'
import {CommonModule} from "@angular/common";

console.log('register web components in design-system.module - this is not called');
defineCustomElements(window);

const DECLARATIONS = [
  MyButton,
  MyComponent,
]

@NgModule({
  declarations: DECLARATIONS,
  imports: [
    CommonModule
  ],
  exports: DECLARATIONS
})
export class DesignSystemModule {
  constructor() {
    console.log('register web components in design-system.module - this is not called either');
    defineCustomElements(window);
  }
}
