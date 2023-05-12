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
        <mock:shadow-root>
           <admiralty-icon class="breadcrumb-icon" icon-name="chevron-right"></admiralty-icon>
           <a href="#">
             <slot></slot>
           </a>
        </mock:shadow-root>
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
        <mock:shadow-root>
           <admiralty-icon class="breadcrumb-icon" icon-name="chevron-right"></admiralty-icon>
           <a href="https://www.example.com">
             <slot></slot>
           </a>
        </mock:shadow-root>
        Test
      </admiralty-breadcrumb>
    `);
  });
});
