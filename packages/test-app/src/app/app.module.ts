import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DesignSystemModule } from '@ukho/design-system-angular/dist/design-system';

// Import and define the components
import '@ukho/design-system-core/dist/components/my-button';
import '@ukho/design-system-core/dist/components/my-component';

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
export class AppModule {}
