import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UkhoTable } from './table.component';
import { mockData, TestData } from './mock-data';
import { DebugElement, Type, Component, ViewChild } from '@angular/core';
import { TableModule } from './table.module';
import { DataSource } from '@angular/cdk/table';
import { CollectionViewer } from '@angular/cdk/collections';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

describe.skip('TableComponent', () => {
  let fixture: ComponentFixture<any>;
  let component: any;
  let compiled: DebugElement['nativeElement'];
  let dataSource: FakeDataSource;
  let table: UkhoTable<TestData>;

  function createComponent<T>(componentType: Type<T>, declarations: any[] = []): ComponentFixture<T> {
    TestBed.configureTestingModule({
      imports: [TableModule],
      declarations: [componentType, ...declarations]
    }).compileComponents();

    return TestBed.createComponent<T>(componentType);
  }

  function setupTableTestApp(componentType: Type<any>, declarations: any[] = []) {
    fixture = createComponent(componentType, declarations);
    component = fixture.componentInstance;

    fixture.detectChanges();
    compiled = fixture.nativeElement;
  }

  beforeEach(() => {
    setupTableTestApp(SimpleUkhoTableApp);
    component = fixture.componentInstance as SimpleUkhoTableApp;
    dataSource = component.dataSource;
    table = component.table;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render table headings from input property table object', () => {
    const headings = compiled.querySelectorAll('ukho-header-cell');
    expect(headings).toBeTruthy();
    expect(headings.length).toBe(component.columnsToRender.length);
    headings.forEach((heading, i) => {
      expect(heading.textContent).toEqual(mockData.headingTitles[i]);
    });
  });

  it('should render table data from input property table object', () => {
    const records = compiled.querySelectorAll('ukho-row');
    expect(records.length).toBe(mockData.records.length);
    records.forEach((record, i) => {
      const testRecord = mockData.records[i];
      const testValues = Object.values(testRecord);
      const values = record.querySelectorAll('ukho-cell');
      expect(values.length).toBe(testValues.length);
      values.forEach((value, j) => {
        expect(value.textContent.trim()).toEqual(testValues[j]);
      });
    });
  });
});

class FakeDataSource extends DataSource<TestData> {
  isConnected = false;
  _dataChange = new BehaviorSubject<TestData[]>([]);
  connect(collectionViewer: CollectionViewer) {
    this.isConnected = true;
    return combineLatest([this._dataChange, collectionViewer.viewChange]).pipe(map((data) => data[0]));
  }
  disconnect(collectionViewer: CollectionViewer) {
    this.isConnected = false;
  }

  get data() {
    return this._dataChange.getValue();
  }
  set data(data: TestData[]) {
    this._dataChange.next(data);
  }
  constructor() {
    super();
    this.data = mockData.records;
  }
}

@Component({
  template: `
    <ukho-table [dataSource]="dataSource">
      <ng-container ukhoColumnDef="folio">
        <ukho-header-cell *ukhoHeaderCellDef>Folio</ukho-header-cell>
        <ukho-cell *ukhoCellDef="let row">{{ row.folio }}</ukho-cell>
      </ng-container>
      <ng-container ukhoColumnDef="title">
        <ukho-header-cell *ukhoHeaderCellDef>Title</ukho-header-cell>
        <ukho-cell *ukhoCellDef="let row">{{ row.title }}</ukho-cell>
      </ng-container>
      <ng-container ukhoColumnDef="from">
        <ukho-header-cell *ukhoHeaderCellDef>From</ukho-header-cell>
        <ukho-cell *ukhoCellDef="let row">{{ row.from }}</ukho-cell>
      </ng-container>
      <ng-container ukhoColumnDef="to">
        <ukho-header-cell *ukhoHeaderCellDef>To</ukho-header-cell>
        <ukho-cell *ukhoCellDef="let row">{{ row.to }}</ukho-cell>
      </ng-container>
      <ukho-header-row *ukhoHeaderRowDef="columnsToRender"></ukho-header-row>
      <ukho-row class="text-wrap" *ukhoRowDef="let row; columns: this.headings"></ukho-row>
    </ukho-table>
  `
})
class SimpleUkhoTableApp {
  dataSource: FakeDataSource | undefined = new FakeDataSource();
  headings = mockData.headings;

  @ViewChild(UkhoTable) table: UkhoTable<TestData>;
}
