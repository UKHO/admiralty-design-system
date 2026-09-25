import { Component, Element, Prop, h, EventEmitter, Event, State, forceUpdate } from '@stencil/core';
import { FocusTrap } from '../../utils/focus-trap';

let headerInstanceCount = 0;

/**
 * @slot nav - an 'admiralty-side-nav' component is placed here. It renders as a left hand sidebar on desktop and collapses into the burger menu below the desktop breakpoint
 * @slot items - 'admiralty-header-menu-item menu-title' and 'admiralty-header-menu-link menu-title' components are placed here for appropriate styling and behaviour
 * @slot profile - 'admiralty-header-profile' components are placed here for the desktop header and mobile menu
 * @slot toggle - a theme or mode toggle component displayed beside the mobile menu button
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

  private menuPanelId = `admiralty-header-menu-panel-${headerInstanceCount++}`;
  private menuPanelEl: HTMLDivElement;
  private focusTrap = new FocusTrap();
  private focusTrapEngaged = false;
  private desktopQuery: MediaQueryList;

  connectedCallback() {
    this.el.addEventListener('sideNavItemSelected', this.handleSideNavItemSelected);
    this.observer = new MutationObserver(() => {
      // when new menu items are added to the slots, we need to trigger a render cycle so that they render correctly
      forceUpdate(this);
    });
    this.observer.observe(this.el, {
      childList: true,
      subtree: true,
    });

    this.desktopQuery = typeof window !== 'undefined' && window.matchMedia ? window.matchMedia('(min-width: 1024px)') : null;
    this.desktopQuery?.addEventListener('change', this.handleBreakpointChange);
  }

  disconnectedCallback() {
    this.el.removeEventListener('sideNavItemSelected', this.handleSideNavItemSelected);
    this.observer.disconnect();
    this.desktopQuery?.removeEventListener('change', this.handleBreakpointChange);
    this.focusTrap.deactivate(false);
    this.focusTrapEngaged = false;
  }

  componentWillRender() {
    // Anything the consumer slots in needs a burger to reach it on mobile, not just the
    // known Admiralty menu components. Scoped slots relocate the element out of
    // this.el.children, but the slot attribute survives, so query descendants.
    const hasSlottedContent = !!this.el.querySelector('[slot="nav"], [slot="items"], [slot="profile"], [slot="toggle"]');
    const knownMenus = this.el.querySelectorAll('admiralty-side-nav, admiralty-header-menu-item, admiralty-header-menu-link, admiralty-header-profile');

    this.displayHamburger = hasSlottedContent || knownMenus.length > 0;
  }

  componentDidRender() {
    if (this.mobileMenuOpen && !this.focusTrapEngaged) {
      this.focusTrapEngaged = true;
      this.focusTrap.activate(this.menuPanelEl, { onEscape: () => this.closeMobileMenu() });
    } else if (!this.mobileMenuOpen && this.focusTrapEngaged) {
      this.focusTrapEngaged = false;
      this.focusTrap.deactivate(this.restoreFocusOnClose);
      this.restoreFocusOnClose = true;
    }
  }

  private restoreFocusOnClose = true;

  /**
   * Closing because the viewport grew past the breakpoint would strand focus on a
   * now hidden element, so the panel is reset without restoring focus to the burger.
   */
  private handleBreakpointChange = (ev: MediaQueryListEvent) => {
    if (ev.matches && this.mobileMenuOpen) {
      this.closeMobileMenu(false);
    }
  };

  private handleClick(ev: MouseEvent) {
    ev.preventDefault();
    this.titledClicked.emit(this.headerTitleUrl);
  }

  toggleMobileMenu() {
    this.mobileMenuOpen ? this.closeMobileMenu() : (this.mobileMenuOpen = true);
  }

  private handleSideNavItemSelected = () => {
    if (this.mobileMenuOpen) {
      this.closeMobileMenu();
    }
  };

  private closeMobileMenu(restoreFocus: boolean = true) {
    this.restoreFocusOnClose = restoreFocus;
    this.mobileMenuOpen = false;
  }

  render() {
    const { logoAltText, logoLinkUrl, logoImgUrl, headerTitle, headerTitleUrl } = this;

    return (
      <div class="admiralty-header" role="banner">
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
            {/* Kept as a direct sibling (not inside .menu-sections) so it stays visible next
                to the burger button on mobile instead of being hidden inside the collapsed panel. */}
            <div class="header-toggle">
              <slot name="toggle"></slot>
            </div>
            <div class={{ 'mobile-menu-toggle': true, 'display-hamburger': this.displayHamburger }}>
              <button
                type="button"
                onClick={_ => this.toggleMobileMenu()}
                aria-expanded={this.mobileMenuOpen ? 'true' : 'false'}
                aria-controls={this.menuPanelId}
                aria-label={this.mobileMenuOpen ? 'Hide menu' : 'Show menu'}
              >
                <admiralty-icon name={this.mobileMenuOpen ? 'close-rounded' : 'menu-rounded'}></admiralty-icon>
              </button>
            </div>
            <div id={this.menuPanelId} ref={el => (this.menuPanelEl = el as HTMLDivElement)} class={{ 'menu-sections': true, 'mob-menus-visible': this.mobileMenuOpen }}>
              <div class="menu-nav">
                <slot name="nav"></slot>
              </div>
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
