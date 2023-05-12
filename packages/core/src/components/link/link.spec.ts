import { newSpecPage } from '@stencil/core/testing';
import { LinkComponent } from './link';

describe('admiralty-link', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [LinkComponent],
      html: '<admiralty-link href="http://www.example.com">Link</admiralty-link>',
    });
    expect(root).toEqualHtml(`
      <admiralty-link href="http://www.example.com">
        <a href="http://www.example.com" target="_self">
          Link
        </a>
      </admiralty-link>
    `);
  });
});
