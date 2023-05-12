import readme from './readme.md';
import { Story } from '@storybook/html';
import { InputComponent } from './input';

export default {
  title: 'Forms/Input',
  parameters: {
    markdown: readme,
  },
};

const Template: Story = args => {
  return `
  <admiralty-input label="${args.label}" hint="${args.hint}" type="${args.type}"></admiralty-input>`;
};

export const Basic = Template.bind({});
Basic.args = {
  label: 'What is your name?',
  hint: 'Enter your full name',
  type: 'text',
};

export const FixedWidth: Story = args => {
  return `<admiralty-input label="${args.label}" type="${args.type}" width="${args.width}"></admiralty-input>`;
};
FixedWidth.args = {
  label: 'How old are you?',
  type: 'number',
  width: 60,
};

export const WithPlaceholder: Story = args => {
  return `<admiralty-input label="${args.label}" placeholder="${args.placeholder}"></admiralty-input>`;
};
WithPlaceholder.args = {
  label: 'With Placeholder',
  placeholder: 'Fill Me In',
};

export const Number: Story = args => {
  return `<admiralty-input label="${args.label}" type="${args.type}"></admiralty-input>`;
};
Number.args = {
  label: 'Number',
  type: 'number',
};

export const Date: Story = args => {
  return `<admiralty-input label="${args.label}" type="${args.type}"></admiralty-input>`;
};
Date.args = {
  label: 'Date',
  type: 'date',
};

export const Time: Story = args => {
  return `<admiralty-input label="${args.label}" type="${args.type}"></admiralty-input>`;
};
Time.args = {
  label: 'Time',
  type: 'time',
};

export const Autocomplete: Story = args => {
  return `<admiralty-input label="${args.label}" name="${args.name}" autocomplete="${args.autocomplete}"></admiralty-input>`;
};
Autocomplete.args = {
  label: 'Full Name',
  name: 'name',
  autocomplete: 'name',
};

export const AutocompleteOff: Story = args => {
  return `<admiralty-input label="${args.label}" name="${args.name}" autocomplete="${args.autocomplete}"></admiralty-input>`;
};
AutocompleteOff.args = {
  label: 'What is your name?',
  name: 'name',
  autocomplete: 'off',
};

export const Disabled: Story = args => {
  return `<admiralty-input label="${args.label}" hint="${args.hint}" disabled="${args.disabled}"></admiralty-input>`;
};
Disabled.args = {
  label: 'What is your name?',
  hint: 'Enter your full name',
  disabled: true,
};

export const Invalid: Story<InputComponent> = args => {
  return `<admiralty-input label="${args.label}" hint="${args.hint}" invalid="${args.invalid}" invalid-message="${args.invalidMessage}"></admiralty-input>`;
};
Invalid.args = {
  label: 'What is your name?',
  hint: 'Enter your full name',
  invalid: true,
  invalidMessage: 'That is not a real name',
};
