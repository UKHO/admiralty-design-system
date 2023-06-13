import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'admiralty-read-more',
  styleUrl: 'read-more.scss',
  scoped: true,
})
export class ReadMoreComponent {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
