import { Component, Element, h, Prop } from '@stencil/core';

/**
 * @slot items - 'admiralty-icon-side-bar-item' components should be placed here in the items slot
 * @slot footer - additional 'admiralty-icon-side-bar-item' components can be placed in the footer slot
 * to display at the bottom of the icon side bar.
 */
@Component({
  tag: 'admiralty-icon-side-bar',
  styleUrl: 'icon-side-bar.scss',
  scoped: true,
})
export class IconSideBarComponent {
  @Element() el!: HTMLAdmiraltyIconSideBarElement;
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
  @Prop() iconSideBarWidth: string = '150px';

  render() {
    return (
      <nav aria-label={this.label} style={{ width: this.iconSideBarWidth ? this.iconSideBarWidth !== '' ? this.iconSideBarWidth : '100px' : '100px' }}>
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
