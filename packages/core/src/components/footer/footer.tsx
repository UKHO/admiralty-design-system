import { Component, Prop, h } from "@stencil/core";
import { FooterType, FooterTypes } from './footer.types';

/**
 * @slot - Footer links should be placed in the slot e.g.
 * `<admiralty-link href="http://www.example.com">Privacy Policy</admiralty-link>`
 */
@Component({
  tag: 'admiralty-footer',
  styleUrl: 'footer.scss',
  scoped: true,
})
export class FooterComponent {
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

  render() {
    switch (this.variant) {
      case FooterType.Standard:
        this.imageSrc = 'svg/UKHO stacked logo.svg';
        break;
      case FooterType.Compact:
        this.imageSrc = 'svg/UKHO crest logo.svg';
        break;
      default:
        this.imageSrc = 'svg/UKHO stacked logo.svg'
    }

    return (
      // NOTE: Set width matches figma designs
      // <footer class={`${this.variant === FooterType.Compact && 'footer-compact'}`}>
      //   <div {...(this.variant === FooterType.Compact && { class: 'footer-container'})}>
      //     <div class="footer-branding">
      //       <div class="footer-img">
      //         <a href={this.imageLink}>
      //           <img src={this.imageSrc} alt={this.imageAlt} />
      //         </a>
      //       </div>
      //     </div>
      //     {this.variant === FooterType.Compact && <div class="footer-seperator"></div>}
      //     <div class="footer-content">
      //       {this.variant !== FooterType.Compact && <nav aria-label="Footer Links" class="footer-links">
      //         <slot></slot>
      //       </nav>}
      //       <div class="footer-text">
      //         <p>{this.text}</p>
      //       </div>
      //     </div>
      //   </div>
      // </footer>

      // Note: Pinned to the left and stretched
      // <footer class={`${this.variant === FooterType.Compact && 'footer-compact'}`}>
      //   <div class="footer-branding">
      //     <div class="footer-img">
      //       <a href={this.imageLink}>
      //         <img src={this.imageSrc} alt={this.imageAlt} />
      //       </a>
      //     </div>
      //   </div>
      //   {this.variant === FooterType.Compact && <div class="footer-seperator"></div>}
      //   <div class="footer-content">
      //     {this.variant !== FooterType.Compact && <nav aria-label="Footer Links" class="footer-links">
      //       <slot></slot>
      //     </nav>}
      //     <div class="footer-text">
      //       <p>{this.text}</p>
      //     </div>
      //   </div>
      // </footer>

      // // Note: Centered and stretched
      <footer class={`${this.variant === FooterType.Compact && 'footer-compact'}`}>
        <div class="footer-container">
          <div class="footer-branding">
            <div class="footer-img">
              <a href={this.imageLink}>
                <img src={this.imageSrc} alt={this.imageAlt} />
              </a>
            </div>
          </div>
          {this.variant === FooterType.Compact && <div class="footer-seperator"></div>}
          <div class="footer-content">
            {this.variant !== FooterType.Compact && <nav aria-label="Footer Links" class="footer-links">
              <slot></slot>
            </nav>}
            <div class="footer-text">
              <p>{this.text}</p>
            </div>
          </div>
        </div>
      </footer>


      // Note: Original
      // <footer>
      //   <div class="footer-branding">
      //     <div class="footer-img">
      //       <a href={this.imageLink}>
      //         <img src={this.imageSrc} alt={this.imageAlt} />
      //       </a>
      //     </div>
      //   </div>
      //   <div class="footer-content">
      //     <nav aria-label="Footer Links" class="footer-links">
      //       <slot></slot>
      //     </nav>
      //     <div class="footer-text">
      //       <p>{this.text}</p>
      //     </div>
      //   </div>
      // </footer>
    );
  }
}
