import {
  CDK_ROW_TEMPLATE,
  CdkFooterRow,
  CdkFooterRowDef,
  CdkHeaderRow,
  CdkHeaderRowDef,
  CdkRow,
  CdkRowDef,
} from '@angular/cdk/table';
import { ChangeDetectionStrategy, Component, Directive, ViewEncapsulation } from '@angular/core';

@Directive({
  selector: '[ukhoHeaderRowDef]',
  providers: [{ provide: CdkHeaderRowDef, useExisting: UkhoHeaderRowDef }],
  inputs: ['columns: ukhoHeaderRowDef', 'sticky: ukhoHeaderRowDefSticky'],
})
export class UkhoHeaderRowDef extends CdkHeaderRowDef {}

@Directive({
  selector: '[ukhoFooterRowDef]',
  providers: [{ provide: CdkFooterRowDef, useExisting: UkhoFooterRowDef }],
  inputs: ['columns: ukhoFooterRowDef', 'sticky: ukhoFooterRowDefSticky'],
})
export class UkhoFooterRowDef extends CdkFooterRowDef {}

@Directive({
  selector: '[ukhoRowDef]',
  providers: [{ provide: CdkRowDef, useExisting: UkhoRowDef }],
  inputs: ['columns: ukhoRowDefColumns', 'when: ukhoRowDefWhen'],
})
export class UkhoRowDef<T> extends CdkRowDef<T> {}

@Component({
  moduleId: module.id,
  selector: 'ukho-header-row, tr[ukho-header-row]',
  template: CDK_ROW_TEMPLATE,
  host: {
    class: 'ukho-header-row',
    role: 'row',
  },
  // See note on CdkTable for explanation on why this uses the default change detection strategy.
  // tslint:disable-next-line:validate-decorators
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'matHeaderRow',
  providers: [{ provide: CdkHeaderRow, useExisting: UkhoHeaderRow }],
})
export class UkhoHeaderRow extends CdkHeaderRow {}

@Component({
  moduleId: module.id,
  selector: 'ukho-footer-row, tr[ukho-footer-row]',
  template: CDK_ROW_TEMPLATE,
  host: {
    class: 'ukho-footer-row',
    role: 'row',
  },
  // See note on CdkTable for explanation on why this uses the default change detection strategy.
  // tslint:disable-next-line:validate-decorators
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'matFooterRow',
  providers: [{ provide: CdkFooterRow, useExisting: UkhoFooterRow }],
})
export class UkhoFooterRow extends CdkFooterRow {}

@Component({
  moduleId: module.id,
  selector: 'ukho-row, tr[ukho-row]',
  template: CDK_ROW_TEMPLATE,
  host: {
    class: 'ukho-row',
    role: 'row',
  },
  // See note on CdkTable for explanation on why this uses the default change detection strategy.
  // tslint:disable-next-line:validate-decorators
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'matRow',
  providers: [{ provide: CdkRow, useExisting: UkhoRow }],
})
export class UkhoRow extends CdkRow {}
