import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'admiralty-side-nav',
  styleUrl: 'side-nav.scss',
  scoped: true,
})
export class SideNavComponent {
  /**
   * A label for accessibility purposes to describe what this Side Nav navigation is for
   * e.g. Product Menu, Map Tool Menu etc.
   */
  @Prop() label: string;

  render() {
    return (
      <nav class="side-nav" aria-label={this.label}>
        <slot></slot>
      </nav>
    );
  }
}
