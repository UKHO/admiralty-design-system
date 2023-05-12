import { newE2EPage } from '@stencil/core/testing';

describe('card', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<admiralty-card></admiralty-card>');
    const element = await page.find('admiralty-card');
    expect(element).toHaveClass('hydrated');
  });
});
