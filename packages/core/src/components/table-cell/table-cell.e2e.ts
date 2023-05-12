import { newE2EPage } from '@stencil/core/testing';

describe('table-body-cell', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<admiralty-table-cell></admiralty-table-cell>');

    const element = await page.find('admiralty-table-cell');
    expect(element).toHaveClass('hydrated');
  });
});
