import { Component, Element, h, Host, Listen } from '@stencil/core';

/**
 * @internal
 * Wrapper for the Icon Side Bar + Icon Side Bar Items to demonstrate how
 * the iconSideBarItemClick event can be handled and navActive can be set.
 */
@Component({
  tag: 'admiralty-icon-side-bar-wrapper',
  shadow: false,
})
export class IconSideBarWrapperComponent {
  @Element() el!: HTMLElement;

  @Listen('iconSideBarItemClick')
  onIconSideBarItemSelected(event: CustomEvent<string>) {
    const iconSideBarItemHref: string = event.detail;
    const iconSideBar = this.el.querySelector('admiralty-icon-side-bar');
    const iconSideBarItems = iconSideBar.querySelectorAll('admiralty-icon-side-bar-item');

    iconSideBarItems.forEach(iconSideBarItem => {
      iconSideBarItem.active = iconSideBarItem.href === iconSideBarItemHref;
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
