import { Component, Event, Host, h, Prop, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'admiralty-header-profile',
  styleUrl: 'header-profile.scss',
  scoped: true,
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

  toggleDropdown = (ev: Event) => {
    ev.stopPropagation();
    this.displaySubmenu = !this.displaySubmenu;
    console.log('new displaySubmenu:', this.displaySubmenu)
  };

  render() {
    let { isSignedIn, signedInText, displaySubmenu } = this;

    return (
      <Host>
        <div class="header-profile">
          {isSignedIn ? (
            <div>
              <div class="desktop">
                <button onMouseOver={this.openDropdown} onMouseOut={this.closeDropdown} onClick={this.toggleDropdown} tabindex="0">
                  {signedInText}
                </button>
                <div class={{ "sub-menu": true, show: displaySubmenu }} tabindex="0">
                    <div class="sub-menu-item">
                      <button onClick={this.handleYouAccount} tabindex="0">Your Account</button>
                    </div>
                    <div class="sub-menu-item">
                      <button onClick={this.handleSignOut} tabindex="0">Sign Out</button>
                    </div>
                  </div>
              </div>
              <div class="not-desktop">
                <div class="sub-menu-item" onClick={this.handleYouAccount} tabindex="0">Your Account</div>
                <div class="sub-menu-item" onClick={this.handleSignOut} tabindex="0">Sign Out</div>
              </div>
            </div>
          ) : (
            <button class="sub-menu-item" onClick={this.handleSignIn} tabindex="0">Sign In</button>
          )}
        </div>
      </Host>
    );
  }

}
