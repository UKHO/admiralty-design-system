import { newE2EPage } from '@stencil/core/testing';

describe('horizontal rule', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<admiralty-hr></admiralty-hr>');
    const element = await page.find('admiralty-hr');
    expect(element).toHaveClass('hydrated');
  });
});
