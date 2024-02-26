import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';

@Component({
  tag: 'admiralty-colour-block',
  styleUrl: 'colour-block.scss',
  scoped: true,
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
   * An event emitted when this Colour Block link is clicked
   */
  @Event() colourBlockLinkClicked: EventEmitter<string>;

  handleClickAction() {
    this.emitColourBlockLinkClicked();
  }

  emitColourBlockLinkClicked() {
    this.colourBlockLinkClicked.emit();
  }
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
        {this.actionText ? (
          <admiralty-button variant="text" class="clickAction" onClick={this.handleClickAction.bind(this)}>
            <h3>{this.actionText}</h3>
          </admiralty-button>
        ) : null}
      </div>
    );
  }
}
