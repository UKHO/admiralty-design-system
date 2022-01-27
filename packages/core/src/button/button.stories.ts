import { html } from 'lit';

import './button';
import '../icon/icon';

export default {
  title: 'Button',
  component: 'ukho-button',
};

export const Basic = () => html`<ukho-button>Primary</ukho-button>`;

export const Secondary = () => html`<ukho-button variant="secondary">Secondary</ukho-button>`;

export const Disabled = () => html`<ukho-button disabled>Disabled</ukho-button>`;

export const IconRight = () =>
  html`<ukho-button>Download<ukho-icon slot="end" name="cloud-download-alt" type="solid"></ukho-icon></ukho-button>`;

export const IconLeft = () =>
  html`<ukho-button><ukho-icon slot="start" name="cloud-download-alt" type="solid"></ukho-icon>Download</ukho-button>`;

export const IconOnly = () =>
  html`<ukho-button><ukho-icon name="cloud-download-alt" type="solid"></ukho-icon></ukho-button>`;

export const SecondaryIcon = () =>
  html`<ukho-button variant="secondary">Next<ukho-icon slot="end" name="chevron-right" type="solid"></ukho-icon></ukho-button>`;
