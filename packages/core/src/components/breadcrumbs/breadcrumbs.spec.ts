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
        <nav aria-label="breadcrumbs" class="breadcrumbs"></nav>
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
        <nav aria-label="breadcrumbs" class="breadcrumbs">
          <admiralty-breadcrumb>
            <a class="active" href="#">
              Test1
            </a>
          </admiralty-breadcrumb>
        </nav>
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
        <nav aria-label="breadcrumbs" class="breadcrumbs">
          <admiralty-breadcrumb>
            <a href="#">
              Test1
            </a>
          </admiralty-breadcrumb>
          <admiralty-breadcrumb>
            <admiralty-icon class="breadcrumb-icon" icon-name="chevron-right"></admiralty-icon>
            <a href="#">
              Test2
            </a>
          </admiralty-breadcrumb>
          <admiralty-breadcrumb>
            <admiralty-icon class="breadcrumb-icon" icon-name="chevron-right"></admiralty-icon>
            <a class="active" href="#">
              Test3
            </a>
          </admiralty-breadcrumb>
        </nav>
      </admiralty-breadcrumbs>
    `);
  });
});
