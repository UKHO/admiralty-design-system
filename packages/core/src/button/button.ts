import { UKHOBase } from '../base/base';
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import buttonStyles from './button.scss';

/**
 * An button component.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('ukho-button')
export class UKHOButton extends UKHOBase {
  static get styles() {
    return [UKHOBase.styles, buttonStyles];
  }

  /**
   * The type of the button
   */
  @property({ type: String })
  variant: 'primary' | 'seconday' = 'primary';

  /**
   * The type of the button
   */
  @property({ type: String })
  type: 'button' | 'submit' | 'reset' = 'submit';

  /**
   * Whether the button is disabled.
   */
  @property({ type: Boolean })
  disabled: boolean = false;

  render() {
    return html`
      <button ?disabled=${this.disabled} class=${this.variant}>
        <slot name="start"></slot>
        <slot></slot>
        <slot name="end"></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ukho-button': UKHOButton;
  }
}
