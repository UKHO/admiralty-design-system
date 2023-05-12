import { Component, Host, h } from '@stencil/core';

/**
 * The table header cell element is used for showing headings for the columns
 * @slot - The content you wish to show as part of the header
 */
@Component({
  tag: 'admiralty-table-header-cell',
  styleUrl: 'table-header-cell.scss',
  scoped: true,
})
export class TableHeaderCell {
  render() {
    return (
      <Host role="columnheader">
        <slot></slot>
      </Host>
    );
  }
}
