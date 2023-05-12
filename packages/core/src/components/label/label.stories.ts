import readme from './readme.md';
import { Story } from '@storybook/html';

export default {
  title: 'Forms/Label',
  parameters: {
    markdown: readme,
  },
};

export const Basic: Story = args => {
  return `<admiralty-label for="${args.for}">What is your name?</admiralty-label>`;
};
Basic.args = {
  for: 'text-input-id',
};

export const Disabled: Story = args => {
  return `<admiralty-label for="${args.for}" disabled="${args.disabled}">What is your name?</admiralty-label>`;
};
Disabled.args = {
  for: 'text-input-id',
  disabled: true,
};
