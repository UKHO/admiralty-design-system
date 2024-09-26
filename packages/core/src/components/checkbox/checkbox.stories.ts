import { Meta, StoryObj } from '@storybook/web-components';
import { CheckboxComponent } from './checkbox';
import { html } from 'lit';

const meta: Meta = {
  component: 'admiralty-checkbox',
  title: 'Forms/Checkbox',
  parameters: {
    actions: {
    },
  },
};

export default meta;

type Story = StoryObj<CheckboxComponent>;

const defaultArgs = {
  inputId: 'checkbox1',
  labelText: 'Checkbox 1',
  checked: false,
  disabled: false,
  labelHidden: false,
};

const template: Story = {
  render: args => html`<admiralty-checkbox checked=${args.checked} disabled=${args.disabled} input-id=${args.inputId} label-text=${args.labelText} label-hidden=${args.labelHidden}></admiralty-checkbox>`,
};

export const DefaultCheckbox: Story = { ...template, args: {
  ...defaultArgs,
  labelText: 'my label'
} };

export const checkedCheckbox: Story = { ...template, args: { ...defaultArgs, checked: true } };

export const disabledCheckbox: Story = { ...template, args: { ...defaultArgs, disabled: true } };

export const labelHidden: Story = { ...template, args: { ...defaultArgs, labelHidden: true } };
