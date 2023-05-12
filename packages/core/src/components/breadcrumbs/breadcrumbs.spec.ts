import { newSpecPage } from '@stencil/core/testing';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb';
import { BreadcrumbsComponent } from './breadcrumbs';

describe('admiralty-breadcrumbs', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [BreadcrumbsComponent],
      html: '<admiralty-breadcrumbs></admiralty-breadcrumbs>',
    });
    expect(root).toEqualHtml(`
      <admiralty-breadcrumbs>
        <mock:shadow-root>
          <nav aria-label="breadcrumbs" class="breadcrumbs">
            <slot></slot>
          </nav>
        </mock:shadow-root>
      </admiralty-breadcrumbs>
    `);
  });

  it('renders one breadcrumb', async () => {
    const { root } = await newSpecPage({
      components: [BreadcrumbsComponent, BreadcrumbComponent],
      html: `<admiralty-breadcrumbs>
          <admiralty-breadcrumb>Test1</admiralty-breadcrumb>
        </admiralty-breadcrumbs>`,
    });
    expect(root).toEqualHtml(`
      <admiralty-breadcrumbs>
        <mock:shadow-root>
        <nav aria-label="breadcrumbs" class="breadcrumbs">
        <slot></slot>
        </nav>
        </mock:shadow-root>
        <admiralty-breadcrumb>
          <mock:shadow-root>
             <a class="active" href="#">
               <slot></slot>
             </a>
          </mock:shadow-root>
          Test1
        </admiralty-breadcrumb>
      </admiralty-breadcrumbs>
    `);
  });

  it('renders three breadcrumbs', async () => {
    const { root } = await newSpecPage({
      components: [BreadcrumbsComponent, BreadcrumbComponent],
      html: `<admiralty-breadcrumbs>
          <admiralty-breadcrumb>Test1</admiralty-breadcrumb>
          <admiralty-breadcrumb>Test2</admiralty-breadcrumb>
          <admiralty-breadcrumb>Test3</admiralty-breadcrumb>
        </admiralty-breadcrumbs>`,
    });
    expect(root).toEqualHtml(`
      <admiralty-breadcrumbs>
      <mock:shadow-root>
        <nav aria-label="breadcrumbs" class="breadcrumbs">
        <slot></slot>
        </nav>
      </mock:shadow-root>
        <admiralty-breadcrumb>
          <mock:shadow-root>
             <a href="#">
               <slot></slot>
             </a>
          </mock:shadow-root>
          Test1
        </admiralty-breadcrumb>
        <admiralty-breadcrumb>
          <mock:shadow-root>
             <admiralty-icon class="breadcrumb-icon" icon-name="chevron-right"></admiralty-icon>
             <a href="#">
               <slot></slot>
             </a>
          </mock:shadow-root>
          Test2
        </admiralty-breadcrumb>
        <admiralty-breadcrumb>
          <mock:shadow-root>
             <admiralty-icon class="breadcrumb-icon" icon-name="chevron-right"></admiralty-icon>
             <a class="active" href="#">
               <slot></slot>
             </a>
          </mock:shadow-root>
          Test3
        </admiralty-breadcrumb>
      </admiralty-breadcrumbs>
    `);
  });
});
