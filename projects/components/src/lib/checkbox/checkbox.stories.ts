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
  .add('ngModel', () => ({
    moduleMetadata: {
      imports: [FormsModule],
    },
    component: CheckboxComponent,
    props: {
      ngContent: "I'm a checkbox",
      ngModelChange: action('changed'),
    },
  }));
