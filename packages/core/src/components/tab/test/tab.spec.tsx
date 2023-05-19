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

  it('renders with content', async () => {
    const page = await newSpecPage({
      components: [TabComponent],
      html: `<admiralty-tab label="lbl" index="1" active="true"></admiralty-tab>`,
    });
    expect(page.root).toMatchInlineSnapshot(`
      <admiralty-tab active="true" index="1" label="lbl">
        <!---->
        <div class="active content" data-idx="1"></div>
      </admiralty-tab>
    `);
  });
});
