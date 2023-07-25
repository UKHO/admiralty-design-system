import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'admiralty-type-ahead-item',
  styleUrl: 'type-ahead-item.scss',
  scoped: true,
})
export class AdmiraltyTypeAheadItem {
  @Prop() value: string;

  render() {
    return <Host value={this.value}></Host>;
  }
}
