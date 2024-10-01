import { newE2EPage } from '@stencil/core/testing';

describe('side-bar', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<admiralty-side-bar></admiralty-side-bar>');
    const element = await page.find('admiralty-side-bar');
    expect(element).toHaveClass('hydrated');
  });
});
