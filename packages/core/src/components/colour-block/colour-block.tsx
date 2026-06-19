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
   * Explicit accessible name for the interactive block.
   */
  @Prop({ attribute: 'aria-label' }) accessibleLabel: string = '';
  /**
   * Causes the default browser redirect to be suppressed. Can be used in conjunction with the
   * `colourBlockLinkClicked` event to use a navigation router and prevent a full page reload
   * when navigating.
   */
  @Prop() suppressRedirect: boolean = false;
  /**
   * Allow the card to be clicked. Will emit a `colourBlockLinkClicked` event.
   *
   * When `href` and `linkText` are provided, the card behaves as a link (`role="link"`).
   * When they are not provided, the card behaves as a button (`role="button"`).
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

  private getInteractiveAriaLabel(): string | undefined {
    const ariaLabelCandidates = [this.accessibleLabel, this.linkText, this.heading, this.actionText].map(value => value?.trim()).filter((value): value is string => Boolean(value));

    return ariaLabelCandidates[0] ?? 'Interactive colour block';
  }

  private isInteractiveTarget(ev: MouseEvent | KeyboardEvent): boolean {
    const interactiveSelector = 'a, button, input, select, textarea, [role="button"], [role="link"]';
    const currentTarget = ev.currentTarget instanceof HTMLElement ? ev.currentTarget : null;

    return ev.composedPath().some(target => {
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

    if (this.isInteractiveTarget(ev)) {
      return;
    }

    if (this.hasLink()) {
      if (ev.key !== 'Enter') {
        return;
      }

      ev.preventDefault();
      this.triggerLinkAction();
      return;
    }

    if (ev.key !== 'Enter' && ev.key !== ' ') {
      return;
    }

    ev.preventDefault();
    if (this.enableCardEvent) {
      this.handleClickAction(ev);
    }
  }

  handleClickAction(ev: MouseEvent | KeyboardEvent) {
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
          'colourBlock': true,
          [this.colour]: true,
          'is-interactive': this.shouldEnableBlockInteraction(),
        }}
        style={{
          height: this.height ? `${this.height}px` : undefined,
          width: this.width ? `${this.width}px` : undefined,
        }}
        role={this.shouldEnableBlockInteraction() ? (this.hasLink() ? 'link' : 'button') : undefined}
        tabIndex={this.shouldEnableBlockInteraction() ? 0 : undefined}
        aria-label={this.shouldEnableBlockInteraction() ? this.getInteractiveAriaLabel() : undefined}
        onClick={ev => this.onBlockClick(ev)}
        onKeyDown={ev => this.onBlockKeyDown(ev)}
      >
        <h2>{this.heading}</h2>
        <div
          class={{
            content: true,
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
