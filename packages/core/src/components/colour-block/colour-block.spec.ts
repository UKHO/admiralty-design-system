import { newSpecPage } from '@stencil/core/testing';
import { ColourBlockComponent } from './colour-block';

describe('admiralty-colour-block', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [ColourBlockComponent],
      html: '<admiralty-colour-block></admiralty-colour-block>',
    });
    expect(root).toEqualHtml(`
      <admiralty-colour-block>
        <div class="admiralty-blue colourBlock">
          <h2></h2>
          <div class="content white-text"></div>
        </div>
      </admiralty-colour-block>
    `);
  });
});
