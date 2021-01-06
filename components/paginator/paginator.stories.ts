import { PaginatorComponent } from './paginator.component';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/angular';

export default {
  title: 'Paginator',
  component: PaginatorComponent
};

const Template: Story = (args) => ({
  moduleMetadata: {
    declarations: [PaginatorComponent]
  },
  props: args,
  template: `<ukho-paginator [pages]="pages" [currentPage]="currentPage" (pageChange)="pageChange($event)"></ukho-paginator>`
});

export const paginator: Story = Template.bind({});
paginator.args = {
  pages: 10,
  currentPage: 1,
  pageChange: action('Page Change')
};
