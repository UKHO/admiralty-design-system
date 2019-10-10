import { storiesOf } from '@storybook/angular';
import {CheckboxComponent} from './checkbox.component';
import {MatCheckboxModule} from '@angular/material';

storiesOf('Checkbox', module)
  .add('checkbox', () => ({
    moduleMetadata: {
      imports: [MatCheckboxModule],
    },
    component: CheckboxComponent,
  }));
