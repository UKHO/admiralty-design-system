import { Component, Element, h, Host, Listen } from '@stencil/core';

/**
 * @internal
 * Wrapper for the Icon Side Bar + Icon Side Bar Items to demonstrate how
 * the textSideBarItemClick event can be handled and navActive can be set.
 */
@Component({
  tag: 'admiralty-text-side-bar-wrapper',
  shadow: false,
})
export class textSideBarWrapperComponent {
  @Element() el!: HTMLElement;

  @Listen('textSideBarItemClick')
  ontextSideBarItemSelected(event: CustomEvent<string>) {
    const textSideBarItemHref: string = event.detail;
    const textSideBar = this.el.querySelector('admiralty-text-side-bar');
    const textSideBarItems = textSideBar.querySelectorAll('admiralty-text-side-bar-item');

    textSideBarItems.forEach(textSideBarItem => {
      textSideBarItem.active = textSideBarItem.href === textSideBarItemHref;
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
