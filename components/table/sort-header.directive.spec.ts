import { CdkColumnDef } from '@angular/cdk/table';
import { dir } from 'console';
import { UkhoSortHeader } from './sort-header.directive';
import { UkhoSort } from './sort.directive';

describe('SortHeaderDirective', () => {
  let directive: UkhoSortHeader;
  let ukhoSort: UkhoSort;
  let columnDef: CdkColumnDef;

  beforeEach(() => {
    ukhoSort = new UkhoSort();
    columnDef = new CdkColumnDef();
    directive = new UkhoSortHeader(ukhoSort, columnDef);
  });
  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('classAsc should return true if direction equals asc', () => {
    directive.direction = 'asc';

    expect(directive.classAsc).toBe(true);
  });

  it('classAsc should return false if direction does not equal asc', () => {
    directive.direction = 'desc';

    expect(directive.classAsc).toBe(false);
  });

  it('classDesc should return true if direction equals desc', () => {
    directive.direction = 'desc';

    expect(directive.classDesc).toBe(true);
  });

  it('classDesc should return false if direction does not equal desc', () => {
    directive.direction = 'asc';

    expect(directive.classDesc).toBe(false);
  });

  it('ngOnDestory should call deregister on the UkhoSort', () => {
    const deregisterSpy = spyOn(ukhoSort, 'deregister');

    directive.ngOnDestroy();

    expect(deregisterSpy).toHaveBeenCalledWith(directive);
  });

  it('ngOnInit should call register on the UkhoSort', () => {
    const registerSpy = spyOn(ukhoSort, 'register');

    directive.ngOnInit();

    expect(registerSpy).toHaveBeenCalledWith(directive);
  });

  it('reeset should set the direction to empty string', () => {
    directive.direction = 'asc';

    directive.reset();

    expect(directive.direction).toBe('');
  });

  it('click should call onSort on the UkhoSort with the correct state of asc if  direction is not currently set', () => {
    const onSortSpy = spyOn(ukhoSort, 'onSort');

    columnDef.name = 'test';

    directive.click();

    expect(onSortSpy).toHaveBeenCalledWith({ column: 'test', direction: 'asc' });
  });

  it('click should call onSort on the UkhoSort with the correct state of asc if direction is currently empty string', () => {
    const onSortSpy = spyOn(ukhoSort, 'onSort');

    columnDef.name = 'test';
    directive.direction = '';

    directive.click();

    expect(onSortSpy).toHaveBeenCalledWith({ column: 'test', direction: 'asc' });
  });

  it('click should call onSort on the UkhoSort with the correct state of desc if direction is currently asc', () => {
    const onSortSpy = spyOn(ukhoSort, 'onSort');

    columnDef.name = 'test';
    directive.direction = 'asc';

    directive.click();

    expect(onSortSpy).toHaveBeenCalledWith({ column: 'test', direction: 'desc' });
  });

  it('click should call onSort on the UkhoSort with the correct state of empty string if direction is currently desc', () => {
    const onSortSpy = spyOn(ukhoSort, 'onSort');

    columnDef.name = 'test';
    directive.direction = 'desc';

    directive.click();

    expect(onSortSpy).toHaveBeenCalledWith({ column: 'test', direction: '' });
  });
});
