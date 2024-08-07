import { Component, Element, Event, EventEmitter, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'admiralty-header-menu-link',
  styleUrl: 'header-menu-link.scss',
  scoped: true,
})
export class HeaderMenuLinkComponent {
  @Element() el: HTMLElement;

  /**
   * The text that will be displayed in the menu.
   */
  @Prop() menuTitle?: string;

  /**
   * Whether the item is active
   */
  @Prop() active?: boolean = false;

  /**
   * The URL to link to.
   */
  @Prop() href: string;

  /**
   * Causes the default browser redirect to be suppressed. Can be used in conjunction with the
   * `onMenuItemClick` event to use a navigation router and prevent a full page reload when navigating.
   */
  @Prop() suppressRedirect?: boolean = false;

  /**
   * The event that is fired when a user clicks on the menu.
   */
  @Event() menuItemClick: EventEmitter<void>;

  handleClick(ev: MouseEvent): CustomEvent<void> {
    if (this.suppressRedirect) {
      ev.preventDefault();
    }
    ev.stopPropagation();

    return this.menuItemClick.emit();
  }

  render() {
    let menuClass = 'menu-item ';
    menuClass += this.active ? 'active' : '';

    return (
      <Host>
        <div class={menuClass} onClick={ev => this.handleClick(ev)}>
          <a href={this.href} onClick={ev => this.handleClick(ev)}>
            {this.menuTitle}
            <slot></slot>
          </a>
        </div>
      </Host>
    );
  }
}
