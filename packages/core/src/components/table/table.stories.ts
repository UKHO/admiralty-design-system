import { Meta, StoryObj } from '@storybook/web-components';
import { TableComponent } from './table';
import { html } from 'lit';

const meta: Meta = {
  title: 'Table',
  component: 'admiralty-table',
  parameters: {
    actions: {},
  },
};

export default meta;

type Story = StoryObj<TableComponent>;

export const Basic: Story = {
  render: args =>
    html` <admiralty-table caption="${args.caption}">
      <admiralty-table-header>
        <admiralty-table-row>
          <admiralty-table-header-cell>Name</admiralty-table-header-cell>
          <admiralty-table-header-cell>Age</admiralty-table-header-cell>
          <admiralty-table-header-cell>Other</admiralty-table-header-cell>
          <admiralty-table-header-cell>Favourite Food</admiralty-table-header-cell>
        </admiralty-table-row>
      </admiralty-table-header>
      <admiralty-table-body>
        <admiralty-table-row>
          <admiralty-table-cell>Tom</admiralty-table-cell>
          <admiralty-table-cell>12</admiralty-table-cell>
          <admiralty-table-cell>Likes Bread</admiralty-table-cell>
          <admiralty-table-cell>Potatoes</admiralty-table-cell>
        </admiralty-table-row>
        <admiralty-table-row>
          <admiralty-table-cell>Thomas</admiralty-table-cell>
          <admiralty-table-cell>25</admiralty-table-cell>
          <admiralty-table-cell>Likes Lots Of Bread</admiralty-table-cell>
          <admiralty-table-cell>Potatoes</admiralty-table-cell>
        </admiralty-table-row>
        <admiralty-table-row>
          <admiralty-table-cell>Tommy</admiralty-table-cell>
          <admiralty-table-cell>1000</admiralty-table-cell>
          <admiralty-table-cell>Bread</admiralty-table-cell>
          <admiralty-table-cell>Potatoes</admiralty-table-cell>
        </admiralty-table-row>
        <admiralty-table-row>
          <admiralty-table-cell>This is super super long</admiralty-table-cell>
          <admiralty-table-cell>way longer than the rest of them</admiralty-table-cell>
          <admiralty-table-cell>Bread is the greatest food on earth and this text is a perfect length</admiralty-table-cell>
          <admiralty-table-cell>Potatoes</admiralty-table-cell>
        </admiralty-table-row>
      </admiralty-table-body>
    </admiralty-table>`,
  args: {
    caption: 'Favourite Foods',
  },
};

/**
 * All columns are sortable via `sorting` on the table. Clicking a header
 * cycles through ascending → descending → unsorted. Rows are re-sorted
 * client-side to demonstrate the feature in Storybook.
 */
export const AllColumnsSortable: Story = {
  render: () => {
    const initialRows = [
      ['Tom', '12', 'Likes Bread', 'Potatoes'],
      ['Thomas', '25', 'Likes Lots Of Bread', 'Pizza'],
      ['Tommy', '1000', 'Bread', 'Potatoes'],
      ['Alice', '30', 'Likes Cake', 'Sushi'],
      ['Bob', '45', 'Likes Nothing', 'Chips'],
    ];

    return html`
      <admiralty-table caption="Favourite Foods — all columns sortable" sorting>
        <admiralty-table-header>
          <admiralty-table-row>
            <admiralty-table-header-cell data-col="0">Name</admiralty-table-header-cell>
            <admiralty-table-header-cell data-col="1">Age</admiralty-table-header-cell>
            <admiralty-table-header-cell data-col="2">Other</admiralty-table-header-cell>
            <admiralty-table-header-cell data-col="3">Favourite Food</admiralty-table-header-cell>
          </admiralty-table-row>
        </admiralty-table-header>
        <admiralty-table-body id="sortable-body-all">
          ${initialRows.map(
      row => html`
              <admiralty-table-row>
                ${row.map(cell => html`<admiralty-table-cell>${cell}</admiralty-table-cell>`)}
              </admiralty-table-row>
            `,
    )}
        </admiralty-table-body>
      </admiralty-table>

      <script>
        (function () {
          const rows = ${JSON.stringify(initialRows)};
          document.querySelectorAll('#sortable-body-all').forEach(function (tbody) {
            const table = tbody.closest('admiralty-table');
            table.querySelectorAll('admiralty-table-header-cell').forEach(function (cell) {
              cell.addEventListener('admiraltySortChange', function (e) {
                const col = parseInt(cell.getAttribute('data-col'), 10);
                const dir = e.detail.direction;
                // Reset other header cells
                table.querySelectorAll('admiralty-table-header-cell').forEach(function (c) {
                  if (c !== cell) c.sortDirection = 'none';
                });
                let sorted = rows.slice();
                if (dir === 'ascending') {
                  sorted.sort(function (a, b) {
                    return a[col].localeCompare(b[col], undefined, { numeric: true });
                  });
                } else if (dir === 'descending') {
                  sorted.sort(function (a, b) {
                    return b[col].localeCompare(a[col], undefined, { numeric: true });
                  });
                }
                tbody.innerHTML = sorted
                  .map(function (row) {
                    return (
                      '<admiralty-table-row>' +
                      row.map(function (c) { return '<admiralty-table-cell>' + c + '</admiralty-table-cell>'; }).join('') +
                      '</admiralty-table-row>'
                    );
                  })
                  .join('');
              });
            });
          });
        })();
      </script>
    `;
  },
};

