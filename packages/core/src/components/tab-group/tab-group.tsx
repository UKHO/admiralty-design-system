import { Component, Element, Prop, Event, h, EventEmitter, Host } from '@stencil/core';

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

  @Event() admiralTabSelected: EventEmitter<number>;

  private _groupId = nextId++;

  private _tabs: TabInfo[] = [];

  handleSelectedTab(idx: number) {
    const oldContent = this.el.querySelector(`.tab-content#${this.getTabContentId(this.selectedIndex)}`);
    oldContent.classList.remove('active');
    oldContent.setAttribute('tabindex', this.getTabIndex(idx).toString());

    this.selectedIndex = idx;
    this.setSelectedTabContent();

    this.admiralTabSelected.emit(idx);
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
    const tabItems = this.el.querySelectorAll('admiralty-tab .tab-content');

    if (tabItems.length > 0) {
      const tabContent = this.el.querySelector('hr');
      tabContent.after(...Array.from(tabItems));

      this.setSelectedTabContent();
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
          onClick={_ => this.handleSelectedTab(tab.index)}
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
