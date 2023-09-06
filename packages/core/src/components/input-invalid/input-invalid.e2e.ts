import { newE2EPage } from '@stencil/core/testing';

describe('admiralty-input-invalid', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<admiralty-input-invalid></admiralty-input-invalid>');

    const element = await page.find('admiralty-input-invalid');
    expect(element).toHaveClass('hydrated');
  });
});
