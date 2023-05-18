import { newE2EPage } from '@stencil/core/testing';

describe('tab-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<admiralty-tab-group></admiralty-tab-group>');

    const element = await page.find('admiralty-tab-group');
    expect(element).toHaveClass('hydrated');
  });
});
