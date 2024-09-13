import { newE2EPage } from '@stencil/core/testing';

describe('admiralty-radio', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<admiralty-radio></admiralty-radio>');

    const element = await page.find('admiralty-radio');
    expect(element).toHaveClass('hydrated');
  });
});
