import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CDK_TABLE_TEMPLATE, CdkTable } from '@angular/cdk/table';

@Component({
  selector: 'ukho-table, table[ukho-table]',
  exportAs: 'ukhoTable',
  template: CDK_TABLE_TEMPLATE,
  styleUrls: ['./table.component.scss'],
  providers: [{ provide: CdkTable, useExisting: UkhoTable }],
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None,
})
export class UkhoTable<T> extends CdkTable<T> {}
