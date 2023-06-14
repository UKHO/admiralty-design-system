import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'admiralty-card',
  styleUrl: 'card.scss',
  scoped: true,
})
export class CardComponent {
  /**
   * The title of the card.
   */
  @Prop() heading: string;

  render() {
    return (
      <section class="card">
        {this.heading ? <h6>{this.heading}</h6> : null}
        <div>
          <slot></slot>
        </div>
      </section>
    );
  }
}
