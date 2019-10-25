import { Directive, Input } from '@angular/core';
import {
  CdkCell,
  CdkCellDef,
  CdkColumnDef,
  CdkFooterCell,
  CdkFooterCellDef,
  CdkHeaderCell,
  CdkHeaderCellDef,
} from '@angular/cdk/table';

@Directive({
  selector: '[ukhoCellDef]',
  providers: [{ provide: CdkCellDef, useExisting: UkhoCellDef }],
})
export class UkhoCellDef extends CdkCellDef {}

@Directive({
  selector: '[ukhoHeaderCellDef]',
  providers: [{ provide: CdkHeaderCellDef, useExisting: UkhoHeaderCellDef }],
})
export class UkhoHeaderCellDef extends CdkHeaderCellDef {}

@Directive({
  selector: '[ukhoFooterCellDef]',
  providers: [{ provide: CdkFooterCellDef, useExisting: UkhoFooterCellDef }],
})
export class UkhoFooterCellDef extends CdkFooterCellDef {}

@Directive({
  selector: '[ukhoColumnDef]',
  providers: [{ provide: CdkColumnDef, useExisting: UkhoColumnDef }],
})
export class UkhoColumnDef extends CdkColumnDef {
  @Input('ukhoColumnDef') name: string;
}

@Directive({
  selector: 'ukho-header-cell, th[ukho-header-cell]',
  host: {
    class: 'ukho-header-cell',
    role: 'columnheader',
  },
})
export class UkhoHeaderCell extends CdkHeaderCell {}

@Directive({
  selector: 'ukho-footer-cell, td[ukho-footer-cell]',
  host: {
    class: 'ukho-footer-cell',
    role: 'gridcell',
  },
})
export class UkhoFooterCell extends CdkFooterCell {}

@Directive({
  selector: 'ukho-cell, td[ukho-cell]',
  host: {
    class: 'ukho-cell',
    role: 'gridcell',
  },
})
export class UkhoCell extends CdkCell {}
