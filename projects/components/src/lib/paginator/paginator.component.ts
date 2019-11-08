import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ukho-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent {
  @Input() set pages(pages: number) {
    this.setPage(1);
    this._pages = pages;
  }

  @Input() set currentPage(page: number) {
    this.setPage(page);
  }

  get pageArray() {
    const even = this.maxLength % 2 === 0 ? 1 : 0;
    if (this._pages < this.maxLength) {
      return this.range(1, this._pages);
    } else if (this._currentPage <= this.maxLength / 2 + 1) {
      return [...this.range(1, this.maxLength - 2), '...', this._pages];
    } else if (this._pages - this._currentPage <= this.maxLength / 2 - even) {
      return [1, '...', ...this.range(this._pages - (this.maxLength - 3), this.maxLength - 2)];
    }
    return [
      1,
      '...',
      ...this.range(this._currentPage - Math.floor(this.maxLength / 2) + 2, this.maxLength - 4),
      '...',
      this._pages,
    ];
  }

  @Output() pageChange = new EventEmitter<number>();

  _pages: number;
  _currentPage = 1;
  readonly maxLength = 7;

  public setPage(page: number) {
    this._currentPage = page;
    this.pageChange.emit(page);
  }

  range(start, length) {
    return [...Array(length).keys()].map(x => x + start);
  }

  prev() {
    if (this._currentPage > 1) {
      this.setPage(this._currentPage - 1);
    }
  }

  next() {
    if (this._currentPage < this._pages) {
      this.setPage(this._currentPage + 1);
    }
  }
}
