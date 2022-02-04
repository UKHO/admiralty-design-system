import { NgModule } from '@angular/core';
import { ComponentLibraryComponent } from './component-library.component';

import { MyButton, MyComponent } from './stencil-generated/components'

// Do MyButton and MyComponent need declaring and exporting here? Example from Ionic:
// https://github.com/ionic-team/ionic-framework/blob/412e5f168e971994c9eec8152b72821ba32bfc2d/angular/src/ionic-module.ts

@NgModule({
  declarations: [
    ComponentLibraryComponent,
    MyButton,
    MyComponent,
  ],
  imports: [
  ],
  exports: [
    ComponentLibraryComponent,
    MyButton,
    MyComponent,
  ]
})
export class ComponentLibraryModule { }
