import { Story } from '@storybook/html';
import readme from './readme.md';

export default {
  title: 'Progress Bar',
  parameters: {
    markdown: readme,
  },
};

const Template: Story = args => {
  return `<admiralty-progress-bar error=${args.error} progression=${args.progression} label="${args.label ?? ''}"></admiralty-progress-bar>`;
};

const defaultArgs = {
  error: false,
  progression: 60,
};

export const DefaultProgressBar = Template.bind({});
DefaultProgressBar.args = { ...defaultArgs };

export const ProgressBarWithError = Template.bind({});
ProgressBarWithError.args = { ...defaultArgs, error: true };

export const NoProgress = Template.bind({});
NoProgress.args = { progression: 0 };

export const MaximumProgress = Template.bind({});
MaximumProgress.args = { ...defaultArgs, error: false, progression: 100 };

export const Labelled = Template.bind({});
Labelled.args = { ...defaultArgs, label: 'Progress so far' };
