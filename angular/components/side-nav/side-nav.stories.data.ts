import { SideNavItem } from './side-nav.types';
import { action } from '@storybook/addon-actions';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ukho-side-nav-wrapper',
  template: `<ukho-side-nav [menuItems]="menuItems" (itemSelected)="onItemSelected($event)"></ukho-side-nav> `,
})
export class SideNavWrapperComponent {
  @Input() menuItems: SideNavItem[];

  onItemSelected(item: SideNavItem) {
    this.menuItems.forEach((v) => {
      v.navActive = false;
    });

    this.menuItems.find((value) => value === item).navActive = true;

    action('item clicked')(item);
  }
}

export const mockMenuItemsWithNoSubItems: SideNavItem[] = [
  {
    title: 'Overview',
  },
  {
    title: 'Button',
  },
  {
    title: 'Checkbox',
  },
  {
    title: 'Colour block',
  },
  {
    title: 'Dialogue box',
  },
  {
    title: 'Expansion',
  },
  {
    title: 'File upload',
  },
  {
    title: 'Footer',
  },
  {
    title: 'Header',
  },
  {
    title: 'Pagination',
  },
  {
    title: 'Radio',
  },
  {
    title: 'Search',
  },
];

export const mockMenuItemsWithNoSubItemsAndNavActive: SideNavItem[] = [
  {
    title: 'Overview',
  },
  {
    title: 'Button',
  },
  {
    title: 'Checkbox',
  },
  {
    title: 'Colour block',
  },
  {
    title: 'Dialogue box',
  },
  {
    title: 'Expansion',
    navActive: true,
  },
  {
    title: 'File upload',
  },
  {
    title: 'Footer',
  },
  {
    title: 'Header',
  },
  {
    title: 'Pagination',
  },
  {
    title: 'Radio',
  },
  {
    title: 'Search',
  },
];
