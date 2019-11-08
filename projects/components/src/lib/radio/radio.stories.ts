import {boolean, withKnobs} from '@storybook/addon-knobs';
import {RadioComponent} from './radio.component';
import {action} from '@storybook/addon-actions';
import {RadioGroupComponent} from '../radio-group/radio-group.component';

export default {
  title: 'Radio Button',
  component: RadioComponent,
  decorators: [withKnobs],
};

export const basic = () => ({
  moduleMetadata: {
    declarations: [RadioComponent],
  },
  props: {
    change: action('changed'),
    disabled: boolean('Disabled', false),
    checked: boolean('Checked', false),
  },
  template: `<ukho-radio name="group1" [disabled]="disabled" [checked]="checked" (change)="change($event.target.checked)">Option 1</ukho-radio>`,
});
