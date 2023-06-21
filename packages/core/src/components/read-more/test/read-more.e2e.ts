import { newE2EPage } from '@stencil/core/testing';

describe('read-more', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<admiralty-read-more></admiralty-read-more>');

    const element = await page.find('admiralty-read-more');
    expect(element).toHaveClass('hydrated');
  });
});
