import { newE2EPage } from '@stencil/core/testing';

describe('button', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<admiralty-button></admiralty-button>');
    const element = await page.find('admiralty-button');
    expect(element).toHaveClass('hydrated');
  });
});
