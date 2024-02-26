import { Meta, StoryObj } from '@storybook/web-components';
import { ProgressBarComponent } from './progress-bar';
import { html } from 'lit';

const meta: Meta = {
  component: 'admiralty-progress-bar',
  title: 'Progress Bar',
  parameters: {
    actions: {
    },
  },
  args: {
    error: false,
    progression: 60,
  },
};

export default meta;

type Story = StoryObj<ProgressBarComponent>;

const template: Story = {
  render: args => html`<admiralty-progress-bar ?error=${args.error} progression=${args.progression} label="${args.label ?? ''}"></admiralty-progress-bar>`,
};

export const DefaultProgressBar: Story = { ...template };

export const ProgressBarWithError: Story = { ...template, args: { error: true } };

export const NoProgress: Story = { ...template, args: { progression: 0 } };

export const MaximumProgress: Story = { ...template, args: { progression: 100 } };

export const Labelled: Story = { ...template, args: { label: 'Progress so far' } };