/**
 * Only selected columns are sortable — set `sortable` directly on specific
 * `admiralty-table-header-cell` elements instead of using `sorting` on
 * the table.
 */
export const SelectiveColumnSorting: Story = {
  render: () => {
    const initialRows = [
      ['Tom', '12', 'Likes Bread', 'Potatoes'],
      ['Thomas', '25', 'Likes Lots Of Bread', 'Pizza'],
      ['Tommy', '1000', 'Bread', 'Potatoes'],
      ['Alice', '30', 'Likes Cake', 'Sushi'],
      ['Bob', '45', 'Likes Nothing', 'Chips'],
    ];

    return html`
      <admiralty-table caption="Favourite Foods — name and age sortable only">
        <admiralty-table-header>
          <admiralty-table-row>
            <admiralty-table-header-cell sortable data-col="0">Name</admiralty-table-header-cell>
            <admiralty-table-header-cell sortable data-col="1">Age</admiralty-table-header-cell>
            <admiralty-table-header-cell data-col="2">Other</admiralty-table-header-cell>
            <admiralty-table-header-cell data-col="3">Favourite Food</admiralty-table-header-cell>
          </admiralty-table-row>
        </admiralty-table-header>
        <admiralty-table-body id="sortable-body-selective">
          ${initialRows.map(
      row => html`
              <admiralty-table-row>
                ${row.map(cell => html`<admiralty-table-cell>${cell}</admiralty-table-cell>`)}
              </admiralty-table-row>
            `,
    )}
        </admiralty-table-body>
      </admiralty-table>

      <script>
        (function () {
          const rows = ${JSON.stringify(initialRows)};
          document.querySelectorAll('#sortable-body-selective').forEach(function (tbody) {
            const table = tbody.closest('admiralty-table');
            table.querySelectorAll('admiralty-table-header-cell[sortable]').forEach(function (cell) {
              cell.addEventListener('admiraltySortChange', function (e) {
                const col = parseInt(cell.getAttribute('data-col'), 10);
                const dir = e.detail.direction;
                table.querySelectorAll('admiralty-table-header-cell[sortable]').forEach(function (c) {
                  if (c !== cell) c.sortDirection = 'none';
                });
                let sorted = rows.slice();
                if (dir === 'ascending') {
                  sorted.sort(function (a, b) {
                    return a[col].localeCompare(b[col], undefined, { numeric: true });
                  });
                } else if (dir === 'descending') {
                  sorted.sort(function (a, b) {
                    return b[col].localeCompare(a[col], undefined, { numeric: true });
                  });
                }
                tbody.innerHTML = sorted
                  .map(function (row) {
                    return (
                      '<admiralty-table-row>' +
                      row.map(function (c) { return '<admiralty-table-cell>' + c + '</admiralty-table-cell>'; }).join('') +
                      '</admiralty-table-row>'
                    );
                  })
                  .join('');
              });
            });
          });
        })();
      </script>
    `;
  },
};

