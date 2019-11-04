import { Directive, EventEmitter, Output } from '@angular/core';
import { UkhoSortHeader } from './sort-header.directive';

export type SortDirection = 'asc' | 'desc' | '';

export interface SortState {
  column: string;
  direction: SortDirection;
}

@Directive({
  selector: '[ukho-sort]'
})
export class UkhoSort {
  @Output() readonly sortChange = new EventEmitter<SortState>();

  private headers = new Map<string, UkhoSortHeader>();

  public register(sortHeader: UkhoSortHeader) {
    this.headers.set(sortHeader.columnDef.name, sortHeader);
  }

  public deregister(sortHeader: UkhoSortHeader) {
    this.headers.delete(sortHeader.columnDef.name);
  }

  public onSort(state: { column: string; direction: 'asc' | 'desc' | '' }) {
    this.headers.forEach(header => header.columnDef.name !== state.column ? header.reset() : '');
    this.sortChange.emit(state);
  }
}
