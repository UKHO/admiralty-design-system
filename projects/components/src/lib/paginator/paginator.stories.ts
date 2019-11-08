import { number, withKnobs } from '@storybook/addon-knobs';
import { PaginatorComponent } from './paginator.component';

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
  },
  template: `<ukho-paginator [pages]="pages"></ukho-paginator>`,
});
