import { newSpecPage } from '@stencil/core/testing';
import { HorizontalRuleComponent } from './horizontal-rule';

describe('admiralty-hr', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [HorizontalRuleComponent],
      html: '<admiralty-hr></admiralty-hr>',
    });
    expect(root).toEqualHtml(`
      <admiralty-hr>
        <hr/>
      </admiralty-hr>
    `);
  });
});
