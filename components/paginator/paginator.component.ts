import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ukho-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent {
  /**
   * The total number of pages. Defaults to 1.
   */
  @Input() pages = 1;

  /**
   * The current page. Defaults to 1.
   */
  @Input() currentPage = 1;

  /**
   * The label to display.
   */
  @Input() set label(label: string) {
    this.setLabel(label);
  }

  @Output() pageChange = new EventEmitter<number>();

  _label = '';
  readonly maxLength = 7;

  public setLabel(label: string) {
    if (label == null || label.length === 0) {
      return;
    }
    this._label = label;
  }

  public pageChanged(page: number) {
    this.pageChange.emit(page);
  }

  prev() {
    if (this.currentPage > 1) {
      this.pageChanged(this.currentPage - 1);
    }
  }

  next() {
    if (this.currentPage < this.pages) {
      this.pageChanged(this.currentPage + 1);
    }
  }
}
