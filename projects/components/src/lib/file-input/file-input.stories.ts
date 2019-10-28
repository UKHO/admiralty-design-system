import { storiesOf } from '@storybook/angular';
import { FileInputComponent } from './file-input.component';

storiesOf('File Input', module).add('basic', () => ({
  moduleMetadata: {
    declarations: [FileInputComponent],
  },
  template: `<ukho-file-input></ukho-file-input>`,
}));
