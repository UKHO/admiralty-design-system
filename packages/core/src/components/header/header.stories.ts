import { Story } from '@storybook/html';
import readme from './readme.md';
import {
  mockMenuItemsWithSubItems,
  mockMenuItemsWithSomeSubItems,
  mockMenuItemsWithNoSubItems,
  mockMenuItemsWithSubItemsAndNavActive,
  mockMenuItemsWithNoSubItemsAndNavActive,
} from './header.stories.data';

export default {
  title: 'Header',
  parameters: {
    markdown: readme,
    actions: {
      handles: ['titledClicked', 'menuItemClick', 'subMenuItemClick'],
    },
  },
};

const defaultArgs = {
  title: 'Design System',
  titleLinkUrl: 'http://www.example.com',
  logoAltText: 'Admiralty Stacked Logo',
  logoImgUrl: 'svg/Admiralty stacked logo.svg',
  logoLinkUrl: 'http://www.example.com',
};

const profileArgs = {
  signedIn: false,
  singedInText: 'Mr Admiral',
};

const TemplateSignedOut: Story = args => {
  return `<admiralty-header logo-alt-text="${args.logoAltText}" logo-link-url="${args.logoLinkUrl}" logo-img-url="${args.logoImgUrl}" header-title-url="#" header-title="${args.title}">
    <admiralty-header-profile is-signed-in="${args.signedIn}" signed-in-text="${args.singedInText}" slot="profile"></admiralty-header-profile>
    </admiralty-header>`;
};

const TemplateLinksAndAuth: Story = args => {
  const menuItems = args.menuItems.map(item => {
    const subItems = item.subitems?.map(si => `<admiralty-header-sub-menu-item menu-title="${si.title}"></admiralty-header-sub-menu-item>`);
    return `<admiralty-header-menu-item menu-title="${item.title}" active="${item.navActive ?? false}" slot="items">${subItems?.join('')}</admiralty-header-menu-item>
  `;
  });

  let template = `<admiralty-header logo-alt-text="${args.logoAltText}" logo-link-url="${args.logoLinkUrl}" logo-img-url="${args.logoImgUrl}" header-title-url="#" header-title="${
    args.title
  }">
    ${menuItems?.join('')}
    <admiralty-header-profile is-signed-in="${args.signedIn}" signed-in-text="${args.singedInText}" slot="profile"></admiralty-header-profile>
  </admiralty-header>`;

  console.log(template);
  return template;
};

const TemplateLinksNoAuth: Story = args => {
  const menuItems = args.menuItems?.map(item => {
    const subItems = item.subitems?.map(si => `<admiralty-header-sub-menu-item menu-title="${si.title}"></admiralty-header-sub-menu-item>`);
    return `<admiralty-header-menu-item menu-title="${item.title}" active="${item.navActive ?? false}" slot="items">${subItems?.join('') ?? ''}</admiralty-header-menu-item>
  `;
  });

  let template = `<admiralty-header logo-alt-text="${args.logoAltText}" logo-link-url="${args.logoLinkUrl}" logo-img-url="${args.logoImgUrl}" header-title-url="#" header-title="${
    args.title
  }">
    ${menuItems?.join('') ?? ''}
  </admiralty-header>`;

  console.log(template);
  return template;
};

export const linksAndAuthNotSignedIn: Story = TemplateLinksAndAuth.bind({});
linksAndAuthNotSignedIn.args = { menuItems: mockMenuItemsWithSubItems, ...defaultArgs, ...profileArgs };

export const linksAndAuthSignedIn: Story = TemplateLinksAndAuth.bind({});
linksAndAuthSignedIn.args = { menuItems: mockMenuItemsWithSubItems, ...defaultArgs, ...profileArgs, signedIn: true };

export const linksWithNoSubItems: Story = TemplateLinksNoAuth.bind({});
linksWithNoSubItems.args = {
  menuItems: mockMenuItemsWithNoSubItems,
  ...defaultArgs,
};

export const linksWithNoSubItemsAndNavActive: Story = TemplateLinksNoAuth.bind({});
linksWithNoSubItemsAndNavActive.args = {
  menuItems: mockMenuItemsWithNoSubItemsAndNavActive,
  ...defaultArgs,
};

export const linksWithSubItemsAndNavActive: Story = TemplateLinksNoAuth.bind({});
linksWithSubItemsAndNavActive.args = {
  menuItems: mockMenuItemsWithSubItemsAndNavActive,
  ...defaultArgs,
};

export const linksWithSomeSubItems: Story = TemplateLinksNoAuth.bind({});
linksWithSomeSubItems.args = {
  menuItems: mockMenuItemsWithSomeSubItems,
  ...defaultArgs,
};

export const noLinks: Story = args => {
  return `<admiralty-header header-title="${args.title}" logo-link-url="${args.logoLinkUrl}" headerTitleUrl="${args.titleLinkUrl}"></admiralty-header>`;
};
noLinks.args = {
  ...defaultArgs,
  titleLinkUrl: null,
};

export const HeaderSignedIn = TemplateSignedOut.bind({});
HeaderSignedIn.args = { ...defaultArgs, ...profileArgs, signedIn: true };

export const HeaderSignedOut = TemplateSignedOut.bind({});
HeaderSignedOut.args = { ...defaultArgs, ...profileArgs };
