import { Story } from '@storybook/html';
import readme from './readme.md';

export default {
  title: 'Side Nav',
  parameters: {
    markdown: readme,
    actions: {
      handles: ['sideNavItemSelected'],
    },
  },
};

const Template: Story = args => {
  return `<admiralty-side-nav-wrapper>
    <admiralty-side-nav label="Software Stage Menu">
      <admiralty-side-nav-item side-nav-item-id="sideNavItemAlpha" heading-title="Alpha" nav-active="${false}"></admiralty-side-nav-item>
      <admiralty-side-nav-item side-nav-item-id="sideNavItemBeta" heading-title="Beta" nav-active="${true}"></admiralty-side-nav-item>
      <admiralty-side-nav-item side-nav-item-id="sideNavItemProduction" heading-title="Production" nav-active="${false}"></admiralty-side-nav-item>
    </admiralty-side-nav>
  <admiralty-side-nav-wrapper>`;
};

export const Basic: Story = Template.bind({});
