import { Story } from '@storybook/html';
import readme from './readme.md';

export default {
  title: 'Phase Banner',
  parameters: {
    markdown: readme,
  },
  args: {
    phase: 'alpha',
    link: 'https://example.org',
  },
};

const Template: Story = args => {
  return `<admiralty-phase-banner phase="${args.phase}" link="${args.link}">
  </admiralty-phase-banner>`;
};

export const Alpha: Story = Template.bind({});
Alpha.args = {
  phase: 'alpha',
};

export const Beta: Story = Template.bind({});
Beta.args = {
  phase: 'beta',
};
