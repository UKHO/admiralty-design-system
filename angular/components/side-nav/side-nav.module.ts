import { NgModule } from '@angular/core';
import { SideNavComponent } from './side-nav.component';
import { CommonModule } from '@angular/common';

export { SideNavComponent } from './side-nav.component';

@NgModule({
  declarations: [SideNavComponent],
  exports: [SideNavComponent],
  imports: [CommonModule],
})
export class SideNavModule {}
