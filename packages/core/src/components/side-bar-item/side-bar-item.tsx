import { Component, Event, EventEmitter, Prop, h, Element, Watch } from '@stencil/core';

/**
 * @slot The text to display udner the icon
 */
@Component({
  tag: 'admiralty-side-bar-item',
  styleUrl: 'side-bar-item.scss',
  scoped: true,
})
export class SideBarItemComponent {
  private internalId = ++nextId;
  @Element() el: HTMLElement;
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

  @Watch('active')
  handleActiveChange(newValue: boolean) {
    const anchor = this.el.querySelector('a');
    if (anchor) {
      anchor.classList.toggle('active', newValue)
    }
  }

  componentDidLoad() {
    this.handleActiveChange(this.active)
  }

  handleMouseDown(id: string) {
    this.active = true;
    const allItems = document.querySelectorAll('admiralty-side-bar-item');
    allItems.forEach(item => {
      const anchor = (item.shadowRoot ?? item).querySelector('a');
      if (anchor && anchor.id !== id) {
        anchor.classList.remove('active');
      } else {
        anchor.classList.add('active')
      }
    })

    document.addEventListener('mouseup', this.handleGlobalMouseUp);
  }

  handleGlobalMouseUp() {
    this.active = false;
    document.addEventListener('mouseup', this.handleGlobalMouseUp);
  }

  handleClick(ev: MouseEvent): CustomEvent<string> {
    if (this.suppressRedirect) {
      ev.preventDefault();
    }
    ev.stopPropagation();

    return this.sideBarItemClick.emit(this.href);
  }

  render() {
    return (
      <li>
        <a href={this.href}
           id={'side-bar-item-' + this.internalId}
           onMouseDown={() => this.handleMouseDown('side-bar-item-' + this.internalId)}
           onClick={ev => this.handleClick(ev)}>
          <div class="icon">
            <admiralty-icon name={this.icon}></admiralty-icon>
          </div>
          <slot></slot>
        </a>
      </li>
    );
  }
}
let nextId = 0;
