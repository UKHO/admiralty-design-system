import { NgModule } from '@angular/core';
import { TextareaComponent } from './textarea.component';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

export { TextareaComponent } from './textarea.component';

@NgModule({
  declarations: [TextareaComponent],
  exports: [TextareaComponent],
  imports: [CommonModule, MatFormFieldModule, FormsModule],
})
export class TextareaModule {}
