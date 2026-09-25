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
    </admiralty-side-nav-wrapper>`,
};

export const Basic: Story = { ...template };

/**
 * Slotted into `admiralty-header` so that a single nav structure serves both layouts:
 * a left hand column at 1024px and above, collapsing into the header's burger menu below it.
 * Resize the preview across 1024px to see the switch.
 */
export const InHeader: Story = {
  render: () => html`
    <style>
      .in-header-story-content {
        padding: 24px;
      }
      @media (min-width: 1024px) {
        .in-header-story-content {
          margin-left: var(--admiralty-side-nav-width, 240px);
        }
      }
    </style>
    <admiralty-side-nav-wrapper>
      <admiralty-header header-title="HMNAO">
        <admiralty-side-nav slot="nav">
          <admiralty-side-nav-item side-nav-item-id="navpac" heading-title="NavPac and compact data"></admiralty-side-nav-item>
          <admiralty-side-nav-item side-nav-item-id="astro" heading-title="Astronomical data services" nav-active="${true}"></admiralty-side-nav-item>
          <admiralty-side-nav-item side-nav-item-id="resources" heading-title="Resources and links"></admiralty-side-nav-item>
        </admiralty-side-nav>
        <admiralty-header-menu-link slot="items" menu-title="About" href="#about" suppress-redirect="${true}"></admiralty-header-menu-link>
      </admiralty-header>
      <div class="in-header-story-content">
        <p>Page content sits to the right of the side nav on desktop.</p>
      </div>
    </admiralty-side-nav-wrapper>
  `,
};
