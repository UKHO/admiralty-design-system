import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'admiralty-paginator',
  styleUrl: 'paginator.scss',
  scoped: true,
})
export class PaginatorComponent {
  /**
   * The total number of pages. Defaults to 1.
   */
  @Prop() pages = 1;
  /**
   * The current page. Defaults to 1.
   */
  @Prop() currentPage = 1;
  /**
   * The label to display.
   */
  @Prop() label: string = '';
  /**
   * Dispatched when the previous or next button is pressed. The event detail contains
   * the requested page number.
   */
  @Event() pageChange: EventEmitter<number>;

  readonly maxLength = 7;

  public pageChanged(page: number) {
    this.pageChange.emit(page);
  }

  onKeydown(event: KeyboardEvent, navFn: Function) {
    if (event.key === 'Enter' || event.key === 'Enter') {
      navFn();
    }
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

  render() {
    return (
      <nav aria-label="pagination" class="standard">
        <p aria-live="polite">{this.label}</p>
        <admiralty-button
          variant="icon-secondary"
          icon="arrow-back-ios-new-rounded"
          disabled={this.currentPage === 1}
          aria-disabled={this.currentPage === 1}
          onClick={this.prev.bind(this)}
          onKeyDown={e => this.onKeydown(e, this.prev.bind(this))}
          aria-label="Previous Page"
        ></admiralty-button>
        <admiralty-button
          variant="icon-secondary"
          icon="arrow-forward-ios-rounded"
          disabled={this.currentPage === this.pages}
          aria-disabled={this.currentPage === this.pages}
          onClick={this.next.bind(this)}
          onKeyDown={e => this.onKeydown(e, this.next.bind(this))}
          aria-label="Next Page"
        ></admiralty-button>
      </nav>
    );
  }
}
