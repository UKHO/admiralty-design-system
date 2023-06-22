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
        <div class="tab-group-headers" role="tablist">
          <div class="headers"></div>
        </div>
        <hr>
      </admiralty-tab-group>
    `);
  });

  it('renders children', async () => {
    const page = await newSpecPage({
      components: [TabGroupComponent],
      html: `
      <admiralty-tab-group>
        <admiralty-tab label="'a'">test a</admiralty-tab>
        <admiralty-tab label="'b'">test b</admiralty-tab>
      </admiralty-tab-group>`,
    });
    expect(page.root).toMatchInlineSnapshot(`
      <admiralty-tab-group>
        <!---->
        <div class="tab-group-headers" role="tablist">
          <div class="headers">
            <button aria-controls="tab-panel-1-0" aria-selected="true" aria-setsize="2" class="active heading" id="tab-label-1-0" role="tab" tabindex="0"></button>
            <button aria-controls="tab-panel-1-1" aria-selected="false" aria-setsize="2" class="heading" id="tab-label-1-1" role="tab" tabindex="-1"></button>
          </div>
        </div>
        <hr>
        <admiralty-tab label="'a'">
          test a
        </admiralty-tab>
        <admiralty-tab label="'b'">
          test b
        </admiralty-tab>
      </admiralty-tab-group>
    `);
  });

  it('renders selectedIndex>0', async () => {
    const page = await newSpecPage({
      components: [TabGroupComponent],
      html: `
      <admiralty-tab-group selected-index="1">
        <admiralty-tab label="'a'">test a</admiralty-tab>
        <admiralty-tab label="'b'">test b</admiralty-tab>
      </admiralty-tab-group>`,
    });
    expect(page.root).toMatchInlineSnapshot(`
      <admiralty-tab-group selected-index="1">
        <!---->
        <div class="tab-group-headers" role="tablist">
          <div class="headers">
            <button aria-controls="tab-panel-2-0" aria-selected="false" aria-setsize="2" class="heading" id="tab-label-2-0" role="tab" tabindex="-1"></button>
            <button aria-controls="tab-panel-2-1" aria-selected="true" aria-setsize="2" class="active heading" id="tab-label-2-1" role="tab" tabindex="0"></button>
          </div>
        </div>
        <hr>
        <admiralty-tab label="'a'">
          test a
        </admiralty-tab>
        <admiralty-tab label="'b'">
          test b
        </admiralty-tab>
      </admiralty-tab-group>
    `);
  });
});
