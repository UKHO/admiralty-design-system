import { NgModule } from '@angular/core';
import { RadioGroupComponent } from './radio-group.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RadioGroupComponent],
  exports: [RadioGroupComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class RadioGroupModule {}
