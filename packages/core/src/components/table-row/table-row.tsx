import { Component, Host, h } from '@stencil/core';

/**
 * The table row element should be used to define rows within the table body
 * @slot - Table cells should be placed inside the slot
 */
@Component({
  tag: 'admiralty-table-row',
  styleUrl: 'table-row.scss',
  scoped: true,
})
export class TableRow {
  render() {
    return (
      <Host role="row">
        <slot></slot>
      </Host>
    );
  }
}
