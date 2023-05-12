import readme from './readme.md';
import { Story } from '@storybook/html';
import { Table } from './table';
export default {
  title: 'Table',
  parameters: {
    markdown: readme,
  },
};

export const Basic: Story<Table> = args => {
  return `
<admiralty-table caption="${args.caption}">
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
</admiralty-table>`;
};
Basic.args = {
  caption: 'Favourite Foods',
};
