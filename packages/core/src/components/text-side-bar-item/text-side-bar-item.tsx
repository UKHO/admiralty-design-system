import { Component, Event, EventEmitter, Prop, h, Element, Watch, Host } from '@stencil/core';
import { TextSideBarItemVariant } from "./text-side-bar-item.types";

/**
 * @slot The text to display under the icon for secondary variant
 */
@Component({
  tag: 'admiralty-text-side-bar-item',
  styleUrl: 'text-side-bar-item.scss',
  scoped: true,
})
export class TextSideBarItemComponent {
  private internalId: number = ++nextId;

  @Element() el!: HTMLAdmiraltyTextSideBarItemElement;
  /**
   * The type of text side bar item to render. Valid values are `primary` and `secondary`.
   * Default value is `primary`.
   */
  @Prop() variant: TextSideBarItemVariant = TextSideBarItemVariant.Expandable;

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
   * `onTextSideBarItemClick` event to use a navigation router and prevent a full page reload when navigating.
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
  @Event() textSideBarItemClick: EventEmitter<string>;

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
      this.el.dispatchEvent(new CustomEvent('text-side-bar-item-active', {
        detail: { id: this.internalId },
        bubbles: true,
        composed: true
      }))
    }

    this.toggled.emit(this.expanded);
  }

  handleMouseDown(id: string) {
    this.active = true;
    const allItems = document.querySelectorAll('admiralty-text-side-bar-item');
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

    this.el.dispatchEvent(new CustomEvent('text-side-bar-item-active', {
      detail: { id: this.internalId },
      bubbles: true,
      composed: true
    }));

    // BUG: when changing this to object it the item loses active state for some reason when click elsewhere.
    return this.textSideBarItemClick.emit(this.href);
  }

  getExpansionIcon(): string {
    return this.expanded ? 'keyboard-arrow-up-rounded' : 'keyboard-arrow-down-rounded';
  }

  render() {
    return (
      <Host data-text-side-bar-item-id={'text-side-bar-item-' + this.internalId}>
        <li>
          {this.variant === TextSideBarItemVariant.Expandable &&
            <div class="expandable-item">
              <button id={"text-side-bar-item-button-" + this.internalId}
                      class={{ 'expandable-item-button': true, 'active': this.active }}
                      onClick={() => this.onToggle()}>
                {this.itemText}
                <div class="icon">
                  <admiralty-icon size={30} name={this.getExpansionIcon()}></admiralty-icon>
                </div>
              </button>
              <div class="slot" hidden={!this.expanded}>
                <slot></slot>
              </div>
            </div>
          }

          {this.variant === TextSideBarItemVariant.Text &&
            <a id={"text-side-bar-item-anchor-" + this.internalId}
               class={{ 'text-link': true, 'active': this.active }}
               href={this.href}
               onMouseDown={() => this.handleMouseDown("text-side-bar-item-anchor-" + this.internalId)}
               onClick={ev => this.handleClick(ev)}>
              {this.itemText}
            </a>
          }

          {this.variant === TextSideBarItemVariant.TextLink &&
            <a id={"text-side-bar-item-anchor-" + this.internalId}
               class={{ 'text-link is-main-link': true, 'active': this.active }}
               href={this.href}
               onMouseDown={() => this.handleMouseDown("text-side-bar-item-anchor-" + this.internalId)}
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
