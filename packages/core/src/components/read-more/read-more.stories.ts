import { Story } from '@storybook/html';
import readme from './readme.md';

export default {
  title: 'Readmore',
  parameters: {
    markdown: readme,
    actions: {
      handles: ['admiraltyToggled'],
    },
  },
  args: {
    heading: 'Readmore Heading',
  },
};

const Template: Story = args => {
  return `<admiralty-read-more
      heading="${args.heading}"
    >
    We need to know your nationality so we can work out which elections you’re entitled to vote in.
    If you cannot provide your nationality, you’ll have to send copies of identity documents through the post.
    </admiralty-read-more>`;
};

export const Basic = Template.bind({});



