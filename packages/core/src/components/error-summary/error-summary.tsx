import { Component, Prop, h } from '@stencil/core';

/**
 * @slot - Error messages should be placed in the slot. Each error message should use the same
 * wording as the original error message on the input component.
 *
 * For optimal accessibility, each error message should be rendered as a link that links back to
 * the input component. e.g.
 *
 *   `<admiralty-link href="#name-input">Enter your full name</admiralty-link>`
 *
 * would link to the input field:
 *
 *   `<admiralty-input id="name" label="What is your name?"></admiralty-input>`
 *
 * The `<input>` element of the component should be the target of the link and not the outer
 * component wrapper so that the focus is applied correctly. The ID of the input element is the
 * ID suffixed with `-input`.
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
