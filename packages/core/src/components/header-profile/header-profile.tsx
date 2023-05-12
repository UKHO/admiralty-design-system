import { Component, Event, Host, h, Prop, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'admiralty-header-profile',
  styleUrl: 'header-profile.scss',
  shadow: true,
})
export class HeaderProfileComponent {
  @State() displaySubmenu = false;

  /**
   * A boolean to indicate if the user is signed in or not
   */
  @Prop() isSignedIn: boolean = false;

  /**
   * The text that is displayed after the user signs in
   */
  @Prop() signedInText: string = 'replace';

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

  /**
   * TThe event that is fired when the user clicks 'user profile'
   *  on the profile sub menu
   */
  @Event() userProfileClicked: EventEmitter<void>;

  handleSignIn = () => {
    this.signInClicked.emit();
  };

  handleSignOut = () => {
    this.signOutClicked.emit();
  };

  handleYouAccount = () => {
    this.yourAccountClicked.emit();
  };

  openDropdown = () => {
    this.displaySubmenu = true;
  };

  closeDropdown = () => {
    this.displaySubmenu = true;
  };

  render() {
    let { isSignedIn, signedInText, displaySubmenu } = this;

    return (
      <Host>
        <div class="header-profile">
          {isSignedIn ? (
            <div>
              <button onMouseOver={this.openDropdown} onMouseOut={this.closeDropdown}>
                {signedInText}
              </button>
              {displaySubmenu ? (
                <div class="sub-menu">
                  <div class="sub-menu-item">
                    <button onClick={this.handleYouAccount}>Your Account</button>
                  </div>
                  <div class="sub-menu-item">
                    <button onClick={this.handleSignOut}>Sign Out</button>
                  </div>
                </div>
              ) : null}
            </div>
          ) : (
            <button onClick={this.handleSignIn}>Sign In</button>
          )}
        </div>
      </Host>
    );
  }
}
