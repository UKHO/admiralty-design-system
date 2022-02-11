import { NgModule } from '@angular/core';
import { defineCustomElements } from "@ukho/design-system-core/loader";

import { MyButton, MyComponent } from './stencil-generated/components'
import {CommonModule} from "@angular/common";

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
export class DesignSystemModule {}
