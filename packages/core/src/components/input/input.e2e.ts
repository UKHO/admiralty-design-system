import { newE2EPage } from '@stencil/core/testing';

describe('admiralty-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<admiralty-input></admiralty-input>');

    const element = await page.find('admiralty-input');
    expect(element).toHaveClass('hydrated');
  });
});
