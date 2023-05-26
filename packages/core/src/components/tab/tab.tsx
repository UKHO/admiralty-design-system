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
   * Tab label Id.  To be set internally by parent tab group component.
   */
  @Prop() tabLabelId="";
  /**
   * Tab content Id.  To be set internally by parent tab group component.
   */
  @Prop() tabContentId="";

  render() {
    return (
      <div class="tab-content"
        id={this.tabContentId}
        role="tabpanel"
        tabindex="-1"
        aria-labelledby={this.tabLabelId}
      >
        <slot></slot>
      </div>
    );
  }
}
