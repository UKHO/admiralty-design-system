import { text, withKnobs } from '@storybook/addon-knobs';
import { SelectComponent } from './select.component';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Select',
  component: SelectComponent,
  decorators: [withKnobs],
};

export const basic = () => ({
  moduleMetadata: {
    declarations: [SelectComponent],
  },
  props: {
    label: text('label', 'Choose a colour'),
    change: action('changed'),
  },
  template: `<ukho-select [label]="label" (change)="change($event.target.value)">
    <option>White</option>
    <option>Blue</option>
    <option>Black</option>
    <option>Red</option>
    <option>Green</option>
</ukho-select>`,
});
