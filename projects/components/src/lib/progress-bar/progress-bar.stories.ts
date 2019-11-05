import { ProgressBarComponent } from './progress-bar.component';
import { number, withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Progress Bar',
  component: ProgressBarComponent,
  decorators: [withKnobs],
};

export const basic = () => ({
  moduleMetadata: {
    declarations: [ProgressBarComponent],
  },
  template: `<ukho-progress-bar value="40"></ukho-progress-bar>`,
});

basic.story = {
  name: 'basic',
};

export const configurable = () => ({
  moduleMetadata: {
    declarations: [ProgressBarComponent],
  },
  props: {
    value: number('value', 0, { range: true, min: 0, max: 100, step: 5 }),
  },
  template: `<ukho-progress-bar [value]="value"></ukho-progress-bar>`,
});

configurable.story = {
  name: 'configurable',
};
