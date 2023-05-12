import { newE2EPage } from '@stencil/core/testing';

describe('admiralty-label', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<admiralty-label></admiralty-label>');

    const element = await page.find('admiralty-label');
    expect(element).toHaveClass('hydrated');
  });
});
