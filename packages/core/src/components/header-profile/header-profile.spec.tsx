import { newSpecPage } from '@stencil/core/testing';
import { HeaderProfileComponent } from './header-profile';

describe('header-profile', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeaderProfileComponent],
      html: `<admiralty-header-profile></admiralty-header-profile>`,
    });

    expect(page.root).toMatchInlineSnapshot(`
      <admiralty-header-profile>
        <mock:shadow-root>
          <div class="header-profile">
            <button>
              Sign In
            </button>
          </div>
        </mock:shadow-root>
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
        <mock:shadow-root>
          <div class="header-profile">
            <button>
              Sign In
            </button>
          </div>
        </mock:shadow-root>
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
        <mock:shadow-root>
          <div class="header-profile">
            <div>
              <button>
                Mr Admiral
              </button>
            </div>
          </div>
        </mock:shadow-root>
      </admiralty-header-profile>
    `);
  });
});
