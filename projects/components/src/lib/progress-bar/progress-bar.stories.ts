import { storiesOf } from '@storybook/angular';
import { ProgressBarComponent } from './progress-bar.component';
import { number, withKnobs } from '@storybook/addon-knobs';

storiesOf('Progress Bar', module)
  .addDecorator(withKnobs)
  .add('basic', () => ({
    moduleMetadata: {
      declarations: [ProgressBarComponent],
    },
    template: `<ukho-progress-bar value="40"></ukho-progress-bar>`,
  }))
  .add('configurable', () => ({
    moduleMetadata: {
      declarations: [ProgressBarComponent],
    },
    props: {
      value: number('value', 0, { range: true, min: 0, max: 100, step: 5 }),
    },
    template: `<ukho-progress-bar [value]="value"></ukho-progress-bar>`,
  }));