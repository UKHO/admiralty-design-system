import { ProgressBarComponent } from './progress-bar.component';
import {boolean, number, withKnobs} from '@storybook/addon-knobs';

export default {
  title: 'Progress Bar',
  component: ProgressBarComponent,
  decorators: [withKnobs],
};

export const basic = () => ({
  moduleMetadata: {
    declarations: [ProgressBarComponent],
  },
  props: {
    value: number('value', 40, { range: true, min: 0, max: 100, step: 5 }),
    error: boolean('error', false),
  },
  template: `<ukho-progress-bar [error]="error" [value]="value"></ukho-progress-bar>`,
});
