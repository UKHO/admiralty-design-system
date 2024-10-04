import { newSpecPage } from '@stencil/core/testing';
import { SideNavItemComponent } from '../side-nav-item/side-nav-item';
import { SideNavComponent } from './side-nav';

describe('admiralty-side-nav', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SideNavComponent],
      html: '<admiralty-side-nav></admiralty-side-nav>',
    });
    expect(root).toEqualHtml(`
      <admiralty-side-nav>
        <nav class="side-nav"></nav>
      </admiralty-side-nav>
    `);
  });

  it('renders label', async () => {
    const { root } = await newSpecPage({
      components: [SideNavComponent],
      html: '<admiralty-side-nav label="test label"></admiralty-side-nav>',
    });
    expect(root).toEqualHtml(`
      <admiralty-side-nav label="test label">
        <nav aria-label="test label" class="side-nav"></nav>
      </admiralty-side-nav>
    `);
  });

  it('renders one side nav item', async () => {
    const { root } = await newSpecPage({
      components: [SideNavComponent, SideNavItemComponent],
      html: `<admiralty-side-nav>
        <admiralty-side-nav-item></admiralty-side-nav-item>
      </admiralty-side-nav>`,
    });
    expect(root).toEqualHtml(`
      <admiralty-side-nav>
        <nav class="side-nav">
          <admiralty-side-nav-item>
            <a class="section"></a>
          </admiralty-side-nav-item>
        </nav>
      </admiralty-side-nav>
    `);
  });

  it('renders 3 side nav items', async () => {
    const { root } = await newSpecPage({
      components: [SideNavComponent, SideNavItemComponent],
      html: `<admiralty-side-nav>
        <admiralty-side-nav-item></admiralty-side-nav-item>
        <admiralty-side-nav-item></admiralty-side-nav-item>
        <admiralty-side-nav-item></admiralty-side-nav-item>
      </admiralty-side-nav>`,
    });
    expect(root).toEqualHtml(`
      <admiralty-side-nav>
        <nav class="side-nav">
          <admiralty-side-nav-item>
            <a class="section"></a>
          </admiralty-side-nav-item>
          <admiralty-side-nav-item>
            <a class="section"></a>
          </admiralty-side-nav-item>
          <admiralty-side-nav-item>
            <a class="section"></a>
          </admiralty-side-nav-item>
        </nav>
      </admiralty-side-nav>
    `);
  });
});
