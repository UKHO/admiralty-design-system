import { newE2EPage } from '@stencil/core/testing';

describe('admiralty-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<admiralty-checkbox></admiralty-checkbox>');

    const element = await page.find('admiralty-checkbox');
    expect(element).toHaveClass('hydrated');
  });
});
