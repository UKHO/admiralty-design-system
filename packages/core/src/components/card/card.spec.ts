import { newSpecPage } from '@stencil/core/testing';
import { CardComponent } from './card';

describe('admiralty-card', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [CardComponent],
      html: '<admiralty-card></admiralty-card>',
    });
    expect(root).toEqualHtml(`
      <admiralty-card>
        <section class="card">
          <div></div>
        </section>
      </admiralty-card>
    `);
  });
});
