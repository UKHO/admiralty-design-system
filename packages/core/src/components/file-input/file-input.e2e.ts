import { newE2EPage } from '@stencil/core/testing';

describe('file-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<admiralty-file-input></admiralty-file-input>');

    const element = await page.find('admiralty-file-input');
    expect(element).toHaveClass('hydrated');
  });
});
