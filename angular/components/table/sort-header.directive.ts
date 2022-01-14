import { Directive, HostBinding, HostListener, OnDestroy, OnInit, Optional } from '@angular/core';
import { SortDirective } from './sort.directive';
import { CdkColumnDef } from '@angular/cdk/table';
import { SortDirection } from './tables.types';

@Directive({
  selector: '[ukhoSortHeader]',
})
export class SortHeaderDirective implements OnInit, OnDestroy {
  @HostBinding('style.cursor') styleCursor = 'pointer';

  @HostBinding('class.asc') get classAsc() {
    return this.direction === 'asc';
  }
  @HostBinding('class.desc') get classDesc() {
    return this.direction === 'desc';
  }
  public direction: SortDirection = '';
  private readonly directions: SortDirection[] = ['asc', 'desc', ''];
  constructor(@Optional() public sortDir: SortDirective, @Optional() public columnDef: CdkColumnDef) {}

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
