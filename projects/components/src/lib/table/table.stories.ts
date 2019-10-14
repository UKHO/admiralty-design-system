import {moduleMetadata, storiesOf} from '@storybook/angular';
import {TableModule} from './table.module';

storiesOf('Table', module)
  .addDecorator(
    moduleMetadata({
      imports: [TableModule],
    })
  )
  .add('table', () => ({
    template: `
    <table ukho-table [dataSource]="dataSource">
      <ng-container ukhoColumnDef="username">
        <th ukho-header-cell *ukhoHeaderCellDef> User name </th>
        <td ukho-cell *ukhoCellDef="let row"> {{row.username}} </td>
      </ng-container>

      <ng-container ukhoColumnDef="age">
        <th ukho-header-cell *ukhoHeaderCellDef> Age </th>
        <td ukho-cell *ukhoCellDef="let row"> {{row.age}} </td>
      </ng-container>

      <ng-container ukhoColumnDef="title">
        <th ukho-header-cell *ukhoHeaderCellDef> Title </th>
        <td ukho-cell *ukhoCellDef="let row"> {{row.title}} </td>
      </ng-container>

      <tr ukho-header-row *ukhoHeaderRowDef="['username', 'age', 'title']"></tr>
      <tr ukho-row *ukhoRowDef="let row; columns: ['username', 'age', 'title']"></tr>
    </table>`,
    props: {
      dataSource: [
        {username: 1, age: 20, title: 'Test'},
        {username: 2, age: 20, title: 'Test'},
        {username: 3, age: 20, title: 'Test'},
        {username: 4, age: 20, title: 'Test'},
        {username: 5, age: 20, title: 'Test'},
        {username: 6, age: 20, title: 'Test'},
        {username: 7, age: 20, title: 'Test'},
        {username: 8, age: 20, title: 'Test'},
        {username: 9, age: 20, title: 'Test'},
      ]
    }
  }));
