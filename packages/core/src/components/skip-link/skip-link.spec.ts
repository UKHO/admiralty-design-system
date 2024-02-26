import { newSpecPage } from '@stencil/core/testing';
import { SkipLinkComponent } from './skip-link';

describe('admiralty-link', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SkipLinkComponent],
      html: '<admiralty-skip-link href="#main-content"></admiralty-skip-link>',
    });
    expect(root).toEqualHtml(`
      <admiralty-skip-link href="#main-content">
        <a class="skip-link" href="#main-content">
          Skip to main content
        </a>
      </admiralty-skip-link>
    `);
  });
});
