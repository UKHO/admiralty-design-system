import { newSpecPage } from '@stencil/core/testing';
import { TabGroupItemComponent } from '../tab-group-item';

describe('tab-group-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TabGroupItemComponent],
      html: `<admiralty-tab-group-item></admiralty-tab-group-item>`,
    });
    expect(page.root).toMatchInlineSnapshot(`
      <admiralty-tab-group-item>
        <!---->
        <div class="content" data-idx="-1"></div>
      </admiralty-tab-group-item>
    `);
  });
});
