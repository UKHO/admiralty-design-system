import { Component, h, Prop } from '@stencil/core';

/**
 * @slot - 'admiralty-side-bar-item' components should be placed here in the default slot
 * @slot footer - additional 'admiralty-side-bar-item' components can be placed in the footer slot
 * to display at the bottom of the side bar.
 */
@Component({
  tag: 'admiralty-side-bar',
  styleUrl: 'side-bar.scss',
  scoped: true,
})
export class SideBarComponent {
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

  render() {
    return (
      <nav aria-label={this.label}>
        <ul>
          <slot></slot>
        </ul>
        <ul>
          <slot name="footer"></slot>
          {this.showLogo ? <img class="logo" src={this.logoImgUrl} alt="UKHO Logo" aria-hidden="true" /> : null}
        </ul>
      </nav>
    );
  }
}
