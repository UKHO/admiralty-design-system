import { newE2EPage } from '@stencil/core/testing';

describe('admiralty-hint', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<admiralty-hint></admiralty-hint>');

    const element = await page.find('admiralty-hint');
    expect(element).toHaveClass('hydrated');
  });
});
