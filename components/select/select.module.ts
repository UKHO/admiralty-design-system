import { NgModule } from '@angular/core';
import { SelectComponent } from './select.component';
import { CommonModule } from '@angular/common';
import { InputHeaderModule } from '../form-field/input-header/input-header.module';

export { SelectComponent } from './select.component';

@NgModule({
  declarations: [SelectComponent],
  exports: [SelectComponent],
  imports: [CommonModule, InputHeaderModule],
})
export class SelectModule {}
