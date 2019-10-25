import { NgModule } from '@angular/core';
import { ExpansionComponent } from './expansion.component';
import { CommonModule } from '@angular/common';

export { ExpansionComponent } from './expansion.component';

@NgModule({
  declarations: [ExpansionComponent],
  exports: [ExpansionComponent],
  imports: [CommonModule],
})
export class ExpansionModule {}
