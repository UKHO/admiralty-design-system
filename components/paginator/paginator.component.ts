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

  @Input() set label(label: string) {
    this.setLabel(label);
  }

  @Output() pageChange = new EventEmitter<number>();

  _pages: number;
  _currentPage = 1;
  _label = '';
  readonly maxLength = 7;

  public setLabel(label: string) {
    if (label == null || label.length == 0) {
      return;
    }
    this._label = label;
  }

  public setPage(page: number) {
    this._currentPage = page;
    this.pageChange.emit(page);
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
