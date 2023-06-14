import { newSpecPage } from '@stencil/core/testing';
import { LabelComponent } from './label';

describe('admiralty-label', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LabelComponent],
      html: `<admiralty-label>Test</admiralty-label>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-label>
        <label>
          Test
        </label>
      </admiralty-label>
    `);
  });
  it('renders disabled', async () => {
    const page = await newSpecPage({
      components: [LabelComponent],
      html: `<admiralty-label disabled></admiralty-label>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-label disabled>
        <label class="disabled">
        </label>
      </admiralty-label>
    `);
  });

  it('renders with the correct for attribute', async () => {
    const page = await newSpecPage({
      components: [LabelComponent],
      html: `<admiralty-label for="test">Stuff</admiralty-label>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-label for="test">
        <label htmlfor="test">
            Stuff
        </label>
      </admiralty-label>
    `);
  });
});
