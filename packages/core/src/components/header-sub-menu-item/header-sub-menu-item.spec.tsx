import { newSpecPage } from '@stencil/core/testing';
import { HeaderMenuItemComponent } from './header-sub-menu-item';

describe('header-sub-menu-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeaderMenuItemComponent],
      html: `<admiralty-header-sub-menu-item menuTitle="Item 1"></slot></admiralty-header-sub-menu-item>`,
    });
    expect(page.root).toEqualHtml(`
    <admiralty-header-sub-menu-item menutitle="Item 1">
      <mock:shadow-root>
        <div class="header-sub-menu-item">
          <span class="title"></span>
        </div>
      </mock:shadow-root>
    </admiralty-header-sub-menu-item>
    `);
  });
});
