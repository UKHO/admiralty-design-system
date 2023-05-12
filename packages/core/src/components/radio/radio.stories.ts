import readme from './readme.md';
import { Story } from '@storybook/html';

export default {
  title: 'Forms/Radio',
  parameters: {
    markdown: readme,
    actions: {
      handles: ['admiraltyFocus', 'admiraltyBlur'],
    },
  },
};

export const Basic: Story = args => {
  return `<admiralty-radio name="${args.name}" value="${args.value}">${args.labelText}</admiralty-radio>`;
};
Basic.args = {
  labelText: 'test label',
  name: 'exampleName',
  value: 'exampleValue',
};

export const Disabled: Story = args => {
  return `<admiralty-radio disabled="${args.disabled}" name="${args.name}" value="${args.value}">${args.labelText}</admiralty-radio>`;
};
Disabled.args = {
  disabled: true,
  labelText: 'test label',
  name: 'exampleName',
  value: 'exampleValue',
};

export const Checked: Story = args => {
  return `<admiralty-radio checked="${args.checked}" name="${args.name}" value="${args.value}">${args.labelText}</admiralty-radio>`;
};
Checked.args = {
  checked: true,
  labelText: 'test label',
  name: 'exampleName',
  value: 'exampleValue',
};
