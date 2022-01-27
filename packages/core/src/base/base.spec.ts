import { html, fixture } from '@open-wc/testing-helpers';

import './base';

describe('Base', () => {
  it('should be rendered to the DOM', async () => {
    const el = await fixture(html`<ukho-base></ukho-base>`);
    expect(el.shadowRoot).not.toBeNull();
  });
});
