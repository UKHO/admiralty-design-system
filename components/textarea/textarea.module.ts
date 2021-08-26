import { NgModule } from '@angular/core';
import { TextareaComponent } from './textarea.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TextareaComponent],
  exports: [TextareaComponent],
  imports: [CommonModule, FormsModule],
})
export class TextareaModule {}
