import { newSpecPage } from '@stencil/core/testing';
import { InputInvalidComponent } from './input-invalid';

describe('input-invalid', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InputInvalidComponent],
      html: `<admiralty-input-invalid>Test</admiralty-input-invalid>`,
    });
    expect(page.root).toEqualHtml(`
       <admiralty-input-invalid>
        <admiralty-icon class="error-icon" name="priority-high"></admiralty-icon>
        <p>
        <span class="visually-hidden">
          Error:
        </span>
        Test
        </p>
</admiralty-input-invalid>
    `);
  });
});
