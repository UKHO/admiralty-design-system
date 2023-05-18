import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'admiralty-tab-group-item',
  styleUrl: 'tab-group-item.scss',
  scoped: true,
})
export class TabGroupItemComponent {
  @Prop() label = '';

  @Prop() index = -1;

  @Prop() active = false;

  ComponentWillLO;
  render() {
    return (
      <div class={{ content: true, active: this.active }} data-idx={this.index}>
        <slot></slot>
      </div>
    );
  }
}
