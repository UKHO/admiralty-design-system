import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';
import { ButtonVariant } from '../button/button.types';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  tag: 'admiralty-paginator',
  styleUrl: 'paginator.scss',
  shadow: false,
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
          variant={ButtonVariant.Icon}
          icon={faChevronLeft.iconName}
          disabled={this.currentPage === 1}
          tabindex={0}
          aria-disabled={this.currentPage === 1}
          onClick={this.prev.bind(this)}
          onKeyDown={e => this.onKeydown(e, this.prev.bind(this))}
          aria-label="Previous Page"
        ></admiralty-button>
        <admiralty-button
          variant={ButtonVariant.Icon}
          icon={faChevronRight.iconName}
          disabled={this.currentPage === this.pages}
          tabindex={0}
          aria-disabled={this.currentPage === this.pages}
          onClick={this.next.bind(this)}
          onKeyDown={e => this.onKeydown(e, this.next.bind(this))}
          aria-label="Next Page"
        ></admiralty-button>
      </nav>
    );
  }
}
