import { Component, OnInit } from '@angular/core';
import { TABLE } from './mock-table-data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() { }

  table = TABLE
  
  tableTitle = 'People'

  getPersonDetails(id) {
    const person = this.table.people.find((person) => person.id === id)
    return Object.values(person)
  }

  ngOnInit() {
  }
}
