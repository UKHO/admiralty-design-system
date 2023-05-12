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
      <mock:shadow-root>
        <label>
            <slot></slot>
        </label>
      </mock:shadow-root>
      Test
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
      <mock:shadow-root>
        <label class="disabled">
            <slot></slot>
        </label>
      </mock:shadow-root>
      </admiralty-label>
    `);
  });

  it('renders with the correct for attribute', async () => {
    const page = await newSpecPage({
      components: [LabelComponent],
      html: `<admiralty-label for="test"></admiralty-label>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-label for="test">
      <mock:shadow-root>
        <label htmlfor="test">
            <slot></slot>
        </label>
      </mock:shadow-root>
      </admiralty-label>
    `);
  });
});
