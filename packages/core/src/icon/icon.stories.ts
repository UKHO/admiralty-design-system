import { html } from 'lit';

import './icon';

export default {
  title: 'Icon',
};

export const Regular = () => html`<ukho-icon name="star" type="regular"></ukho-icon>`;

export const Solid = () => html`<ukho-icon name="star" type="solid"></ukho-icon>`;

export const Chevron = () => html`<ukho-icon name="chevron-right" type="solid"></ukho-icon>`;
