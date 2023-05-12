import { newE2EPage } from '@stencil/core/testing';

describe('table-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<admiralty-table-header></admiralty-table-header>');

    const element = await page.find('admiralty-table-header');
    expect(element).toHaveClass('hydrated');
  });
});
