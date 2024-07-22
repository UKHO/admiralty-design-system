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
      <admiralty-autocomplete-option value="red">Red</admiralty-autocomplete-option>
      <admiralty-autocomplete-option value="green">Green</admiralty-autocomplete-option>
      <admiralty-autocomplete-option value="blue">Blue</admiralty-autocomplete-option>
      <admiralty-autocomplete-option value="yellow">Yellow</admiralty-autocomplete-option>
      <admiralty-autocomplete-option value="purple">Purple</admiralty-autocomplete-option>
      <admiralty-autocomplete-option value="orange">Orange</admiralty-autocomplete-option>
      <admiralty-autocomplete-option value="black">Black</admiralty-autocomplete-option>
      <admiralty-autocomplete-option value="white">White</admiralty-autocomplete-option>
      <admiralty-autocomplete-option value="pink">Pink</admiralty-autocomplete-option>
      <admiralty-autocomplete-option value="brown">Brown</admiralty-autocomplete-option>
      <admiralty-autocomplete-option value="grey">Grey</admiralty-autocomplete-option>
      <admiralty-autocomplete-option value="cyan">Cyan</admiralty-autocomplete-option>
    </admiralty-autocomplete>`,
};

export const Basic: Story = { ...template, args: { label: 'Favourite Colour', hint: 'Please enter your favourite colour' } };

export const Invalid: Story = { ...template, args: { label: 'Favourite Colour', hint: 'Please enter your favourite colour', invalid: true, invalidMessage: 'Invalid selection' } };

export const Disabled: Story = { ...template, args: { label: 'Favourite Colour', hint: 'Please enter your favourite colour', disabled: true } };

export const Value: Story = { ...template, args: { label: 'Favourite Colour', hint: 'Please enter your favourite colour', value: 'orange' } };
