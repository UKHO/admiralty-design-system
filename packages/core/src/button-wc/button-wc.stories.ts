import { html } from 'lit';

import './button-wc';

export default {
  title: 'Button WC',
};

export const Basic = () => html`<ukho-button-wc label="Primary"></ukho-button-wc>`;

export const Secondary = () => html`<ukho-button-wc variant="secondary" label="Secondary"></ukho-button-wc>`;

export const Icon = () => html`<ukho-button-wc label="Download" icon="fas fa-cloud-download-alt"></ukho-button-wc>`;

export const Disabled = () => html`<ukho-button-wc disabled label="Disabled"></ukho-button-wc>`;
