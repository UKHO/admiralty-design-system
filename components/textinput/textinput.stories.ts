import { TextinputComponent } from './textinput.component';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/angular';

export default {
  title: 'Form Elements/Text Input',
  component: TextinputComponent,
  parameters: {
    componentSubtitle: 'Text inputs are intended for allowing a user to enter single line text data.',
  },
};

const template: Story<TextinputComponent> = (args: TextinputComponent) => ({
  moduleMetadata: {
    declarations: [TextinputComponent],
    imports: [FormsModule, ReactiveFormsModule],
  },
  props: {
    ...args,
  },
  template: `<ukho-textinput [label]="label" [type]="type" [formControl]="formControl" [disabled]="disabled"></ukho-textinput>`,
});

export const basic: Story = template.bind({});
basic.args = {
  label: 'Basic',
};

export const noLabel: Story = template.bind({});

export const date: Story = template.bind({});
date.args = {
  label: 'Date',
  type: 'date',
};

export const time: Story = template.bind({});
time.args = {
  label: 'Time',
  type: 'time',
};

export const autocomplete: Story = template.bind({});
autocomplete.args = {
  label: 'AutoComplete',
  autocomplete: false,
};

export const disabled: Story = template.bind({});
disabled.args = {
  label: 'Disabled',
  disabled: true,
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
