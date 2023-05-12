import { newE2EPage } from '@stencil/core/testing';

describe('table-header-cell', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<admiralty-table-header-cell></admiralty-table-header-cell>');

    const element = await page.find('admiralty-table-header-cell');
    expect(element).toHaveClass('hydrated');
  });
});
