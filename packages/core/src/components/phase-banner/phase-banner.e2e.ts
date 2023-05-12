import { newE2EPage } from '@stencil/core/testing';

describe('phase-banner', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<admiralty-phase-banner></admiralty-phase-banner>');
    const element = await page.find('admiralty-phase-banner');
    expect(element).toHaveClass('hydrated');
  });
});
