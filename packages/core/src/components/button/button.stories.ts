import { Meta, StoryObj } from '@storybook/web-components';
import { ButtonComponent } from './button';
import { html } from 'lit';

const meta: Meta = {
  component: 'admiralty-button',
  title: 'Button',
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
export const Standard: Story = { ...template, args: { variant: 'primary' } };

export const Secondary: Story = { ...template, args: { variant: 'secondary' } };

export const Warning: Story = { ...template, args: { variant: 'warning' } };

export const Text: Story = { ...template, args: { variant: 'text' } };

export const TextCustom: Story = {
  render: args =>
    html`<admiralty-button variant="${args.variant}">
      <div style="font-size: 16px; color: black; font-weight: 300;">Small type</div>
    </admiralty-button>`,
  args: { variant: 'text' },
};

export const Disabled: Story = { ...template, args: { variant: 'primary', disabled: true } };

export const Icon: Story = {
  render: args => html`<admiralty-button variant="${args.variant}" icon="${args.icon}"></admiralty-button>`,
  args: { variant: 'icon', icon: 'refresh' },
};

export const IconBorderless: Story = {
  render: args => html`<admiralty-button variant="${args.variant}" icon="${args.icon}" borderless="${args.borderless}"></admiralty-button>`,
  args: { variant: 'icon-secondary', icon: 'refresh', borderless: true },
};

export const IconSecondary: Story = {
  render: args => html`<admiralty-button variant="${args.variant}" icon="${args.icon}"></admiralty-button>`,
  args: { variant: 'icon-secondary', icon: 'refresh' },
};

export const IconDisabled: Story = {
  render: args => html`<admiralty-button variant="${args.variant}" icon="${args.icon}" ?disabled="${args.disabled}"></admiralty-button>`,
  args: {
    variant: 'icon',
    icon: 'refresh',
    disabled: true,
  },
};

export const TextWithIcon: Story = {
  render: args => html`<admiralty-button variant="${args.variant}" icon="${args.icon}">Start</admiralty-button>`,
  args: { variant: 'icon', icon: 'arrow-forward-ios-rounded' },
};
