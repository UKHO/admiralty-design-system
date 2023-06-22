import { Component, Element, Event, EventEmitter, h, Host, Prop } from '@stencil/core';

/**
 * @slot - 'admiralty-sub-header-menu-item' a number of components can be placed here to add sub items
 */
@Component({
  tag: 'admiralty-header-menu-item',
  styleUrl: 'header-menu-item.scss',
  scoped: true,
})
export class HeaderMenuItemComponent {
  @Element() el: HTMLElement;

  /**
   * The text that will be displayed in the menu
   */
  @Prop() menuTitle: string;

  /**
   * The text that will be displayed in the menu
   */
  @Prop() active?: boolean = false;

  /**
   * The event that is fired when a user clicks on the menu
   */
  @Event() menuItemClick: EventEmitter<void>;

  subMenuExists: boolean;
  subMenuSelector: HTMLElement;
  //active: Element;

  connectedCallback() {
    // check if submenu exists on this menu item
    try {
      this.subMenuSelector = this.el.querySelector('admiralty-header-sub-menu-item');
      this.subMenuExists = true;

      if (this.subMenuExists) {
        this.subMenuSelector.setAttribute('aria-hidden', 'true');
      }
    } catch (e) {
      this.subMenuExists = false;
    }
  }

  handleClick(ev: MouseEvent): CustomEvent<void> {
    ev.stopPropagation();
    console.log('clicked!');

    if (this.subMenuExists) {
      this.subMenuSelector.setAttribute('aria-hidden', 'false');

      const subMenu: HTMLDivElement = this.el.querySelector('div.sub-menu');
      console.log('clicked-subMenuExists, display:', subMenu.style.display);
      subMenu.style.display = subMenu.style.display === 'flex' ? 'none' : 'flex';
    }
    return this.menuItemClick.emit();
  }

  /**
   * Handles mouseover events, used to set the aria hidden attribute when submenu
   * is visible
   */
  handleMouseOver(): void {
    if (this.subMenuExists) {
      this.subMenuSelector.setAttribute('aria-hidden', 'false');

      const subMenu: HTMLDivElement = this.el.querySelector('div.sub-menu');
      console.log('clicked-subMenuExists, display:', subMenu.style.display);
      subMenu.style.display = subMenu.style.display === 'flex' ? 'none' : 'flex';
    }
  }

  /**
   * Handles mouseover events, used to set the aria hidden attribute when submenu
   * is no longer visible
   */
  handleMouseOut(): void {
    if (this.subMenuExists) {
      this.subMenuSelector.setAttribute('aria-hidden', 'true');
      const subMenu: HTMLDivElement = this.el.querySelector('div.sub-menu');
      console.log('handleMouseOut clicked-subMenuExists, display:', subMenu.style.display);
      subMenu.style.display = 'none';
    }
  }

  render() {
    const { active, menuTitle } = this;
    let menuClass = 'menu-item ';
    menuClass += active ? 'active' : '';

    return (
      <Host onMouseOver={_ => this.handleMouseOver()} onMouseOut={_ => this.handleMouseOut()}>
        <div class={menuClass} onClick={ev => this.handleClick(ev)}>
          <button class="menu-title" tabindex="0">
            {menuTitle}
          </button>
          <div class="sub-menu">
            <slot />
          </div>
        </div>
      </Host>
    );
  }
}
