import { Meta, StoryObj } from '@storybook/web-components';
import { LinkComponent } from './link';
import { html } from 'lit';

const meta: Meta = {
  component: 'admiralty-link',
  title: 'Link',
  parameters: {
    actions: {
    },
  },
  args: {
    title: 'Link',
    href: 'http://www.example.com',
    newTab: false,
  },
};

export default meta;

type Story = StoryObj<LinkComponent>;

export const Default: Story = { render: args => html`
  <admiralty-link href="${args.href}">${args.title}</admiralty-link>` };

export const NoLink: Story = { render: args => html`
  <admiralty-link>${args.title}</admiralty-link>` };

export const NewTab: Story = { render: args => html`
  <admiralty-link href="${args.href}" new-tab="${args.newTab}">${args.title}</admiralty-link>`,
  args: { newTab: true } };
