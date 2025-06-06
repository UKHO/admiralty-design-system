import { Meta, StoryObj } from '@storybook/web-components';
import { SideBarComponent } from './side-bar';
import { html } from 'lit';

const meta: Meta = {
  component: 'admiralty-side-bar',
  title: 'Side Bar',
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
        <admiralty-side-bar-item active="${false}" href="/contents" suppress-redirect="${args.suppressRedirect}" slot="items" icon="list-alt-outline" item-text="Contents"></admiralty-side-bar-item>
        <admiralty-side-bar-item active="${true}" href="/bookmarks" suppress-redirect="${args.suppressRedirect}" slot="items" icon="bookmark-outline" item-text="Bookmarks"></admiralty-side-bar-item>
        <admiralty-side-bar-item active="${false}" href="/recents" suppress-redirect="${args.suppressRedirect}" slot="items" icon="history" item-text="Recents"></admiralty-side-bar-item>
        <admiralty-side-bar-item active="${false}" href="/update" suppress-redirect="${args.suppressRedirect}" icon="download-for-offline-outline" slot="footer" item-text="Update"></admiralty-side-bar-item>
        <admiralty-side-bar-item active="${false}" href="/settings" suppress-redirect="${args.suppressRedirect}" icon="settings-outline" slot="footer" item-text="Settings"></admiralty-side-bar-item>
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
        <admiralty-side-bar-item active="${true}" href="/update" suppress-redirect="${args.suppressRedirect}" icon="download-for-offline-outline" slot="footer" item-text="Update"></admiralty-side-bar-item>
        <admiralty-side-bar-item active="${false}" href="/settings" suppress-redirect="${args.suppressRedirect}" icon="settings-outline" slot="footer" item-text="Settings"></admiralty-side-bar-item>
      </admiralty-side-bar>
    </admiralty-side-bar-wrapper>
  </div>`,
};

export const TemplateWithSecondaryItems: Story = {
  render: args => html` <div style="background-color: #ccc; display: flex; height: 100vh;">
    <admiralty-side-bar-wrapper>
      <admiralty-side-bar label="Application navigation" show-logo="false" side-bar-width="${args.sideBarWidth}">
        <admiralty-side-bar-item expanded="${true}" slot="items" href="/contents" suppress-redirect="${args.suppressRedirect}" icon="list-alt-outline" item-text="Components" variant="secondary">
          <admiralty-side-bar-item active="${false}" id="migrating" href="/Migrating" suppress-redirect="true" item-text="Migrating" variant="tertiary"></admiralty-side-bar-item>
          <admiralty-side-bar-item active="${false}" id="customising" href="/Customising" suppress-redirect="true" item-text="Customising" variant="tertiary"></admiralty-side-bar-item>
          <admiralty-side-bar-item active="${true}" id="angular" href="/Angular" suppress-redirect="true" item-text="Angular" variant="tertiary"></admiralty-side-bar-item>
        </admiralty-side-bar-item>

        <admiralty-side-bar-item active="${false}" href="/bookmarks" slot="items" suppress-redirect="${args.suppressRedirect}" icon="bookmark-outline" item-text="Patterns" variant="secondary">
          <admiralty-side-bar-item active="${false}" id="overview" href="/overview" suppress-redirect="true" item-text="Overview" variant="tertiary"></admiralty-side-bar-item>
        </admiralty-side-bar-item>
        <admiralty-side-bar-item active="${false}" href="/recents" slot="items" suppress-redirect="${args.suppressRedirect}" icon="history" item-text="Recents" variant="secondary"></admiralty-side-bar-item>
      </admiralty-side-bar>
    </admiralty-side-bar-wrapper>
  </div>`,
};
