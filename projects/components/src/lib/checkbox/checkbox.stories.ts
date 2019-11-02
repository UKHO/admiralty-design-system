import { storiesOf } from '@storybook/angular';
import { CheckboxComponent } from './checkbox.component';
import { action } from '@storybook/addon-actions';
import { FormsModule } from '@angular/forms';

storiesOf('Checkbox', module)
  .add('checkbox', () => ({
    moduleMetadata: {
      declarations: [CheckboxComponent],
    },
    template: `<ukho-checkbox>I'm a checkbox</ukho-checkbox>`,
  }))
  .add('action', () => ({
    moduleMetadata: {
      declarations: [CheckboxComponent],
      imports: [FormsModule],
    },
    template: `<ukho-checkbox (change)="change($event)">I emit actions</ukho-checkbox>`,
    props: {
      change: action('changed'),
    },
  }));
