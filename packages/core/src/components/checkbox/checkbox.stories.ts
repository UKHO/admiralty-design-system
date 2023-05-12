import { Story } from '@storybook/html';
import readme from './readme.md';

export default {
  title: 'Forms/Checkbox',
  parameters: {
    markdown: readme,
  },
};

const defaultArgs = {
  inputId: 'checkbox1',
  labelText: 'Checkbox 1',
  checked: false,
  disabled: false,
};

const Template: Story = args => {
  return `<admiralty-checkbox checked=${args.checked} disabled=${args.disabled} input-id=${args.inputId} label-text=${args.labelText}></admiralty-checkbox>`;
};

export const DefaultCheckbox = Template.bind({});
DefaultCheckbox.args = { ...defaultArgs };

export const checkedCheckbox = Template.bind({});
checkedCheckbox.args = { ...defaultArgs, checked: true };

export const disabledCheckbox = Template.bind({});
disabledCheckbox.args = { ...defaultArgs, disabled: true };
