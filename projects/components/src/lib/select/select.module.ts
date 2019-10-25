import { NgModule } from '@angular/core';
import { SelectComponent } from './select.component';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

export { SelectComponent } from './select.component';

@NgModule({
  declarations: [SelectComponent],
  exports: [SelectComponent],
  imports: [CommonModule, MatFormFieldModule, MatSelectModule],
})
export class SelectModule {}
