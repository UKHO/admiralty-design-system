import { Story } from '@storybook/html';
import readme from './readme.md';
import { multiple } from '../../../../../angular/components/expansion/expansion.stories';

export default {
  title: 'Forms/File Input',
  parameters: {
    markdown: readme,
    actions: {
      handlers: ['fileInputChange'],
    },
  },
};

const Template: Story = args => {
  return `
    <admiralty-file-input multiple=${args.multiple}></admiralty-file-input>`;
};

export const Basic = Template.bind({});
Basic.args = {
  multiple: true,
};
