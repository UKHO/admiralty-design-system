import { Component, h, Prop } from '@stencil/core';

/**
 * @slot - The hint content should be placed in the slot e.g.
 * `<admiralty-hint>Enter your full name</admiralty-hint>`
 */
@Component({
  tag: 'admiralty-hint',
  styleUrl: 'hint.scss',
  shadow: true,
})
export class HintComponent {
  /**
   * The disabled option can be used to disable the component.
   */
  @Prop() disabled: boolean;

  render() {
    return (
      <p class={{ disabled: this.disabled }}>
        <slot></slot>
      </p>
    );
  }
}
