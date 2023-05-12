import { newE2EPage } from '@stencil/core/testing';

describe('side-nav', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<admiralty-side-nav></admiralty-side-nav>');
    const element = await page.find('admiralty-side-nav');
    expect(element).toHaveClass('hydrated');
  });
});
