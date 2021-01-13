import { NgModule } from '@angular/core';
import { TypeaheadComponent } from './typeahead.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextinputModule } from 'components/textinput/textinput.module';

@NgModule({
  declarations: [TypeaheadComponent],
  exports: [TypeaheadComponent],
  imports: [CommonModule, TextinputModule, ReactiveFormsModule, FormsModule],
})
export class TypeaheadModule {}
