import { newSpecPage } from '@stencil/core/testing';
import { SideBarItemComponent } from '../side-bar-item/side-bar-item';
import { SideBarComponent } from './side-bar';

describe('admiralty-side-bar', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SideBarComponent],
      html: '<admiralty-side-bar></admiralty-side-bar>',
    });
    expect(root).toEqualHtml(`
      <admiralty-side-bar>
        <nav>
          <ul></ul>
          <ul>
            <img alt="UKHO Logo" aria-hidden="true" class="logo" src="svg/UKHO crest.svg">
          </ul>
        </nav>
      </admiralty-side-bar>
    `);
  });

  it('renders label', async () => {
    const { root } = await newSpecPage({
      components: [SideBarComponent],
      html: '<admiralty-side-bar label="test label"></admiralty-side-bar>',
    });
    expect(root).toEqualHtml(`
      <admiralty-side-bar label="test label">
        <nav aria-label="test label">
          <ul></ul>
          <ul>
            <img alt="UKHO Logo" aria-hidden="true" class="logo" src="svg/UKHO crest.svg">
          </ul>
        </nav>
      </admiralty-side-bar>
    `);
  });

  it('does not render the logo', async () => {
    const { root } = await newSpecPage({
      components: [SideBarComponent],
      html: '<admiralty-side-bar show-logo="false"></admiralty-side-bar>',
    });
    expect(root).toEqualHtml(`
      <admiralty-side-bar show-logo="false">
        <nav>
          <ul></ul>
          <ul></ul>
        </nav>
      </admiralty-side-bar>
    `);
  });

  it('renders one side nav item', async () => {
    const { root } = await newSpecPage({
      components: [SideBarComponent, SideBarItemComponent],
      html: `<admiralty-side-bar>
        <admiralty-side-bar-item>Test</admiralty-side-bar-item>
      </admiralty-side-bar>`,
    });
    expect(root).toEqualHtml(`
      <admiralty-side-bar>
        <nav>
          <ul>
            <admiralty-side-bar-item>
              <li>
                <a class="active" id="side-bar-item-1">
                  <div class="icon">
                    <admiralty-icon></admiralty-icon>
                  </div>
                  Test
                </a>
              </li>
            </admiralty-side-bar-item>
          </ul>
          <ul>
            <img alt="UKHO Logo" aria-hidden="true" class="logo" src="svg/UKHO crest.svg">
          </ul>
        </nav>
      </admiralty-side-bar>
    `);
  });

  it('renders 3 side nav items', async () => {
    const { root } = await newSpecPage({
      components: [SideBarComponent, SideBarItemComponent],
      html: `<admiralty-side-bar>
        <admiralty-side-bar-item>Test 1</admiralty-side-bar-item>
        <admiralty-side-bar-item>Test 2</admiralty-side-bar-item>
        <admiralty-side-bar-item>Test 3</admiralty-side-bar-item>
      </admiralty-side-bar>`,
    });
    expect(root).toEqualHtml(`
      <admiralty-side-bar>
        <nav>
          <ul>
            <admiralty-side-bar-item>
              <li>
                <a class="active" id="side-bar-item-2">
                  <div class="icon">
                    <admiralty-icon></admiralty-icon>
                  </div>
                  Test 1
                </a>
              </li>
            </admiralty-side-bar-item>
            <admiralty-side-bar-item>
              <li>
                <a class="active" id="side-bar-item-3">
                  <div class="icon">
                    <admiralty-icon></admiralty-icon>
                  </div>
                  Test 2
                </a>
              </li>
            </admiralty-side-bar-item>
            <admiralty-side-bar-item>
              <li>
                <a class="active" id="side-bar-item-4">
                  <div class="icon">
                    <admiralty-icon></admiralty-icon>
                  </div>
                  Test 3
                </a>
              </li>
            </admiralty-side-bar-item>
          </ul>
          <ul>
            <img alt="UKHO Logo" aria-hidden="true" class="logo" src="svg/UKHO crest.svg">
          </ul>
        </nav>
      </admiralty-side-bar>
    `);
  });

  it('renders one side nav item and one footer item', async () => {
    const { root } = await newSpecPage({
      components: [SideBarComponent, SideBarItemComponent],
      html: `<admiralty-side-bar>
        <admiralty-side-bar-item>Test</admiralty-side-bar-item>
        <admiralty-side-bar-item slot="footer">Footer Test</admiralty-side-bar-item>
      </admiralty-side-bar>`,
    });
    expect(root).toEqualHtml(`
      <admiralty-side-bar>
        <nav>
          <ul>
            <admiralty-side-bar-item>
              <li>
                <a class="active" id="side-bar-item-5">
                  <div class="icon">
                    <admiralty-icon></admiralty-icon>
                  </div>
                  Test
                </a>
              </li>
            </admiralty-side-bar-item>
          </ul>
          <ul>
            <admiralty-side-bar-item slot="footer">
              <li>
                <a class="active" id="side-bar-item-6">
                  <div class="icon">
                    <admiralty-icon></admiralty-icon>
                  </div>
                  Footer Test
                </a>
              </li>
            </admiralty-side-bar-item>
            <img alt="UKHO Logo" aria-hidden="true" class="logo" src="svg/UKHO crest.svg">
          </ul>
        </nav>
      </admiralty-side-bar>
    `);
  });
});
