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
} from './header.stories.data';

export default {
  title: 'Header',
  component: HeaderComponent,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  moduleMetadata: {
    declarations: [HeaderComponent],
    imports: [HorizontalRuleModule, BrowserAnimationsModule],
  },
  props: {
    // there is currently a bug in storybook/chromatic that causes methods to get overridden https://github.com/storybookjs/storybook/issues/14696
    branding: args.branding,
    menuItems: args.menuItems,
    authOptions: args.authOptions,
  },
  template: `<ukho-header [branding]="branding" [authOptions]="authOptions" [menuItems]="menuItems"></ukho-header>`,
});

export const NoLinks: Story = Template.bind({});
NoLinks.args = {
  branding: mockBranding,
};

export const LinksWithSubItems: Story = Template.bind({});
LinksWithSubItems.args = {
  branding: mockBranding,
  menuItems: mockMenuItemsWithSubItems,
};

export const LinksWithSomeSubItems: Story = Template.bind({});
LinksWithSomeSubItems.args = {
  branding: mockBranding,
  menuItems: mockMenuItemsWithSomeSubItems,
};

export const LinksWithNoSubItems: Story = Template.bind({});
LinksWithNoSubItems.args = {
  branding: mockBranding,
  menuItems: mockMenuItemsWithNoSubItems,
};

export const OnlyAuthNotSignedIn: Story = Template.bind({});
OnlyAuthNotSignedIn.args = {
  branding: mockBranding,
  authOptions: authOptions,
};

export const OnlyAuthSignedIn: Story = Template.bind({});
OnlyAuthSignedIn.args = {
  branding: mockBranding,
  authOptions: authOptionsSignedIn,
};

export const LinksAndAuthNotSignedIn: Story = Template.bind({});
LinksAndAuthNotSignedIn.args = {
  branding: mockBranding,
  menuItems: mockMenuItemsWithSubItems,
  authOptions: authOptions,
};

export const LinksAndAuthSignedIn: Story = Template.bind({});
LinksAndAuthSignedIn.args = {
  branding: mockBranding,
  menuItems: mockMenuItemsWithSubItems,
  authOptions: authOptionsSignedIn,
};
