import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'admiralty-card',
  styleUrl: 'card.scss',
  shadow: false,
})
export class CardComponent {
  /**
   * The title of the card.
   */
  @Prop() heading: string;

  render() {
    return (
      <section class="card">
        {this.heading ? <div class="card-heading">{this.heading}</div> : null}
        <div>
          <slot></slot>
        </div>
      </section>
    );
  }
}
