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
        <header>
          <div class="headers"></div>
          <hr>
        </header>
        <section></section>
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
        <header>
          <div class="headers">
            <div class="active heading" data-idx="0"></div>
            <div class="heading" data-idx="1"></div>
          </div>
          <hr>
        </header>
        <section>
          <admiralty-tab label="'a'">
            test a
          </admiralty-tab>
          <admiralty-tab label="'b'">
            test b
          </admiralty-tab>
        </section>
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
        <header>
          <div class="headers">
            <div class="heading" data-idx="0"></div>
            <div class="active heading" data-idx="1"></div>
          </div>
          <hr>
        </header>
        <section>
          <admiralty-tab label="'a'">
            test a
          </admiralty-tab>
          <admiralty-tab label="'b'">
            test b
          </admiralty-tab>
        </section>
      </admiralty-tab-group>
    `);
  });
});
