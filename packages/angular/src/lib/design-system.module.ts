import { NgModule } from '@angular/core';

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
export class DesignSystemModule { }
