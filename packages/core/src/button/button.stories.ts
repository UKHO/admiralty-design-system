import { html } from 'lit';

import './button';
import '../icon/icon';

export default {
  title: 'Button',
};

export const Basic = () => html`<ukho-button>Primary</ukho-button>`;

export const Secondary = () => html`<ukho-button variant="secondary">Secondary</ukho-button>`;

export const Icon = () => html`<ukho-button>Download<i class="fas fa-cloud-download-alt"></i></ukho-button>`;

export const Disabled = () => html`<ukho-button disabled>Disabled</ukho-button>`;

export const UKHOIconRight = () =>
  html`<ukho-button>Download<ukho-icon slot="end" name="cloud-download-alt" type="solid"></ukho-icon></ukho-button>`;

export const UKHOIconLeft = () =>
  html`<ukho-button><ukho-icon slot="start" name="cloud-download-alt" type="solid"></ukho-icon>Download</ukho-button>`;

export const UKHOIconOnly = () =>
  html`<ukho-button><ukho-icon name="cloud-download-alt" type="solid"></ukho-icon></ukho-button>`;
