import { Meta, StoryObj } from '@storybook/web-components';
import { SideBarComponent } from './side-bar';
import { html } from 'lit';

const meta: Meta = {
  component: 'admiralty-side-bar',
  title: 'Side Bar',
  parameters: {
    layout: 'fullscreen',
    actions: {
      handles: ['sideBarItemSelected'],
    },
  },
  args: {
    suppressRedirect: true,
    showLogo: true,
    sideBarWidth: '200px'
  },
};

export default meta;

type SideBarArgs = Partial<SideBarComponent & { suppressRedirect: boolean }>;

type Story = StoryObj<SideBarArgs>;

const template: Story = {
  render: args => html` <div style="background-color: #ccc; display: flex; height: 100vh;">
    <admiralty-side-bar-wrapper>
      <admiralty-side-bar label="Application navigation" show-logo="${args.showLogo}" side-bar-width="${args.sideBarWidth}">
        <admiralty-side-bar-item active="${false}" href="/contents" suppress-redirect="${args.suppressRedirect}" icon="list-alt-outline">Contents</admiralty-side-bar-item>
        <admiralty-side-bar-item active="${true}" href="/bookmarks" suppress-redirect="${args.suppressRedirect}" icon="bookmark-outline">Bookmarks</admiralty-side-bar-item>
        <admiralty-side-bar-item active="${false}" href="/recents" suppress-redirect="${args.suppressRedirect}" icon="history">Recents</admiralty-side-bar-item>
        <admiralty-side-bar-item active="${false}" href="/update" suppress-redirect="${args.suppressRedirect}" icon="download-for-offline-outline" slot="footer"
          >Update</admiralty-side-bar-item
        >
        <admiralty-side-bar-item active="${false}" href="/settings" suppress-redirect="${args.suppressRedirect}" icon="settings-outline" slot="footer"
          >Settings</admiralty-side-bar-item
        >
      </admiralty-side-bar>
    </admiralty-side-bar-wrapper>
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
    <admiralty-side-bar-wrapper>
      <admiralty-side-bar label="Application navigation" show-logo="${args.showLogo}" side-bar-width="${args.sideBarWidth}">
        <admiralty-side-bar-item active="${false}" href="/contents" suppress-redirect="${args.suppressRedirect}" icon="list-alt-outline">Contents</admiralty-side-bar-item>
        <admiralty-side-bar-item active="${true}" href="/bookmarks" suppress-redirect="${args.suppressRedirect}" icon="bookmark-outline">Bookmarks</admiralty-side-bar-item>
        <admiralty-side-bar-item active="${false}" href="/recents" suppress-redirect="${args.suppressRedirect}" icon="history">Recents</admiralty-side-bar-item>
      </admiralty-side-bar>
    </admiralty-side-bar-wrapper>
  </div>`,
};

export const OnlyFooterItems: Story = {
  render: args => html` <div style="background-color: #ccc; display: flex; height: 100vh;">
    <admiralty-side-bar-wrapper>
      <admiralty-side-bar label="Application navigation" show-logo="${args.showLogo}" side-bar-width="${args.sideBarWidth}">
        <admiralty-side-bar-item active="${true}" href="/update" suppress-redirect="${args.suppressRedirect}" icon="download-for-offline-outline" slot="footer"
          >Update</admiralty-side-bar-item
        >
        <admiralty-side-bar-item active="${false}" href="/settings" suppress-redirect="${args.suppressRedirect}" icon="settings-outline" slot="footer"
          >Settings</admiralty-side-bar-item
        >
      </admiralty-side-bar>
    </admiralty-side-bar-wrapper>
  </div>`,
};
