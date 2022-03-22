import { NgModule } from '@angular/core';
import { TextinputComponent } from './textinput.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputHeaderModule } from '../form-field/input-header/input-header.module';

export { TextinputComponent } from './textinput.component';

@NgModule({
  declarations: [TextinputComponent],
  exports: [TextinputComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, InputHeaderModule],
})
export class TextinputModule {}
