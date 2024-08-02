import { Component, Element, Prop, Event, h, EventEmitter, Host, forceUpdate } from '@stencil/core';
import { Keys } from '../Keys';

interface TabInfo {
  label: string;
  index: number;
}

let nextId = 0;

@Component({
  tag: 'admiralty-tab-group',
  styleUrl: 'tab-group.scss',
  scoped: true,
})
export class TabGroupComponent {
  @Element() el: HTMLElement;

  @Prop({ mutable: true }) selectedIndex = 0;

  @Event() admiraltyTabSelected: EventEmitter<number>;

  private _groupId = nextId++;

  private _tabs: TabInfo[] = [];
  private _tabHeaders: HTMLElement[] = [];

  handleSelectedTab(idx: number) {
    const oldContent = this.el.querySelector(`.tab-content#${this.getTabContentId(this.selectedIndex)}`);
    oldContent.classList.remove('active');
    oldContent.setAttribute('tabindex', this.getTabIndex(idx).toString());

    this.selectedIndex = idx;
    this.setSelectedTabContent();

    this.admiraltyTabSelected.emit(idx);
  }

  private setSelectedTabContent() {
    const activeContent = this.el.querySelector(`.tab-content#${this.getTabContentId(this.selectedIndex)}`);
    activeContent.classList.add('active');
    activeContent.setAttribute('tabindex', this.getTabIndex(this.selectedIndex).toString());
  }

  private getTabIndex(index: number): number | null {
    return this.selectedIndex === index ? 0 : -1;
  }

  private getTabContentId(i: number): string {
    return `tab-panel-${this._groupId}-${i}`;
  }

  private getTabLabelId(i: number): string {
    return `tab-label-${this._groupId}-${i}`;
  }

  handleKeyDown(event: KeyboardEvent): void {
    const tgt = event.target as HTMLElement;
    let processed = false;

    switch (event.key) {
      case Keys.LEFT_ARROW:
        this.moveFocusToPreviousTab(tgt);
        processed = true;
        break;
      case Keys.RIGHT_ARROW:
        this.moveFocusToNextTab(tgt);
        processed = true;
        break;

      case Keys.HOME:
        this.moveFocusToTabHeader(this._tabHeaders[0]);
        processed = true;
        break;

      case Keys.END:
        this.moveFocusToTabHeader(this._tabHeaders[this._tabHeaders.length - 1]);
        processed = true;
        break;
      default:
        break;
    }

    if (processed) {
      event.stopPropagation();
      event.preventDefault();
    }
  }

  private moveFocusToTabHeader(header: HTMLElement) {
    header.focus();
  }

  private moveFocusToPreviousTab(currentHeader: HTMLElement) {
    const firstTab = this._tabHeaders[0];
    const lastTab = this._tabHeaders[this._tabHeaders.length - 1];

    if (currentHeader === firstTab) {
      this.moveFocusToTabHeader(lastTab);
    } else {
      const index = this._tabHeaders.indexOf(currentHeader);
      this.moveFocusToTabHeader(this._tabHeaders[index - 1]);
    }
  }

  private moveFocusToNextTab(currentHeader: HTMLElement) {
    const firstTab = this._tabHeaders[0];
    const lastTab = this._tabHeaders[this._tabHeaders.length - 1];

    if (currentHeader === lastTab) {
      this.moveFocusToTabHeader(firstTab);
    } else {
      const index = this._tabHeaders.indexOf(currentHeader);
      this.moveFocusToTabHeader(this._tabHeaders[index + 1]);
    }
  }

  componentWillLoad() {
    const tabItems = this.el.querySelectorAll('admiralty-tab');

    this._tabs = [];

    if (tabItems.length > 0) {
      let idx = 0;
      tabItems.forEach(t => {
        t.tabLabelId = this.getTabLabelId(idx);
        t.tabContentId = this.getTabContentId(idx);

        this._tabs.push({ label: t.label, index: idx });
        ++idx;
      });

      this.selectedIndex = Math.max(0, Math.min(this.selectedIndex, tabItems.length - 1));
    }
  }

  componentDidLoad() {
    this._tabHeaders = Array.from(this.el.querySelectorAll('[role="tab"]'));

    const tabItems = this.el.querySelectorAll('admiralty-tab .tab-content');

    if (tabItems.length > 0) {
      const tabContent = this.el.querySelector('hr');
      tabContent.after(...Array.from(tabItems));

      this.setSelectedTabContent();
      forceUpdate(this);
    }
  }

  render() {
    const createHeaders = () =>
      Array.from(this._tabs).map(tab => (
        <button
          class={{ heading: true, active: tab.index === this.selectedIndex }}
          id={this.getTabLabelId(tab.index)}
          role="tab"
          tabIndex={this.getTabIndex(tab.index)}
          aria-setsize={this._tabs.length}
          aria-selected={`${tab.index === this.selectedIndex}`}
          aria-controls={this.getTabContentId(tab.index)}
          onClick={_ev => this.handleSelectedTab(tab.index)}
          onKeyDown={ev => this.handleKeyDown(ev)}
        >
          {tab.label}
        </button>
      ));

    return (
      <Host>
        <div class="tab-group-headers" role="tablist">
          <div class="headers">{createHeaders()}</div>
        </div>
        <hr />
        <slot></slot>
      </Host>
    );
  }
}
