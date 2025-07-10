import { Component, Element, h, Prop } from '@stencil/core';

/**
 * @slot items - 'admiralty-text-side-bar-item' components should be placed here in the items slot
 * @slot footer - additional 'admiralty-text-side-bar-item' components can be placed in the footer slot
 * to display at the bottom of the text side bar.
 */
@Component({
  tag: 'admiralty-text-side-bar',
  styleUrl: 'text-side-bar.scss',
  scoped: true,
})
export class TextSideBarComponent {
  @Element() el!: HTMLAdmiraltyTextSideBarElement;
  /**
   * A label for accessibility purposes to describe what this navigation is for.
   */
  @Prop() label: string;
  /**
   * Set this to false to hide the logo that is displayed in the bottom of the side bar.
   */
  @Prop() showLogo: boolean = true;
  /**
   * The URI of the logo image
   */
  @Prop() logoImgUrl: string = 'svg/UKHO crest.svg';

  /**
   * Sets the sidebar width
   */
  @Prop() textSideBarWidth: string = '150px';

  render() {
    return (
      <nav aria-label={this.label} style={{ width: this.textSideBarWidth ? this.textSideBarWidth !== '' ? this.textSideBarWidth : '100px' : '100px' }}>
        <ul>
          <slot name="items"></slot>
        </ul>
        <ul>
          <slot name="footer"></slot>
          {this.showLogo ? <img class="logo" src={this.logoImgUrl} alt="UKHO Logo" aria-hidden="true" /> : null}
        </ul>
      </nav>
    );
  }
}
