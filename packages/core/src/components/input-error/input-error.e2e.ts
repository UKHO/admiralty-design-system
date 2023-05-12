import { newE2EPage } from '@stencil/core/testing';

describe('admiralty-input-error', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<admiralty-input-error></admiralty-input-error>');

    const element = await page.find('admiralty-input-error');
    expect(element).toHaveClass('hydrated');
  });
});
