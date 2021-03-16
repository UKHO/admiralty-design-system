import { DataSource } from '@angular/cdk/table';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SortState } from './sort.directive';
import { Observable } from 'rxjs';
import { ColumnData } from './ColumnData';

@Component({
  selector: 'ukho-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent<T> {
  @Input() dataSource: DataSource<T> | Observable<ReadonlyArray<T> | T[]> | ReadonlyArray<T> | T[];
  @Input() displayedColumns: ColumnData[];

  @Output() readonly sortChange = new EventEmitter<SortState>();

  onSortChange(state: SortState) {
    this.sortChange.emit(state);
  }

  public get isHeaderDisplayed(): boolean {
    return this.displayedColumns.some((x) => x.headerTitle);
  }

  public get columnProperties(): string[] {
    return this.displayedColumns.map((x) => x.propertyName);
  }
}
