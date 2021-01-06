import { NgModule } from '@angular/core';
import { RadioGroupComponent } from './radio-group.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

export { RadioGroupComponent } from './radio-group.component';

@NgModule({
  declarations: [RadioGroupComponent],
  exports: [RadioGroupComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class RadioGroupModule {}
