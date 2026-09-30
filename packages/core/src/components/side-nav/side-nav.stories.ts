import { Meta, StoryObj } from '@storybook/web-components';
import { SideNavComponent } from './side-nav';
import { html } from 'lit';

const meta: Meta = {
  component: 'admiralty-side-nav',
  title: 'Side Nav',
  parameters: {
    viewport: {
      viewports: {
        phone: { name: 'Phone (375px)', styles: { width: '375px', height: '812px' }, type: 'mobile' },
        tablet: { name: 'Tablet (768px)', styles: { width: '768px', height: '1024px' }, type: 'tablet' },
        tabletBreakpoint: { name: 'Tablet boundary (1023px)', styles: { width: '1023px', height: '900px' }, type: 'tablet' },
        desktopBreakpoint: { name: 'Desktop boundary (1024px)', styles: { width: '1024px', height: '900px' }, type: 'desktop' },
        desktop: { name: 'Desktop (1440px)', styles: { width: '1440px', height: '1000px' }, type: 'desktop' },
      },
    },
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

const responsiveMenuRender = () => html`
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
        <admiralty-side-nav slot="nav" label="Primary navigation">
          <admiralty-side-nav-item side-nav-item-id="navpac" heading-title="NavPac and compact data"></admiralty-side-nav-item>
          <admiralty-side-nav-item side-nav-item-id="astro" heading-title="Astronomical data services" nav-active="${true}"></admiralty-side-nav-item>
          <admiralty-side-nav-item side-nav-item-id="resources" heading-title="Resources and links"></admiralty-side-nav-item>
        </admiralty-side-nav>
        <admiralty-header-menu-link slot="items" menu-title="About" href="#about" suppress-redirect="${true}"></admiralty-header-menu-link>
      </admiralty-header>
      <div class="in-header-story-content">
        <h2>Responsive navigation example</h2>
        <p>Resize the preview or choose a viewport to inspect the navigation layout.</p>
        <p>At desktop widths, page content reserves space for the fixed side navigation.</p>
      </div>
    </admiralty-side-nav-wrapper>
  `;

const openMenu = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  await customElements.whenDefined('admiralty-header');
  const header = canvasElement.querySelector('admiralty-header') as (HTMLElement & { componentOnReady: () => Promise<unknown> }) | null;
  await header?.componentOnReady();
  const toggle = canvasElement.querySelector('admiralty-header .mobile-menu-toggle button') as HTMLButtonElement | null;
  if (!toggle) {
    throw new Error('The header menu toggle was not rendered.');
  }
  toggle.click();
};

/** The same nav is usable at every width; resize this story to explore all responsive layouts. */
export const InHeader: Story = {
  render: responsiveMenuRender,
};

/** Burger closed below the 1024px desktop breakpoint. */
export const PhoneClosed: Story = {
  render: responsiveMenuRender,
  parameters: { viewport: { defaultViewport: 'phone' } },
};

/** Burger open with side-nav links and the About header link in one panel. */
export const PhoneOpen: Story = {
  render: responsiveMenuRender,
  parameters: { viewport: { defaultViewport: 'phone' } },
  play: openMenu,
};

/** Tablet keeps the menu collapsed until the burger is activated. */
export const TabletClosed: Story = {
  render: responsiveMenuRender,
  parameters: { viewport: { defaultViewport: 'tablet' } },
};

/** Tablet open state, including the header-level About link. */
export const TabletOpen: Story = {
  render: responsiveMenuRender,
  parameters: { viewport: { defaultViewport: 'tablet' } },
  play: openMenu,
};

/** At 1023px the responsive menu is still in its collapsed layout. */
export const TabletBreakpoint: Story = {
  render: responsiveMenuRender,
  parameters: { viewport: { defaultViewport: 'tabletBreakpoint' } },
};

/** At exactly 1024px the burger is hidden and the side navigation becomes a desktop column. */
export const DesktopBreakpoint: Story = {
  render: responsiveMenuRender,
  parameters: { viewport: { defaultViewport: 'desktopBreakpoint' } },
};

/** Desktop layout with the fixed side navigation and offset page content. */
export const Desktop: Story = {
  render: responsiveMenuRender,
  parameters: { viewport: { defaultViewport: 'desktop' } },
};
