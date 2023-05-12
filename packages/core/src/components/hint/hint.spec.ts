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
        <mock:shadow-root>
         <p>
            <slot></slot>
         </p>
        </mock:shadow-root>
        test
      </admiralty-hint>
    `);
  });
  it('renders as disabled', async () => {
    const page = await newSpecPage({
      components: [HintComponent],
      html: `<admiralty-hint disabled></admiralty-hint>`,
    });
    expect(page.root).toEqualHtml(`
        <admiralty-hint disabled>
        <mock:shadow-root>
            <p class="disabled">
                <slot></slot>
            </p>
        </mock:shadow-root>
      </admiralty-hint>`);
  });
});
