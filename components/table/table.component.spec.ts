import { TableComponent } from './table.component';
import { createComponentFactory, createHostFactory, Spectator, SpectatorHost } from '@ngneat/spectator/jest';
import { CdkTableModule, DataSource } from '@angular/cdk/table';
import { SortState } from './sort.directive';
import { UkhoSortHeader } from './sort-header.directive';
import { TestBed } from '@angular/core/testing';
import { COMPILER_OPTIONS } from '@angular/core';
import { ColumnData } from './ColumnData';

describe('TableComponent', () => {
  let spectator: Spectator<TableComponent<any>>;
  let createComponent = createComponentFactory({ component: TableComponent, imports: [CdkTableModule] });

  let fakeDataSource;
  let fakeDisplayedColumns: ColumnData[];

  beforeEach(() => {
    fakeDataSource = [{ test: 'test' }];
    fakeDisplayedColumns = [
      {
        headerTitle: 'test',
        sortable: true,
        propertyName: 'test',
      },
    ];
    spectator = createComponent({
      props: { dataSource: fakeDataSource, displayedColumns: fakeDisplayedColumns },
    });
  });

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });

  it('onSortChange should call emit on the event emitter', () => {
    const emitSpy = spyOn(spectator.component.sortChange, 'emit');
    var sortState: SortState = { column: 'test', direction: 'asc' };
    spectator.component.onSortChange(sortState);

    expect(emitSpy).toHaveBeenCalledTimes(1);
  });

  it('isHeaderDisplayed should return true if there is 1 or more header titles', () => {
    expect(spectator.component.isHeaderDisplayed).toBe(true);
  });

  it('isHeaderDisplayed should return false if there is 0 header titles', () => {
    const fakeDisplayedColumns: ColumnData[] = [];
    spectator = createComponent({
      props: { dataSource: fakeDataSource, displayedColumns: fakeDisplayedColumns },
    });

    expect(spectator.component.isHeaderDisplayed).toBe(false);
  });

  it('columnProperties should return an array of only the propertyNames', () => {
    fakeDisplayedColumns.push({
      headerTitle: 'test2',
      sortable: true,
      propertyName: 'test2',
    });
    spectator.detectChanges();

    expect(spectator.component.columnProperties.length).toBe(2);
    expect(spectator.component.columnProperties).toEqual(['test', 'test2']);
  });

  it('should render the same number of column headers as there are passed in headers', () => {
    expect(spectator.queryAll('th', { root: true }).length).toBe(1);
  });

  it('ukho-sort-header is not added to headers that are set as sortable false', () => {
    fakeDisplayedColumns.push({
      headerTitle: 'test2',
      sortable: false,
      propertyName: 'test2',
    });
    spectator.detectChanges();
    expect(spectator.queryAll('th[ukho-sort-header]', { root: true }).length).toBe(1);
  });

  it('ukho-sort-header is added to headers that are set as sortable true', () => {
    fakeDisplayedColumns.push({
      headerTitle: 'test2',
      sortable: true,
      propertyName: 'test2',
    });
    spectator.detectChanges();
    expect(spectator.queryAll('th[ukho-sort-header]', { root: true }).length).toBe(2);
  });

  it('the header row is not rendered when there are no header titles', () => {
    fakeDisplayedColumns = [
      {
        sortable: true,
        propertyName: 'test',
      },
    ];
    spectator = createComponent({
      props: { dataSource: fakeDataSource, displayedColumns: fakeDisplayedColumns },
    });
    expect(spectator.queryAll('tr[cdk-header-row]', { root: true }).length).toBe(0);
  });

  it('the header row is rendered when there are header titles', () => {
    expect(spectator.queryAll('tr[cdk-header-row]', { root: true }).length).toBe(1);
  });
});
