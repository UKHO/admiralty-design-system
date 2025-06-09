import { Component, Element, Prop, h, EventEmitter, Event, State, forceUpdate } from '@stencil/core';

/**
 * @slot items - 'admiralty-header-menu-item menu-title' and 'admiralty-header-menu-link menu-title' components are placed here for appropriate styling and behaviour
 * @slot profile - 'admiralty-header-profile' components are placed here (the login/logout) options
 */
@Component({
  tag: 'admiralty-header',
  styleUrl: 'header.scss',
  scoped: true,
})
export class HeaderComponent {
  @Element() el: HTMLElement;
  /**
   * The header title that is displayed to the right of the logo
   */
  @Prop() headerTitle: string;

  /**
   * The url that clicking on the nav link will take you too
   */
  @Prop() headerTitleUrl: string = null;

  /**
   * The destination url when the logo is clicked
   */
  @Prop() logoLinkUrl: string = 'https://www.admiralty.co.uk/';

  /**
   * The uri of the logo image
   */
  @Prop() logoImgUrl: string = 'svg/Admiralty stacked logo.svg';

  /**
   * The alternate image text for the logo image
   */
  @Prop() logoAltText: string = 'ADMIRALTY';

  /**
   * Emits an event that can be listened to when the title in the header is clicked
   */
  @Event() titledClicked: EventEmitter<string>;

  @State() mobileMenuOpen = false;

  @State() displayHamburger = false;

  observer: MutationObserver;

  connectedCallback() {
    this.observer = new MutationObserver(() => {
      // when new menu items are added to the slots, we need to trigger a render cycle so that they render correctly
      forceUpdate(this);
    });
    this.observer.observe(this.el, {
      childList: true,
      subtree: true,
    });
  }

  disconnectedCallback() {
    this.observer.disconnect();
  }

  componentWillRender() {
    const childMenus = this.el.querySelectorAll('admiralty-header-menu-item, admiralty-header-menu-link, admiralty-header-profile');
    this.displayHamburger = childMenus.length > 0;
  }

  private handleClick(ev: MouseEvent) {
    ev.preventDefault();
    this.titledClicked.emit(this.headerTitleUrl);
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  render() {
    const { logoAltText, logoLinkUrl, logoImgUrl, headerTitle, headerTitleUrl } = this;

    return (
      <div class="admiralty-header">
        <div class="header-menu">
          <div class="header-branding">
            <a class="header-logo" href={logoLinkUrl}>
              <img class="header-image" alt={logoAltText} src={logoImgUrl} />
            </a>
            <div class="vertical-seperator"></div>
            {this.headerTitle ? (
              <h2 class="header-title">
                <a onClick={ev => this.handleClick(ev)} href={headerTitleUrl}>
                  {headerTitle}
                </a>
              </h2>
            ) : null}
          </div>
          <nav role="navigation" class="header-menus" aria-label="Site navigation">
            <div class={{ 'mobile-menu-toggle': true, 'display-hamburger': this.displayHamburger }}>
              <button onClick={_ => this.toggleMobileMenu()} aria-expanded={this.mobileMenuOpen} aria-label={this.mobileMenuOpen ? 'Hide menu' : 'Show menu'}>
                <admiralty-icon name={this.mobileMenuOpen ? "close-rounded" : "menu-rounded"}></admiralty-icon>
              </button>
            </div>
            <div class={{ "menu-sections": true, 'mob-menus-visible': this.mobileMenuOpen }}>
              <div class="menu-items">
                <slot name="items"></slot>
              </div>
              <div class="header-profile">
                <slot name="profile"></slot>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
