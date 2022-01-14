import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { SideNavItem } from './side-nav.types';

@Component({
  selector: 'ukho-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  /**
   * The items to display in the Side Nav.
   *
   * Should be updated when a user navigates.
   */
  @Input() menuItems: SideNavItem[];

  /**
   * An event that is emitted when the user selects an item of the Side Nav.
   *
   * The event will have the value of the SideNavItem that is clicked.
   */
  @Output() itemSelected = new EventEmitter<SideNavItem>();

  itemClickAction(item: SideNavItem) {
    this.itemSelected.emit(item);
  }
}
