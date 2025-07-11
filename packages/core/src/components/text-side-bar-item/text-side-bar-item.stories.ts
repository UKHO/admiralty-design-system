import { Meta, StoryObj } from '@storybook/web-components';
import { TextSideBarItemComponent } from './text-side-bar-item';
import { html } from 'lit';
import { withActions } from "@storybook/addon-actions/decorator";
import { TextSideBarItemVariant } from "./text-side-bar-item.types";

const meta: Meta = {
  component: 'admiralty-text-side-bar-item',
  title: 'Text Side Bar Item',
  parameters: {
    layout: 'fullscreen',
    actions: {
      handles: ['textSideBarItemClick', 'toggled'],
    },
  },
  decorators: [withActions],
  args: {
    itemText: 'Contents',
    active: false,
    variant: TextSideBarItemVariant.Expandable,
    icon: 'list-alt-outline',
    href: 'http://www.example.com',
  },
};

export default meta;

type TextSideBarItemArgs = Partial<TextSideBarItemComponent & { itemText: string }>;

type Story = StoryObj<TextSideBarItemArgs>;

const template: Story = {
  render: args =>
    html` <div style="width: 100px;"><admiralty-text-side-bar-item ?active="${args.active}" variant="${args.variant}" href="${args.href}" icon="${args.icon}" item-text="${args.itemText}"></admiralty-text-side-bar-item></div>`,
};

export const Expandable: Story = { ...template, args: { variant: TextSideBarItemVariant.Expandable } };

export const Text: Story = { ...template, args: { variant: TextSideBarItemVariant.Text } };

export const NavActive: Story = {
  ...template,
  args: {
    active: true,
  },
};
