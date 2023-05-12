import { Component, Element, h, Listen } from '@stencil/core';

/**
 * @internal
 * Wrapper for the Side Nav + Side Nav Items to demonstrate how
 * the sideNavItemSelected event can be handled and navActive can be set.
 */
@Component({
  tag: 'admiralty-side-nav-wrapper',
  shadow: false,
})
export class SideNavWrapperComponent {
  @Element() el!: HTMLElement;

  @Listen('sideNavItemSelected')
  onSideNavItemSelected(event: CustomEvent<string>) {
    const sideNavItemId: string = event.detail;
    const sideNav = this.el.querySelector('admiralty-side-nav');
    const sideNavItems = sideNav.querySelectorAll('admiralty-side-nav-item');

    sideNavItems.forEach(sideNavItem => {
      sideNavItem.navActive = sideNavItem.sideNavItemId === sideNavItemId;
    });
  }

  render() {
    return (
      <div>
        <slot></slot>
      </div>
    );
  }
}
