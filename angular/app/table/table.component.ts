import { Component, OnInit } from '@angular/core';
import { TABLE } from './mock-table-data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  constructor() { }

  table = TABLE
  
  getRecordDetails(record) {
    return Object.values(record)
  }
}
