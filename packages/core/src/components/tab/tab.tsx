import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'admiralty-tab',
  styleUrl: 'tab.scss',
  scoped: true,
})
export class TabComponent {
  /**
   * Tab label
   */
  @Prop() label = '';
  /**
   * Tab index.  To be set internally by parent tab group component.
   */
  @Prop() index = -1;

  /**
   * Tab label Id.  To be set internally by parent tab group component.
   */
  @Prop() tabLabelId="";
  /**
   * Tab content Id.  To be set internally by parent tab group component.
   */
  @Prop() tabContentId="";

  /**
   * Set internally by parent tab group component to indicate tab content is active.
   */
  @Prop() active = false;

  render() {
    return (
      <div
        class={{ content: true, active: this.active }}
        id={this.tabContentId}
        data-idx={this.index}
        role="tabpanel"
        aria-labelledby={this.tabLabelId}
      >
        <slot></slot>
      </div>
    );
  }
}
