import { newSpecPage } from '@stencil/core/testing';
import { HeaderMenuItemComponent } from './header-menu-item';

describe('menu-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeaderMenuItemComponent],
      html: `<admiralty-header-menu-item menuTitle="Item 1"></slot></admiralty-header-menu-item>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-header-menu-item menutitle="Item 1">
        <div class="menu-item">
          <div class="menu-title"></div>
          <div class="sub-menu"></div>
        </div>
      </admiralty-header-menu-item>
    `);
  });

  it('renders active menu item', async () => {
    const page = await newSpecPage({
      components: [HeaderMenuItemComponent],
      html: `<admiralty-header-menu-item menuTitle="Item 1" active="true"></slot></admiralty-header-menu-item>`,
    });

    expect(page.root).toMatchInlineSnapshot(`
      <admiralty-header-menu-item active="true" menutitle="Item 1">
        <!---->
        <div class="active menu-item">
          <div class="menu-title"></div>
          <div class="sub-menu"></div>
        </div>
      </admiralty-header-menu-item>
    `);
  });

  it('renders inactive menu item', async () => {
    const page = await newSpecPage({
      components: [HeaderMenuItemComponent],
      html: `<admiralty-header-menu-item menuTitle="Item 1" active="false"></slot></admiralty-header-menu-item>`,
    });

    expect(page.root).toMatchInlineSnapshot(`
      <admiralty-header-menu-item active="false" menutitle="Item 1">
        <!---->
        <div class="menu-item">
          <div class="menu-title"></div>
          <div class="sub-menu"></div>
        </div>
      </admiralty-header-menu-item>
    `);
  });
});
