import { Component, Event, EventEmitter, Prop, h, Element, Watch, Host } from '@stencil/core';
import { SideBarItemVariant } from './side-bar-item.types';

/**
 * @slot The text to display under the icon for secondary variant
 */
@Component({
  tag: 'admiralty-side-bar-item',
  styleUrl: 'side-bar-item.scss',
  scoped: true,
})
export class SideBarItemComponent {
  private internalId: number = ++nextId;

  @Element() el!: HTMLAdmiraltySideBarItemElement;
  /**
   * The type of side bar item to render. Valid values are `primary` and `secondary`.
   * Default value is `primary`.
   */
  @Prop() variant: SideBarItemVariant = SideBarItemVariant.Primary;

  /**
   * The event that is dispatched when the expanded status is toggled.
   */
  @Event() toggled: EventEmitter<boolean>;

  /**
   * Whether the component is expanded.
   */
  @Prop({ mutable: true, reflect: true }) expanded = false;

  /**
   * The name of the icon to display. A full list of available icons can be viewed at [https://fonts.google.com/icons](https://fonts.google.com/icons)
   */
  @Prop() icon: string;

  /**
   * The URL to link to.
   */
  @Prop() href: string;

  /**
   * Item text for the button or link depending on variant
   */
  @Prop() itemText: string;

  /**
   * Causes the default browser redirect to be suppressed. Can be used in conjunction with the
   * `onSideBarItemClick` event to use a navigation router and prevent a full page reload when navigating.
   */
  @Prop() suppressRedirect?: boolean = false;

  /**
   * Represents whether this SideBarItem is 'active' and will be styled differently than SideBarItems
   * that are not 'active'. There should only be one SideBarItem that is 'active' per SideBar.
   */
  @Prop({ mutable: true, reflect: true }) active: boolean = false; // { mutable: true, reflect: true }

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

  onToggle() {
    this.expanded = !this.expanded;

    if (this.expanded) {
      this.el.dispatchEvent(new CustomEvent('side-bar-item-active', {
        detail: { id: this.internalId },
        bubbles: true,
        composed: true
      }))
    }

    this.toggled.emit(this.expanded);
  }

  handleMouseDown(id: string) {
    this.active = true;
    const allItems = document.querySelectorAll('admiralty-side-bar-item');
    allItems.forEach(item => {
      let anchor: any = (item.shadowRoot ?? item).querySelector('a');
      if (anchor && anchor.id.toString() === id.toString()) {
        anchor.classList.add('active')
      } else {
        if(anchor === null) {
          anchor = (item.shadowRoot ?? item).querySelector('button');
        }
        anchor.classList.remove('active');
      }
    })
  }

  handleClick(ev: MouseEvent): CustomEvent<string> {
    if (this.suppressRedirect) {
      ev.preventDefault();
    }
    ev.stopPropagation();

    this.el.dispatchEvent(new CustomEvent('side-bar-item-active', {
      detail: { id: this.internalId },
      bubbles: true,
      composed: true
    }));

    // BUG: when changing this to object it the item loses active state for some reason when click elsewhere.
    return this.sideBarItemClick.emit(this.href);
  }

  getExpansionIcon(): string {
    return this.expanded ? 'keyboard-arrow-up-rounded' : 'keyboard-arrow-down-rounded';
  }

  render() {
    return (
      <Host data-side-bar-item-id={'side-bar-item-' + this.internalId}>
        <li>
          {this.variant === SideBarItemVariant.Primary &&
            <a id={"side-bar-item-anchor-" + this.internalId}
               class="primary-link"
               href={this.href}
               onMouseDown={() => this.handleMouseDown("side-bar-item-anchor-" + this.internalId)}
               onClick={ev => this.handleClick(ev)}>
              <div class="icon">
                <admiralty-icon name={this.icon}></admiralty-icon>
              </div>
              {this.itemText}
            </a>
          }

          {this.variant === SideBarItemVariant.Secondary &&
            <div class="secondary-item">
              <button id={"side-bar-item-button-" + this.internalId}
                      class={{ 'secondary-item-button': true, 'active': this.active }}
                      onClick={() => this.onToggle()}>
                {this.itemText}
                <div class="icon">
                  <admiralty-icon size="30" name={this.getExpansionIcon()}></admiralty-icon>
                </div>
              </button>
              <div class="slot" hidden={!this.expanded}>
                <slot></slot>
              </div>
            </div>
          }

          {this.variant === SideBarItemVariant.Tertiary &&
            <a id={"side-bar-item-anchor-" + this.internalId}
               class={{ "tertiary-link": true, 'active': this.active }}
               href={this.href}
               onMouseDown={() => this.handleMouseDown("side-bar-item-anchor-" + this.internalId)}
               onClick={ev => this.handleClick(ev)}>
              {this.itemText}
            </a>
          }
        </li>
      </Host>
    );
  }
}
let nextId = 0;
