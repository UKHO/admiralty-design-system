import { NgModule } from '@angular/core';
import { TextinputComponent } from './textinput.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export { TextinputComponent } from './textinput.component';

@NgModule({
  declarations: [TextinputComponent],
  exports: [TextinputComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class TextinputModule {}
