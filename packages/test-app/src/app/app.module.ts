import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DesignSystemModule } from '@ukho/design-system-angular/dist/design-system';
import { defineCustomElements } from '@ukho/design-system-core/loader';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, DesignSystemModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    console.log('register web components in app.module.ts constructor - this is called')
    defineCustomElements(window);
  }
}
