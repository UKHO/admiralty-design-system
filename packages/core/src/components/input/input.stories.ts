import { Meta, StoryObj } from '@storybook/web-components';
import { InputComponent } from './input';
import { html } from 'lit';

const meta: Meta = {
  component: 'admiralty-input',
  title: 'Forms/Input',
  parameters: {
    actions: {
    },
  },
};

export default meta;

type Story = StoryObj<InputComponent>;

export const Basic: Story = {
  render: args => html`
    <admiralty-input label="${args.label}" hint="${args.hint}" type="${args.type}">
    </admiralty-input>`,
  args: {
    label: 'What is your name?',
    hint: 'Enter your full name',
    type: 'text'
  }
};

export const FixedWidth: Story = {
  render: args => html`
    <admiralty-input label="${args.label}" type="${args.type}" width="${args.width}">
    </admiralty-input>`,
  args: {
    label: 'How old are you?',
    type: 'number',
    width: 60
  }
};

export const WithPlaceholder: Story = {
  render: args => html`
    <admiralty-input label="${args.label}" placeholder="${args.placeholder}">
    </admiralty-input>`,
  args: {
    label: 'With Placeholder',
    placeholder: 'Fill Me In'
  }
};

export const Number: Story = {
  render: args => html`
    <admiralty-input label="${args.label}" type="${args.type}">
    </admiralty-input>`,
  args: {
    label: 'Number',
    type: 'number'
  }
};

export const Date: Story = {
  render: args => html`
    <admiralty-input label="${args.label}" type="${args.type}">
    </admiralty-input>`,
  args: {
    label: 'Date',
    type: 'date'
  }
};

export const Time: Story = {
  render: args => html`
    <admiralty-input label="${args.label}" type="${args.type}">
    </admiralty-input>`,
  args: {
    label: 'Time',
    type: 'time'
  }
};

export const Autocomplete: Story = {
  render: args => html`
    <admiralty-input label="${args.label}" name="${args.name}" autocomplete="${args.autocomplete}">
    </admiralty-input>`,
  args: {
    label: 'Full Name',
    name: 'name',
    autocomplete: 'name'
  }
};

export const AutocompleteOff: Story = {
  render: args => html`
    <admiralty-input label="${args.label}" name="${args.name}" autocomplete="${args.autocomplete}">
    </admiralty-input>`,
  args: {
    label: 'What is your name?',
    name: 'name',
    autocomplete: 'off'
  }
};

export const Disabled: Story = {
  render: args => html`
    <admiralty-input label="${args.label}" hint="${args.hint}" disabled="${args.disabled}">
    </admiralty-input>`,
  args: {
    label: 'What is your name?',
    hint: 'Enter your full name',
    disabled: true
  }
};

export const Invalid: Story = {
  render: args => html`
    <admiralty-input label="${args.label}" hint="${args.hint}" invalid="${args.invalid}" invalid-message="${args.invalidMessage}">
    </admiralty-input>`,
  args: {
    label: 'What is your name?',
    hint: 'Enter your full name',
    invalid: true,
    invalidMessage: 'That is not a real name',
  }
};
