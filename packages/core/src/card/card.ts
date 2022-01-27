import { UKHOBase } from '../base/base';
import { html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import cardStyles from './card.scss';

/**
 * A card component.
 *
 * @slot - This element has a slot
 */
@customElement('ukho-card')
export class UKHOCard extends UKHOBase {
  static get styles() {
    return [UKHOBase.styles, cardStyles];
  }

  /**
   * The title of the card
   */
  @property({ type: String })
  heading: string | undefined;

  render() {
    return html`
      <section class="card">
        ${this.heading ? html`<h6>${this.heading}</h6>` : nothing}
        <div>
          <slot></slot>
        </div>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ukho-card': UKHOCard;
  }
}
