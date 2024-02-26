import { Meta, StoryObj } from '@storybook/web-components';
import { ReadMoreComponent } from './read-more';
import { html } from 'lit';

const meta: Meta = {
  component: 'admiralty-side-nav',
  title: 'Readmore',
  parameters: {
    actions: {
      handles: ['admiraltyToggled'],
    },
  },
  args: {
    heading: 'Readmore Heading',
  },
};

export default meta;

type Story = StoryObj<ReadMoreComponent>;

const template: Story = {
  render: args => html` <admiralty-read-more heading="${args.heading}">
    We need to know your nationality so we can work out which elections you’re entitled to vote in. If you cannot provide your nationality, you’ll have to send copies of identity
    documents through the post.
  </admiralty-read-more>`,
};

export const Basic: Story = { ...template };
