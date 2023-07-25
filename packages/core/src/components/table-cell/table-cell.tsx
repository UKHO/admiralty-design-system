import { Component, Host, h } from '@stencil/core';

/**
 * The table cell is a wrapper for a standard <td> element and should be used inside of table rows
 * @slot - The content you wish to display in the table
 */
@Component({
  tag: 'admiralty-table-cell',
  styleUrl: 'table-cell.scss',
  scoped: true,
})
export class TableCellComponent {
  render() {
    return (
      <Host role="cell">
        <slot></slot>
      </Host>
    );
  }
}
