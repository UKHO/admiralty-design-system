import { newE2EPage } from '@stencil/core/testing';

describe('text-side-bar-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<admiralty-text-side-bar-item></admiralty-text-side-bar-item>');
    const element = await page.find('admiralty-text-side-bar-item');
    expect(element).toHaveClass('hydrated');
  });
});
