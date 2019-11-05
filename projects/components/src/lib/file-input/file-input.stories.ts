import { FileInputComponent } from './file-input.component';

export default {
  title: 'File Input',
  component: FileInputComponent,
};

export const basic = () => ({
  moduleMetadata: {
    declarations: [FileInputComponent],
  },
  template: `<ukho-file-input></ukho-file-input>`,
});

basic.story = {
  name: 'basic',
};
