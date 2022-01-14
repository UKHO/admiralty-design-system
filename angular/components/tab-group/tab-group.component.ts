import {
  AfterViewInit,
  Component,
  ContentChildren,
  Input,
  QueryList,
  TemplateRef,
  ViewChildren,
  ViewContainerRef,
} from '@angular/core';
import { TabComponent } from './tab.component';
import { FocusKeyManager } from '@angular/cdk/a11y';
import { TabHeaderComponent } from './tab-header.component';
import fs from 'fs';

let nextId = 0;

@Component({
  selector: 'ukho-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss'],
})
export class TabGroupComponent implements AfterViewInit {
  @ContentChildren(TabComponent) _tabs: QueryList<TabComponent>;
  @ViewChildren(TabHeaderComponent) _tabHeaders: QueryList<TabHeaderComponent>;

  private _nextGroupId: number;

  /** The index of the active tab. */
  @Input()
  get selectedIndex(): number | null {
    return this._selectedIndex;
  }
  set selectedIndex(value: number | null) {
    this._selectedIndex = value;
  }

  private _selectedIndex: number | null = 0;

  private _keyManager: FocusKeyManager<TabHeaderComponent>;
  constructor() {
    this._nextGroupId = nextId++;
  }

  ngAfterViewInit(): void {
    this._keyManager = new FocusKeyManager<TabHeaderComponent>(this._tabHeaders)
      .withHorizontalOrientation('ltr')
      .withWrap()
      .withHomeAndEnd();

    this._keyManager.updateActiveItem(this.selectedIndex);

    this._keyManager.change.subscribe((newFocusIndex) => {
      this.setTabFocus(newFocusIndex);
    });
  }

  handleClick(index: number) {
    this.selectedIndex = index;
  }

  getTabIndex(index: number): number | null {
    return this.selectedIndex === index ? 0 : -1;
  }

  getTabContentId(i: number): string {
    return `tab-panel-${this._nextGroupId}-${i}`;
  }

  getTabLabelId(i: number): string {
    return `tab-label-${this._nextGroupId}-${i}`;
  }

  handleKeyDown(event: KeyboardEvent) {
    this._keyManager.onKeydown(event);
  }

  setTabFocus(tabIndex: number) {
    this._tabHeaders.toArray()[tabIndex].focus();
    this.selectedIndex = tabIndex;
  }
}

export interface Tab {
  name: string;
  content?: any;
}
