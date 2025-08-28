import { newE2EPage } from '@stencil/core/testing';

describe('icon-side-bar', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<admiralty-icon-side-bar></admiralty-icon-side-bar>');
    const element = await page.find('admiralty-icon-side-bar');
    expect(element).toHaveClass('hydrated');
  });
});
