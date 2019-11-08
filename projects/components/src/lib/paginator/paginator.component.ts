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

  @Output() pageChange = new EventEmitter<number>();

  public setPage(page: number) {
    this.currentPage = page;
    this.pageChange.emit(page);
  }

  _pages: number;
  currentPage = 1;
  readonly maxLength = 7;

  get pageArray() {
    const even = this.maxLength % 2 === 0 ? 1 : 0;
    if (this._pages < this.maxLength) {
      return this.range(1, this._pages);
    } else if (this.currentPage <= this.maxLength / 2 + 1) {
      return [...this.range(1, this.maxLength - 2), '...', this._pages];
    } else if (this._pages - this.currentPage <= this.maxLength / 2 - even) {
      return [1, '...', ...this.range(this._pages - (this.maxLength - 3), this.maxLength - 2)];
    }
    return [
      1,
      '...',
      ...this.range(this.currentPage - Math.floor(this.maxLength / 2) + 2, this.maxLength - 4),
      '...',
      this._pages,
    ];
  }

  range(start, length) {
    return [...Array(length).keys()].map(x => x + start);
  }

  prev() {
    if (this.currentPage > 1) {
      this.setPage(this.currentPage - 1);
    }
  }

  next() {
    if (this.currentPage < this._pages) {
      this.setPage(this.currentPage + 1);
    }
  }
}
