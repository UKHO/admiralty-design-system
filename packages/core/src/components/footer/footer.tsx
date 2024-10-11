import { Component, Prop, h, State, Listen, Element } from '@stencil/core';
import { FooterType, FooterTypes } from './footer.types';

/**
 * @slot - Footer links should be placed in the slot e.g.
 * `<admiralty-link href="http://www.example.com">Privacy Policy</admiralty-link>`
 */
@Component({
  tag: 'admiralty-footer',
  styleUrl: 'footer.scss',
  scoped: true
})
export class FooterComponent {
  @Element() el: HTMLElement;

  /**
   * The type of footer to render. Valid values are `standard`, `compact`.
   * Default value is `standard`.
   */
  @Prop() variant: FooterTypes = FooterType.Standard;
  /**
   * The URL that the image links to.
   */
  @Prop() imageLink = 'https://www.admiralty.co.uk/';
  /**
   * The source of the image displayed in the footer.
   */
  @Prop() imageSrc = 'svg/UKHO stacked logo.svg';
  /**
   * A description for the image displayed in the footer. This might be shown if the image
   * fails to load or get read out by screen readers.
   */
  @Prop() imageAlt = 'Admiralty Maritime Data Solutions | UK Hydrographic Office';
  /**
   * The text to display in the footer. The default value displays crown copyright, the
   * current year and `UK Hydrographic Office`.
   */
  @Prop() text = `© Crown copyright ${new Date().getFullYear()} UK Hydrographic Office`;

  @State() hasSlotContent: boolean = false;

  componentDidRender(): void {
    this.checkSlotContent()
  }

  @Listen('slotchange', { capture: true })
  handleSlotChange() {
    this.checkSlotContent()
  }

  checkSlotContent(): void {
    const links = this.el.querySelectorAll('admiralty-link') as NodeListOf<HTMLAdmiraltyLinkElement>
    if (links) {
      this.hasSlotContent = links.length > 0;
    }
  }

  render() {
    return (
      <footer {...(this.variant === FooterType.Compact && { class: 'footer-compact'})}>
        {this.variant !== FooterType.Compact && <div class="footer-branding">
          <div class="footer-img">
            <a href={this.imageLink}>
              <img src={this.imageSrc} alt={this.imageAlt} />
            </a>
          </div>
        </div>}
        <div class="footer-content">
          <nav aria-label="Footer Links" {...(this.hasSlotContent && this.variant === FooterType.Compact ? {class: 'footer-links text-padding'} : { class: 'footer-links'})}>
            <slot onSlotchange={() => this.handleSlotChange()}></slot>
          </nav>
          <div class="footer-text">
            <p>{this.text}</p>
          </div>
        </div>
      </footer>
    );
  }
}
