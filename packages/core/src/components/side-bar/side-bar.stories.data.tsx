import { Component, Element, h, Host, Listen } from '@stencil/core';

/**
 * @internal
 * Wrapper for the Side Bar + Side Bar Items to demonstrate how
 * the sideBarItemClick event can be handled and navActive can be set.
 */
@Component({
  tag: 'admiralty-side-bar-wrapper',
  shadow: false,
})
export class SideBarWrapperComponent {
  @Element() el!: HTMLElement;

  @Listen('sideBarItemClick')
  onSideBarItemSelected(event: CustomEvent<string>) {
    const sideBarItemHref: string = event.detail;
    const sideBar = this.el.querySelector('admiralty-side-bar');
    const sideBarItems = sideBar.querySelectorAll('admiralty-side-bar-item');

    sideBarItems.forEach(sideBarItem => {
      sideBarItem.active = sideBarItem.href === sideBarItemHref;
    });
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
