import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';

/**
 * @slot The text to display udner the icon
 */
@Component({
  tag: 'admiralty-side-bar-item',
  styleUrl: 'side-bar-item.scss',
  scoped: true,
})
export class SideBarItemComponent {
  /**
   * The name of the icon to display. A full list of available icons can be viewed at [https://fonts.google.com/icons](https://fonts.google.com/icons)
   */
  @Prop() icon: string;

  /**
   * The URL to link to.
   */
  @Prop() href: string;

  /**
   * Causes the default browser redirect to be suppressed. Can be used in conjunction with the
   * `onSideBarItemClick` event to use a navigation router and prevent a full page reload when navigating.
   */
  @Prop() suppressRedirect?: boolean = false;

  /**
   * Represents whether this SideBarItem is 'active' and will be styled differently than SideBarItems
   * that are not 'active'. There should only be one SideBarItem that is 'active' per SideBar.
   */
  @Prop() active: boolean = false;

  /**
   * An event emitted when this Side Bar item is selected containing the sideBarItemId
   */
  @Event() sideBarItemClick: EventEmitter<string>;

  handleClick(ev: MouseEvent): CustomEvent<string> {
    if (this.suppressRedirect) {
      ev.preventDefault();
    }
    ev.stopPropagation();

    return this.sideBarItemClick.emit(this.href);
  }

  render() {
    return (
      <li
        class={{
          active: this.active,
        }}
      >
        <a href={this.href} onClick={ev => this.handleClick(ev)}>
          <span aria-hidden="true" class="material-symbols-outlined">
            {this.icon}
          </span>
          <slot></slot>
        </a>
      </li>
    );
  }
}
