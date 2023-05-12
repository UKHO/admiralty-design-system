import { Component, Host, h } from '@stencil/core';

/**
 * The table header should be used inside a table element to give headers to all the columns
 * @slot - Table header cells should be placed in the slot
 */
@Component({
  tag: 'admiralty-table-header',
  styleUrl: 'table-header.scss',
  scoped: true,
})
export class TableHeader {
  render() {
    return (
      <Host role="rowgroup">
        <slot></slot>
      </Host>
    );
  }
}
