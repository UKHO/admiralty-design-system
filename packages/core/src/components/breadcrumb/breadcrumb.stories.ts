import { Story } from '@storybook/html';
import readme from './readme.md';

export default {
  title: 'Breadcrumb',
  parameters: {
    markdown: readme,
  },
  args: {
    href: 'https://www.example.com',
    first: false,
    active: false,
  },
};

const Template: Story = args => {
  return `<admiralty-breadcrumb href="${args.href}" active="${args.active}" first="${args.first}">Test</admiralty-breadcrumb>`;
};

export const Basic = Template.bind({});

export const Active = Template.bind({});
Active.args = {
  active: true,
};

export const First = Template.bind({});
First.args = {
  first: true,
};
