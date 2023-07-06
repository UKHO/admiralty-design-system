import { Meta, StoryObj } from '@storybook/web-components';
import { InputError } from './input-error';
import { html } from 'lit';

const meta: Meta = {
  component: 'admiralty-breadcrumb',
  title: 'Forms/Input Error',
  parameters: {
    actions: {
    },
  },
};

export default meta;

type Story = StoryObj<InputErrorComponent>;

const template: Story = {
  render: args => html`<admiralty-input-error>This field is required</admiralty-input-error>`,
};

export const Basic: Story = { ...template };
