import { newSpecPage } from '@stencil/core/testing';
import { PaginatorComponent } from './paginator';

describe('admiralty-paginator', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [PaginatorComponent],
      html: '<admiralty-paginator></admiralty-paginator>',
    });
    expect(root).toEqualHtml(`
      <admiralty-paginator>
        <nav aria-label="pagination" class="standard">
          <p aria-live="polite"></p>
          <admiralty-button aria-disabled="" aria-label="Previous Page" disabled="" icon="chevron-left" variant="icon"></admiralty-button>
          <admiralty-button aria-disabled="" aria-label="Next Page" disabled="" icon="chevron-right" variant="icon"></admiralty-button>
        </nav>
      </admiralty-paginator>
    `);
  });
});
