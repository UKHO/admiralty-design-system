import { Meta, StoryObj } from '@storybook/web-components';
import { SideNavComponent } from './side-nav';
import { html } from 'lit';

const meta: Meta = {
  component: 'admiralty-side-nav',
  title: 'Side Nav',
  parameters: {
    actions: {
      handles: ['sideNavItemSelected'],
    }
  }
};

export default meta;

type Story = StoryObj<SideNavComponent>;

const template: Story = {
  render: args => html`
    <admiralty-side-nav-wrapper>
      <admiralty-side-nav label="Software Stage Menu">
        <admiralty-side-nav-item side-nav-item-id="sideNavItemAlpha" heading-title="Alpha" nav-active="${false}"></admiralty-side-nav-item>
        <admiralty-side-nav-item side-nav-item-id="sideNavItemBeta" heading-title="Beta" nav-active="${true}"></admiralty-side-nav-item>
        <admiralty-side-nav-item side-nav-item-id="sideNavItemProduction" heading-title="Production" nav-active="${false}"></admiralty-side-nav-item>
      </admiralty-side-nav>
    <admiralty-side-nav-wrapper>`,
};

export const Basic: Story = { ...template };
