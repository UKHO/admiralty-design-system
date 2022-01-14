import { trigger, transition, style, animate } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { HeaderItem } from './header.types';

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
  @Input() menuItems: HeaderItem[];

  @Input() authOptions?: AuthOptions;

  @Input() title: string;
  @Input() titleLinkUrl: string;
  @Input() logoImgUrl = '/assets/svg/Admiralty stacked logo.svg';
  @Input() logoAltText = 'Admiralty Stacked Logo';
  @Input() logoLinkUrl = 'https://www.admiralty.co.uk/';

  @Output() titleLinkNavigated = new EventEmitter<string>();

  public active: Element;

  public mobileMenuOpen = false;

  navigateTitleLink() {
    this.titleLinkNavigated.emit(this.titleLinkUrl);
  }

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
