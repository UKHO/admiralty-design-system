import { NgModule } from '@angular/core';
import { BreadcrumbsComponent } from './breadcrumbs.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [BreadcrumbsComponent],
  exports: [BreadcrumbsComponent],
  imports: [CommonModule],
})
export class BreadcrumbsModule {}
