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

  /**
   * When `true`, all `admiralty-table-header-cell` descendants become sortable
   * by default. Individual cells can opt out by setting `sortable="false"`.
   * Has no effect on existing tables that do not set this prop.
   */
  @Prop({ reflect: true }) allowSorting: boolean = false;

  render() {
    return (
      <Host role="table">
        {this.caption && <caption>{this.caption}</caption>}
        <slot></slot>
      </Host>
    );
  }
}
