import { newE2EPage } from '@stencil/core/testing';

describe('expansion', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<admiralty-expansion></admiralty-expansion>');
    const element = await page.find('admiralty-expansion');
    expect(element).toHaveClass('hydrated');
  });
});
