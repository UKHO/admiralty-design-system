import { newSpecPage } from '@stencil/core/testing';
import { HeaderProfileComponent } from './header-profile';

describe('header-profile', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeaderProfileComponent],
      html: `<admiralty-header-profile></admiralty-header-profile>`,
    });

    expect(page.root).toEqualHtml(`
      <admiralty-header-profile>
        <div class="header-profile">
          <button class="sub-menu-item" tabindex="0">
            Sign In
          </button>
        </div>
      </admiralty-header-profile>
    `);
  });

  it('renders not signed in', async () => {
    const page = await newSpecPage({
      components: [HeaderProfileComponent],
      html: `<admiralty-header-profile is-signed-in="false" signed-in-text="Mr Admiral"></admiralty-header-profile>`,
    });
    expect(page.root).toMatchInlineSnapshot(`
      <admiralty-header-profile is-signed-in="false" signed-in-text="Mr Admiral">
        <div class="header-profile">
          <button class="sub-menu-item" tabindex="0">
            Sign In
          </button>
        </div>
      </admiralty-header-profile>
    `);
  });
  it('renders signed in', async () => {
    const page = await newSpecPage({
      components: [HeaderProfileComponent],
      html: `<admiralty-header-profile is-signed-in="true" signed-in-text="Mr Admiral"></admiralty-header-profile>`,
    });
    expect(page.root).toMatchInlineSnapshot(`
      <admiralty-header-profile is-signed-in="true" signed-in-text="Mr Admiral">
        <div class="header-profile">
          <div>
            <div class="desktop">
              <button tabindex="0">
                Mr Admiral
              </button>
              <div class="desktop-hide sub-menu">
                <button class="sub-menu-item" tabindex="0">
                  Your Account
                </button>
                <button class="sub-menu-item" tabindex="0">
                  Sign Out
                </button>
              </div>
            </div>
            <div class="not-desktop">
              <div class="sub-menu-item" tabindex="0">
                Your Account
              </div>
              <div class="sub-menu-item" tabindex="0">
                Sign Out
              </div>
            </div>
          </div>
        </div>
      </admiralty-header-profile>
    `);
  });
});
