import { Meta, StoryObj } from '@storybook/web-components';
import { SideNavItemComponent } from './side-nav-item';
import { html } from 'lit';

const meta: Meta = {
  component: 'admiralty-side-nav-item',
  title: 'Side Nav Item',
  parameters: {
    actions: {
    }
  },
  args: {
    headingTitle: 'alpha',
    navActive: false
  }
};

export default meta;

type Story = StoryObj<SideNavItemComponent>;

const template: Story = {
  render: args => html`
    <admiralty-side-nav-item heading-title="${args.headingTitle}" ?nav-active="${args.navActive}">
    </admiralty-side-nav-item>`,
};

export const Basic: Story = { ...template };

export const NavActive: Story = { ...template,
  args: {
    navActive: true
  }
};
