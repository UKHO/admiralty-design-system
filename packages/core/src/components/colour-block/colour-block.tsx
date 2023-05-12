import { Component, Prop, h } from '@stencil/core';
import { ButtonVariant } from '../button/button.types';

@Component({
  tag: 'admiralty-colour-block',
  styleUrl: 'colour-block.scss',
  shadow: false,
})
export class ColourBlockComponent {
  /**
   * The width in pixels of the component.
   */
  @Prop() width: number;
  /**
   * The height in pixels of the component.
   */
  @Prop() height: number;
  /**
   * The heading text to display.
   */
  @Prop() heading: string;
  /**
   * The background colour of the component.
   */
  @Prop() colour: 'admiralty-blue' | 'teal' | 'bright-blue' = 'admiralty-blue';
  /**
   * The function to call when the action button is pressed.
   */
  @Prop() clickAction: () => any;
  /**
   * The text to display on the action button
   */
  @Prop() actionText: string;

  render() {
    return (
      <div
        class={{
          colourBlock: true,
          [this.colour]: true,
        }}
        style={{
          height: this.height ? `${this.height}px` : null,
          width: this.width ? `${this.width}px` : null,
        }}
      >
        <h2>{this.heading}</h2>
        <div
          class={{
            'content': true,
            'white-text': this.colour === 'admiralty-blue' || this.colour === 'teal',
          }}
        >
          <slot></slot>
        </div>
        {this.clickAction && this.actionText ? (
          <admiralty-button variant={ButtonVariant.Text} class="clickAction" onClick={this.clickAction.bind(this)}>
            <h3>{this.actionText}</h3>
          </admiralty-button>
        ) : null}
      </div>
    );
  }
}
