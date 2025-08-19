import { Meta, StoryObj } from '@storybook/web-components';
import { TextSideBarComponent } from './text-side-bar';
import { html } from 'lit';

const meta: Meta = {
  component: 'admiralty-text-side-bar',
  title: 'Text Side Bar',
  args: {
    suppressRedirect: true,
    showLogo: true,
    textSideBarWidth: '200px'
  },
};

export default meta;

type TextSideBarArgs = Partial<TextSideBarComponent & { suppressRedirect: boolean }>;

type Story = StoryObj<TextSideBarArgs>;

const template: Story = {
  render: args => html` <div style="background-color: #ccc; display: flex; height: 100vh;">
    <admiralty-text-side-bar-wrapper>
      <admiralty-text-side-bar label="Application navigation" show-logo="false" text-side-bar-width="${args.textSideBarWidth}">
        <admiralty-text-side-bar-item expanded="${true}" slot="items" href="/contents" suppress-redirect="${args.suppressRedirect}" icon="list-alt-outline" item-text="Components" variant="expandable">
          <admiralty-text-side-bar-item active="${false}" id="migrating" href="/Migrating" suppress-redirect="true" item-text="Migrating" variant="text"></admiralty-text-side-bar-item>
          <admiralty-text-side-bar-item active="${false}" id="customising" href="/Customising" suppress-redirect="true" item-text="Customising" variant="text"></admiralty-text-side-bar-item>
          <admiralty-text-side-bar-item active="${true}" id="angular" href="/Angular" suppress-redirect="true" item-text="Angular" variant="text"></admiralty-text-side-bar-item>
        </admiralty-text-side-bar-item>
        <admiralty-text-side-bar-item active="${false}" href="/recents" slot="items" suppress-redirect="${args.suppressRedirect}" icon="history" item-text="Recents" variant="expandable">
          <admiralty-text-side-bar-item active="${false}" id="other" href="/other" suppress-redirect="true" item-text="Other" variant="text"></admiralty-text-side-bar-item>
        </admiralty-text-side-bar-item>
        <admiralty-text-side-bar-item active="${false}" href="/patterns" slot="items" suppress-redirect="${args.suppressRedirect}" icon="bookmark-outline" item-text="Patterns" variant="expandable">
          <admiralty-text-side-bar-item active="${false}" id="overview" href="/overview" suppress-redirect="true" item-text="Overview" variant="text"></admiralty-text-side-bar-item>
        </admiralty-text-side-bar-item>
      </admiralty-text-side-bar>
    </admiralty-text-side-bar-wrapper>
  </div>`,
};

export const Basic: Story = { ...template };

export const MixedVariants: Story = {
  render: args => html` <div style="background-color: #ccc; display: flex; height: 100vh;">
    <admiralty-text-side-bar-wrapper>
      <admiralty-text-side-bar label="Application navigation" show-logo="false" text-side-bar-width="${args.textSideBarWidth}">
        <admiralty-text-side-bar-item expanded="${true}" slot="items" href="/contents" suppress-redirect="${args.suppressRedirect}" icon="list-alt-outline" item-text="Components" variant="expandable">
          <admiralty-text-side-bar-item active="${false}" id="migrating" href="/Migrating" suppress-redirect="true" item-text="Migrating" variant="text"></admiralty-text-side-bar-item>
          <admiralty-text-side-bar-item active="${false}" id="customising" href="/Customising" suppress-redirect="true" item-text="Customising" variant="text"></admiralty-text-side-bar-item>
          <admiralty-text-side-bar-item active="${true}" id="angular" href="/Angular" suppress-redirect="true" item-text="Angular" variant="text"></admiralty-text-side-bar-item>
        </admiralty-text-side-bar-item>
        <admiralty-text-side-bar-item active="${false}" id="recents" href="/recents" slot="items" suppress-redirect="${args.suppressRedirect}" item-text="Recents" variant="textLink"></admiralty-text-side-bar-item>
        <admiralty-text-side-bar-item active="${false}" href="/bookmarks" slot="items" suppress-redirect="${args.suppressRedirect}" item-text="Patterns" variant="expandable">
          <admiralty-text-side-bar-item active="${false}" id="overview" href="/overview" suppress-redirect="true" item-text="Overview" variant="text"></admiralty-text-side-bar-item>
        </admiralty-text-side-bar-item>
      </admiralty-text-side-bar>
    </admiralty-text-side-bar-wrapper>
  </div>`,
};

export const TextLinksOnly: Story = {
  render: args => html` <div style="background-color: #ccc; display: flex; height: 100vh;">
    <admiralty-text-side-bar-wrapper>
      <admiralty-text-side-bar label="Application navigation" show-logo="false" text-side-bar-width="${args.textSideBarWidth}">
        <admiralty-text-side-bar-item expanded="${true}" slot="items" href="/contents" suppress-redirect="${args.suppressRedirect}" icon="list-alt-outline" item-text="Components" variant="textLink"></admiralty-text-side-bar-item>
        <admiralty-text-side-bar-item active="${false}" id="recents" href="/recents" slot="items" suppress-redirect="${args.suppressRedirect}" item-text="Recents" variant="textLink"></admiralty-text-side-bar-item>
        <admiralty-text-side-bar-item active="${false}" href="/patterns" slot="items" suppress-redirect="${args.suppressRedirect}" item-text="Patterns" variant="textLink"></admiralty-text-side-bar-item>
      </admiralty-text-side-bar>
    </admiralty-text-side-bar-wrapper>
  </div>`,
};
