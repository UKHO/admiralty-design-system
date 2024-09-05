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
   * The URL to link to.
   */
  @Prop() href: string;
  /**
   * The link text.
   */
  @Prop() linkText: string;
  /**
   * Causes the default browser redirect to be suppressed. Can be used in conjunction with the
   * `colourBlockLinkClicked` event to use a navigation router and prevent a full page reload
   * when navigating.
   */
  @Prop() suppressRedirect: boolean = false;
  /**
   * Allow the card to be clicked. Will emit a `colourBlockLinkClicked` event. A value for `href`
   * should also be provided to ensure the component conforms to accessibility standards.
   */
  @Prop() enableCardEvent: boolean = false;
  /**
   * An event emitted when this Colour Block link is clicked
   */
  @Event() colourBlockLinkClicked: EventEmitter<string>;

  handleClickAction(ev: MouseEvent) {
    if (this.suppressRedirect) {
      ev.preventDefault();
    }
    ev.stopPropagation();
    this.colourBlockLinkClicked.emit();
  }

  /**
   * The text to display on the action button
   * @deprecated in favour of `href` and `linkText`
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
          ...(this.enableCardEvent && { cursor: 'pointer' }),
        }}
        onClick={ev => (this.enableCardEvent ? this.handleClickAction(ev) : null)}
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
          <admiralty-button variant="text" class="clickAction" onClick={ev => this.handleClickAction(ev)}>
            <span>{this.actionText}</span>
          </admiralty-button>
        ) : null}
        {this.linkText && this.href ? (
          <a class="clickAction" href={this.href} onClick={ev => this.handleClickAction(ev)}>
            <span>{this.linkText}</span>
          </a>
        ) : null}
      </div>
    );
  }
}
