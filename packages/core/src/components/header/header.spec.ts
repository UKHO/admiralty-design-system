import { newSpecPage } from '@stencil/core/testing';
import { HeaderComponent } from './header';

const mutationObserverMock = jest.fn<MutationObserver, [MutationCallback]>().mockImplementation(() => {
  return {
    observe: jest.fn(),
    disconnect: jest.fn(),
    takeRecords: jest.fn(),
  };
});
global.MutationObserver = mutationObserverMock;

describe('admiralty-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeaderComponent],
      html: `<admiralty-header></admiralty-header>`,
    });
    expect(page.root).toMatchInlineSnapshot(`
<admiralty-header>
  <!---->
  <div class="admiralty-header" role="banner">
    <div class="header-menu">
      <div class="header-branding">
        <a class="header-logo" href="https://www.admiralty.co.uk/">
          <img alt="ADMIRALTY" class="header-image" src="svg/Admiralty stacked logo.svg">
        </a>
        <div class="vertical-seperator"></div>
      </div>
      <nav aria-label="Site navigation" class="header-menus" role="navigation">
        <div class="header-toggle"></div>
        <div class="mobile-menu-toggle">
          <button aria-controls="admiralty-header-menu-panel-0" aria-expanded="false" aria-label="Show menu" type="button">
            <admiralty-icon name="menu-rounded"></admiralty-icon>
          </button>
        </div>
        <div class="menu-sections" id="admiralty-header-menu-panel-0">
          <div class="menu-nav"></div>
          <div class="menu-items"></div>
          <div class="header-profile"></div>
        </div>
      </nav>
    </div>
  </div>
</admiralty-header>
`);
  });

  it('should render with title', async () => {
    const page = await newSpecPage({
      components: [HeaderComponent],
      html: `<admiralty-header header-title="Design System"></admiralty-header>`,
    });
    expect(page.root).toMatchInlineSnapshot(`
<admiralty-header header-title="Design System">
  <!---->
  <div class="admiralty-header" role="banner">
    <div class="header-menu">
      <div class="header-branding">
        <a class="header-logo" href="https://www.admiralty.co.uk/">
          <img alt="ADMIRALTY" class="header-image" src="svg/Admiralty stacked logo.svg">
        </a>
        <div class="vertical-seperator"></div>
        <h2 class="header-title">
          <a>
            Design System
          </a>
        </h2>
      </div>
      <nav aria-label="Site navigation" class="header-menus" role="navigation">
        <div class="header-toggle"></div>
        <div class="mobile-menu-toggle">
          <button aria-controls="admiralty-header-menu-panel-1" aria-expanded="false" aria-label="Show menu" type="button">
            <admiralty-icon name="menu-rounded"></admiralty-icon>
          </button>
        </div>
        <div class="menu-sections" id="admiralty-header-menu-panel-1">
          <div class="menu-nav"></div>
          <div class="menu-items"></div>
          <div class="header-profile"></div>
        </div>
      </nav>
    </div>
  </div>
</admiralty-header>
`);
  });

  it('should render with no links', async () => {
    const page = await newSpecPage({
      components: [HeaderComponent],
      html: `<admiralty-header header-title="Design System" logo-link-url="http://www.example.com" header-title-url="null"></admiralty-header>`,
    });
    expect(page.root).toMatchInlineSnapshot(`
<admiralty-header header-title="Design System" header-title-url="null" logo-link-url="http://www.example.com">
  <!---->
  <div class="admiralty-header" role="banner">
    <div class="header-menu">
      <div class="header-branding">
        <a class="header-logo" href="http://www.example.com">
          <img alt="ADMIRALTY" class="header-image" src="svg/Admiralty stacked logo.svg">
        </a>
        <div class="vertical-seperator"></div>
        <h2 class="header-title">
          <a href="null">
            Design System
          </a>
        </h2>
      </div>
      <nav aria-label="Site navigation" class="header-menus" role="navigation">
        <div class="header-toggle"></div>
        <div class="mobile-menu-toggle">
          <button aria-controls="admiralty-header-menu-panel-2" aria-expanded="false" aria-label="Show menu" type="button">
            <admiralty-icon name="menu-rounded"></admiralty-icon>
          </button>
        </div>
        <div class="menu-sections" id="admiralty-header-menu-panel-2">
          <div class="menu-nav"></div>
          <div class="menu-items"></div>
          <div class="header-profile"></div>
        </div>
      </nav>
    </div>
  </div>
</admiralty-header>
`);
  });

  it('should render signed in', async () => {
    const page = await newSpecPage({
      components: [HeaderComponent],
      html: `
      <admiralty-header logo-alt-text="Logo" logo-link-url="http://www.example.com" logo-img-url="logo.svg" header-title-url="#" header-title="Design System">
        <admiralty-header-profile is-signed-in="true" signed-in-text="Mr Admiral" slot="profile"></admiralty-header-profile>
      </admiralty-header>`,
    });
    expect(page.root).toMatchInlineSnapshot(`
<admiralty-header header-title="Design System" header-title-url="#" logo-alt-text="Logo" logo-img-url="logo.svg" logo-link-url="http://www.example.com">
  <!---->
  <div class="admiralty-header" role="banner">
    <div class="header-menu">
      <div class="header-branding">
        <a class="header-logo" href="http://www.example.com">
          <img alt="Logo" class="header-image" src="logo.svg">
        </a>
        <div class="vertical-seperator"></div>
        <h2 class="header-title">
          <a href="#">
            Design System
          </a>
        </h2>
      </div>
      <nav aria-label="Site navigation" class="header-menus" role="navigation">
        <div class="header-toggle"></div>
        <div class="display-hamburger mobile-menu-toggle">
          <button aria-controls="admiralty-header-menu-panel-3" aria-expanded="false" aria-label="Show menu" type="button">
            <admiralty-icon name="menu-rounded"></admiralty-icon>
          </button>
        </div>
        <div class="menu-sections" id="admiralty-header-menu-panel-3">
          <div class="menu-nav"></div>
          <div class="menu-items"></div>
          <div class="header-profile">
            <admiralty-header-profile is-signed-in="true" signed-in-text="Mr Admiral" slot="profile"></admiralty-header-profile>
          </div>
        </div>
      </nav>
    </div>
  </div>
</admiralty-header>
`);
  });

  it('should render signed out', async () => {
    const page = await newSpecPage({
      components: [HeaderComponent],
      html: `
      <admiralty-header logo-alt-text="Logo" logo-link-url="http://www.example.com" logo-img-url="logo.svg" header-title-url="#" header-title="Design System">
        <admiralty-header-profile is-signed-in="false" signed-in-text="Mr Admiral" slot="profile"></admiralty-header-profile>
      </admiralty-header>`,
    });
    expect(page.root).toMatchInlineSnapshot(`
<admiralty-header header-title="Design System" header-title-url="#" logo-alt-text="Logo" logo-img-url="logo.svg" logo-link-url="http://www.example.com">
  <!---->
  <div class="admiralty-header" role="banner">
    <div class="header-menu">
      <div class="header-branding">
        <a class="header-logo" href="http://www.example.com">
          <img alt="Logo" class="header-image" src="logo.svg">
        </a>
        <div class="vertical-seperator"></div>
        <h2 class="header-title">
          <a href="#">
            Design System
          </a>
        </h2>
      </div>
      <nav aria-label="Site navigation" class="header-menus" role="navigation">
        <div class="header-toggle"></div>
        <div class="display-hamburger mobile-menu-toggle">
          <button aria-controls="admiralty-header-menu-panel-4" aria-expanded="false" aria-label="Show menu" type="button">
            <admiralty-icon name="menu-rounded"></admiralty-icon>
          </button>
        </div>
        <div class="menu-sections" id="admiralty-header-menu-panel-4">
          <div class="menu-nav"></div>
          <div class="menu-items"></div>
          <div class="header-profile">
            <admiralty-header-profile is-signed-in="false" signed-in-text="Mr Admiral" slot="profile"></admiralty-header-profile>
          </div>
        </div>
      </nav>
    </div>
  </div>
</admiralty-header>
`);
  });

  it('should render menu items (no sub-menus)', async () => {
    const page = await newSpecPage({
      components: [HeaderComponent],
      html: `
      <admiralty-header logo-alt-text="Logo" logo-link-url="http://www.example.com" logo-img-url="logo.svg" header-title-url="#" header-title="Design System">
        <admiralty-header-menu-item menu-title="Item 1" active="false" slot="items"></admiralty-header-menu-item>
        <admiralty-header-menu-item menu-title="Item 2" active="false" slot="items"></admiralty-header-menu-item>
      </admiralty-header>`,
    });
    expect(page.root).toMatchInlineSnapshot(`
<admiralty-header header-title="Design System" header-title-url="#" logo-alt-text="Logo" logo-img-url="logo.svg" logo-link-url="http://www.example.com">
  <!---->
  <div class="admiralty-header" role="banner">
    <div class="header-menu">
      <div class="header-branding">
        <a class="header-logo" href="http://www.example.com">
          <img alt="Logo" class="header-image" src="logo.svg">
        </a>
        <div class="vertical-seperator"></div>
        <h2 class="header-title">
          <a href="#">
            Design System
          </a>
        </h2>
      </div>
      <nav aria-label="Site navigation" class="header-menus" role="navigation">
        <div class="header-toggle"></div>
        <div class="display-hamburger mobile-menu-toggle">
          <button aria-controls="admiralty-header-menu-panel-5" aria-expanded="false" aria-label="Show menu" type="button">
            <admiralty-icon name="menu-rounded"></admiralty-icon>
          </button>
        </div>
        <div class="menu-sections" id="admiralty-header-menu-panel-5">
          <div class="menu-nav"></div>
          <div class="menu-items">
            <admiralty-header-menu-item active="false" menu-title="Item 1" slot="items"></admiralty-header-menu-item>
            <admiralty-header-menu-item active="false" menu-title="Item 2" slot="items"></admiralty-header-menu-item>
          </div>
          <div class="header-profile"></div>
        </div>
      </nav>
    </div>
  </div>
</admiralty-header>
`);
  });

  it('should render menu items (with sub-menus)', async () => {
    const page = await newSpecPage({
      components: [HeaderComponent],
      html: `
      <admiralty-header logo-alt-text="Logo" logo-link-url="http://www.example.com" logo-img-url="logo.svg" header-title-url="#" header-title="Design System">
        <admiralty-header-menu-item menu-title="Item 1" active="false" slot="items">
          <admiralty-header-sub-menu-item menu-title="sub item 1"></admiralty-header-sub-menu-item>
          <admiralty-header-sub-menu-item menu-title="sub item 2"></admiralty-header-sub-menu-item>
        </admiralty-header-menu-item>
        <admiralty-header-menu-item menu-title="Item 2" active="false" slot="items"></admiralty-header-menu-item>
        <admiralty-header-menu-item menu-title="Item 3" active="false" slot="items">
          <admiralty-header-sub-menu-item menu-title="sub item 3"></admiralty-header-sub-menu-item>
        </admiralty-header-menu-item>
      </admiralty-header>`,
    });
    expect(page.root).toMatchInlineSnapshot(`
<admiralty-header header-title="Design System" header-title-url="#" logo-alt-text="Logo" logo-img-url="logo.svg" logo-link-url="http://www.example.com">
  <!---->
  <div class="admiralty-header" role="banner">
    <div class="header-menu">
      <div class="header-branding">
        <a class="header-logo" href="http://www.example.com">
          <img alt="Logo" class="header-image" src="logo.svg">
        </a>
        <div class="vertical-seperator"></div>
        <h2 class="header-title">
          <a href="#">
            Design System
          </a>
        </h2>
      </div>
      <nav aria-label="Site navigation" class="header-menus" role="navigation">
        <div class="header-toggle"></div>
        <div class="display-hamburger mobile-menu-toggle">
          <button aria-controls="admiralty-header-menu-panel-6" aria-expanded="false" aria-label="Show menu" type="button">
            <admiralty-icon name="menu-rounded"></admiralty-icon>
          </button>
        </div>
        <div class="menu-sections" id="admiralty-header-menu-panel-6">
          <div class="menu-nav"></div>
          <div class="menu-items">
            <admiralty-header-menu-item active="false" menu-title="Item 1" slot="items">
              <admiralty-header-sub-menu-item menu-title="sub item 1"></admiralty-header-sub-menu-item>
              <admiralty-header-sub-menu-item menu-title="sub item 2"></admiralty-header-sub-menu-item>
            </admiralty-header-menu-item>
            <admiralty-header-menu-item active="false" menu-title="Item 2" slot="items"></admiralty-header-menu-item>
            <admiralty-header-menu-item active="false" menu-title="Item 3" slot="items">
              <admiralty-header-sub-menu-item menu-title="sub item 3"></admiralty-header-sub-menu-item>
            </admiralty-header-menu-item>
          </div>
          <div class="header-profile"></div>
        </div>
      </nav>
    </div>
  </div>
</admiralty-header>
`);
  });

  it('shows the hamburger when only a side nav is slotted in', async () => {
    const page = await newSpecPage({
      components: [HeaderComponent],
      html: `<admiralty-header><admiralty-side-nav slot="nav"></admiralty-side-nav></admiralty-header>`,
    });

    expect(page.root.querySelector('.mobile-menu-toggle').classList.contains('display-hamburger')).toBe(true);
  });

  it('shows the hamburger for any slotted content, not just known menu components', async () => {
    const page = await newSpecPage({
      components: [HeaderComponent],
      html: `<admiralty-header><admiralty-theme-toggle slot="profile"></admiralty-theme-toggle></admiralty-header>`,
    });

    expect(page.root.querySelector('.mobile-menu-toggle').classList.contains('display-hamburger')).toBe(true);
  });

  it('renders the profile slot inside the mobile menu', async () => {
    const page = await newSpecPage({
      components: [HeaderComponent],
      html: `<admiralty-header><admiralty-header-profile slot="profile"></admiralty-header-profile></admiralty-header>`,
    });

    expect(page.root.querySelector('.menu-sections .header-profile admiralty-header-profile')).not.toBeNull();
  });

  it('renders the toggle slot beside the mobile menu button', async () => {
    const page = await newSpecPage({
      components: [HeaderComponent],
      html: `<admiralty-header><admiralty-theme-toggle slot="toggle"></admiralty-theme-toggle></admiralty-header>`,
    });

    expect(page.root.querySelector('.header-toggle admiralty-theme-toggle')).not.toBeNull();
    expect(page.root.querySelector('.mobile-menu-toggle').classList.contains('display-hamburger')).toBe(true);
  });

  it('hides the hamburger when nothing is slotted in', async () => {
    const page = await newSpecPage({
      components: [HeaderComponent],
      html: `<admiralty-header></admiralty-header>`,
    });

    expect(page.root.querySelector('.mobile-menu-toggle').classList.contains('display-hamburger')).toBe(false);
  });

  it('exposes the menu panel to the toggle via aria-controls', async () => {
    const page = await newSpecPage({
      components: [HeaderComponent],
      html: `<admiralty-header></admiralty-header>`,
    });

    const button = page.root.querySelector('button');
    const panel = page.root.querySelector('.menu-sections');

    expect(button.getAttribute('aria-controls')).toBe(panel.id);
    expect(button.getAttribute('aria-expanded')).toBe('false');
  });

  it('reflects the open state on aria-expanded when toggled', async () => {
    const page = await newSpecPage({
      components: [HeaderComponent],
      html: `<admiralty-header></admiralty-header>`,
    });

    page.rootInstance.toggleMobileMenu();
    await page.waitForChanges();

    expect(page.root.querySelector('button').getAttribute('aria-expanded')).toBe('true');
    expect(page.root.querySelector('.menu-sections').classList.contains('mob-menus-visible')).toBe(true);

    page.rootInstance.toggleMobileMenu();
    await page.waitForChanges();

    expect(page.root.querySelector('button').getAttribute('aria-expanded')).toBe('false');
  });

  it('closes the mobile menu when a side nav item is selected', async () => {
    const page = await newSpecPage({
      components: [HeaderComponent],
      html: `<admiralty-header><admiralty-side-nav slot="nav"></admiralty-side-nav></admiralty-header>`,
    });

    page.rootInstance.toggleMobileMenu();
    await page.waitForChanges();

    page.root.querySelector('.menu-nav').dispatchEvent(new CustomEvent('sideNavItemSelected', { bubbles: true }));
    await page.waitForChanges();

    expect(page.root.querySelector('.menu-sections').classList.contains('mob-menus-visible')).toBe(false);
    expect(page.root.querySelector('button').getAttribute('aria-expanded')).toBe('false');
  });
});
