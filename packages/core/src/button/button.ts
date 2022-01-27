import { UKHOBase } from '../base/base';
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import buttonStyles from './button.scss';

export enum Variant {
  Primary = 'primary',
  Secondary = 'secondary',
}

export enum ButtonType {
  Button = 'button',
  Submit = 'submit',
  Reset = 'reset',
}

/**
 * A button component.
 *
 * @fires onclick - When the button has been pressed
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
  variant: Variant = Variant.Primary;

  /**
   * The type of the button
   */
  @property({ type: String })
  type: ButtonType = ButtonType.Submit;

  /**
   * Whether the button is disabled.
   */
  @property({ type: Boolean })
  disabled: boolean = false;

  private onClick(e: Event) {
    const event = new Event('onclick', { bubbles: true, composed: true, cancelable: true });
    this.dispatchEvent(event);
  }

  render() {
    return html`
      <button ?disabled=${this.disabled} @click=${this.onClick} class=${this.variant}>
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
