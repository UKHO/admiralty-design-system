import { newE2EPage } from '@stencil/core/testing';

describe('skeleton', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<admiralty-skeleton></admiralty-skeleton>');
    const element = await page.find('admiralty-skeleton');
    expect(element).toHaveClass('hydrated');
  });
});
