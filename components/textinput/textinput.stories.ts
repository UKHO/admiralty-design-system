import { TextinputComponent } from './textinput.component';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/angular';
import { InputHeaderModule } from '../form-field/input-header/input-header.module';

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
    imports: [FormsModule, ReactiveFormsModule, InputHeaderModule],
  },
  props: args,
  template: `<form><ukho-textinput [name]="name" [label]="label" [hint]="hint" [type]="type" [formControl]="formControl" [disabled]="disabled" [placeholder]="placeholder" [autocomplete]="autocomplete"></ukho-textinput></form>`,
});

export const basic: Story = template.bind({});
basic.args = {
  label: 'Basic',
};

export const FixedWidth: Story = template.bind({});
FixedWidth.args = {
  label: 'How old are you?',
  type: 'number',
  width: 60,
};

export const withPlaceholder: Story = template.bind({});
withPlaceholder.args = {
  label: 'With Placeholder',
  placeholder: 'Fill Me In',
};

export const number: Story = template.bind({});
number.args = {
  label: 'Number',
  type: 'number',
};

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

export const autocomplete: Story<TextinputComponent> = template.bind({});
autocomplete.args = {
  label: 'Full Name',
  name: 'name',
  autocomplete: 'name',
};

export const autocompleteOff: Story = template.bind({});
autocompleteOff.args = {
  label: 'AutoComplete',
  autocomplete: 'off',
};

export const disabled: Story = template.bind({});
disabled.args = {
  label: 'Disabled',
  disabled: true,
};

export const ngModel = () => ({
  moduleMetadata: {
    imports: [FormsModule, InputHeaderModule],
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
    imports: [ReactiveFormsModule, InputHeaderModule],
  },
  template: `<ukho-textinput label="Name" [validationMessages]="validationMessages" [formControl]="formControl"></ukho-textinput>`,
  props: {
    formControl: new FormControl('', Validators.required),
    validationMessages: { required: 'This field is required' },
  },
});

validationRequired.story = {
  name: 'Required Validation',
};
