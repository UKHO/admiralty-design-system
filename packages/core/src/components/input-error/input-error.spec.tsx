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
       <mock:shadow-root>
        <admiralty-icon class="error-icon" icon-name="exclamation"></admiralty-icon>
        <p>
        <slot></slot>
        </p>
       </mock:shadow-root>
       Test
</admiralty-input-error>
    `);
  });
});
