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
        <div class="headers">
          <div class="active header" data-idx="0"></div>
          <div class="header" data-idx="1"></div>
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
        <div class="headers">
          <div class="header" data-idx="0"></div>
          <div class="active header" data-idx="1"></div>
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
