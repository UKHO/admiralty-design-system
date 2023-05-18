import { Component, Element, Prop, Event, h, EventEmitter, Host } from '@stencil/core';

interface TabInfo {
  label: string
  index: number
}

@Component({
  tag: 'admiralty-tab-group',
  styleUrl: 'tab-group.scss',
  scoped: true,
})
export class TabGroupComponent {
  @Element() el: HTMLElement;

  @Prop() selectedIndex = 0;

  @Event() admiralTabSelected: EventEmitter<number>;

  private tabs: TabInfo[] = [];
  // private activeIdx = 0;

  handleSelectedTab(idx: number) {
    console.log('handleSelectedTab event', idx);

    const oldHeader = this.el.querySelector(`div[data-idx="${this.selectedIndex}"]`);
    oldHeader.classList.remove('active');
    const oldContent = this.el.querySelector(`admiralty-tab-group-item div[data-idx="${this.selectedIndex}"]`);
    oldContent.classList.remove('active');

    this.selectedIndex = idx;
    const activeHeader = this.el.querySelector(`div[data-idx="${idx}"]`);
    activeHeader.classList.add('active');
    const activeContent = this.el.querySelector(`admiralty-tab-group-item  div[data-idx="${idx}"]`);
    activeContent.classList.add('active');

    this.admiralTabSelected.emit(idx);
  }

  componentWillRender() {
    // console.log('lifecycle method')
    const tabItems = this.el.querySelectorAll('admiralty-tab-group-item');

    this.tabs = [];

    if (tabItems.length > 0) {
      let idx = 0;
      tabItems.forEach(t => {
        t.index = idx;

        this.tabs.push({ label: t.label, index: idx });
        ++idx;
      });

      tabItems[this.selectedIndex].active = true;
    }
  }

  private createHeaders() {
    return Array.from(this.tabs).map(tab => (
      <div class={{ header: true, active: tab.index === this.selectedIndex }} data-idx={tab.index} onClick={_ => this.handleSelectedTab(tab.index)}>
        {tab.label}
      </div>
    ));
  }

  render() {
    // console.log('render')
    return (
      <Host>
        <div class="headers">{this.createHeaders()}</div>
        <hr />
        <slot></slot>
      </Host>
    );
  }
}