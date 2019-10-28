import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileInputComponent } from './file-input.component';
import { FormsModule } from '@angular/forms';

export { FileInputComponent } from './file-input.component';

@NgModule({
  declarations: [FileInputComponent],
  exports: [FileInputComponent],
  imports: [CommonModule, FormsModule],
})
export class FileInputModule {}
