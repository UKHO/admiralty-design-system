import { Meta, StoryObj } from '@storybook/web-components';
import { SkipLinkComponent } from './skip-link';
import { html } from 'lit';

const meta: Meta = {
  component: 'admiralty-skip-link',
  title: 'Skip Link',
  parameters: {
    actions: {},
  },
  args: {
    href: '#main-content',
  },
};

export default meta;

type Story = StoryObj<SkipLinkComponent>;

export const Default: Story = { render: args => html` <admiralty-skip-link href="${args.href}"></admiralty-skip-link>` };
