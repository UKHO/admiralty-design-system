import { storiesOf } from '@storybook/angular';
import {CdkTableModule} from '@angular/cdk/table';
import {TableComponent} from './table.component';

storiesOf('Table', module)
  .add('table', () => ({
    moduleMetadata: {
      imports: [CdkTableModule],
    },
    component: TableComponent,
  }));
