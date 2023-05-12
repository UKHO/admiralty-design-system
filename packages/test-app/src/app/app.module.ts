import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DesignSystemModule } from '@ukho/admiralty-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, DesignSystemModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
