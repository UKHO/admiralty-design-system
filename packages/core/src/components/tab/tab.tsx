import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'admiralty-tab',
  styleUrl: 'tab.scss',
  scoped: true,
})
export class TabComponent {
  @Prop() label = '';

  @Prop() index = -1;

  @Prop() active = false;

  render() {
    return (
      <div class={{ content: true, active: this.active }} data-idx={this.index}>
        <slot></slot>
      </div>
    );
  }
}
