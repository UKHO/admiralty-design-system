import { newSpecPage } from '@stencil/core/testing';
import { ExpansionComponent } from './expansion';

describe('admiralty-expansion', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [ExpansionComponent],
      html: '<admiralty-expansion></admiralty-expansion>',
    });
    expect(root).toEqualHtml(`
      <admiralty-expansion>
        <section class="bordered expansion">
          <button aria-controls="admiralty-expansion-1-content" class="expansion-heading-button" id="admiralty-expansion-1-header" type="button">
            <h3></h3>
            <span class="visually-hidden">
              , Show this section
            </span>
            <admiralty-icon class="expansion-heading-icon" name="keyboard-arrow-down-rounded"></admiralty-icon>
          </button>
          <div aria-labelledby="admiralty-expansion-1-header" class="expansion-content" hidden="" id="admiralty-expansion-1-content"></div>
        </section>
      </admiralty-expansion>
    `);
  });
});
