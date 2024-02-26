import { Component, Host, h } from '@stencil/core';

/**
 * The table body element is a wrapper for a standard html table body and should be used to wrap rows
 * @slot - Table rows should be placed in the slot
 */
@Component({
  tag: 'admiralty-table-body',
  styleUrl: 'table-body.scss',
  scoped: true,
})
export class TableBodyComponent {
  render() {
    return (
      <Host role="rowgroup">
        <slot></slot>
      </Host>
    );
  }
}
