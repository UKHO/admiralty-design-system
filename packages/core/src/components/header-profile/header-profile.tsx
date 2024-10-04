import { Component, Event, Host, h, Prop, EventEmitter, Element } from '@stencil/core';

@Component({
  tag: 'admiralty-header-profile',
  styleUrl: 'header-profile.scss',
  scoped: true,
})
export class HeaderProfileComponent {
  @Element() el: HTMLElement;

  /**
   * A boolean to indicate if the user is signed in or not
   */
  @Prop() isSignedIn: boolean = false;

  /**
   * The text that is displayed after the user signs in
   */
  @Prop() signedInText: string = 'replace';

  /**
   * A boolean to indicate if the component should hide
   * the sign-out and account buttons, useful for internal
   * sites where the user must be always signed in.
   */
  @Prop() signInOnly: boolean = false;

  /**
   * The event that is fired when the user clicks on
   * the sign in button
   */
  @Event() signInClicked: EventEmitter<void>;

  /**
   * The event that is fired when the user clicks on the
   * 'Your account' button
   */
  @Event() yourAccountClicked: EventEmitter<void>;

  /**
   * The event that is fired when the user clicks on the
   * 'sign out' button
   */
  @Event() signOutClicked: EventEmitter<void>;

  handleSignIn = () => {
    this.signInClicked.emit();
  };

  handleSignOut = () => {
    this.signOutClicked.emit();
  };

  handleYourAccount = () => {
    this.yourAccountClicked.emit();
  };

  closeDropdown = () => {
    const subMenu: HTMLDivElement = this.el.querySelector('div.sub-menu');
    subMenu.classList.add('desktop-hide');
  };

  toggleDropdown = (showMenu: boolean) => {
    const subMenu: HTMLDivElement = this.el.querySelector('div.sub-menu');

    if (showMenu) {
      subMenu.classList.add('desktop-visible');
      subMenu.classList.remove('desktop-hide');
    } else {
      subMenu.classList.add('desktop-hide');
      subMenu.classList.remove('desktop-visible');
    }
  };

  handleClickSignedIn = (ev: MouseEvent) => {
    ev.stopPropagation();
    this.toggleDropdown(false);
  };

  render() {
    let { isSignedIn, signedInText, signInOnly } = this;
    return (
      <Host>
        <div class="header-profile">
          {isSignedIn ? (
            <div>
              <div class="desktop" onMouseOver={this.toggleDropdown}>
                <button onClick={this.handleClickSignedIn}>
                  <span>{signedInText}</span>
                </button>
                {!signInOnly ? (
                  <div class="sub-menu desktop-hide">
                    <button class="sub-menu-item" onClick={this.handleYourAccount}>
                      <div>Your Account</div>
                    </button>
                    <button class="sub-menu-item" onClick={this.handleSignOut}>
                      <div>Sign Out</div>
                    </button>
                  </div>
                ) : null}
              </div>
              {!signInOnly ? (
                <div class="not-desktop">
                  <button class="sub-menu-item" onClick={this.handleYourAccount}>
                    <span>Your Account</span>
                  </button>
                  <button class="sub-menu-item" onClick={this.handleSignOut}>
                    <span>Sign Out</span>
                  </button>
                </div>
              ) : null}
            </div>
          ) : (
            <button class="sub-menu-item" onClick={this.handleSignIn}>
              <span>Sign In</span>
            </button>
          )}
        </div>
      </Host>
    );
  }
}
