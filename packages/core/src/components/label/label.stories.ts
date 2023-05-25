import { Meta, StoryObj } from '@storybook/web-components';
import { LabelComponent } from './label';
import { html } from 'lit';

const meta: Meta = {
  component: 'admiralty-label',
  title: 'Forms/Label',
  parameters: {
    actions: {
    },
  },
  args: {
    for: 'text-input-id'
  }
};

export default meta;

type Story = StoryObj<LabelComponent>;

const template: Story = {
  render: args => html`<admiralty-label for="${args.for}" ?disabled="${args.disabled}">What is your name?</admiralty-label>`,
};

export const Basic: Story = { ...template };

export const Disabled: Story = { ...template, args: { disabled: true } };
