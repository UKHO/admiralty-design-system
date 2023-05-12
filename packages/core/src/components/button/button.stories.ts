import { Story } from '@storybook/html';
import { ButtonVariant } from './button.types';
import readme from './readme.md';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Button',
  parameters: {
    markdown: readme,
    actions: {
      handles: ['click'],
    },
  },
  args: {
    variant: ButtonVariant.Primary,
  },
};

const Template: Story = args => {
  return `<admiralty-button variant="${args.variant}">Hello Button</admiralty-button>`;
};

export const Standard = Template.bind({});
Standard.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: ButtonVariant.Secondary,
};

export const Warning = Template.bind({});
Warning.args = {
  variant: ButtonVariant.Warning,
};

export const Text = Template.bind({});
Text.args = {
  variant: ButtonVariant.Text,
};

export const TextCustom: Story = args =>
  `<admiralty-button variant="${args.variant}">
    <div style="font-size: 16px; color: black; text-decoration: underline;">Small type</div>
  </admiralty-button>`;
TextCustom.args = {
  variant: ButtonVariant.Text,
};

export const Disabled: Story = args => {
  return `<admiralty-button variant="${args.variant}" disabled="${args.disabled}">Hello Button</admiralty-button>`;
};
Disabled.args = {
  disabled: true,
};

export const Icon: Story = args => {
  return `<admiralty-button variant="${args.variant}" icon="${args.icon}"></admiralty-button>`;
};
Icon.args = {
  variant: ButtonVariant.Icon,
  icon: faUserAstronaut.iconName,
};

export const IconCustomColour: Story = args => {
  return `<div style="--button-icon-background-colour: white">
  <p>The background colour of the icon variant can be changed using the '--button-icon-background-colour' CSS variable.</p>
  <admiralty-button variant="${args.variant}" icon="${args.icon}"></admiralty-button>
  </div>`;
};
IconCustomColour.args = {
  variant: ButtonVariant.Icon,
  icon: faUserAstronaut.iconName,
};
