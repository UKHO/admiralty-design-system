import { Component, h, Host } from '@stencil/core';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';

/**
 * @slot - The error content should be placed in the slot e.g.
 * `<admiralty-input-error>This field is required</admiralty-input-error>`
 */
@Component({
  tag: 'admiralty-input-error',
  styleUrl: 'input-error.scss',
  shadow: true,
})
export class InputError {
  render() {
    return (
      <Host>
        <admiralty-icon icon-name={faExclamation.iconName} class="error-icon"></admiralty-icon>
        <p>
          <slot></slot>
        </p>
      </Host>
    );
  }
}
