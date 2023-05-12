import { newE2EPage } from '@stencil/core/testing';

describe('icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<admiralty-icon></admiralty-icon>');

    const element = await page.find('admiralty-icon');
    expect(element).toHaveClass('hydrated');
  });
});
