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

const template: Story = {
  render: args => html`
    <admiralty-file-input ?multiple=${args.multiple}></admiralty-file-input>`,
};

export const Basic: Story = { ...template, args: { multiple: true } };
