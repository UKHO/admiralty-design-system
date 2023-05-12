import { newE2EPage } from '@stencil/core/testing';

describe('paginator', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<admiralty-paginator></admiralty-paginator>');
    const element = await page.find('admiralty-paginator');
    expect(element).toHaveClass('hydrated');
  });
});
