import { newE2EPage } from '@stencil/core/testing';

describe('text-side-bar', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<admiralty-text-side-bar></admiralty-text-side-bar>');
    const element = await page.find('admiralty-text-side-bar');
    expect(element).toHaveClass('hydrated');
  });
});
