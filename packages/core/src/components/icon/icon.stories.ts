import { Meta, StoryObj } from '@storybook/web-components';
import { IconComponent } from './icon';
import { html } from 'lit';

const meta: Meta = {
  component: 'admiralty-icon',
  title: 'Icon',
  parameters: {
    actions: {},
  },
  args: {
    name: 'anchor',
    size: 'unset',
  },
};

export default meta;

type IconComponentArgs = Partial<IconComponent & { parentFontSize: string; color: string }>;

type Story = StoryObj<IconComponentArgs>;

const template: Story = {
  render: args => {
    const color = args.color ? `color:${args.color};` : '';
    const fontSize = args.parentFontSize ? `font-size:${args.parentFontSize};` : '';
    return html`<div style="${color}${fontSize}">
      <admiralty-icon name="${args.name}" size="${args.size}"></admiralty-icon>
    </div>`;
  },
};

export const Icon: Story = {
  render: args => `<admiralty-icon name="${args.name}"></admiralty-icon>`,
};

export const MenuIcon: Story = {
  ...template,
  args: {
    name: 'menu',
  },
};

export const BigIcon: Story = {
  ...template,
  args: {
    size: 48,
  },
};

export const InheritFontSize: Story = {
  ...template,
  args: {
    parentFontSize: '32px',
  },
};

export const InheritColor: Story = {
  ...template,
  args: {
    color: 'red',
  },
};

export const LoadingIcon: Story = {
  render: args => {
    const color = args.color ? `color:${args.color};` : '';
    const fontSize = args.parentFontSize ? `font-size:${args.parentFontSize};` : '';
    return html`<div style="${color}${fontSize}">
      <admiralty-icon name="${args.name}" size="${args.size}" loading="${args.loading}"></admiralty-icon>
    </div>`;
  },
  args: {
    color: 'red',
    size: 48,
    loading: true
  },
};
