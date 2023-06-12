import { newSpecPage } from '@stencil/core/testing';
import { InputError } from './input-error';

describe('input-error', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InputError],
      html: `<admiralty-input-error>Test</admiralty-input-error>`,
    });
    expect(page.root).toEqualHtml(`
       <admiralty-input-error>
        <admiralty-icon class="error-icon" icon-name="exclamation"></admiralty-icon>
        <p>
        Test
        </p>
</admiralty-input-error>
    `);
  });
});
