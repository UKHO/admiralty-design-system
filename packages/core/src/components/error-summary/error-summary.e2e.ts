import { newE2EPage } from '@stencil/core/testing';

describe('error-summary', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<admiralty-error-summary></admiralty-error-summary>');
    const element = await page.find('admiralty-error-summary');
    expect(element).toHaveClass('hydrated');
  });
});
