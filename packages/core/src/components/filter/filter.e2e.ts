import { newE2EPage } from '@stencil/core/testing';

describe('filter', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<admiralty-filter></admiralty-filter>');
    const element = await page.find('admiralty-filter');
    expect(element).toHaveClass('hydrated');
  });
});
