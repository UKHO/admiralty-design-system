import { Meta, StoryObj } from '@storybook/web-components';
import { IconSideBarItemComponent } from './icon-side-bar-item';
import { html } from 'lit';
import { withActions } from "@storybook/addon-actions/decorator";

const meta: Meta = {
  component: 'admiralty-icon-side-bar-item',
  title: 'Icon Side Bar Item',
  parameters: {
    layout: 'fullscreen',
    actions: {
      handles: ['iconSideBarItemClick', 'toggled'],
    },
  },
  decorators: [withActions],
  args: {
    itemText: 'Contents',
    active: false,
    icon: 'list-alt-outline',
    href: 'http://www.example.com',
  },
};

export default meta;

type IconSideBarItemArgs = Partial<IconSideBarItemComponent & { itemText: string }>;

type Story = StoryObj<IconSideBarItemArgs>;

const template: Story = {
  render: args =>
    html` <div style="width: 100px;"><admiralty-icon-side-bar-item ?active="${args.active}" href="${args.href}" icon="${args.icon}" item-text="${args.itemText}"></admiralty-icon-side-bar-item></div>`,
};

export const Basic: Story = { ...template };
