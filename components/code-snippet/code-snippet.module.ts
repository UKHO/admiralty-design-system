import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeSnippetComponent } from './code-snippet.component';
import { ButtonModule } from '../button/button.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CodeSnippetDirective } from './code-snippet.directive';

@NgModule({
  declarations: [CodeSnippetComponent, CodeSnippetDirective],
  imports: [CommonModule, ButtonModule, BrowserAnimationsModule],
  exports: [CodeSnippetComponent],
})
export class CodeSnippetModule {}
