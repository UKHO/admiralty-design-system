import { newE2EPage } from '@stencil/core/testing';

describe('admiralty-type-ahead-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<admiralty-type-ahead-item></admiralty-type-ahead-item>');

    const element = await page.find('admiralty-type-ahead-item');
    expect(element).toHaveClass('hydrated');
  });
});
