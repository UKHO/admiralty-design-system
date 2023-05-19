import { newSpecPage } from '@stencil/core/testing';
import { TabGroupComponent } from '../tab-group';

describe('admiralty-tab-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TabGroupComponent],
      html: `<admiralty-tab-group></admiralty-tab-group>`,
    });
    expect(page.root).toMatchInlineSnapshot(`
      <admiralty-tab-group>
        <!---->
        <div class="headers"></div>
        <hr>
      </admiralty-tab-group>
    `);
  });
});
