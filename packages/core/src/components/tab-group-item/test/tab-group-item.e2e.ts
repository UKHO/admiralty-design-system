import { newE2EPage } from '@stencil/core/testing';

describe('tab-group-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<admiralty-tab-group-item></admiralty-tab-group-item>');

    const element = await page.find('admiralty-tab-group-item');
    expect(element).toHaveClass('hydrated');
  });
});
