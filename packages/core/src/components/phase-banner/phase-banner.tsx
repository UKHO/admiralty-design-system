import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'admiralty-phase-banner',
  styleUrl: 'phase-banner.scss',
  shadow: false,
})
export class PhaseBannerComponent {
  /**
   * The phase for the phase banner
   */
  @Prop() phase: 'alpha' | 'beta' = 'alpha';

  /**
   * A link to where the end user can provide feedback
   */
  @Prop() link: string;

  render() {
    return (
      <div class="phase-banner">
        <strong>{this.phase}</strong>
        <span>
          This service is in {this.phase} phase - please provide{' '}
          <a href={this.link} target="_blank">
            feedback
          </a>{' '}
          to help us improve it
        </span>
      </div>
    );
  }
}
