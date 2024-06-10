import { newSpecPage } from '@stencil/core/testing';
import { PillComponent } from './pill';

describe('admiralty-pill', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [PillComponent],
      html: '<admiralty-pill></admiralty-pill>',
    });
    expect(root).toEqualHtml(`
      <admiralty-pill>
        <span class="admiralty-blue pill">
          <span class="pill-item pill-item-text"></span>
        </span>
      </admiralty-pill>
    `);
  });
});
