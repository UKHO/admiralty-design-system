import { Component, Host, Prop, Watch, h } from '@stencil/core';

@Component({
  tag: 'admiralty-type-ahead-item',
  styleUrl: 'type-ahead-item.scss',
  scoped: true,
})
export class AdmiraltyTypeAheadItem {
  @Prop() value!: string;

  @Watch('value')
  onNameChanged(value: string) {
    console.log('got value: ', value);
  }

  render() {
    return <Host></Host>;
  }
}
