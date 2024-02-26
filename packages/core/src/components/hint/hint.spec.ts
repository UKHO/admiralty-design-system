import { newSpecPage } from '@stencil/core/testing';
import { HintComponent } from './hint';

describe('admiralty-hint', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HintComponent],
      html: `<admiralty-hint>test</admiralty-hint>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-hint>
        <p>
          test
        </p>
      </admiralty-hint>
    `);
  });
  it('renders as disabled', async () => {
    const page = await newSpecPage({
      components: [HintComponent],
      html: `<admiralty-hint disabled>Disabled</admiralty-hint>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-hint disabled>
        <p class="disabled">
          Disabled
        </p>
      </admiralty-hint>`);
  });
});
