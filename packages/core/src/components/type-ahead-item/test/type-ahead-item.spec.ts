import { newSpecPage } from '@stencil/core/testing';
import { AdmiraltyTypeAheadItem } from '../type-ahead-item';

describe('admiralty-type-ahead-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AdmiraltyTypeAheadItem],
      html: `<admiralty-type-ahead-item value="test"></admiralty-type-ahead-item>`,
    });
    expect(page.root).toMatchInlineSnapshot(`<admiralty-type-ahead-item value="test"></admiralty-type-ahead-item>`);
  });
});
