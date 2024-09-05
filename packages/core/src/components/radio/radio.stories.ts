import { Meta, StoryObj } from '@storybook/web-components';
import { RadioComponent } from './radio';
import { html } from 'lit';

const meta: Meta = {
  component: 'admiralty-radio',
  title: 'Forms/Radio',
  parameters: {
    actions: {
      handles: ['admiraltyFocus', 'admiraltyBlur'],
    },
  },
};

export default meta;

type RadioComponentArgs = Partial<RadioComponent & { labelText: string }>;

type Story = StoryObj<RadioComponentArgs>;

const template: Story = {
  render: args =>
    html`<admiralty-radio name="${args.name}" value="${args.value}" ?checked="${args.checked}" ?disabled="${args.disabled}" ?invalid="${args.invalid}"
      >${args.labelText}</admiralty-radio
    >`,
};

export const Basic: Story = {
  ...template,
  args: {
    labelText: 'test label',
    name: 'exampleName',
    value: 'exampleValue',
    invalid: false,
  },
};

export const Disabled: Story = {
  ...template,
  args: {
    disabled: true,
    labelText: 'test label',
    name: 'exampleName',
    value: 'exampleValue',
    invalid: false,
  },
};

export const Checked: Story = {
  ...template,
  args: {
    checked: true,
    labelText: 'test label',
    name: 'exampleName',
    value: 'exampleValue',
    invalid: false,
  },
};
