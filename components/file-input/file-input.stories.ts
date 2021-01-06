import { FileInputComponent } from './file-input.component';

export default {
  title: 'Form Elements/File Input',
  component: FileInputComponent,
  parameters: {
    componentSubtitle:
      'File inputs are intended for allowing a user to select a single file to upload.' +
      'Selection can be via the browser native file selection or by drag and drop.'
  }
};

export const basic = () => ({
  moduleMetadata: {
    declarations: [FileInputComponent]
  },
  template: `<ukho-file-input></ukho-file-input>`
});

basic.story = {
  name: 'basic'
};
