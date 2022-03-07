import { ProgressBarComponent } from './progress-bar.component';
import { Story } from '@storybook/angular';

export default {
  title: 'Progress Bar',
  component: ProgressBarComponent,
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100, step: 5 } }
  }
};

const Template: Story = (args) => ({
  props: args,
  moduleMetadata: {
    declarations: [ProgressBarComponent]
  },
  template: `<ukho-progress-bar [error]="error" [value]="value" [ariaLabel]="ariaLabel"></ukho-progress-bar>`
});

export const NoProgress: Story = Template.bind({});
NoProgress.args = {
  value: 0,
  error: false,
  ariaLabel: 'Journey progress',
};

export const SomeProgress: Story = Template.bind({});
SomeProgress.args = {
  value: 40,
  error: false,
  ariaLabel: 'Journey progress',
};

export const SomeProgressError: Story = Template.bind({});
SomeProgressError.args = {
  value: 40,
  error: true,
  ariaLabel: 'Journey progress'
};

export const MaxProgress: Story = Template.bind({});
MaxProgress.args = {
  value: 100,
  error: false,
  ariaLabel: 'Journey progress'
};

export const LabelledProgress: Story = (args) => ({
  props: args,
  moduleMetadata: {
    declarations: [ProgressBarComponent]
  },
  template: `<label id="progress">Progress so far</label><ukho-progress-bar [error]="error" [value]="value" [ariaLabelledBy]="ariaLabelledBy"></ukho-progress-bar>`
});
LabelledProgress.args = {
  value: 100,
  error: false,
  ariaLabelledBy: 'progress',
};
