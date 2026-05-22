import { Component, Host, h, Prop, Event, EventEmitter, Element } from '@stencil/core';

export type SortDirection = 'none' | 'ascending' | 'descending';

/**
 * The table header cell element is used for showing headings for the columns
 * @slot - The content you wish to show as part of the header
 */
@Component({
  tag: 'admiralty-table-header-cell',
  styleUrl: 'table-header-cell.scss',
  scoped: true,
})
export class TableHeaderCellComponent {
  @Element() el: HTMLElement;

  /**
   * Whether this column header is individually sortable.
   * If the parent `admiralty-table` has `sorting` set, all columns are
   * sortable by default and this prop can be set to `false` to opt a column out.
   */
  @Prop() sortable: boolean = undefined;

  /**
   * The initial sort direction for this column.
   */
  @Prop({ mutable: true, reflect: true }) sortDirection: SortDirection = 'none';

  /**
   * Emitted when the user clicks the sort button. The `detail` contains the
   * new `direction` value (`'ascending'`, `'descending'`, or `'none'`).
   */
  @Event() admiraltySortChange: EventEmitter<{ direction: 'none' | 'ascending' | 'descending' }>;

  private isSortable(): boolean {
    // Explicit false opt-out always wins
    if (this.sortable === false) return false;
    // Explicit true opt-in wins next
    if (this.sortable === true) return true;
    // Fall back to parent table sorting attribute
    return this.el.closest('admiralty-table')?.hasAttribute('sorting') ?? false;
  }

  private handleSortClick = () => {
    const next: Record<SortDirection, SortDirection> = {
      none: 'ascending',
      ascending: 'descending',
      descending: 'none',
    };
    this.sortDirection = next[this.sortDirection];
    this.admiraltySortChange.emit({ direction: this.sortDirection });
  };

  private getSortIconName(): string {
    switch (this.sortDirection) {
      case 'ascending':
        return 'arrow-upward';
      case 'descending':
        return 'arrow-downward';
      default:
        return 'unfold-more';
    }
  }

  render() {
    const sortable = this.isSortable();
    const ariaSort = sortable ? this.sortDirection : undefined;

    if (sortable) {
      return (
        <Host role="columnheader" aria-sort={ariaSort} class="sortable">
          <button class="sort-button" onClick={this.handleSortClick}>
            <span class="sort-label">
              <slot></slot>
            </span>
            <admiralty-icon class={`sort-icon${this.sortDirection !== 'none' ? ' sort-active' : ''}`} name={this.getSortIconName()}></admiralty-icon>
          </button>
        </Host>
      );
    }

    return (
      <Host role="columnheader">
        <slot></slot>
      </Host>
    );
  }
}
