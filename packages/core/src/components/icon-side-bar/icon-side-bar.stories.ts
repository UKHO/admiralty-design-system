import { Meta, StoryObj } from '@storybook/web-components';
import { IconSideBarComponent } from './icon-side-bar';
import { html } from 'lit';

const meta: Meta = {
  component: 'admiralty-icon-side-bar',
  title: 'Icon Side Bar',
  args: {
    suppressRedirect: true,
    showLogo: true,
    iconSideBarWidth: '200px'
  },
};

export default meta;

type IconSideBarArgs = Partial<IconSideBarComponent & { suppressRedirect: boolean }>;

type Story = StoryObj<IconSideBarArgs>;

const template: Story = {
  render: args => html` <div style="background-color: #ccc; display: flex; height: 100vh;">
    <admiralty-icon-side-bar-wrapper>
      <admiralty-icon-side-bar label="Application navigation" show-logo="${args.showLogo}" icon-side-bar-width="${args.iconSideBarWidth}">
        <admiralty-icon-side-bar-item active="${false}" href="/contents" suppress-redirect="${args.suppressRedirect}" slot="items" icon="list-alt-outline" item-text="Contents"></admiralty-icon-side-bar-item>
        <admiralty-icon-side-bar-item active="${true}" href="/bookmarks" suppress-redirect="${args.suppressRedirect}" slot="items" icon="bookmark-outline" item-text="Bookmarks"></admiralty-icon-side-bar-item>
        <admiralty-icon-side-bar-item active="${false}" href="/recents" suppress-redirect="${args.suppressRedirect}" slot="items" icon="history" item-text="Recents"></admiralty-icon-side-bar-item>
        <admiralty-icon-side-bar-item active="${false}" href="/update" suppress-redirect="${args.suppressRedirect}" icon="download-for-offline-outline" slot="footer" item-text="Update"></admiralty-icon-side-bar-item>
        <admiralty-icon-side-bar-item active="${false}" href="/settings" suppress-redirect="${args.suppressRedirect}" icon="settings-outline" slot="footer" item-text="Settings"></admiralty-icon-side-bar-item>
      </admiralty-icon-side-bar>
    </admiralty-icon-side-bar-wrapper>
  </div>`,
};

export const Basic: Story = { ...template };

export const NoLogo: Story = {
  ...template,
  args: {
    showLogo: false,
  },
};

export const NoFooterItems: Story = {
  render: args => html` <div style="background-color: #ccc; display: flex; height: 100vh;">
    <admiralty-icon-side-bar-wrapper>
      <admiralty-icon-side-bar label="Application navigation" show-logo="${args.showLogo}" icon-side-bar-width="${args.iconSideBarWidth}">
        <admiralty-icon-side-bar-item active="${false}" href="/contents" suppress-redirect="${args.suppressRedirect}" icon="list-alt-outline" item-text="Contents"></admiralty-icon-side-bar-item>
        <admiralty-icon-side-bar-item active="${true}" href="/bookmarks" suppress-redirect="${args.suppressRedirect}" icon="bookmark-outline" item-text="Bookmarks"></admiralty-icon-side-bar-item>
        <admiralty-icon-side-bar-item active="${false}" href="/recents" suppress-redirect="${args.suppressRedirect}" icon="history" item-text="Recents"></admiralty-icon-side-bar-item>
      </admiralty-icon-side-bar>
    </admiralty-icon-side-bar-wrapper>
  </div>`,
};

export const OnlyFooterItems: Story = {
  render: args => html` <div style="background-color: #ccc; display: flex; height: 100vh;">
    <admiralty-icon-side-bar-wrapper>
      <admiralty-icon-side-bar label="Application navigation" show-logo="${args.showLogo}" icon-side-bar-width="${args.iconSideBarWidth}">
        <admiralty-icon-side-bar-item active="${true}" href="/update" suppress-redirect="${args.suppressRedirect}" icon="download-for-offline-outline" slot="footer" item-text="Update"></admiralty-icon-side-bar-item>
        <admiralty-icon-side-bar-item active="${false}" href="/settings" suppress-redirect="${args.suppressRedirect}" icon="settings-outline" slot="footer" item-text="Settings"></admiralty-icon-side-bar-item>
      </admiralty-icon-side-bar>
    </admiralty-icon-side-bar-wrapper>
  </div>`,
};
