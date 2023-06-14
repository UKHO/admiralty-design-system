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
        <div aria-labelledby="" class="tab-content" role="tabpanel" tabindex="-1"></div>
      </admiralty-tab>
    `);
  });

  it('renders with content', async () => {
    const page = await newSpecPage({
      components: [TabComponent],
      html: `<admiralty-tab label="lbl"></admiralty-tab>`,
    });
    expect(page.root).toMatchInlineSnapshot(`
      <admiralty-tab label="lbl">
        <!---->
        <div aria-labelledby="" class="tab-content" role="tabpanel" tabindex="-1"></div>
      </admiralty-tab>
    `);
  });
});
