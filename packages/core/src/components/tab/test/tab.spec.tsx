import { newSpecPage } from '@stencil/core/testing';
import { TabComponent } from '../tab';

describe('admiratly-tab', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TabComponent],
      html: `<admiralty-tab></admiralty-tab>`,
    });
    expect(page.root).toMatchInlineSnapshot(`
      <admiralty-tab>
        <!---->
        <div class="content" data-idx="-1"></div>
      </admiralty-tab>
    `);
  });
});
