import { Meta, StoryObj } from '@storybook/web-components';
import { ThemeToggleComponent } from './theme-toggle';
import { html } from 'lit';

const meta: Meta = {
  component: 'admiralty-theme-toggle',
  title: 'Theme Toggle',
  parameters: {
    actions: {
      handles: ['admiraltyThemeChange'],
    },
  },
};

export default meta;

type Story = StoryObj<ThemeToggleComponent>;

const defaultArgs = {
  theme: 'auto' as const,
  disabled: false,
  ariaLabel: 'Toggle dark mode',
};

const template: Story = {
  render: args =>
    html`<admiralty-theme-toggle
      theme=${args.theme}
      ?disabled=${args.disabled}
      aria-label=${args.ariaLabel}
    ></admiralty-theme-toggle>`,
};

export const Auto: Story = {
  ...template,
  args: {
    ...defaultArgs,
    theme: 'auto',
  },
};

export const Light: Story = {
  ...template,
  args: {
    ...defaultArgs,
    theme: 'light',
  },
};

export const Dark: Story = {
  ...template,
  args: {
    ...defaultArgs,
    theme: 'dark' as const,
  },
};

export const Disabled: Story = {
  ...template,
  args: {
    ...defaultArgs,
    disabled: true,
  },
};

export const DisabledDark: Story = {
  ...template,
  args: {
    ...defaultArgs,
    theme: 'dark' as const,
    disabled: true,
  },
};
