import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'admiralty-link',
  scoped: true,
})
export class LinkComponent {
  /**
   * The URL that the link will navigate to.
   */
  @Prop() href: string;
  /**
   * Whether to open the URL in a new tab.
   */
  @Prop() newTab = false;

  render() {
    return (
      <a href={this.href} target={this.newTab ? '_blank' : '_self'}>
        <slot></slot>
      </a>
    );
  }
}
