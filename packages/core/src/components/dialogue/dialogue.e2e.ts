import { newE2EPage } from '@stencil/core/testing';

describe('dialogue', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<admiralty-dialogue></admiralty-dialogue>');
    const element = await page.find('admiralty-dialogue');
    expect(element).toHaveClass('hydrated');
  });
});
