import { trigger, transition, style, animate } from '@angular/animations';
import { Component, Input, Optional } from '@angular/core';
import type { Branding, HeaderItem } from './header.types';

@Component({
  selector: 'ukho-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [style({ left: '100%' }), animate('200ms ease-out', style({ left: '0%' }))]),
      transition(':leave', [style({ left: '0%' }), animate('200ms ease-in', style({ left: '100%' }))]),
    ]),
  ],
})
export class HeaderComponent {
  /**
   * @deprecated use individual inputs for each branding option:
   * - title
   * - logoImgUrl - optional
   * - logoAltText - optional
   * - logoLinkUrl - optional
   */
  @Input() public set branding(value: Branding) {
    this.title = value.title;
    this.logoImgUrl = value.logoImgUrl;
    this.logoAltText = value.logoAltText;
    this.logoImgUrl = value.logoLinkUrl;
  }

  @Input() menuItems: HeaderItem[];

  @Input() authOptions?: AuthOptions;

  @Input() title: string;
  @Input() logoImgUrl = '/svg/Admiralty stacked logo.svg';
  @Input() logoAltText = 'Admiralty Stacked Logo';
  @Input() logoLinkUrl = '/svg/Admiralty stacked logo.svg';

  public active: Element;

  public mobileMenuOpen = false;

  openDropdown(event: Event) {
    this.active = event.target as Element;
    this.active.classList.add('active');
  }

  closeDropdown(event: Event) {
    if (this.active) {
      this.active.classList.remove('active');
      this.active = null;
    }
  }

  itemClickAction(item: HeaderItem) {
    if (item.clickAction && !item.subitems) {
      item.clickAction();
    }
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}

export interface AuthOptions {
  signInHandler: () => any;
  isSignedIn: () => boolean;
  signInButtonText: string;

  userProfileHandler: () => any;

  signOutHandler: () => any;
}
