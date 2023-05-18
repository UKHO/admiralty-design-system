import { newSpecPage } from '@stencil/core/testing';
import { TabGroupItemComponent } from '../tab-group-item';

describe('tab-group-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TabGroupItemComponent],
      html: `<admiralty-tab-group-item></admiralty-tab-group-item>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-tab-group-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </admiralty-tab-group-item>
    `);
  });
});
