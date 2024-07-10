import { newSpecPage } from '@stencil/core/testing';
import { HeaderComponent } from './header';

describe('admiralty-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeaderComponent],
      html: `<admiralty-header></admiralty-header>`,
    });
    expect(page.root).toMatchInlineSnapshot(`
      <admiralty-header>
        <!---->
        <div class="admiralty-header">
          <nav class="header-menu">
            <div class="header-branding">
              <a class="header-logo" href="https://www.admiralty.co.uk/" tabindex="0">
                <img alt="Admiralty Stacked Logo" class="header-image" src="svg/Admiralty stacked logo.svg">
              </a>
              <div class="vertical-seperator"></div>
            </div>
            <div class="header-menus">
              <div class="mobile-menu-toggle">
                <button>
                  <admiralty-icon icon-name="bars"></admiralty-icon>
                </button>
              </div>
              <div class="menu-sections">
                <div class="menu-items" role="navigation"></div>
                <div class="header-profile" role="navigation"></div>
              </div>
            </div>
          </nav>
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
        <div class="admiralty-header">
          <nav class="header-menu">
            <div class="header-branding">
              <a class="header-logo" href="https://www.admiralty.co.uk/" tabindex="0">
                <img alt="Admiralty Stacked Logo" class="header-image" src="svg/Admiralty stacked logo.svg">
              </a>
              <div class="vertical-seperator"></div>
              <h2 class="header-title">
                <a tabindex="0">
                  Design System
                </a>
              </h2>
            </div>
            <div class="header-menus">
              <div class="mobile-menu-toggle">
                <button>
                  <admiralty-icon icon-name="bars"></admiralty-icon>
                </button>
              </div>
              <div class="menu-sections">
                <div class="menu-items" role="navigation"></div>
                <div class="header-profile" role="navigation"></div>
              </div>
            </div>
          </nav>
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
        <div class="admiralty-header">
          <nav class="header-menu">
            <div class="header-branding">
              <a class="header-logo" href="http://www.example.com" tabindex="0">
                <img alt="Admiralty Stacked Logo" class="header-image" src="svg/Admiralty stacked logo.svg">
              </a>
              <div class="vertical-seperator"></div>
              <h2 class="header-title">
                <a href="null" tabindex="0">
                  Design System
                </a>
              </h2>
            </div>
            <div class="header-menus">
              <div class="mobile-menu-toggle">
                <button>
                  <admiralty-icon icon-name="bars"></admiralty-icon>
                </button>
              </div>
              <div class="menu-sections">
                <div class="menu-items" role="navigation"></div>
                <div class="header-profile" role="navigation"></div>
              </div>
            </div>
          </nav>
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
        <div class="admiralty-header">
          <nav class="header-menu">
            <div class="header-branding">
              <a class="header-logo" href="http://www.example.com" tabindex="0">
                <img alt="Logo" class="header-image" src="logo.svg">
              </a>
              <div class="vertical-seperator"></div>
              <h2 class="header-title">
                <a href="#" tabindex="0">
                  Design System
                </a>
              </h2>
            </div>
            <div class="header-menus">
              <div class="display-hamburger mobile-menu-toggle">
                <button>
                  <admiralty-icon icon-name="bars"></admiralty-icon>
                </button>
              </div>
              <div class="menu-sections">
                <div class="menu-items" role="navigation"></div>
                <div class="header-profile" role="navigation">
                  <admiralty-header-profile is-signed-in="true" signed-in-text="Mr Admiral" slot="profile"></admiralty-header-profile>
                </div>
              </div>
            </div>
          </nav>
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
        <div class="admiralty-header">
          <nav class="header-menu">
            <div class="header-branding">
              <a class="header-logo" href="http://www.example.com" tabindex="0">
                <img alt="Logo" class="header-image" src="logo.svg">
              </a>
              <div class="vertical-seperator"></div>
              <h2 class="header-title">
                <a href="#" tabindex="0">
                  Design System
                </a>
              </h2>
            </div>
            <div class="header-menus">
              <div class="display-hamburger mobile-menu-toggle">
                <button>
                  <admiralty-icon icon-name="bars"></admiralty-icon>
                </button>
              </div>
              <div class="menu-sections">
                <div class="menu-items" role="navigation"></div>
                <div class="header-profile" role="navigation">
                  <admiralty-header-profile is-signed-in="false" signed-in-text="Mr Admiral" slot="profile"></admiralty-header-profile>
                </div>
              </div>
            </div>
          </nav>
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
        <div class="admiralty-header">
          <nav class="header-menu">
            <div class="header-branding">
              <a class="header-logo" href="http://www.example.com" tabindex="0">
                <img alt="Logo" class="header-image" src="logo.svg">
              </a>
              <div class="vertical-seperator"></div>
              <h2 class="header-title">
                <a href="#" tabindex="0">
                  Design System
                </a>
              </h2>
            </div>
            <div class="header-menus">
              <div class="display-hamburger mobile-menu-toggle">
                <button>
                  <admiralty-icon icon-name="bars"></admiralty-icon>
                </button>
              </div>
              <div class="menu-sections">
                <div class="menu-items" role="navigation">
                  <admiralty-header-menu-item active="false" menu-title="Item 1" slot="items"></admiralty-header-menu-item>
                  <admiralty-header-menu-item active="false" menu-title="Item 2" slot="items"></admiralty-header-menu-item>
                </div>
                <div class="header-profile" role="navigation"></div>
              </div>
            </div>
          </nav>
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
        <div class="admiralty-header">
          <nav class="header-menu">
            <div class="header-branding">
              <a class="header-logo" href="http://www.example.com" tabindex="0">
                <img alt="Logo" class="header-image" src="logo.svg">
              </a>
              <div class="vertical-seperator"></div>
              <h2 class="header-title">
                <a href="#" tabindex="0">
                  Design System
                </a>
              </h2>
            </div>
            <div class="header-menus">
              <div class="display-hamburger mobile-menu-toggle">
                <button>
                  <admiralty-icon icon-name="bars"></admiralty-icon>
                </button>
              </div>
              <div class="menu-sections">
                <div class="menu-items" role="navigation">
                  <admiralty-header-menu-item active="false" menu-title="Item 1" slot="items">
                    <admiralty-header-sub-menu-item menu-title="sub item 1"></admiralty-header-sub-menu-item>
                    <admiralty-header-sub-menu-item menu-title="sub item 2"></admiralty-header-sub-menu-item>
                  </admiralty-header-menu-item>
                  <admiralty-header-menu-item active="false" menu-title="Item 2" slot="items"></admiralty-header-menu-item>
                  <admiralty-header-menu-item active="false" menu-title="Item 3" slot="items">
                    <admiralty-header-sub-menu-item menu-title="sub item 3"></admiralty-header-sub-menu-item>
                  </admiralty-header-menu-item>
                </div>
                <div class="header-profile" role="navigation"></div>
              </div>
            </div>
          </nav>
        </div>
      </admiralty-header>
    `);
  });
});
