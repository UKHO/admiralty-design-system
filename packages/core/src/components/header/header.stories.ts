import { Meta, StoryObj } from '@storybook/web-components';
import { HeaderComponent } from './header';
import { html } from 'lit';
import {
  mockMenuItemsWithSubItems,
  mockMenuItemsWithSomeSubItems,
  mockMenuItemsWithNoSubItems,
  mockMenuItemsWithSubItemsAndNavActive,
  mockMenuItemsWithNoSubItemsAndNavActive,
} from './header.stories.data';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

const meta: Meta = {
  component: 'admiralty-header',
  title: 'Header',
  parameters: {
    actions: {
        handles: ['titledClicked', 'menuItemClick', 'subMenuItemClick','signInClicked','yourAccountClicked','signOutClicked']
    },
  },
};

export default meta;

type Story = StoryObj<HeaderComponent>;

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

const TemplateSignedOut: Story = {
  render: args => html`
    <admiralty-header logo-alt-text="${args.logoAltText}" logo-link-url="${args.logoLinkUrl}" logo-img-url="${args.logoImgUrl}" header-title-url="#" header-title="${args.title}">
      <admiralty-header-profile is-signed-in="${args.signedIn}" signed-in-text="${args.singedInText}" slot="profile"></admiralty-header-profile>
    </admiralty-header>`
};

const TemplateLinksAndAuth: Story = {
  render: args => {
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
    return html`${unsafeHTML(template)}`;
  }
};

const TemplateLinksNoAuth: Story = {
  render: args => {
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
    return html`${unsafeHTML(template)}`;
  }
};

export const linksAndAuthNotSignedIn: Story = { ...TemplateLinksAndAuth,
  args: {
    menuItems: mockMenuItemsWithSubItems,
    ...defaultArgs,
    ...profileArgs
  }
};

export const linksWithNoSubItems: Story = { ...TemplateLinksNoAuth,
  args: {
    menuItems: mockMenuItemsWithNoSubItems,
    ...defaultArgs,
    logoImgUrl: 'svg/UKHO linear logo.svg'
  }
};

export const linksWithNoSubItemsAndNavActive: Story = { ...TemplateLinksNoAuth,
  args: {
    menuItems: mockMenuItemsWithNoSubItemsAndNavActive,
    ...defaultArgs
  }
};

export const linksWithSubItemsAndNavActive: Story = { ...TemplateLinksNoAuth,
  args: {
    menuItems: mockMenuItemsWithSubItemsAndNavActive,
    ...defaultArgs
  }
};

export const linksWithSomeSubItems: Story = { ...TemplateLinksNoAuth,
  args: {
    menuItems: mockMenuItemsWithSomeSubItems,
    ...defaultArgs
  }
};

export const noLinks: Story = { render: args => html`
  <admiralty-header header-title="${args.title}" logo-link-url="${args.logoLinkUrl}" headerTitleUrl="${args.titleLinkUrl}">
  </admiralty-header>`,
  args: {
    ...defaultArgs,
    titleLinkUrl: null,
  }
};

export const HeaderSignedIn: Story = { ...TemplateSignedOut,
  args: {
    ...defaultArgs,
    ...profileArgs,
    signedIn: true
  }
};

export const HeaderSignedOut: Story = { ...TemplateSignedOut,
  args: {
    ...defaultArgs,
    ...profileArgs
  }
};
