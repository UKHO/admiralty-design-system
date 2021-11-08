import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabGroupComponent } from './tab-group.component';
import { TabBodyComponent } from './tab-body.component';
import { TabComponent } from './tab.component';
import { TabHeaderComponent } from './tab-header.component';

export { TabGroupComponent } from './tab-group.component';
export { TabComponent } from './tab.component';

@NgModule({
  declarations: [TabGroupComponent, TabBodyComponent, TabComponent, TabHeaderComponent],
  imports: [CommonModule],
  exports: [TabGroupComponent, TabComponent],
})
export class TabGroupModule {}
