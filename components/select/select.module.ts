import { NgModule } from '@angular/core';
import { SelectComponent } from './select.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SelectComponent],
  exports: [SelectComponent],
  imports: [CommonModule],
})
export class SelectModule {}
