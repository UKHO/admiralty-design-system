import { newE2EPage } from '@stencil/core/testing';

describe('link', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<admiralty-link></admiralty-link>');
    const element = await page.find('admiralty-link');
    expect(element).toHaveClass('hydrated');
  });
});
