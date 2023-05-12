import { newE2EPage } from '@stencil/core/testing';

describe('table-body', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<admiralty-table-body></admiralty-table-body>');

    const element = await page.find('admiralty-table-body');
    expect(element).toHaveClass('hydrated');
  });
});
