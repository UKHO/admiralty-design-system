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
