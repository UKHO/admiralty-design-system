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

  private tabs: TabInfo[] = [];

  handleSelectedTab(idx: number) {
    const oldHeader = this.el.querySelector(`div[data-idx="${this.selectedIndex}"]`);
    oldHeader.classList.remove('active');
    const oldContent = this.el.querySelector(`admiralty-tab div[data-idx="${this.selectedIndex}"]`);
    oldContent.classList.remove('active');

    this.selectedIndex = idx;
    const activeHeader = this.el.querySelector(`div[data-idx="${idx}"]`);
    activeHeader.classList.add('active');
    const activeContent = this.el.querySelector(`admiralty-tab div[data-idx="${idx}"]`);
    activeContent.classList.add('active');

    this.admiralTabSelected.emit(idx);
  }

  getTabContentId(i: number): string {
    return `tab-panel-${this._groupId}-${i}`;
  }

  getTabLabelId(i: number): string {
    return `tab-label-${this._groupId}-${i}`;
  }

  componentWillRender() {
    const tabItems = this.el.querySelectorAll('admiralty-tab');

    this.tabs = [];

    if (tabItems.length > 0) {
      let idx = 0;
      tabItems.forEach(t => {
        t.index = idx;
        t.tabLabelId = this.getTabLabelId(idx);
        t.tabContentId = this.getTabContentId(idx);

        this.tabs.push({ label: t.label, index: idx });
        ++idx;
      });

      this.selectedIndex = Math.max(0, Math.min(this.selectedIndex, tabItems.length - 1));

      tabItems[this.selectedIndex].active = true;
    }
  }

  render() {
    const createHeaders = () =>
      Array.from(this.tabs).map(tab => (
        <button
          class={{ heading: true, active: tab.index === this.selectedIndex }}
          id={this.getTabLabelId(tab.index)}
          data-idx={tab.index}
          role="tab"
          aria-setsize={this.tabs.length}
          aria-selected={tab.index === this.selectedIndex}
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
        <div class="tab-group-body-container">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
