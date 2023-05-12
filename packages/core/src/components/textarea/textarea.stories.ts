import { Story } from '@storybook/html';
import readme from './readme.md';
import { TextareaComponent } from './textarea';

export default {
  title: 'Forms/Text Area',
  parameters: {
    markdown: readme,
  },
};

const template: Story = args => {
  return `
  <admiralty-textarea label="${args.label}" width="${args.width}" hint="${args.hint}"></admiralty-textarea>`;
};

export const Basic: Story = template.bind({});
Basic.args = {
  label: 'Description',
  hint: 'Enter a description',
};

export const FixedWidth: Story = args => {
  return `
  <admiralty-textarea label="${args.label}" width="${args.width}"></admiralty-textarea>`;
};
FixedWidth.args = {
  label: 'Description',
  width: 400,
};

export const Disabled: Story = args => {
  return `
  <admiralty-textarea label="${args.label}" disabled="${args.disabled}"></admiralty-textarea>`;
};
Disabled.args = {
  label: 'Description',
  disabled: true,
};

export const Invalid: Story<TextareaComponent> = args => {
  return `<admiralty-textarea label="${args.label}" invalid="${args.invalid}" invalid-message="${args.invalidMessage}"></admiralty-input>`;
};
Invalid.args = {
  label: 'What is your name?',
  invalid: true,
  invalidMessage: 'That is not a real name',
};

export const WithText: Story = args => {
  return `
  <admiralty-textarea label="${args.label}" width="${args.width}" text="${args.text}"></admiralty-textarea>`;
};
WithText.args = {
  label: 'With text',
  text: 'Sample Text',
};
