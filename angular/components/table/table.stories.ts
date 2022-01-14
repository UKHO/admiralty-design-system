import { moduleMetadata, Story } from '@storybook/angular';
import { data } from './mock-data';
import { CdkTableModule } from '@angular/cdk/table';
import { TableComponent } from './table.component';
import { SortDirective } from './sort.directive';
import { SortHeaderDirective } from './sort-header.directive';
import { action } from '@storybook/addon-actions';
import {
  CellRefDirective,
  HeaderCellRefDirective,
  FooterCellRefDirective,
  ColumnDefDirective,
  HeaderCellDirective,
  FooterCellDirective,
  CellDirective,
} from './table.cells';
import {
  HeaderRowDefDirective,
  FooterRowDefDirective,
  RowDefDirective,
  HeaderRowComponent,
  FooterRowComponent,
  RowComponent,
} from './table.rows';
import { ButtonModule } from '../button/button.module';

const declarations = [
  TableComponent,
  CellRefDirective,
  HeaderCellRefDirective,
  FooterCellRefDirective,
  ColumnDefDirective,
  HeaderRowDefDirective,
  FooterRowDefDirective,
  RowDefDirective,
  HeaderCellDirective,
  FooterCellDirective,
  CellDirective,
  HeaderRowComponent,
  FooterRowComponent,
  RowComponent,
  SortDirective,
  SortHeaderDirective,
];

export default {
  title: 'Table',
  component: TableComponent,
  decorators: [
    moduleMetadata({
      declarations,
      imports: [CdkTableModule, ButtonModule],
    }),
  ],
  argTypes: { sortChange: { action: 'Sort Changed' } },
};

export const noSort: Story = (args) => ({
  props: args,
  template: `<table ukho-table [dataSource]="dataSource">
  <ng-container ukhoColumnDef="folio">
    <th ukhoHeaderCell *ukhoHeaderCellDef>Folio</th>
    <td ukhoCell *ukhoCellDef="let row">{{row.folio}}</td>
  </ng-container>
  <ng-container ukhoColumnDef="title">
    <th ukhoHeaderCell *ukhoHeaderCellDef>Title</th>
    <td ukhoCell *ukhoCellDef="let row">{{row.title}}</td>
  </ng-container>
  <ng-container ukhoColumnDef="from">
    <th ukhoHeaderCell *ukhoHeaderCellDef>From</th>
    <td ukhoCell *ukhoCellDef="let row">{{row.from}}</td>
  </ng-container>
  <ng-container ukhoColumnDef="to">
    <th ukhoHeaderCell *ukhoHeaderCellDef>To</th>
    <td ukhoCell *ukhoCellDef="let row">{{row.to}}</td>
  </ng-container>
  <tr ukho-header-row *ukhoHeaderRowDef="headings"></tr>
  <tr ukho-row *ukhoRowDef="let row; columns: headings"></tr>
</table>`,
});
noSort.args = {
  headings: data.headings,
  dataSource: data.records,
};

export const withSort: Story = (args) => ({
  props: args,
  template: `<table ukho-table ukhoSort [dataSource]="dataSource" (sortChange)="sortChange($event)">
  <ng-container ukhoColumnDef="folio">
    <th ukho-header-cell *ukhoHeaderCellDef ukhoSortHeader>Folio</th>
    <td ukho-cell *ukhoCellDef="let row">{{row.folio}}</td>
  </ng-container>
  <ng-container ukhoColumnDef="title">
    <th ukho-header-cell *ukhoHeaderCellDef ukhoSortHeader>Title</th>
    <td ukho-cell *ukhoCellDef="let row">{{row.title}}</td>
  </ng-container>
  <ng-container ukhoColumnDef="from">
    <th ukho-header-cell *ukhoHeaderCellDef>From</th>
    <td ukho-cell *ukhoCellDef="let row">{{row.from}}</td>
  </ng-container>
  <ng-container ukhoColumnDef="to">
    <th ukho-header-cell *ukhoHeaderCellDef>To</th>
    <td ukho-cell *ukhoCellDef="let row">{{row.to}}</td>
  </ng-container>
  <tr ukho-header-row *ukhoHeaderRowDef="headings"></tr>
  <tr ukho-row *ukhoRowDef="let row; columns: headings"></tr>
</table>`,
});
withSort.args = {
  headings: data.headings,
  dataSource: data.records,
};

export const withComplexContent: Story = (args) => ({
  props: args,
  template: `<table ukho-table ukhoSort [dataSource]="dataSource" (sortChange)="sortChange($event)">
  <ng-container ukhoColumnDef="folio">
    <th ukho-header-cell *ukhoHeaderCellDef ukhoSortHeader>Folio</th>
    <td ukho-cell *ukhoCellDef="let row"><span style="color:purple">{{row.folio}}</span></td>
  </ng-container>
  <ng-container ukhoColumnDef="title">
    <th ukho-header-cell *ukhoHeaderCellDef ukhoSortHeader>Title</th>
    <td ukho-cell *ukhoCellDef="let row"><b>{{row.title}}</b></td>
  </ng-container>
  <ng-container ukhoColumnDef="from">
    <th ukho-header-cell *ukhoHeaderCellDef>From</th>
    <td ukho-cell *ukhoCellDef="let row"><i>{{row.from}}</i></td>
  </ng-container>
  <ng-container ukhoColumnDef="to">
    <th ukho-header-cell *ukhoHeaderCellDef>To</th>
    <td ukho-cell *ukhoCellDef="let row"><ukho-button>Click Me</ukho-button></td>
  </ng-container>
  <tr ukho-header-row *ukhoHeaderRowDef="headings"></tr>
  <tr ukho-row *ukhoRowDef="let row; columns: headings"></tr>
</table>`,
});
withComplexContent.args = {
  headings: data.headings,
  dataSource: data.records,
};
