import { Component, h, Prop } from '@stencil/core';

/**
 * @slot - The label content should be placed in the slot e.g.
 * `<admiralty-label>First Name</admiralty-label>`
 */
@Component({
  tag: 'admiralty-label',
  styleUrl: 'label.scss',
  scoped: true,
})
export class LabelComponent {
  // @Element() el: HTMLElement;

  /**
   * The disabled option can be used to disable the component.
   */
  @Prop() disabled: boolean;

  /**
   * The id of the input the label is attached to
   */
  @Prop() for: string;

  render() {
    return (
      <label htmlFor={this.for} class={{ disabled: this.disabled }}>
        <slot></slot>
      </label>
    );
  }
}
