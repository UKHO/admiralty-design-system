import { Component, Element, State, h, Prop } from '@stencil/core';

@Component({
  tag: 'admiralty-side-nav',
  styleUrl: 'side-nav.scss',
  scoped: true,
})
export class SideNavComponent {
  @Element() el: HTMLElement;

  /**
   * A label for accessibility purposes to describe what this Side Nav navigation is for
   * e.g. Product Menu, Map Tool Menu etc.
   * Ignored when the Side Nav is slotted into an 'admiralty-header', because the header
   * already provides the navigation landmark.
   */
  @Prop() label: string;

  @State() inHeader = false;

  connectedCallback() {
    this.inHeader = !!this.el.closest('admiralty-header');
  }

  render() {
    const classes = { 'side-nav': true, 'in-header': this.inHeader };

    // Nesting a <nav> inside the header's own <nav> would announce two navigation
    // landmarks for a single menu, so the landmark is dropped when slotted in.
    return this.inHeader ? (
      <div class={classes}>
        <slot></slot>
      </div>
    ) : (
      <nav class={classes} aria-label={this.label}>
        <slot></slot>
      </nav>
    );
  }
}
