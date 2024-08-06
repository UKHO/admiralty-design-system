import { newE2EPage } from '@stencil/core/testing';

describe('pill', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<admiralty-pill></admiralty-pill>');
    const element = await page.find('admiralty-pill');
    expect(element).toHaveClass('hydrated');
  });
});
