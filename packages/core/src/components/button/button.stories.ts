import { Meta, StoryObj } from '@storybook/web-components';
import { ButtonVariant } from './button.types';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { ButtonComponent } from './button';
import { html } from 'lit';

const meta: Meta = {
  component: 'admiralty-button',
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
};

export default meta;

type Story = StoryObj<ButtonComponent>;

const template: Story = {
  render: args => html`<admiralty-button variant="${args.variant}" ?disabled="${args.disabled}" icon="${args.icon}">Hello Button</admiralty-button>`,
};
export const Standard: Story = { ...template, args: { variant: ButtonVariant.Primary } };

export const Secondary: Story = { ...template, args: { variant: ButtonVariant.Secondary } };

export const Warning: Story = { ...template, args: { variant: ButtonVariant.Warning } };

export const Text: Story = { ...template, args: { variant: ButtonVariant.Text } };

export const TextCustom: Story = {
  render: args => html`<admiralty-button variant="${args.variant}">
    <div style="font-size: 16px; color: black; text-decoration: underline;">Small type</div>
  </admiralty-button>`,
  args: { variant: ButtonVariant.Text },
};

export const Disabled: Story = { ...template, args: { disabled: true } };

export const Icon: Story = {
  render: args => html`<admiralty-button variant="${args.variant}" icon="${args.icon}"></admiralty-button>`,
  args: { variant: ButtonVariant.Icon, icon: faUserAstronaut.iconName },
};
