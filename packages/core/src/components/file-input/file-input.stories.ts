import { Meta, StoryObj } from '@storybook/web-components';
import { FileInputComponent } from './file-input';
import { html } from 'lit';

const meta: Meta = {
  component: 'admiralty-file-input',
  title: 'Forms/File Input',
  parameters: {
    actions: {
      handlers: ['fileInputChange'],
    },
  },
};

export default meta;

type Story = StoryObj<FileInputComponent>;

export const Basic: Story = {
  render: args => html` <admiralty-file-input ?multiple=${args.multiple}> </admiralty-file-input>`,
  args: {
    multiple: true,
  },
};

export const Invalid: Story = {
  render: args => html` <admiralty-file-input invalid="${args.invalid}" invalid-message="${args.invalidMessage}"> </admiralty-file-input>`,
  args: {
    invalid: true,
    invalidMessage: 'That is not a real name',
  },
};
