import { newE2EPage } from '@stencil/core/testing';

describe('icon-side-nav-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<admiralty-icon-side-bar-item></admiralty-icon-side-bar-item>');
    const element = await page.find('admiralty-icon-side-bar-item');
    expect(element).toHaveClass('hydrated');
  });
});
