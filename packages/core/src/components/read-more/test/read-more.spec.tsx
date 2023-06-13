import { newSpecPage } from '@stencil/core/testing';
import { ReadMoreComponent } from '../read-more';

describe('read-more', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ReadMoreComponent],
      html: `<admiralty-read-more></admiralty-read-more>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-read-more>
        <slot></slot>
      </admiralty-read-more>
    `);
  });
});
