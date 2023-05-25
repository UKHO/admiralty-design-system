import { Meta, StoryObj } from '@storybook/web-components';
import { HintComponent } from './hint';
import { html } from 'lit';

const meta: Meta = {
  component: 'admiralty-hint',
  title: 'Forms/Hint',
  parameters: {
    actions: {
    },
  },
};

export default meta;

type Story = StoryObj<HintComponent>;

const template: Story = {
  render: args => html`<admiralty-hint ?disabled="${args.disabled}">Enter your full name</admiralty-hint>`,
};

export const Basic: Story = { ...template };

export const Disabled: Story = { ...template, args: { disabled: true } };
