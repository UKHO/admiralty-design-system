import { CheckboxComponent } from './checkbox.component';
import { action } from '@storybook/addon-actions';
import { FormsModule } from '@angular/forms';

export default {
  title: 'Checkbox',
  component: CheckboxComponent,
};

export const checkbox = () => ({
  moduleMetadata: {
    declarations: [CheckboxComponent],
    imports: [FormsModule],
  },
  template: `<ukho-checkbox (change)="change($event.target.checked)">I emit actions</ukho-checkbox>`,
  props: {
    change: action('changed'),
  },
});
