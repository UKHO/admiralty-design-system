import { HeaderComponent } from './header.component';
import { HorizontalRuleModule } from '../horizontal-rule/horizontal-rule.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/angular';
import {
  mockMenuItemsWithSubItems,
  authOptions,
  authOptionsSignedIn,
  mockMenuItemsWithSomeSubItems,
  mockMenuItemsWithNoSubItems,
  mockMenuItemsWithSubItemsAndNavActive,
  mockMenuItemsWithNoSubItemsAndNavActive,
} from './header.stories.data';

export default {
  title: 'Header',
  component: HeaderComponent,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    title: 'Design System',
    logoLinkUrl: '/svg/Admiralty stacked logo.svg',
    logoAltText: 'Admiralty Stacked Logo',
    logoImgUrl: '/svg/Admiralty stacked logo.svg',
    titleLinkNavigated: action('Title Link Navigated'),
  },
};

const template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  moduleMetadata: {
    declarations: [HeaderComponent],
    imports: [HorizontalRuleModule, BrowserAnimationsModule],
  },
  props: args,
  template: `<ukho-header [title]="title" [titleLinkUrl]="titleLinkUrl" [logoImgUrl]="logoImgUrl" [logoLinkUrl]="logoLinkUrl" [logoAltText]="logoAltText" [authOptions]="authOptions" [menuItems]="menuItems" (titleLinkNavigated)="titleLinkNavigated($event)"></ukho-header>`,
});

export const titleLink: Story = template.bind({});
titleLink.args = {
  titleLinkUrl: '/a',
};

export const noLinks: Story = template.bind({});
noLinks.args = {};

export const linksWithSubItems: Story = template.bind({});
linksWithSubItems.args = {
  menuItems: mockMenuItemsWithSubItems,
};

export const linksWithSubItemsAndNavActive: Story = template.bind({});
linksWithSubItemsAndNavActive.args = {
  menuItems: mockMenuItemsWithSubItemsAndNavActive,
};

export const linksWithSomeSubItems: Story = template.bind({});
linksWithSomeSubItems.args = {
  menuItems: mockMenuItemsWithSomeSubItems,
};

export const linksWithNoSubItems: Story = template.bind({});
linksWithNoSubItems.args = {
  menuItems: mockMenuItemsWithNoSubItems,
};

export const linksWithNoSubItemsAndNavActive: Story = template.bind({});
linksWithNoSubItemsAndNavActive.args = {
  menuItems: mockMenuItemsWithNoSubItemsAndNavActive,
};

export const onlyAuthNotSignedIn: Story = template.bind({});
onlyAuthNotSignedIn.args = {
  authOptions,
};

export const onlyAuthSignedIn: Story = template.bind({});
onlyAuthSignedIn.args = {
  authOptions: authOptionsSignedIn,
};

export const linksAndAuthNotSignedIn: Story = template.bind({});
linksAndAuthNotSignedIn.args = {
  menuItems: mockMenuItemsWithSubItems,
  authOptions,
};

export const linksAndAuthSignedIn: Story = template.bind({});
linksAndAuthSignedIn.args = {
  menuItems: mockMenuItemsWithSubItems,
  authOptions: authOptionsSignedIn,
};
