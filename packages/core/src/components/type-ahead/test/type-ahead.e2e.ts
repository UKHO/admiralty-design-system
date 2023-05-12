import { newE2EPage } from '@stencil/core/testing';

describe('type-ahead', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<admiralty-type-ahead></admiralty-type-ahead>');

    const element = await page.find('admiralty-type-ahead');
    expect(element).toHaveClass('hydrated');
  });
});
