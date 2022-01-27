import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import baseStyles from './base.scss';

/**
 * A base component.
 */
@customElement('ukho-base')
export class UKHOBase extends LitElement {
  static get styles() {
    return [baseStyles];
  }

  render() {
    return html` <slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ukho-base': UKHOBase;
  }
}
