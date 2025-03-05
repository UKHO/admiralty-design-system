import { newE2EPage } from '@stencil/core/testing';

describe('side-nav-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<admiralty-side-nav-item></admiralty-side-nav-item>');
    const element = await page.find('admiralty-side-nav-item');
    expect(element).toHaveClass('hydrated');
  });
});
