import { Story } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FileInputComponent } from './file-input.component';

export default {
  title: 'Form Elements/File Input',
  component: FileInputComponent,
  parameters: {
    componentSubtitle:
      'File inputs are intended for allowing a user to select a single file to upload.' +
      'Selection can be via the browser native file selection or by drag and drop.'
  },
  argTypes: { change: { action: 'files changed' } },
};

const Template: Story<FileInputComponent> = (args: FileInputComponent) => ({
  props: { ...args, change: action('changed') },
  moduleMetadata: {
    declarations: [FileInputComponent],
    imports: [FormsModule, ReactiveFormsModule],
  },
  template: `<ukho-file-input (change)="change($event.target.files)"></ukho-file-input>`,
});

export const basic = Template.bind({});
