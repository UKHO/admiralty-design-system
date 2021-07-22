import { HeaderComponent } from './header.component';
import { HorizontalRuleModule } from '../horizontal-rule/horizontal-rule.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Story } from '@storybook/angular';
import {
  mockBranding,
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
};

const template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  moduleMetadata: {
    declarations: [HeaderComponent],
    imports: [HorizontalRuleModule, BrowserAnimationsModule],
  },
  props: {
    title: mockBranding.title,
    logoImgUrl: mockBranding.logoImgUrl,
    logoLinkUrl: mockBranding.logoLinkUrl,
    logoAltText: mockBranding.logoAltText,
    ...args,
  },
  template: `<ukho-header [title]="title" [logoImgUrl]="logoImgUrl" [logoLinkUrl]="logoLinkUrl" [logoAltText]="logoAltText" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>`,
});

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
