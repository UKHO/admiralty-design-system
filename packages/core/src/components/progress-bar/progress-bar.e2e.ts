import { newE2EPage } from '@stencil/core/testing';

describe('progress-bar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<admiralty-progress-bar></admiralty-progress-bar>');

    const element = await page.find('admiralty-progress-bar');
    expect(element).toHaveClass('hydrated');
  });
});
