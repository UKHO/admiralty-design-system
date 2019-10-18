import { storiesOf } from '@storybook/angular';
import {CheckboxComponent} from './checkbox.component';

storiesOf('Checkbox', module)
  .add('checkbox', () => ({
    moduleMetadata: {
      declarations: [CheckboxComponent],
    },
    template: `<ukho-checkbox>I'm a checkbox</ukho-checkbox>`
  }));
