import { Story } from '@storybook/web-components';
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

import './button';
import '../icon/icon';
import { ButtonType, Variant } from './button';

// TODO - Generate using docs addon / custom elements manifest
export default {
  title: 'Button',
  component: 'ukho-button',
  argTypes: {
    variant: {
      options: Object.values(Variant),
      control: { type: 'select', labels: Object.keys(Variant) },
    },
    label: {
      control: { type: 'text' },
    },
    type: {
      options: Object.values(ButtonType),
      control: { type: 'select', labels: Object.keys(ButtonType) },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    content: {
      control: { type: 'text' },
    },
    click: { action: 'Button clicked' },
  },
};

const Template: Story = ({
  variant,
  type,
  disabled,
  label,
  content,
  click,
}: {
  variant?: Variant;
  type?: ButtonType;
  disabled?: boolean;
  label?: string;
  content?: string;
  click?: any;
}) =>
  html`<ukho-button @onclick=${click} ?disabled=${disabled} type=${type} variant=${variant}>${label}${unsafeHTML(
    content,
  )}</ukho-button>`;

export const Basic = Template.bind({});
Basic.args = {
  label: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: Variant.Secondary,
  label: 'Secondary',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Disabled',
};

export const IconRight = Template.bind({});
IconRight.args = {
  label: 'Download',
  content: '<ukho-icon slot="end" name="cloud-download-alt" type="solid"></ukho-icon>',
};

export const IconLeft = Template.bind({});
IconLeft.args = {
  label: 'Download',
  content: '<ukho-icon slot="start" name="cloud-download-alt" type="solid"></ukho-icon>',
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  content: '<ukho-icon name="cloud-download-alt" type="solid"></ukho-icon>',
};

export const SecondaryIcon = Template.bind({});
SecondaryIcon.args = {
  variant: Variant.Secondary,
  label: 'Next',
  content: '<ukho-icon slot="end" name="chevron-right" type="solid"></ukho-icon>',
};
