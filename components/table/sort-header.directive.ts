import { Directive, HostBinding, HostListener, OnDestroy, OnInit, Optional } from '@angular/core';
import { SortDirection, UkhoSort } from './sort.directive';
import { CdkColumnDef } from '@angular/cdk/table';

@Directive({
  selector: '[ukho-sort-header]',
})
export class UkhoSortHeader implements OnInit, OnDestroy {
  constructor(@Optional() public sortDir: UkhoSort, @Optional() public columnDef: CdkColumnDef) {}

  private readonly directions: SortDirection[] = ['asc', 'desc', ''];
  public direction: SortDirection = '';

  @HostBinding('style.cursor') styleCursor = 'pointer';
  @HostBinding('class.asc') get classAsc() {
    return this.direction === 'asc';
  }
  @HostBinding('class.desc') get classDesc() {
    return this.direction === 'desc';
  }

  @HostListener('click')
  click() {
    const nextDirection = this.directions[this.directions.indexOf(this.direction) + 1];
    this.direction = nextDirection || nextDirection === '' ? nextDirection : this.directions[0];
    this.sortDir.onSort({ column: this.columnDef.name, direction: this.direction });
  }

  ngOnDestroy(): void {
    this.sortDir.deregister(this);
  }

  ngOnInit(): void {
    this.sortDir.register(this);
  }

  reset() {
    this.direction = '';
  }
}
