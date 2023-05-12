import { newSpecPage } from '@stencil/core/testing';
import { FilterComponent } from './filter';

describe('admiralty-filter', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FilterComponent],
      html: `<admiralty-filter></admiralty-filter>`,
    });
    expect(page.root).toEqualHtml(`
    <admiralty-filter>
      <div class="filter-container">
        <div class="filter-heading">
          <div class="filter-title">Filter</div>
          <div class="button-wrapper">
            <button aria-label="Clear selected filters" class="text-link" type="reset">
              Clear
            </button>
          </div>
        </div>
        <div></div>
        <div>
          <admiralty-button>
            Apply filters
          </admiralty-button>
        </div>
      </div>
    </admiralty-filter>

    `);
  });
});
