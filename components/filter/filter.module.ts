import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from '../button/button.module';
import { CheckboxModule } from '../checkbox/checkbox.module';
import { ExpansionModule } from '../expansion/expansion.module';
import { FilterComponent } from './filter.component';

export { FilterComponent } from './filter.component';

@NgModule({
  declarations: [FilterComponent],
  exports: [FilterComponent],
  imports: [CommonModule, ButtonModule, CheckboxModule, ExpansionModule],
})
export class FilterModule {}
