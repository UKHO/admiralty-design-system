import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';
import { Keys } from '../Keys';

@Component({
  tag: 'admiralty-header-sub-menu-item',
  styleUrl: 'header-sub-menu-item.scss',
  scoped: true,
})
export class HeaderSubMenuItemComponent {
  /**
   * The text that will be displayed in the menu
   */
  @Prop() menuTitle: string;

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
   * The event that is fired when a user clicks on the menu item.
   * Event contains the menu item text.
   */
  @Event() subMenuItemClick: EventEmitter<string>;

  handleClick(ev: MouseEvent): CustomEvent<string> {
    if (this.suppressRedirect) {
      ev.preventDefault();
    }
    ev.stopPropagation();

    return this.subMenuItemClick.emit(this.menuTitle);
  }

  onKeyDown(ev: KeyboardEvent): void {
    if (ev.key === Keys.ENTER || ev.key === Keys.SPACE) {
      this.subMenuItemClick.emit(this.menuTitle);
    }
  }

  render() {
    return (
      <Host>
        {this.href ? (
          <div class="header-sub-menu-item" onClick={ev => this.handleClick(ev)}>
            <a class="title" href={this.href} onClick={ev => this.handleClick(ev)}>
              {this.menuTitle}
              <slot></slot>
            </a>
          </div>
        ) : (
          <div class="header-sub-menu-item" onClick={ev => this.handleClick(ev)} onKeyDown={ev => this.onKeyDown(ev)} tabindex="0">
            <span class="title">{this.menuTitle}</span>
          </div>
        )}
      </Host>
    );
  }
}
