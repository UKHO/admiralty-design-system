import { Component, Prop, h, EventEmitter, Event } from '@stencil/core';

/**
 * @slot items - 'admiralty-header-menu-item menu-title' components are placed here for appropiate styling and behaviour
 * @slot profile - 'admiralty-header-profile' components are placed here (the login/logout) options
 */
@Component({
  tag: 'admiralty-header',
  styleUrl: 'header.scss',
  shadow: false,
})
export class HeaderComponent {
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
  @Prop() logoAltText: string = 'Admiralty Stacked Logo';

  /**
   * Emits an event that can be listened to when the title in the header is clicked
   */
  @Event() titledClicked: EventEmitter<string>;
  private handleClick = (ev: MouseEvent) => {
    ev.preventDefault();
    this.titledClicked.emit(this.headerTitleUrl);
  };

  render() {
    const { logoAltText, logoLinkUrl, logoImgUrl, headerTitle, headerTitleUrl } = this;

    return (
      <div class="admiralty-header">
        <nav class="header-menu">
          <div class="header-branding">
            <a class="header-logo" href={logoLinkUrl}>
              <img class="header-image" alt={logoAltText} src={logoImgUrl} />
            </a>
            <div class="vertical-seperator"></div>
            <h1 class="header-title">
              <a onClick={this.handleClick} href={headerTitleUrl}>
                {headerTitle}
              </a>
            </h1>
          </div>
          <div role="navigation" class="menu-items">
            <slot name="items"></slot>
          </div>
          <div role="navigation" class="header-profile">
            <slot name="profile"></slot>
          </div>
        </nav>
      </div>
    );
  }
}
