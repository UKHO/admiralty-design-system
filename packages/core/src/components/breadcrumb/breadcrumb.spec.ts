import { newSpecPage } from '@stencil/core/testing';
import { BreadcrumbComponent } from './breadcrumb';

describe('admiralty-breadcrumb', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [BreadcrumbComponent],
      html: '<admiralty-breadcrumb></admiralty-breadcrumb>',
    });
    expect(root).toEqualHtml(`
      <admiralty-breadcrumb>
        <admiralty-icon class="breadcrumb-icon" icon-name="chevron-right"></admiralty-icon>
        <a href="#"></a>
      </admiralty-breadcrumb>
    `);
  });

  it('renders with the correct link', async () => {
    const { root } = await newSpecPage({
      components: [BreadcrumbComponent],
      html: '<admiralty-breadcrumb href="https://www.example.com">Test</admiralty-breadcrumb>',
    });
    expect(root).toEqualHtml(`
      <admiralty-breadcrumb href="https://www.example.com">
        <admiralty-icon class="breadcrumb-icon" icon-name="chevron-right"></admiralty-icon>
        <a href="https://www.example.com">
          Test
        </a>
      </admiralty-breadcrumb>
    `);
  });
});
