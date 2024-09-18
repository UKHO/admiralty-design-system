import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'admiralty-skip-link',
  styleUrl: 'skip-link.scss',
  scoped: true,
})
export class SkipLinkComponent {
  /**
   * The HTML ID that the skip link will jump to when activated.
   */
  @Prop() href: string = '#main-content';

  render() {
    return (
      <a href={this.href} class="skip-link">
        <span>Skip to main content</span>
      </a>
    );
  }
}
