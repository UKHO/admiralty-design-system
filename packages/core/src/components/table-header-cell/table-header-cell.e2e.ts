import { newE2EPage } from '@stencil/core/testing';

describe('table-header-cell', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<admiralty-table-header-cell></admiralty-table-header-cell>');

    const element = await page.find('admiralty-table-header-cell');
    expect(element).toHaveClass('hydrated');
  });

  describe('sorting', () => {
    it('is not sortable by default', async () => {
      const page = await newE2EPage();
      await page.setContent('<admiralty-table-header-cell>Name</admiralty-table-header-cell>');

      const element = await page.find('admiralty-table-header-cell');
      const button = await page.find('admiralty-table-header-cell >>> .sort-button');
      expect(button).toBeNull();
      expect(element).not.toHaveAttribute('aria-sort');
    });

    it('renders sort button when sortable prop is set', async () => {
      const page = await newE2EPage();
      await page.setContent('<admiralty-table-header-cell sortable>Name</admiralty-table-header-cell>');

      const button = await page.find('admiralty-table-header-cell >>> .sort-button');
      expect(button).not.toBeNull();
    });

    it('has aria-sort="none" initially when sortable', async () => {
      const page = await newE2EPage();
      await page.setContent('<admiralty-table-header-cell sortable>Name</admiralty-table-header-cell>');

      const element = await page.find('admiralty-table-header-cell');
      expect(element.getAttribute('aria-sort')).toBe('none');
    });

    it('cycles sort direction on click: none -> ascending -> descending -> none', async () => {
      const page = await newE2EPage();
      await page.setContent('<admiralty-table-header-cell sortable>Name</admiralty-table-header-cell>');

      const element = await page.find('admiralty-table-header-cell');
      const button = await page.find('admiralty-table-header-cell >>> .sort-button');

      expect(element.getAttribute('aria-sort')).toBe('none');

      await button.click();
      await page.waitForChanges();
      expect(element.getAttribute('aria-sort')).toBe('ascending');

      await button.click();
      await page.waitForChanges();
      expect(element.getAttribute('aria-sort')).toBe('descending');

      await button.click();
      await page.waitForChanges();
      expect(element.getAttribute('aria-sort')).toBe('none');
    });

    it('emits admiraltySortChange event with correct direction', async () => {
      const page = await newE2EPage();
      await page.setContent('<admiralty-table-header-cell sortable>Name</admiralty-table-header-cell>');

      const sortChange = await page.spyOnEvent('admiraltySortChange');
      const button = await page.find('admiralty-table-header-cell >>> .sort-button');

      await button.click();
      await page.waitForChanges();
      expect(sortChange).toHaveReceivedEventDetail({ direction: 'ascending' });

      await button.click();
      await page.waitForChanges();
      expect(sortChange).toHaveReceivedEventDetail({ direction: 'descending' });

      await button.click();
      await page.waitForChanges();
      expect(sortChange).toHaveReceivedEventDetail({ direction: 'none' });
    });

    it('becomes sortable when parent table has allow-sorting attribute', async () => {
      const page = await newE2EPage();
      await page.setContent(`
        <admiralty-table allow-sorting>
          <admiralty-table-header>
            <admiralty-table-row>
              <admiralty-table-header-cell>Name</admiralty-table-header-cell>
            </admiralty-table-row>
          </admiralty-table-header>
        </admiralty-table>
      `);

      const button = await page.find('admiralty-table-header-cell >>> .sort-button');
      expect(button).not.toBeNull();
    });

    it('can opt out of sorting when allow-sorting is set on parent table', async () => {
      const page = await newE2EPage();
      await page.setContent(`
        <admiralty-table allow-sorting>
          <admiralty-table-header>
            <admiralty-table-row>
              <admiralty-table-header-cell sortable="false">Name</admiralty-table-header-cell>
            </admiralty-table-row>
          </admiralty-table-header>
        </admiralty-table>
      `);

      const button = await page.find('admiralty-table-header-cell >>> .sort-button');
      expect(button).toBeNull();
    });
  });
});

