import { LitElement, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import buttonStyles from './button-wc.scss';

/**
 * A button component not using slots.
 *
 * @fires count-changed - Indicates when the count changes
 * @csspart button - The button
 */
@customElement('ukho-button-wc')
export class UkhoButtonWc extends LitElement {
  static get styles() {
    return [buttonStyles];
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
   * The button text
   */
  @property({ type: String })
  label: string = 'Button';

  /**
   * Icon class
   */
  @property({ type: String })
  icon: string | undefined;

  /**
   * Whether the button is disabled.
   */
  @property({ type: Boolean })
  disabled: boolean = false;

  render() {
    return html`
      <button ?disabled=${this.disabled} class="${this.variant}">
        ${this.label}${this.icon ? html`<i class="${this.icon}"></i>` : nothing}
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ukho-button-wc': UkhoButtonWc;
  }
}
