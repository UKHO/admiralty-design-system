import {NgModule} from '@angular/core';
import {UkhoTable} from './table.component';
import {CommonModule} from '@angular/common';
import {UkhoCell, UkhoCellDef, UkhoColumnDef, UkhoFooterCell, UkhoFooterCellDef, UkhoHeaderCell, UkhoHeaderCellDef} from './cell.directive';
import {UkhoFooterRow, UkhoFooterRowDef, UkhoHeaderRow, UkhoHeaderRowDef, UkhoRow, UkhoRowDef} from './row.directive';
import {CdkTableModule} from '@angular/cdk/table';

export * from './table.component';
export * from './cell.directive';
export * from './row.directive';

const DECLARATIONS = [
  UkhoTable,
  UkhoHeaderCellDef,
  UkhoHeaderRowDef,
  UkhoColumnDef,
  UkhoCellDef,
  UkhoRowDef,
  UkhoFooterCellDef,
  UkhoFooterRowDef,
  UkhoHeaderCell,
  UkhoCell,
  UkhoFooterCell,
  UkhoHeaderRow,
  UkhoRow,
  UkhoFooterRow,
];

@NgModule({
    declarations: DECLARATIONS,
    exports: DECLARATIONS,
    imports: [
      CommonModule,
      CdkTableModule
    ],
})
export class TableModule {}
