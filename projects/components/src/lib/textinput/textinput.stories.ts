import { TextinputComponent } from './textinput.component';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Text Input',
  component: TextinputComponent,
};

export const basic = () => ({
  moduleMetadata: {
    declarations: [TextinputComponent],
  },
  template: `<ukho-textinput label="Name"></ukho-textinput>`,
});

basic.story = {
  name: 'basic',
};

export const wide = () => ({
  moduleMetadata: {
    declarations: [TextinputComponent],
  },
  template: `<ukho-textinput label="Name" style="width: 500px"></ukho-textinput>`,
});

wide.story = {
  name: 'wide',
};

export const date = () => ({
  moduleMetadata: {
    declarations: [TextinputComponent],
  },
  template: `<ukho-textinput label="Date" type="date"></ukho-textinput>`,
});

date.story = {
  name: 'date',
};

export const time = () => ({
  moduleMetadata: {
    declarations: [TextinputComponent],
  },
  template: `<ukho-textinput label="Time" type="time"></ukho-textinput>`,
});

time.story = {
  name: 'time',
};

export const file = () => ({
  moduleMetadata: {
    declarations: [TextinputComponent],
  },
  template: `<ukho-textinput label="File" type="file"></ukho-textinput>`,
});

file.story = {
  name: 'file',
};

export const disabled = () => ({
  moduleMetadata: {
    declarations: [TextinputComponent],
  },
  template: `<ukho-textinput label="Name" disabled="true"></ukho-textinput>`,
});

disabled.story = {
  name: 'disabled',
};

export const ngModel = () => ({
  moduleMetadata: {
    imports: [FormsModule],
  },
  component: TextinputComponent,
  props: {
    label: 'Name',
    ngModelChange: action('changed'),
  },
});

ngModel.story = {
  name: 'ngModel',
};

export const validationRequired = () => ({
  moduleMetadata: {
    declarations: [TextinputComponent],
    imports: [ReactiveFormsModule],
  },
  template: `<ukho-textinput label="Name" [formControl]="formControl"></ukho-textinput>`,
  props: {
    formControl: new FormControl('', Validators.required),
  },
});

validationRequired.story = {
  name: 'validation-required',
};
