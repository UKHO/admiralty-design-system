import { trigger, transition, style, animate } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { HeaderItem, HeaderSubItem } from './header.types';

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
  public activeDropdownMenu: string;

  navigateTitleLink(event: MouseEvent) {
    event.preventDefault();
    this.titleLinkNavigated.emit(this.titleLinkUrl);
  }

  openDropdown(target: HTMLElement, title: string) {
    if (this.active && this.active.id !== title) {
      this.closeDropdown();
    }
    this.active = target;
    this.activeDropdownMenu = title;
    this.active.classList.add('active');
  }

  closeDropdown() {
    if (this.active) {
      this.active.classList.remove('active');
      this.activeDropdownMenu = null;
      this.active = null;
    }
  }

  toggleDropdown(event: MouseEvent, target: HTMLElement, title: string) {
    event.stopImmediatePropagation();
    if (!this.active || (this.active && this.active.id !== title)) {
      this.openDropdown(target, title);
    } else {
      this.closeDropdown();
    }
  }

  itemClickAction(event: MouseEvent, item: HeaderItem | HeaderSubItem) {
    event.preventDefault();
    if (item.clickAction && !(item as HeaderItem).subitems) {
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
  signedInButtonText: string;
  signedInButtonTextDescription?: string;

  userProfileHandler: () => any;

  signOutHandler: () => any;
}
