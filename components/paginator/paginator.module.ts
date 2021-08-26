import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './paginator.component';

@NgModule({
  declarations: [PaginatorComponent],
  exports: [PaginatorComponent],
  imports: [CommonModule],
})
export class PaginatorModule {}
