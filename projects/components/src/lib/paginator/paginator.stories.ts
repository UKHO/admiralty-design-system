import { number, withKnobs } from '@storybook/addon-knobs';
import { PaginatorComponent } from './paginator.component';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Paginator',
  component: PaginatorComponent,
  decorators: [withKnobs],
};

export const paginator = () => ({
  moduleMetadata: {
    declarations: [PaginatorComponent],
  },
  props: {
    pages: number('Number of pages', 10),
    currentPage: number('Current Page', 1),
    pageChange: action('Page Change'),
  },
  template: `<ukho-paginator [pages]="pages" [currentPage]="currentPage" (pageChange)="pageChange($event)"></ukho-paginator>`,
});
