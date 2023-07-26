import { Component, Event, Host, h, Prop, EventEmitter, Element } from '@stencil/core';
import { Keys } from '../Keys';

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

  handleSignInKeyDown = (ev: KeyboardEvent) => {
    if (ev.key === Keys.ENTER || ev.key === Keys.SPACE) {
      this.signInClicked.emit();
    }
  }

  handleSignOut = () => {
    this.signOutClicked.emit();
  };

  handleSignOutKeyDown = (ev: KeyboardEvent) => {
    if (ev.key === Keys.ENTER || ev.key === Keys.SPACE) {
      this.signOutClicked.emit();
    }
  }

  handleYourAccount = () => {
    this.yourAccountClicked.emit();
  };

  handleYourAccountKeyDown = (ev: KeyboardEvent) => {
    if (ev.key === Keys.ENTER || ev.key === Keys.SPACE) {
      this.yourAccountClicked.emit();
    }
  }

  closeDropdown = () => {
    const subMenu: HTMLDivElement = this.el.querySelector('div.sub-menu');
    subMenu.classList.add('desktop-hide');
  };

  toggleDropdown = (_ev: Event) => {
    const subMenu: HTMLDivElement = this.el.querySelector('div.sub-menu');

    if (subMenu.classList.contains('desktop-hide')) {
      subMenu.classList.add('desktop-visible');
      subMenu.classList.remove('desktop-hide');
    } else {
      subMenu.classList.add('desktop-hide');
      subMenu.classList.remove('desktop-visible');
    }
  };

  handleClickSignedIn = (ev: MouseEvent) =>{
    ev.stopPropagation();
    this.toggleDropdown(ev);
  }

  render() {
    let { isSignedIn, signedInText } = this;
    return (
      <Host>
        <div class="header-profile">
          {isSignedIn ? (
            <div>
              <div class="desktop"
                onMouseOver={this.toggleDropdown}
              >
                <button
                  onClick={this.handleClickSignedIn}
                  tabindex="0">
                  {signedInText}
                </button>
                <div class="sub-menu desktop-hide">
                  <button class="sub-menu-item" onClick={this.handleYourAccount} tabindex="0">Your Account</button>
                  <button  class="sub-menu-item" onClick={this.handleSignOut} tabindex="0">Sign Out</button>
                </div>
              </div>
              <div class="not-desktop">
                <div class="sub-menu-item" onClick={this.handleYourAccount} onKeyDown={this.handleYourAccountKeyDown} tabindex="0">Your Account</div>
                <div class="sub-menu-item" onClick={this.handleSignOut}  onKeyDown={this.handleSignOutKeyDown} tabindex="0">Sign Out</div>
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
