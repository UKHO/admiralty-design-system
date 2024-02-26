import { Component, h, Host } from '@stencil/core';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';

/**
 * @slot - The error content should be placed in the slot e.g.
 * `<admiralty-input-invalid>This field is required</admiralty-input-invalid>`
 */
@Component({
  tag: 'admiralty-input-invalid',
  styleUrl: 'input-invalid.scss',
  scoped: true,
})
export class InputInvalidComponent {
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
