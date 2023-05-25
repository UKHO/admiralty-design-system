import { Meta, StoryObj } from '@storybook/web-components';
import { HorizontalRuleComponent } from './horizontal-rule';
import { html } from 'lit';

const meta: Meta = {
  component: 'admiralty-hr',
  title: 'Horizontal Rule',
  parameters: {
    actions: {
    },
  },
};

export default meta;

type Story = StoryObj<HorizontalRuleComponent>;

const template: Story = {
  render: args => html`<admiralty-hr></admiralty-hr>`,
};

export const Default: Story = { ...template };
