import { NgModule } from '@angular/core';
import { TableComponent } from './table.component';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';
import { UkhoSort } from './sort.directive';
import { UkhoSortHeader } from './sort-header.directive';

@NgModule({
  declarations: [TableComponent, UkhoSort, UkhoSortHeader],
  exports: [TableComponent, UkhoSort, UkhoSortHeader],
  imports: [CommonModule, CdkTableModule],
})
export class TableModule {}
