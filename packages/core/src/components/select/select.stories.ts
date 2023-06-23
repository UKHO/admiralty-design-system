import { Story } from '@storybook/html';
import readme from './readme.md';

export default {
  title: 'Forms/Select',
  parameters: {
    markdown: readme,
    actions: {
      handles: ['admiraltyChange', 'admiraltyBlur'],
    },
  },
};

const defaultArgs = {
  disabled: false,
  error: false,
  errorHint: 'The colour must be green',
  hint: 'Select an option from the list',
  label: 'Choose a colour',
  value: 'second',
};

const Template: Story = args => {
  return `<admiralty-select value="${args.value}" disabled="${args.disabled}" error=${args.error} error-hint="${args.errorHint}" hint="${args.hint}" label="${args.label}" width="${args.width}">
    <option value="first">first</option>
    <option value="second">second</option>
    <option value="third">third</option>
    </admiralty-select>
    `;
};

export const DefaultSelect = Template.bind({});
DefaultSelect.args = { ...defaultArgs };

export const SelectWithError = Template.bind({});
SelectWithError.args = { ...defaultArgs, error: true };

export const SelectDisabled = Template.bind({});
SelectDisabled.args = { ...defaultArgs, disabled: true };

export const FixedWidth: Story = Template.bind({});
FixedWidth.args = {
  ...defaultArgs,
  width: 150,
};
