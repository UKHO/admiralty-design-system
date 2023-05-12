import { Component, Element, h, Listen } from '@stencil/core';

/**
 * @internal
 * Wrapper for the Paginator to demonstrate how the label and current page properties
 * can be updated.
 */
@Component({
  tag: 'admiralty-paginator-wrapper',
  shadow: false,
})
export class PaginatorWrapperComponent {
  @Element() el!: HTMLElement;

  @Listen('pageChange')
  pageChangedHandler(event: CustomEvent<any>) {
    const page: number = event.detail;
    const paginator = this.el.querySelector('admiralty-paginator');

    const perPage = 6;
    const first = page == 1 ? 1 : perPage * (page - 1) + 1;
    const last = page == 8 ? 45 : perPage * page;
    const total = 45;
    const label = `Showing ${first}-${last} of ${total}`;

    if (paginator.label) {
      paginator.label = label;
    }
    paginator.currentPage = page;
  }

  render() {
    return (
      <div>
        <slot></slot>
      </div>
    );
  }
}
