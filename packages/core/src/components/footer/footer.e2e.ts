import { newE2EPage } from '@stencil/core/testing';

describe('footer', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<admiralty-footer></admiralty-footer>');
    const element = await page.find('admiralty-footer');
    expect(element).toHaveClass('hydrated');
  });
});
