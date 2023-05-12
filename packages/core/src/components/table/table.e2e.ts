import { newE2EPage } from '@stencil/core/testing';

describe('admiralty-table', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<admiralty-table></admiralty-table>');

    const element = await page.find('admiralty-table');
    expect(element).toHaveClass('hydrated');
  });
});
