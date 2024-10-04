import { Component, h, Host } from '@stencil/core';

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
        <admiralty-icon name="priority-high" class="error-icon"></admiralty-icon>
        <p>
          <span class="visually-hidden">Error:</span>
          <slot></slot>
        </p>
      </Host>
    );
  }
}
