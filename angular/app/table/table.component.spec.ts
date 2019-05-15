import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { Table } from '../mock-table-data';
import { DebugElement } from '@angular/core';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let compiled: DebugElement['nativeElement']

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    component.table = testTable;
    fixture.detectChanges();
    compiled = fixture.nativeElement
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render table headings from input property table object', () => {
    const headings = compiled.querySelectorAll('thead tr th');
    expect(headings.length).toBe(testTable.headings.length)
    headings.forEach((heading, i) => {
      expect(heading.textContent).toEqual(testTable.headings[i]);
    })
  })

  it('should render table data from input property table object', () => {
    const records = compiled.querySelectorAll('tbody tr')
    expect(records.length).toBe(testTable.records.length)
    records.forEach((record, i) => {
        const testRecord = testTable.records[i]
        const testValues = Object.values(testRecord)
        const values = record.querySelectorAll('td')
        expect(values.length).toBe(testValues.length)
        values.forEach((value, j) => {
          console.log('value...', value.textContent, testValues[j])
          expect(value.textContent.trim()).toEqual(testValues[j])
        })
      })
  })
});

const testTable: Table = {
  headings: [
      'Folio',
      'Title',
      'From',
      'To',
  ],
  records: [
      {
          folio: '5600',
          title: 'The Solent and Approaches',
          from: '26/05/16',
          to: '26/05/16',
      },
      {
          folio: '5600',
          title: 'East Devon and Dorset Coast, Exmouth to Christchurch',
          from: '26/05/16',
          to: '26/05/16'
      },
      {
          folio: '5600',
          title: 'The West Country, Falmouth to Teignmouth',
          from: '26/05/16',
          to: '26/05/16'
      },
      {
          folio: '5600',
          title: 'Falmouth to Hartland Point including the Isles of Scilly',
          from: '26/05/16',
          to: '26/05/16'
      },
      {
          folio: '5600',
          title: 'The Channel Islands',
          from: '26/05/16',
          to: '26/05/16'
      },
      {
          folio: '5600',
          title: 'Chichester to Ramsgate and Calais to Oostende',
          from: '26/05/16',
          to: '26/05/16'
      },
  ]
}
