import { Component, Host, h, Prop } from '@stencil/core';

/**
 * Use tables to make information easier for users to scan and compare
 * @slot - Table elements should be placed in the slot
 */
@Component({
  tag: 'admiralty-table',
  styleUrl: 'table.scss',
  scoped: true,
})
export class TableComponent {
  @Prop() caption: string;

  render() {
    return (
      <Host role="table">
        {this.caption && <caption>{this.caption}</caption>}
        <slot></slot>
      </Host>
    );
  }
}
