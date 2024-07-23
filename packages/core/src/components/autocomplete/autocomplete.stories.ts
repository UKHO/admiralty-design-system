import { Meta, StoryObj } from '@storybook/web-components';
import { AutocompleteComponent } from './autocomplete';
import { html } from 'lit';

const meta: Meta = {
  component: 'admiralty-complete',
  title: 'Forms/Autocomplete',
  parameters: {
    actions: {},
  },
};

export default meta;

type Story = StoryObj<AutocompleteComponent>;

const template: Story = {
  render: args =>
    html`<admiralty-autocomplete
      label="${args.label}"
      hint="${args.hint}"
      ?invalid="${args.invalid}"
      invalid-message="${args.invalidMessage}"
      ?disabled="${args.disabled}"
      value="${args.value}"
    >
      <admiralty-autocomplete-option value="red" />
      <admiralty-autocomplete-option value="green" />
      <admiralty-autocomplete-option value="blue" />
      <admiralty-autocomplete-option value="yellow" />
      <admiralty-autocomplete-option value="purple" />
      <admiralty-autocomplete-option value="orange" />
      <admiralty-autocomplete-option value="black" />
      <admiralty-autocomplete-option value="white" />
      <admiralty-autocomplete-option value="pink" />
      <admiralty-autocomplete-option value="brown" />
      <admiralty-autocomplete-option value="grey" />
      <admiralty-autocomplete-option value="cyan" />
    </admiralty-autocomplete>`,
};

export const Basic: Story = { ...template, args: { label: 'Favourite Colour', hint: 'Please enter your favourite colour' } };

export const Invalid: Story = { ...template, args: { label: 'Favourite Colour', hint: 'Please enter your favourite colour', invalid: true, invalidMessage: 'Invalid selection' } };

export const Disabled: Story = { ...template, args: { label: 'Favourite Colour', hint: 'Please enter your favourite colour', disabled: true } };

export const Value: Story = { ...template, args: { label: 'Favourite Colour', hint: 'Please enter your favourite colour', value: 'orange' } };

export const Countries: Story = {
  render: args =>
    html` <admiralty-autocomplete
      label="${args.label}"
      hint="${args.hint}"
      ?invalid="${args.invalid}"
      invalid-message="${args.invalidMessage}"
      ?disabled="${args.disabled}"
      value="${args.value}"
    >
      <admiralty-autocomplete-option value="France" />
      <admiralty-autocomplete-option value="Germany" />
      <admiralty-autocomplete-option value="United Kingdom of Great Britain & Northern Ireland" />
    </admiralty-autocomplete>`,
  args: { label: 'Country', hint: 'Select a country' },
};
