import { newE2EPage } from '@stencil/core/testing';

describe('breadcrumb', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<admiralty-breadcrumb></admiralty-breadcrumb>');
    const element = await page.find('admiralty-breadcrumb');
    expect(element).toHaveClass('hydrated');
  });
});
