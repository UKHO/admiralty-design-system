import { NgModule } from '@angular/core';
import { ButtonComponent } from './button.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
  imports: [CommonModule],
})
export class ButtonModule {}
