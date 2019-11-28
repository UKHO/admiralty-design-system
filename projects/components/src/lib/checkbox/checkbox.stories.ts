import { CheckboxComponent } from './checkbox.component';
import { action } from '@storybook/addon-actions';
import { FormsModule } from '@angular/forms';

export default {
  title: 'Form Elements|Checkbox',
  component: CheckboxComponent,
  parameters: {
    componentSubtitle: 'Checkboxes are a form element intended for proving a mechanism for multiple selections.',
  },
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
