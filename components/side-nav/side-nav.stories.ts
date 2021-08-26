import { SideNavComponent } from './side-nav.component';
import { Story } from '@storybook/angular';
import {
  mockMenuItemsWithNoSubItems,
  mockMenuItemsWithNoSubItemsAndNavActive,
  SideNavWrapperComponent,
} from './side-nav.stories.data';

export default {
  title: 'Navigation/Side Nav',
  component: SideNavWrapperComponent,
};

const template: Story<SideNavWrapperComponent> = (args: SideNavWrapperComponent) => ({
  moduleMetadata: {
    declarations: [SideNavWrapperComponent, SideNavComponent],
  },
  props: {
    ...args,
  },
  template: `<ukho-side-nav-wrapper [menuItems]="menuItems"></ukho-side-nav-wrapper>`,
});

export const linksWithNoSubItems: Story = template.bind({});
linksWithNoSubItems.args = {
  menuItems: mockMenuItemsWithNoSubItems,
};
linksWithNoSubItems.parameters = {
  chromatic: { viewports: [320] },
};

export const linksWithNoSubItemsAndNavActive: Story = template.bind({});
linksWithNoSubItemsAndNavActive.args = {
  menuItems: mockMenuItemsWithNoSubItemsAndNavActive,
};
linksWithNoSubItemsAndNavActive.parameters = {
  chromatic: { viewports: [320] },
};
