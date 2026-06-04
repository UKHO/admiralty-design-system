import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';

@Component({
  tag: 'admiralty-colour-block',
  styleUrl: 'colour-block.scss',
  scoped: true,
})
export class ColourBlockComponent {
  private linkElement?: HTMLAnchorElement;

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

  private hasLink(): boolean {
    return Boolean(this.linkText && this.href);
  }

  private shouldEnableBlockInteraction(): boolean {
    return this.enableCardEvent || this.hasLink();
  }

  private isInteractiveTarget(ev: MouseEvent | KeyboardEvent): boolean {
    const interactiveSelector = 'a, button, input, select, textarea, [role="button"], [role="link"]';
    const currentTarget = ev.currentTarget instanceof HTMLElement ? ev.currentTarget : null;

    return ev
      .composedPath()
      .some(target => {
        if (!(target instanceof HTMLElement)) {
          return false;
        }

        const interactiveElement = target.closest(interactiveSelector);
        return interactiveElement !== null && interactiveElement !== currentTarget;
      });
  }

  private triggerLinkAction() {
    if (!this.linkElement) {
      return;
    }

    this.linkElement.focus({ preventScroll: true });
    this.linkElement.click();
  }

  private onBlockClick(ev: MouseEvent) {
    if (!this.shouldEnableBlockInteraction()) {
      return;
    }

    if (this.hasLink() && !this.isInteractiveTarget(ev)) {
      this.triggerLinkAction();
      return;
    }

    if (this.enableCardEvent && !this.hasLink()) {
      this.handleClickAction(ev);
    }
  }

  private onBlockKeyDown(ev: KeyboardEvent) {
    if (!this.shouldEnableBlockInteraction()) {
      return;
    }

    if (ev.key !== 'Enter' && ev.key !== ' ') {
      return;
    }

    ev.preventDefault();

    if (this.hasLink()) {
      this.triggerLinkAction();
      return;
    }

    if (this.enableCardEvent) {
      this.handleClickAction(ev as unknown as MouseEvent);
    }
  }

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
          'is-interactive': this.shouldEnableBlockInteraction(),
        }}
        style={{
          height: this.height ? `${this.height}px` : undefined,
          width: this.width ? `${this.width}px` : undefined,
        }}
        role={this.shouldEnableBlockInteraction() ? (this.hasLink() ? 'link' : 'button') : undefined}
        tabIndex={this.shouldEnableBlockInteraction() ? 0 : undefined}
        aria-label={this.shouldEnableBlockInteraction() ? this.linkText || this.heading : undefined}
        onClick={ev => this.onBlockClick(ev)}
        onKeyDown={ev => this.onBlockKeyDown(ev)}
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
          <a class="clickAction" href={this.href} onClick={ev => this.handleClickAction(ev)} ref={el => (this.linkElement = el)}>
            <span>{this.linkText}</span>
          </a>
        ) : null}
      </div>
    );
  }
}
