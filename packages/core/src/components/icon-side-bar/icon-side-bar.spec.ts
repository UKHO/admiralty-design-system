import { newSpecPage } from '@stencil/core/testing';
import { IconSideBarItemComponent } from '../icon-side-bar-item/icon-side-bar-item';
import { IconSideBarComponent } from './icon-side-bar';

describe('admiralty-icon-side-bar', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [IconSideBarComponent],
      html: '<admiralty-icon-side-bar></admiralty-icon-side-bar>',
    });
    expect(root).toEqualHtml(`
      <admiralty-icon-side-bar>
        <nav style="width: 150px;">
          <ul></ul>
          <ul>
            <img alt="UKHO Logo" aria-hidden="true" class="logo" src="svg/UKHO crest.svg">
          </ul>
        </nav>
      </admiralty-icon-side-bar>
    `);
  });

  it('renders label', async () => {
    const { root } = await newSpecPage({
      components: [IconSideBarComponent],
      html: '<admiralty-icon-side-bar label="test label"></admiralty-icon-side-bar>',
    });
    expect(root).toEqualHtml(`
      <admiralty-icon-side-bar label="test label">
        <nav aria-label="test label" style="width: 150px;">
          <ul></ul>
          <ul>
            <img alt="UKHO Logo" aria-hidden="true" class="logo" src="svg/UKHO crest.svg">
          </ul>
        </nav>
      </admiralty-icon-side-bar>
    `);
  });

  it('does not render the logo', async () => {
    const { root } = await newSpecPage({
      components: [IconSideBarComponent],
      html: '<admiralty-icon-side-bar show-logo="false"></admiralty-icon-side-bar>',
    });
    expect(root).toEqualHtml(`
      <admiralty-icon-side-bar show-logo="false">
        <nav style="width: 150px;">
          <ul></ul>
          <ul></ul>
        </nav>
      </admiralty-icon-side-bar>
    `);
  });

  it('renders one side nav item', async () => {
    const { root } = await newSpecPage({
      components: [IconSideBarComponent, IconSideBarItemComponent],
      html: `<admiralty-icon-side-bar>
        <admiralty-icon-side-bar-item item-text="Test" slot="items"></admiralty-icon-side-bar-item>
      </admiralty-icon-side-bar>`,
    });
    expect(root).toEqualHtml(`
      <admiralty-icon-side-bar>
        <nav style="width: 150px;">
          <ul>
            <admiralty-icon-side-bar-item data-icon-side-bar-item-id="icon-side-bar-item-1" item-text="Test" slot="items">
              <li>
                <a class="active icon-side-bar-item-link" id="icon-side-bar-item-anchor-1">
                  <div class="icon">
                    <admiralty-icon></admiralty-icon>
                  </div>
                  Test
                </a>
              </li>
            </admiralty-icon-side-bar-item>
          </ul>
          <ul>
            <img alt="UKHO Logo" aria-hidden="true" class="logo" src="svg/UKHO crest.svg">
          </ul>
        </nav>
      </admiralty-icon-side-bar>
    `);
  });

  it('renders 3 side nav items', async () => {
    const { root } = await newSpecPage({
      components: [IconSideBarComponent, IconSideBarItemComponent],
      html: `<admiralty-icon-side-bar>
        <admiralty-icon-side-bar-item item-text="Test 1" slot="items"></admiralty-icon-side-bar-item>
        <admiralty-icon-side-bar-item item-text="Test 2" slot="items"></admiralty-icon-side-bar-item>
        <admiralty-icon-side-bar-item item-text="Test 3" slot="items"></admiralty-icon-side-bar-item>
      </admiralty-icon-side-bar>`,
    });
    expect(root).toEqualHtml(`
      <admiralty-icon-side-bar>
        <nav style="width: 150px;">
          <ul>
            <admiralty-icon-side-bar-item data-icon-side-bar-item-id="icon-side-bar-item-2" item-text="Test 1" slot="items">
              <li>
                <a class="active icon-side-bar-item-link" id="icon-side-bar-item-anchor-2">
                  <div class="icon">
                    <admiralty-icon></admiralty-icon>
                  </div>
                  Test 1
                </a>
              </li>
            </admiralty-icon-side-bar-item>
            <admiralty-icon-side-bar-item data-icon-side-bar-item-id="icon-side-bar-item-3" item-text="Test 2" slot="items">
              <li>
                <a class="active icon-side-bar-item-link" id="icon-side-bar-item-anchor-3">
                  <div class="icon">
                    <admiralty-icon></admiralty-icon>
                 </div>
                  Test 2
                </a>
              </li>
            </admiralty-icon-side-bar-item>
            <admiralty-icon-side-bar-item data-icon-side-bar-item-id="icon-side-bar-item-4" item-text="Test 3" slot="items">
              <li>
                <a class="active icon-side-bar-item-link" id="icon-side-bar-item-anchor-4">
                  <div class="icon">
                    <admiralty-icon></admiralty-icon>
                  </div>
                  Test 3
                </a>
              </li>
            </admiralty-icon-side-bar-item>
          </ul>
          <ul>
            <img alt="UKHO Logo" aria-hidden="true" class="logo" src="svg/UKHO crest.svg">
          </ul>
        </nav>
      </admiralty-icon-side-bar>
    `);
  });

  it('renders one side nav item and one footer item', async () => {
    const { root } = await newSpecPage({
      components: [IconSideBarComponent, IconSideBarItemComponent],
      html: `<admiralty-icon-side-bar>
        <admiralty-icon-side-bar-item item-text="Test" slot="items"></admiralty-icon-side-bar-item>
        <admiralty-icon-side-bar-item item-text="Footer Test" slot="footer"></admiralty-icon-side-bar-item>
      </admiralty-icon-side-bar>`,
    });
    expect(root).toEqualHtml(`
      <admiralty-icon-side-bar>
        <nav style="width: 150px;">
          <ul>
            <admiralty-icon-side-bar-item data-icon-side-bar-item-id="icon-side-bar-item-5" item-text="Test" slot="items">
              <li>
                <a class="active icon-side-bar-item-link" id="icon-side-bar-item-anchor-5">
                  <div class="icon">
                    <admiralty-icon></admiralty-icon>
                  </div>
                  Test
                </a>
              </li>
            </admiralty-icon-side-bar-item>
          </ul>
          <ul>
            <admiralty-icon-side-bar-item data-icon-side-bar-item-id="icon-side-bar-item-6" item-text="Footer Test" slot="footer">
              <li>
                <a class="active icon-side-bar-item-link" id="icon-side-bar-item-anchor-6">
                  <div class="icon">
                    <admiralty-icon></admiralty-icon>
                  </div>
                  Footer Test
                </a>
              </li>
            </admiralty-icon-side-bar-item>
            <img alt="UKHO Logo" aria-hidden="true" class="logo" src="svg/UKHO crest.svg">
          </ul>
        </nav>
      </admiralty-icon-side-bar>
    `);
  });
});
