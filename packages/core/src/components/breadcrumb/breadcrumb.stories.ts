import { Meta, StoryObj } from '@storybook/web-components';
import { BreadcrumbComponent } from './breadcrumb';
import { html } from 'lit';

const meta: Meta = {
  component: 'admiralty-breadcrumb',
  parameters: {
    actions: {
    },
  },
};

export default meta;

type Story = StoryObj<BreadcrumbComponent>;

const template: Story = {
  render: args => html`<admiralty-breadcrumb href="${args.href}" ?active="${args.active}" ?first="${args.first}">Test</admiralty-breadcrumb>`,
};

export const Basic: Story = { ...template };

export const Active: Story = { ...template, args: { active: true } };

export const First: Story = { ...template, args: { first: true } };
