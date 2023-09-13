import { Meta, StoryObj } from '@storybook/web-components';
import { InputInvalidComponent } from './input-invalid';
import { html } from 'lit';

const meta: Meta = {
  component: 'admiralty-breadcrumb',
  title: 'Forms/Input Invalid',
  parameters: {
    actions: {},
  },
};

export default meta;

type Story = StoryObj<InputInvalidComponent>;

const template: Story = {
  render: args => html`<admiralty-input-invalid>This field is required</admiralty-input-invalid>`,
};

export const Basic: Story = { ...template };
