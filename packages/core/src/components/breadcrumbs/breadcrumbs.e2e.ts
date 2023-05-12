import { newE2EPage } from '@stencil/core/testing';

describe('breadcrumbs', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<admiralty-breadcrumbs></admiralty-breadcrumbs>');
    const element = await page.find('admiralty-breadcrumbs');
    expect(element).toHaveClass('hydrated');
  });
});
