import { Meta, StoryObj } from '@storybook/web-components';
import { withActions } from '@storybook/addon-actions/decorator';
import { HeaderComponent } from './header';
import { html } from 'lit';
import {
  mockMenuItemsWithSubItems,
  mockMenuItemsWithSomeSubItems,
  mockMenuItemsWithNoSubItems,
  mockMenuItemsWithSubItemsAndNavActive,
  mockMenuItemsWithNoSubItemsAndNavActive,
  mockMenuItemsWithRedirectNotSuppressed,
} from './header.stories.data';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { HeaderItem, HeaderSubItem } from './header.types';

const meta: Meta = {
  component: 'admiralty-header',
  title: 'Header',
  parameters: {
    actions: {
      handles: ['titledClicked', 'menuItemClick', 'subMenuItemClick', 'signInClicked', 'yourAccountClicked', 'signOutClicked'],
    },
  },
  decorators: [withActions],
};

export default meta;

type HeaderComponentArgs = Partial<
  HeaderComponent & {
    title: string;
    signedIn: boolean;
    singedInText: string;
    signInOnly: boolean;
    menuItems: HeaderItem[];
    showProfileMenu: boolean;
  }
>;

type Story = StoryObj<HeaderComponentArgs>;

const renderMenuItems = (menuItems: HeaderItem[] | undefined) =>
  menuItems
    ?.map(({ title, navActive = false, href, suppressRedirect = true, subitems }) => {
      if (href !== undefined) {
        return `<admiralty-header-menu-link menu-title="${title}" active="${navActive}" slot="items" href="${href}" suppress-redirect="${suppressRedirect}"></admiralty-header-menu-link>`;
      }
      return `<admiralty-header-menu-item menu-title="${title}" active="${navActive}" slot="items">
          ${renderSubMenuItems(subitems)}
        </admiralty-header-menu-item>`;
    })
    .join('');

const renderSubMenuItems = (subMenuItems: HeaderSubItem[] | undefined) =>
  subMenuItems
    ?.map(
      ({ title, href = '', suppressRedirect = true }) => `<admiralty-header-sub-menu-item menu-title="${title}" href="${href}" suppress-redirect="${suppressRedirect}">
          </admiralty-header-sub-menu-item>`,
    )
    .join('');

const renderProfileMenu = ({ showProfileMenu, signedIn, singedInText, signInOnly }: HeaderComponentArgs) =>
  showProfileMenu
    ? `<admiralty-header-profile is-signed-in="${signedIn}" signed-in-text="${singedInText}" sign-in-only="${signInOnly}" slot="profile"></admiralty-header-profile>`
    : '';

const defaultArgs = {
  headerTitle: 'Design System',
  headerTitleUrl: 'http://www.example.com',
  logoAltText: 'ADMIRALTY',
  logoImgUrl: 'svg/Admiralty stacked logo.svg',
  logoLinkUrl: 'http://www.example.com',
  showProfileMenu: true,
};

const profileArgs = {
  signedIn: false,
  singedInText: 'Mr Admiral',
  signInOnly: false,
};

const Template: Story = {
  render: args =>
    html` <admiralty-header
      logo-alt-text="${args.logoAltText}"
      logo-link-url="${args.logoLinkUrl}"
      logo-img-url="${args.logoImgUrl}"
      header-title-url="${args.headerTitleUrl}"
      header-title="${args.headerTitle}"
    >
      ${unsafeHTML(renderMenuItems(args.menuItems))} ${unsafeHTML(renderProfileMenu(args))}
    </admiralty-header>`,
};

export const linksAndAuthNotSignedIn: Story = {
  ...Template,
  args: {
    menuItems: mockMenuItemsWithSubItems,
    ...defaultArgs,
    ...profileArgs,
  },
};

export const linksWithNoSubItems: Story = {
  ...Template,
  args: {
    ...defaultArgs,
    menuItems: mockMenuItemsWithNoSubItems,
    showProfileMenu: false,
    logoImgUrl: 'svg/UKHO linear logo.svg',
  },
};

export const linksWithNoSubItemsAndNavActive: Story = {
  ...Template,
  args: {
    ...defaultArgs,
    menuItems: mockMenuItemsWithNoSubItemsAndNavActive,
    showProfileMenu: false,
  },
};

export const linksWithSubItemsAndNavActive: Story = {
  ...Template,
  args: {
    ...defaultArgs,
    menuItems: mockMenuItemsWithSubItemsAndNavActive,
    showProfileMenu: false,
  },
};

export const linksWithSomeSubItems: Story = {
  ...Template,
  args: {
    ...defaultArgs,
    menuItems: mockMenuItemsWithSomeSubItems,
    showProfileMenu: false,
  },
};

export const noLinks: Story = {
  ...Template,
  args: {
    ...defaultArgs,
    headerTitleUrl: undefined,
    showProfileMenu: false,
  },
};

export const HeaderSignedIn: Story = {
  ...Template,
  args: {
    ...defaultArgs,
    ...profileArgs,
    signedIn: true,
  },
};

export const HeaderSignedOut: Story = {
  ...Template,
  args: {
    ...defaultArgs,
    ...profileArgs,
  },
};

export const linksWithRedirectNotSuppressed: Story = {
  ...Template,
  args: {
    ...defaultArgs,
    menuItems: mockMenuItemsWithRedirectNotSuppressed,
    showProfileMenu: false,
  },
};
