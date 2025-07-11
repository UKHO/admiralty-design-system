import { newE2EPage } from '@stencil/core/testing';

describe('icon-side-nav-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<admiralty-icon-side-nav-item></admiralty-icon-side-nav-item>');
    const element = await page.find('admiralty-icon-side-nav-item');
    expect(element).toHaveClass('hydrated');
  });
});
