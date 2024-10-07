import { Meta, StoryObj } from '@storybook/web-components';
import { SelectComponent } from './select';
import { html } from 'lit';

const meta: Meta = {
  component: 'admiralty-select',
  title: 'Forms/Select',
  parameters: {
    actions: {
      handles: ['admiraltyChange', 'admiraltyBlur'],
    },
  },
  args: {
    disabled: false,
    invalid: false,
    invalidMessage: 'The colour must be green',
    hint: 'Select an option from the list',
    label: 'Choose a colour',
    value: 'second',
  },
};

export default meta;

type Story = StoryObj<SelectComponent>;

const template: Story = {
  render: args => html` <admiralty-select
    value="${args.value}"
    ?disabled="${args.disabled}"
    ?invalid=${args.invalid}
    invalid-message="${args.invalidMessage}"
    hint="${args.hint}"
    label="${args.label}"
    width="${args.width}"
  >
    <option value="first">first</option>
    <option value="second">second</option>
    <option value="third">third</option>
  </admiralty-select>`,
};

export const DefaultSelect: Story = { ...template };

export const PlaceholderOption: Story = {
  render: args => html`<admiralty-select
    value="none"
    ?disabled="${args.disabled}"
    ?invalid=${args.invalid}
    invalid-message="${args.invalidMessage}"
    hint="${args.hint}"
    label="${args.label}"
    width="${args.width}">
    <option value="none" disabled>Select an option...</option>
    <option value="first">first</option>
    <option value="second">second</option>
    <option value="third">third</option>
  </admiralty-select>`,
};

export const SelectWithError: Story = {
  ...template,
  args: {
    invalid: true,
  },
};

export const SelectDisabled: Story = {
  ...template,
  args: {
    disabled: true,
  },
};

export const FixedWidth: Story = {
  ...template,
  args: {
    width: 150,
  },
};
