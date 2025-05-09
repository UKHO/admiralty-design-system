import { Meta, StoryObj } from '@storybook/web-components';
import { SideBarItemComponent } from './side-bar-item';
import { html } from 'lit';
import { SideBarItemVariant } from "./side-bar-item.types";
import { withActions } from "@storybook/addon-actions/decorator";

const meta: Meta = {
  component: 'admiralty-side-bar-item',
  title: 'Side Bar Item',
  parameters: {
    layout: 'fullscreen',
    actions: {
      handles: ['sideBarItemClick', 'toggled'],
    },
  },
  decorators: [withActions],
  args: {
    itemText: 'Contents',
    active: false,
    variant: SideBarItemVariant.Primary,
    icon: 'list-alt-outline',
    href: 'http://www.example.com',
  },
};

export default meta;

type SideBarItemArgs = Partial<SideBarItemComponent & { itemText: string }>;

type Story = StoryObj<SideBarItemArgs>;

const template: Story = {
  render: args =>
    html` <div style="width: 100px;"><admiralty-side-bar-item ?active="${args.active}" variant="${args.variant}" href="${args.href}" icon="${args.icon}" item-text="${args.itemText}"></admiralty-side-bar-item></div>`,
};

export const Basic: Story = { ...template, args: { variant: SideBarItemVariant.Primary } };

export const Secondary: Story = { ...template, args: { variant: SideBarItemVariant.Secondary } };

export const Tertiary: Story = { ...template, args: { variant: SideBarItemVariant.Tertiary } };

export const Secondary: Story = { ...template, args: { variant: SideBarItemVariant.Secondary } };

export const Tertiary: Story = { ...template, args: { variant: SideBarItemVariant.Tertiary } };

export const NavActive: Story = {
  ...template,
  args: {
    active: true,
  },
};
