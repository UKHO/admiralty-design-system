import { Story } from '@storybook/html';
import readme from './readme.md';

export default {
  title: 'Tab Group',
  parameters: {
    markdown: readme,
    actions: {
      handles: ['admiralTabSelected'],
    },
  },
};

const defaultArgs = {
  // disabled: false,
  // error: false,
  // errorHint: 'The colour must be green',
  // hint: 'Select an option from the list',
  // label: 'Choose a colour',
};

const Template: Story = args => {
  return `<admiralty-tab-group>
  <admiralty-tab-group-item label="'a'">test a</admiralty-tab-group-item>
  <admiralty-tab-group-item label="'b'"><em>test b</em></admiralty-tab-group-item>
</admiralty-tab-group>`;
};

export const DefaultSelect = Template.bind({});
DefaultSelect.args = { ...defaultArgs };
