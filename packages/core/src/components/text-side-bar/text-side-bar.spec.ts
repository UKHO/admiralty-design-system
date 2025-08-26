import { newSpecPage } from '@stencil/core/testing';
import { TextSideBarItemComponent } from '../text-side-bar-item/text-side-bar-item';
import { TextSideBarComponent } from './text-side-bar';

describe('admiralty-text-side-bar', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [TextSideBarComponent],
      html: '<admiralty-text-side-bar></admiralty-text-side-bar>',
    });
    expect(root).toEqualHtml(`
      <admiralty-text-side-bar>
        <nav style="width: 150px;">
          <ul></ul>
          <ul>
            <img alt="UKHO Logo" aria-hidden="true" class="logo" src="svg/UKHO crest.svg">
          </ul>
        </nav>
      </admiralty-text-side-bar>
    `);
  });

  it('renders label', async () => {
    const { root } = await newSpecPage({
      components: [TextSideBarComponent],
      html: '<admiralty-text-side-bar label="test label"></admiralty-text-side-bar>',
    });
    expect(root).toEqualHtml(`
      <admiralty-text-side-bar label="test label">
        <nav aria-label="test label" style="width: 150px;">
          <ul></ul>
          <ul>
            <img alt="UKHO Logo" aria-hidden="true" class="logo" src="svg/UKHO crest.svg">
          </ul>
        </nav>
      </admiralty-text-side-bar>
    `);
  });

  it('does not render the logo', async () => {
    const { root } = await newSpecPage({
      components: [TextSideBarComponent],
      html: '<admiralty-text-side-bar show-logo="false"></admiralty-text-side-bar>',
    });
    expect(root).toEqualHtml(`
      <admiralty-text-side-bar show-logo="false">
        <nav style="width: 150px;">
          <ul></ul>
          <ul></ul>
        </nav>
      </admiralty-text-side-bar>
    `);
  });

  it('renders one side nav item', async () => {
    const { root } = await newSpecPage({
      components: [TextSideBarComponent, TextSideBarItemComponent],
      html: `<admiralty-text-side-bar>
        <admiralty-text-side-bar-item item-text="Test" slot="items"></admiralty-text-side-bar-item>
      </admiralty-text-side-bar>`,
    });
    expect(root).toEqualHtml(`
      <admiralty-text-side-bar>
        <nav style="width: 150px;">
          <ul>
            <admiralty-text-side-bar-item data-text-side-bar-item-id="text-side-bar-item-1" item-text="Test" slot="items">
              <li>
               <div class="expandable-item">
                  <button class="expandable-item-button" id="text-side-bar-item-button-1">
                    Test
                    <div class="icon">
                      <admiralty-icon name="keyboard-arrow-down-rounded" size="30"></admiralty-icon>
                    </div>
                  </button>
                  <div class="slot" hidden=""></div>
                </div>
              </li>
            </admiralty-text-side-bar-item>
          </ul>
          <ul>
            <img alt="UKHO Logo" aria-hidden="true" class="logo" src="svg/UKHO crest.svg">
          </ul>
        </nav>
      </admiralty-text-side-bar>
    `);
  });

  it('renders 3 side nav items', async () => {
    const { root } = await newSpecPage({
      components: [TextSideBarComponent, TextSideBarItemComponent],
      html: `<admiralty-text-side-bar>
        <admiralty-text-side-bar-item item-text="Test 1" slot="items"></admiralty-text-side-bar-item>
        <admiralty-text-side-bar-item item-text="Test 2" slot="items"></admiralty-text-side-bar-item>
        <admiralty-text-side-bar-item item-text="Test 3" slot="items"></admiralty-text-side-bar-item>
      </admiralty-text-side-bar>`,
    });
    expect(root).toEqualHtml(`
      <admiralty-text-side-bar>
        <nav style="width: 150px;">
          <ul>
            <admiralty-text-side-bar-item data-text-side-bar-item-id="text-side-bar-item-2" item-text="Test 1" slot="items">
              <li>
                <div class="expandable-item">
                  <button class="expandable-item-button" id="text-side-bar-item-button-2">
                    Test 1
                    <div class="icon">
                      <admiralty-icon name="keyboard-arrow-down-rounded" size="30"></admiralty-icon>
                    </div>
                  </button>
                  <div class="slot" hidden=""></div>
                </div>
              </li>
            </admiralty-text-side-bar-item>
            <admiralty-text-side-bar-item data-text-side-bar-item-id="text-side-bar-item-3" item-text="Test 2" slot="items">
              <li>
                <div class="expandable-item">
                  <button class="expandable-item-button" id="text-side-bar-item-button-3">
                    Test 2
                    <div class="icon">
                      <admiralty-icon name="keyboard-arrow-down-rounded" size="30"></admiralty-icon>
                    </div>
                  </button>
                  <div class="slot" hidden=""></div>
                </div>
              </li>
            </admiralty-text-side-bar-item>
            <admiralty-text-side-bar-item data-text-side-bar-item-id="text-side-bar-item-4" item-text="Test 3" slot="items">
              <li>
                <div class="expandable-item">
                  <button class="expandable-item-button" id="text-side-bar-item-button-4">
                    Test 3
                    <div class="icon">
                      <admiralty-icon name="keyboard-arrow-down-rounded" size="30"></admiralty-icon>
                    </div>
                  </button>
                  <div class="slot" hidden=""></div>
                </div>
              </li>
            </admiralty-text-side-bar-item>
          </ul>
          <ul>
            <img alt="UKHO Logo" aria-hidden="true" class="logo" src="svg/UKHO crest.svg">
          </ul>
        </nav>
      </admiralty-text-side-bar>
    `);
  });

  it('renders one side nav item and one footer item', async () => {
    const { root } = await newSpecPage({
      components: [TextSideBarComponent, TextSideBarItemComponent],
      html: `<admiralty-text-side-bar>
        <admiralty-text-side-bar-item item-text="Test" slot="items"></admiralty-text-side-bar-item>
        <admiralty-text-side-bar-item item-text="Footer Test" slot="footer"></admiralty-text-side-bar-item>
      </admiralty-text-side-bar>`,
    });
    expect(root).toEqualHtml(`
      <admiralty-text-side-bar>
        <nav style="width: 150px;">
          <ul>
            <admiralty-text-side-bar-item data-text-side-bar-item-id="text-side-bar-item-5" item-text="Test" slot="items">
              <li>
                <div class="expandable-item">
                  <button class="expandable-item-button" id="text-side-bar-item-button-5">
                    Test
                    <div class="icon">
                      <admiralty-icon name="keyboard-arrow-down-rounded" size="30"></admiralty-icon>
                    </div>
                  </button>
                  <div class="slot" hidden=""></div>
                </div>
              </li>
            </admiralty-text-side-bar-item>
          </ul>
          <ul>
            <admiralty-text-side-bar-item data-text-side-bar-item-id="text-side-bar-item-6" item-text="Footer Test" slot="footer">
              <li>
                <div class="expandable-item">
                  <button class="expandable-item-button" id="text-side-bar-item-button-6">
                    Footer Test
                    <div class="icon">
                      <admiralty-icon name="keyboard-arrow-down-rounded" size="30"></admiralty-icon>
                    </div>
                  </button>
                  <div class="slot" hidden=""></div>
                </div>
              </li>
            </admiralty-text-side-bar-item>
            <img alt="UKHO Logo" aria-hidden="true" class="logo" src="svg/UKHO crest.svg">
          </ul>
        </nav>
      </admiralty-text-side-bar>
    `);
  });
});
