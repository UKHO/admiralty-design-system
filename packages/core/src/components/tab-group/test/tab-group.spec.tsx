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
        <div class="tab-group-body-container"></div>
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
            <button aria-controls="tab-panel-1-0" aria-selected="" aria-setsize="2" class="active heading" data-idx="0" id="tab-label-1-0" role="tab"></button>
            <button aria-controls="tab-panel-1-1" aria-setsize="2" class="heading" data-idx="1" id="tab-label-1-1" role="tab"></button>
          </div>
        </div>
        <hr>
        <div class="tab-group-body-container">
          <admiralty-tab label="'a'">
            test a
          </admiralty-tab>
          <admiralty-tab label="'b'">
            test b
          </admiralty-tab>
        </div>
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
            <button aria-controls="tab-panel-2-0" aria-setsize="2" class="heading" data-idx="0" id="tab-label-2-0" role="tab"></button>
            <button aria-controls="tab-panel-2-1" aria-selected="" aria-setsize="2" class="active heading" data-idx="1" id="tab-label-2-1" role="tab"></button>
          </div>
        </div>
        <hr>
        <div class="tab-group-body-container">
          <admiralty-tab label="'a'">
            test a
          </admiralty-tab>
          <admiralty-tab label="'b'">
            test b
          </admiralty-tab>
        </div>
      </admiralty-tab-group>
    `);
  });
});
