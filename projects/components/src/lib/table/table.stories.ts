import { moduleMetadata, storiesOf } from '@storybook/angular';
import { TableModule } from './table.module';
import { data } from './mock-data';

storiesOf('Table', module)
  .addDecorator(
    moduleMetadata({
      imports: [TableModule],
    }),
  )
  .add('table', () => ({
    template: `
    <table ukho-table [dataSource]="dataSource">
      <ng-container ukhoColumnDef="folio">
        <th ukho-header-cell *ukhoHeaderCellDef> Folio </th>
        <td ukho-cell *ukhoCellDef="let row"> {{row.folio}} </td>
      </ng-container>

      <ng-container ukhoColumnDef="title">
        <th ukho-header-cell *ukhoHeaderCellDef> Title </th>
        <td ukho-cell *ukhoCellDef="let row"> {{row.title}} </td>
      </ng-container>

      <ng-container ukhoColumnDef="from">
        <th ukho-header-cell *ukhoHeaderCellDef> From </th>
        <td ukho-cell *ukhoCellDef="let row"> {{row.from}} </td>
      </ng-container>

      <ng-container ukhoColumnDef="to">
        <th ukho-header-cell *ukhoHeaderCellDef> To </th>
        <td ukho-cell *ukhoCellDef="let row"> {{row.to}} </td>
      </ng-container>

      <tr ukho-header-row *ukhoHeaderRowDef="headings"></tr>
      <tr ukho-row *ukhoRowDef="let row; columns: headings"></tr>
    </table>`,
    props: {
      headings: data.headings,
      dataSource: data.records,
    },
  }));
