import { CdkColumnDef } from '@angular/cdk/table';
import { dir } from 'console';
import { UkhoSortHeader } from './sort-header.directive';
import { UkhoSort } from './sort.directive';

describe('SortDirective', () => {
  let directive: UkhoSort;

  beforeEach(() => {
    directive = new UkhoSort();
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('register should add the passed in header to the headers map', () => {
    const sortHeader = new UkhoSortHeader(directive, new CdkColumnDef());
    sortHeader.columnDef.name = 'test';
    directive.register(sortHeader);

    expect(directive.headers.get('test')).toEqual(sortHeader);
  });

  it('deregister should remove the passed in header from the headers map', () => {
    const sortHeader = new UkhoSortHeader(directive, new CdkColumnDef());
    sortHeader.columnDef.name = 'test';
    directive.register(sortHeader);

    expect(directive.headers.get('test')).toEqual(sortHeader);

    directive.deregister(sortHeader);

    expect(directive.headers.entries.length).toBe(0);
  });

  it('onSort should reset value of all headers that dont match the name of the one passed in', () => {
    const sortHeader = new UkhoSortHeader(directive, new CdkColumnDef());
    sortHeader.columnDef.name = 'test';
    const resetSpy = spyOn(sortHeader, 'reset');
    directive.register(sortHeader);

    const sortHeader2 = new UkhoSortHeader(directive, new CdkColumnDef());
    sortHeader2.columnDef.name = 'test2';
    directive.register(sortHeader2);

    directive.onSort({ column: 'test2', direction: 'asc' });

    expect(resetSpy).toHaveBeenCalledTimes(1);
  });

  it('onSort should call emit on sortChange', () => {
    const emitSpy = spyOn(directive.sortChange, 'emit');

    directive.onSort({ column: 'test2', direction: 'asc' });
    expect(emitSpy).toHaveBeenCalledWith({ column: 'test2', direction: 'asc' });
  });
});
