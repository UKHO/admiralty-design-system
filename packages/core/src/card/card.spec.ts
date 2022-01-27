import { html, fixture } from '@open-wc/testing-helpers';

import './card';

describe('Card', () => {
  it('should be rendered to the DOM', async () => {
    const el = await fixture(html`<ukho-card>Test</ukho-card>`);
    expect(el.shadowRoot).not.toBeNull();
  });
});
