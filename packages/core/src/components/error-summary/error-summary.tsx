import { Component, Prop, h } from '@stencil/core';

/**
 * @slot - Error messages should be placed in the slot. Each error message should use the same
 * wording as the original error message on the input component. Each error message should be a
 * link that links back to the input component by using the unique `identifier` attribute e.g.
 *
 *   `<admiralty-link href="#name">Enter your full name</admiralty-link>`
 *
 * would use the `name` ID to link to the input field:
 *
 *   `<admiralty-input identifier="name" label="What is your name?"></admiralty-input>`
 */
@Component({
  tag: 'admiralty-error-summary',
  styleUrl: 'error-summary.scss',
  scoped: true,
})
export class ErrorSummaryComponent {
  /**
   * The heading to display.
   */
  @Prop() heading: string = "There's a problem";

  render() {
    return (
      <admiralty-dialogue type="error" heading={this.heading} section-role="alert">
        <div class="links">
          <slot></slot>
        </div>
      </admiralty-dialogue>
    );
  }
}
