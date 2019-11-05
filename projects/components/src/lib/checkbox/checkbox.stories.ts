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
  },
  template: `<ukho-checkbox>I'm a checkbox</ukho-checkbox>`,
});

checkbox.story = {
  name: 'checkbox',
};

export const actionStory = () => ({
  moduleMetadata: {
    declarations: [CheckboxComponent],
    imports: [FormsModule],
  },
  template: `<ukho-checkbox (change)="change($event)">I emit actions</ukho-checkbox>`,
  props: {
    change: action('changed'),
  },
});

actionStory.story = {
  name: 'action',
};
