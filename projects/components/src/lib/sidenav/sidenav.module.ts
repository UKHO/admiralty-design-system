import { NgModule } from '@angular/core';
import { SidenavComponent } from './sidenav.component';
import { CommonModule } from '@angular/common';

export { SidenavComponent } from './sidenav.component';

@NgModule({
  declarations: [SidenavComponent],
  exports: [SidenavComponent],
  imports: [CommonModule],
})
export class SidenavModule {}
