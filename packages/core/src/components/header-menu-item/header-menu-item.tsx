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
   * Whether the item is active
   */
  @Prop() active?: boolean = false;

  /**
   * The event that is fired when a user clicks on the menu
   */
  @Event() menuItemClick: EventEmitter<void>;

  subMenuExists: boolean;
  subMenuSelector: HTMLElement;

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

  private toggleSubMenu() {
    const subMenu: HTMLDivElement = this.el.querySelector('div.sub-menu');

    if (subMenu.classList.contains('desktop-hide')) {
      subMenu.classList.add('desktop-visible');
      subMenu.classList.remove('desktop-hide');
    } else {
      subMenu.classList.add('desktop-hide');
      subMenu.classList.remove('desktop-visible');
    }
  }

  private closeSubMenu() {
    const subMenu: HTMLDivElement = this.el.querySelector('div.sub-menu');
    subMenu.classList.add('desktop-hide');
  }

  handleClick(ev: MouseEvent): CustomEvent<void> {
    ev.stopPropagation();

    if (this.subMenuExists) {
      this.subMenuSelector.setAttribute('aria-hidden', 'false');

      this.toggleSubMenu();
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

      this.toggleSubMenu();
    }
  }

  /**
   * Handles mouseout events, used to set the aria hidden attribute when submenu
   * is no longer visible
   */
  handleMouseOut(_ev: Event): void {
    if (this.subMenuExists) {
      this.subMenuSelector.setAttribute('aria-hidden', 'true');
      this.closeSubMenu();
    }
  }

  handleFocusOut(ev: FocusEvent) {
    const relatedTarget: any = ev?.relatedTarget;

    if (relatedTarget?.outerHTML?.indexOf('button') !== -1) {
      this.closeSubMenu();
    }
  }

  render() {
    const { active, menuTitle } = this;
    let menuClass = 'menu-item ';
    menuClass += active ? 'active' : '';

    return (
      <Host onMouseOver={_ => this.handleMouseOver()} onMouseOut={(ev: Event) => this.handleMouseOut(ev)}>
        <div class={menuClass} onClick={ev => this.handleClick(ev)}>
          <button class="menu-title" tabindex="0">
            <div>{menuTitle}</div>
          </button>
          <div class="sub-menu desktop-hide" onFocusout={ev => this.handleFocusOut(ev)}>
            <slot />
          </div>
        </div>
      </Host>
    );
  }
}
