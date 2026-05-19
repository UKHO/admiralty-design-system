import { newSpecPage } from '@stencil/core/testing';
import { TableComponent } from './table';
import { TableHeaderCellComponent } from '../table-header-cell/table-header-cell';

describe('admiralty-table', () => {
    it('renders with table role and slot', async () => {
        const page = await newSpecPage({
            components: [TableComponent],
            html: '<admiralty-table></admiralty-table>',
        });

        expect(page.root).toBeTruthy();
        expect(page.root?.getAttribute('role')).toBe('table');
        expect(page.root?.children.length).toBe(0);
        expect(page.root?.querySelector('caption')).toBeNull();
    });

    it('renders caption when caption prop is provided', async () => {
        const page = await newSpecPage({
            components: [TableComponent],
            html: '<admiralty-table caption="Favourite foods"></admiralty-table>',
        });

        const caption = page.root?.querySelector('caption');
        expect(caption).toBeTruthy();
        expect(caption?.textContent).toBe('Favourite foods');
    });

    it('does not render caption when caption is an empty string', async () => {
        const page = await newSpecPage({
            components: [TableComponent],
            html: '<admiralty-table caption=""></admiralty-table>',
        });

        expect(page.root?.querySelector('caption')).toBeNull();
    });

    it('preserves slotted table content', async () => {
        const page = await newSpecPage({
            components: [TableComponent],
            html: `
        <admiralty-table>
          <admiralty-table-header>
            <admiralty-table-row>
              <admiralty-table-header-cell>Name</admiralty-table-header-cell>
            </admiralty-table-row>
          </admiralty-table-header>
          <admiralty-table-body>
            <admiralty-table-row>
              <admiralty-table-cell>Tom</admiralty-table-cell>
            </admiralty-table-row>
          </admiralty-table-body>
        </admiralty-table>
      `,
        });

        expect(page.root?.querySelector('admiralty-table-header-cell')?.textContent?.trim()).toBe('Name');
        expect(page.root?.querySelector('admiralty-table-cell')?.textContent?.trim()).toBe('Tom');
    });

    it('defaults allowSorting to false and does not reflect allow-sorting attribute', async () => {
        const page = await newSpecPage({
            components: [TableComponent],
            html: '<admiralty-table></admiralty-table>',
        });

        expect(page.rootInstance.allowSorting).toBe(false);
        expect(page.root?.hasAttribute('allow-sorting')).toBe(false);
    });

    it('reflects allow-sorting attribute when allowSorting is true', async () => {
        const page = await newSpecPage({
            components: [TableComponent],
            html: '<admiralty-table allow-sorting></admiralty-table>',
        });

        expect(page.rootInstance.allowSorting).toBe(true);
        expect(page.root?.hasAttribute('allow-sorting')).toBe(true);
    });

    it('updates allow-sorting attribute when allowSorting changes at runtime', async () => {
        const page = await newSpecPage({
            components: [TableComponent],
            html: '<admiralty-table></admiralty-table>',
        });

        page.rootInstance.allowSorting = true;
        await page.waitForChanges();

        expect(page.root?.hasAttribute('allow-sorting')).toBe(true);

        page.rootInstance.allowSorting = false;
        await page.waitForChanges();

        expect(page.root?.hasAttribute('allow-sorting')).toBe(false);
    });

    it('enables sortable table header cells when allow-sorting is set on parent', async () => {
        const page = await newSpecPage({
            components: [TableComponent, TableHeaderCellComponent],
            html: `
        <admiralty-table allow-sorting>
          <admiralty-table-header-cell>Name</admiralty-table-header-cell>
        </admiralty-table>
      `,
        });

        const headerCell = page.root?.querySelector('admiralty-table-header-cell');
        expect(headerCell?.classList.contains('sortable')).toBe(true);
        expect(headerCell?.querySelector('.sort-button')).toBeTruthy();
        expect(headerCell?.getAttribute('aria-sort')).toBe('none');
    });

    it('allows a header cell to opt out when parent allow-sorting is set', async () => {
        const page = await newSpecPage({
            components: [TableComponent, TableHeaderCellComponent],
            html: `
        <admiralty-table allow-sorting>
          <admiralty-table-header-cell sortable="false">Name</admiralty-table-header-cell>
        </admiralty-table>
      `,
        });

        const headerCell = page.root?.querySelector('admiralty-table-header-cell');
        expect(headerCell?.classList.contains('sortable')).toBe(false);
        expect(headerCell?.querySelector('.sort-button')).toBeNull();
        expect(headerCell?.hasAttribute('aria-sort')).toBe(false);
    });
});
