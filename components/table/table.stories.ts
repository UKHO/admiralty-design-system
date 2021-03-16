import { Story } from '@storybook/angular';
import {
  mockDataWithHeaders,
  mockDataNoHeaders,
  mockDataWithAllSorting,
  mockDataWithSomeSorting,
  mockDataWithHtmlContent,
} from './mock-data';
import { CdkTableModule } from '@angular/cdk/table';
import { TableComponent } from './table.component';
import { UkhoSort } from './sort.directive';
import { UkhoSortHeader } from './sort-header.directive';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Table',
  component: TableComponent,
};

const Template: Story = (args) => ({
  props: args,
  moduleMetadata: {
    declarations: [TableComponent, UkhoSort, UkhoSortHeader],
    imports: [CdkTableModule],
  },
  template: `<ukho-table [dataSource]="dataSource" [displayedColumns]="displayedColumns" (sortChange)="onChange($event)"></ukho-table>`,
});
export const HeadersOnly: Story = Template.bind({});
HeadersOnly.args = {
  displayedColumns: mockDataWithHeaders.headings,
  dataSource: mockDataWithHeaders.records,
};

export const SortingEnabledOnAll: Story = Template.bind({});
SortingEnabledOnAll.args = {
  displayedColumns: mockDataWithAllSorting.headings,
  dataSource: mockDataWithAllSorting.records,
  onChange: action('sort changed'),
};
export const SortingEnabledOnSome: Story = Template.bind({});
SortingEnabledOnSome.args = {
  displayedColumns: mockDataWithSomeSorting.headings,
  dataSource: mockDataWithSomeSorting.records,
  onChange: action('sort changed'),
};

export const TableWithHtmlContent: Story = Template.bind({});
TableWithHtmlContent.args = {
  displayedColumns: mockDataWithHtmlContent.headings,
  dataSource: mockDataWithHtmlContent.records,
};
