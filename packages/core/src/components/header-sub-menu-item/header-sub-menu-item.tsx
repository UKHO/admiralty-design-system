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
   * The event that is fired when a user clicks on the menu.
   * Event contains the menu item text.
   */
  @Event() subMenuItemClick: EventEmitter<string>;

  handleClick(ev: MouseEvent): CustomEvent<string> {
    ev.stopPropagation();
    return this.subMenuItemClick.emit(this.menuTitle);
  };

  onKeyDown(ev: KeyboardEvent): void {
    if (ev.key === Keys.ENTER || ev.key === Keys.SPACE) {
      this.subMenuItemClick.emit(this.menuTitle);
    }
  }

  render() {
    return (
      <Host>
        <div class="header-sub-menu-item" onClick={ev=>this.handleClick(ev)} onKeyDown={ev=>this.onKeyDown(ev)} tabindex="0">
          <span class="title">{this.menuTitle}</span>
        </div>
      </Host>
    );
  }

}
