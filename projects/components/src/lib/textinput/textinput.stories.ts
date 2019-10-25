import {storiesOf} from '@storybook/angular';
import {TextinputComponent} from './textinput.component';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {action} from '@storybook/addon-actions';

storiesOf('Text Input', module)
  .add('basic', () => ({
    moduleMetadata: {
      declarations: [TextinputComponent],
    },
    template: `<ukho-textinput label="Name"></ukho-textinput>`
  }))
  .add('wide', () => ({
    moduleMetadata: {
      declarations: [TextinputComponent],
    },
    template: `<ukho-textinput label="Name" style="width: 500px"></ukho-textinput>`
  }))
  .add('date', () => ({
    moduleMetadata: {
      declarations: [TextinputComponent],
    },
    template: `<ukho-textinput label="Date" type="date"></ukho-textinput>`
  }))
  .add('time', () => ({
    moduleMetadata: {
      declarations: [TextinputComponent],
    },
    template: `<ukho-textinput label="Time" type="time"></ukho-textinput>`
  }))
  .add('file', () => ({
    moduleMetadata: {
      declarations: [TextinputComponent],
    },
    template: `<ukho-textinput label="File" type="file"></ukho-textinput>`
  }))
  .add('disabled', () => ({
    moduleMetadata: {
      declarations: [TextinputComponent],
    },
    template: `<ukho-textinput label="Name" disabled="true"></ukho-textinput>`
  }))
  .add('ngModel', () => ({
    moduleMetadata: {
      imports: [FormsModule]
    },
    component: TextinputComponent,
    props: {
      label: 'Name',
      ngModelChange: action('changed')
    },
  }))
  .add('validation-required', () => ({
    moduleMetadata: {
      declarations: [TextinputComponent],
      imports: [ReactiveFormsModule]
    },
    template: `<ukho-textinput label="Name" [formControl]="formControl"></ukho-textinput>`,
    props: {
      formControl: new FormControl('', Validators.required),
    },
  }));
