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
              <div class="mobile-menu-toggle">
                <button aria-label="Show menu">
                  <admiralty-icon name="menu-rounded"></admiralty-icon>
                </button>
              </div>
              <div class="menu-sections">
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
              <div class="mobile-menu-toggle">
                <button aria-label="Show menu">
                  <admiralty-icon name="menu-rounded"></admiralty-icon>
                </button>
              </div>
              <div class="menu-sections">
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
              <div class="mobile-menu-toggle">
                <button aria-label="Show menu">
                  <admiralty-icon name="menu-rounded"></admiralty-icon>
                </button>
              </div>
              <div class="menu-sections">
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
              <div class="display-hamburger mobile-menu-toggle">
                <button aria-label="Show menu">
                  <admiralty-icon name="menu-rounded"></admiralty-icon>
                </button>
              </div>
              <div class="menu-sections">
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
              <div class="display-hamburger mobile-menu-toggle">
                <button aria-label="Show menu">
                  <admiralty-icon name="menu-rounded"></admiralty-icon>
                </button>
              </div>
              <div class="menu-sections">
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
              <div class="display-hamburger mobile-menu-toggle">
                <button aria-label="Show menu">
                  <admiralty-icon name="menu-rounded"></admiralty-icon>
                </button>
              </div>
              <div class="menu-sections">
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
              <div class="display-hamburger mobile-menu-toggle">
                <button aria-label="Show menu">
                  <admiralty-icon name="menu-rounded"></admiralty-icon>
                </button>
              </div>
              <div class="menu-sections">
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
});
