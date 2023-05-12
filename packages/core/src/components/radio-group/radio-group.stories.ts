import readme from './readme.md';
import { Story } from '@storybook/html';

export default {
  title: 'Forms/Radio Group',
  parameters: {
    markdown: readme,
    actions: {
      handles: ['radioChange'],
    },
  },
};

export const Basic: Story = args => {
  return `
    <admiralty-radio-group display-vertical=${args.stack}>
      <admiralty-radio name="grp" value="option1">Option 1</admiralty-radio>
      <admiralty-radio name="grp" value="option2">Option 2</admiralty-radio>
    </admiralty-radio-group>`;
};
Basic.args = {
  stack: true,
};

export const yesNo: Story = args => {
  return `
      <h3 id="group-label-boolean">
        Do you agree?
      </h3>
      <admiralty-radio-group display-vertical="true" value=${args.value}>

      <admiralty-radio name="grp" value="true">Yes</admiralty-radio>
      <admiralty-radio name="grp" value="false">No</admiralty-radio>
  </admiralty-radio-group>`;
};
yesNo.args = {
  value: false,
};
