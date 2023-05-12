import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'admiralty-header-sub-menu-item',
  styleUrl: 'header-sub-menu-item.scss',
  shadow: true,
})
export class HeaderMenuItemComponent {
  /**
   * The text that will be displayed in the menu
   */
  @Prop() menuTitle: string;

  /**
   * The event that is fired when a user clicks on the menu
   */
  @Event() subMenuItemClick: EventEmitter<void>;

  handleClick = (ev: MouseEvent): CustomEvent<void> => {
    ev.stopPropagation();
    return this.subMenuItemClick.emit();
  };

  render() {
    const { menuTitle } = this;

    return (
      <Host>
        <div class="header-sub-menu-item" onClick={this.handleClick}>
          <span class="title">{menuTitle}</span>
        </div>
      </Host>
    );
  }
}
