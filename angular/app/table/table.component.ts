import { Component, Input } from '@angular/core';
import { Table } from '../mock-table-data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  constructor() { }

  @Input() table: Table;
  
  getRecordDetails(record) {
    return Object.values(record);
  }
}
