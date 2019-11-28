import { boolean, withKnobs } from '@storybook/addon-knobs';
import { RadioComponent } from './radio.component';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Form Elements|Radio Buttons/Radio Button',
  component: RadioComponent,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle:
      'Radio buttons are intended for allowing users to pick a single option from a selection.' +
      'They can be grouped using radio groups',
  },
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
  template: `<ukho-radio name="group1" [disabled]="disabled" [checked]="checked" (change)="change($event.target.checked)">
                Option 1
             </ukho-radio>`,
});
