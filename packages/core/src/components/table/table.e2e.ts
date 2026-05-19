import { newE2EPage } from '@stencil/core/testing';

describe('admiralty-table', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<admiralty-table></admiralty-table>');

    const element = await page.find('admiralty-table');
    expect(element).toHaveClass('hydrated');
    expect(element.getAttribute('role')).toBe('table');
  });

  it('renders caption when caption attribute is provided', async () => {
    const page = await newE2EPage();
    await page.setContent('<admiralty-table caption="Favourite foods"></admiralty-table>');

    const caption = await page.find('admiralty-table >>> caption');
    expect(caption).not.toBeNull();
    expect(caption.textContent?.trim()).toBe('Favourite foods');
  });

  it('does not render caption when caption is empty', async () => {
    const page = await newE2EPage();
    await page.setContent('<admiralty-table caption=""></admiralty-table>');

    const caption = await page.find('admiralty-table >>> caption');
    expect(caption).toBeNull();
  });

  it('renders slotted table content', async () => {
    const page = await newE2EPage();
    await page.setContent(`
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
    `);

    const headerCell = await page.find('admiralty-table-header-cell');
    const bodyCell = await page.find('admiralty-table-cell');

    expect(headerCell).not.toBeNull();
    expect(bodyCell).not.toBeNull();
    expect(headerCell.textContent?.trim()).toBe('Name');
    expect(bodyCell.textContent?.trim()).toBe('Tom');
  });

  it('does not set allow-sorting by default', async () => {
    const page = await newE2EPage();
    await page.setContent('<admiralty-table></admiralty-table>');

    const element = await page.find('admiralty-table');
    expect(element).not.toHaveAttribute('allow-sorting');
  });

  it('reflects allow-sorting attribute when provided', async () => {
    const page = await newE2EPage();
    await page.setContent('<admiralty-table allow-sorting></admiralty-table>');

    const element = await page.find('admiralty-table');
    expect(element).toHaveAttribute('allow-sorting');
  });

  it('makes header cells sortable when allow-sorting is set on table', async () => {
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
    const header = await page.find('admiralty-table-header-cell');

    expect(button).not.toBeNull();
    expect(header.getAttribute('aria-sort')).toBe('none');
  });

  it('allows a header cell to opt out of sorting when table allow-sorting is set', async () => {
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
