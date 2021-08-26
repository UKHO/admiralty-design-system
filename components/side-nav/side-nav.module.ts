import { NgModule } from '@angular/core';
import { SideNavComponent } from './side-nav.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SideNavComponent],
  exports: [SideNavComponent],
  imports: [CommonModule],
})
export class SideNavModule {}
