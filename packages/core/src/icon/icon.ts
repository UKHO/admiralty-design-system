import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './icon.scss';

/**
 * An icon component that displays icons from the Font Awesome library.
 */
@customElement('ukho-icon')
export class UkhoIcon extends LitElement {
  static get styles() {
    return [styles];
  }

  /**
   * The name of the Font Awesome icon to display.
   */
  @property({ type: String })
  name: string | undefined;

  /**
   * The style category of the icon.
   */
  @property({ type: String })
  type: 'brands' | 'regular' | 'solid' = 'regular';

  /**
   * The size of the icon
   */
  @property({ type: String })
  size: 'small' | 'medium' | 'large' = 'medium';

  getIconName() {
    return this.name ? `fa-${this.name}` : '';
  }

  getIconStyle() {
    switch (this.type) {
      case 'brands':
        return 'fab';
      case 'regular':
        return 'far';
      case 'solid':
        return 'fas';
      default:
        return '';
    }
  }

  render() {
    return html`<i class="${this.getIconStyle()} ${this.getIconName()} ${this.size}"></i>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ukho-icon': UkhoIcon;
  }
}
