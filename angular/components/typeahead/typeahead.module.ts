import { NgModule } from '@angular/core';
import { TypeaheadComponent } from './typeahead.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextinputModule } from '../textinput/textinput.module';

export { TypeaheadComponent } from './typeahead.component';

@NgModule({
  declarations: [TypeaheadComponent],
  exports: [TypeaheadComponent],
  imports: [CommonModule, TextinputModule, ReactiveFormsModule, FormsModule],
})
export class TypeaheadModule {}