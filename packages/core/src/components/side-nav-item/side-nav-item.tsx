import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';
import { Keys } from '../Keys';

@Component({
  tag: 'admiralty-side-nav-item',
  styleUrl: 'side-nav-item.scss',
  scoped: true,
})
export class SideNavItemComponent {
  /**
   * A unique id for this SideNavItem
   */
  @Prop() sideNavItemId: string;

  /**
   * The text that is displayed in the SideNavItem
   */
  @Prop() headingTitle: string;

  /**
   * Represents whether this SideNavItem is 'active'
   * and will be styled differently than SideNavItems that are not 'active'.
   * The intent behind the design for SideNav is for there to only be ONE
   * SideNavItem that is 'active' per SideNav
   */
  @Prop() navActive: boolean = false;

  /**
   * An event emitted when this Side Nav item is selected containing the sideNavItemId
   */
  @Event() sideNavItemSelected: EventEmitter<string>;

  handleClickAction() {
    this.emitSideNavItemSelected();
  }

  handleKeyDownAction(ev: KeyboardEvent) {
    // Stop Space scrolling the page before the keyup handler runs.
    if (ev.key === Keys.SPACE) {
      ev.preventDefault();
    }
  }

  handleKeyUpAction(ev: KeyboardEvent) {
    if (ev.key === Keys.ENTER || ev.key === Keys.SPACE) {
      ev.preventDefault();
      this.emitSideNavItemSelected();
    }
  }

  emitSideNavItemSelected() {
    this.sideNavItemSelected.emit(this.sideNavItemId);
  }

  render() {
    return (
      <a
        class={{
          section: true,
          navActive: this.navActive,
        }}
        role="link"
        tabindex={0}
        aria-current={this.navActive ? 'page' : null}
        onClick={this.handleClickAction.bind(this)}
        onKeyDown={this.handleKeyDownAction.bind(this)}
        onKeyUp={this.handleKeyUpAction.bind(this)}
      >
        {this.headingTitle}
      </a>
    );
  }
}
