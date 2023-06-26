import { newSpecPage } from '@stencil/core/testing';
import { HeaderSubMenuItemComponent } from './header-sub-menu-item';

describe('header-sub-menu-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeaderSubMenuItemComponent],
      html: `<admiralty-header-sub-menu-item menuTitle="Item 1"></slot></admiralty-header-sub-menu-item>`,
    });
    expect(page.root).toEqualHtml(`
    <admiralty-header-sub-menu-item menutitle="Item 1">
      <div class="header-sub-menu-item">
        <span class="title"></span>
      </div>
    </admiralty-header-sub-menu-item>
    `);
  });
});
