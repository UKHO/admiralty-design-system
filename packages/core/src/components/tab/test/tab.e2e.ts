import { newE2EPage } from '@stencil/core/testing';

describe('admiralty-tab', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<admiralty-tab></admiralty-tab>');

    const element = await page.find('admiralty-tab');
    expect(element).toHaveClass('hydrated');
  });
});
