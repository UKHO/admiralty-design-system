import { TextinputComponent } from './textinput.component';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Form Elements|Text Input',
  component: TextinputComponent,
  parameters: {
    componentSubtitle: 'Text inputs are intended for allowing a user to enter single line text data.',
  },
};

export const basic = () => ({
  moduleMetadata: {
    declarations: [TextinputComponent],
  },
  template: `<ukho-textinput label="Name"></ukho-textinput>`,
});

basic.story = {
  name: 'Basic',
};

export const wide = () => ({
  moduleMetadata: {
    declarations: [TextinputComponent],
  },
  template: `<ukho-textinput label="Name" style="width: 500px"></ukho-textinput>`,
});

wide.story = {
  name: 'Wide',
};

export const date = () => ({
  moduleMetadata: {
    declarations: [TextinputComponent],
  },
  template: `<ukho-textinput label="Date" type="date"></ukho-textinput>`,
});

date.story = {
  name: 'Date',
};

export const time = () => ({
  moduleMetadata: {
    declarations: [TextinputComponent],
  },
  template: `<ukho-textinput label="Time" type="time"></ukho-textinput>`,
});

time.story = {
  name: 'Time',
};

export const disabled = () => ({
  moduleMetadata: {
    declarations: [TextinputComponent],
  },
  template: `<ukho-textinput label="Name" disabled="true"></ukho-textinput>`,
});

disabled.story = {
  name: 'Disabled',
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
  name: 'Required Validation',
};

export const errorsOnly = () => ({
  moduleMetadata: {
    declarations: [TextinputComponent],
    imports: [ReactiveFormsModule],
  },
  template: '<ukho-textinput label="Name" [formControl]="formControl" [errorsOnly]="true"></ukho-textinput>',
  props: {
    formControl: new FormControl('', Validators.max(100)),
  },
});
