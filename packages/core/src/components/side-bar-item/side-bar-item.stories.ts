import { Meta, StoryObj } from '@storybook/web-components';
import { SideBarItemComponent } from './side-bar-item';
import { html } from 'lit';

const meta: Meta = {
  component: 'admiralty-side-bar-item',
  title: 'Side Bar Item',
  parameters: {
    actions: {},
  },
  args: {
    itemText: 'Contents',
    active: false,
    icon: 'list_alt',
    href: 'http://www.example.com',
  },
};

export default meta;

type SideBarItemArgs = Partial<SideBarItemComponent & { itemText: string }>;

type Story = StoryObj<SideBarItemArgs>;

const template: Story = {
  render: args =>
    html` <div style="width: 100px;"><admiralty-side-bar-item ?active="${args.active}" href="${args.href}" icon="${args.icon}">${args.itemText}</admiralty-side-bar-item></div>`,
};

export const Basic: Story = { ...template };

export const NavActive: Story = {
  ...template,
  args: {
    active: true,
  },
};
