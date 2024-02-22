import { newE2EPage } from '@stencil/core/testing';

describe('link', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<admiralty-skip-link></admiralty-skip-link>');
    const element = await page.find('admiralty-skip-link');
    expect(element).toHaveClass('hydrated');
  });
});
