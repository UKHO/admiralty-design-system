import { SelectComponent } from './select.component';
import { action } from '@storybook/addon-actions';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Story } from '@storybook/angular';

export default {
  title: 'Form Elements/Select',
  component: SelectComponent,
  argTypes: {
    validationMessages: {
      control: {
        type: 'object'
      }
    }
  }
};

const Template: Story = (args) => ({
  moduleMetadata: {
    declarations: [SelectComponent],
    imports: [ReactiveFormsModule]
  },
  props: {
    label: 'Choose a colour',
    change: action('changed'),
    disabled: false,
    errorsOnly: false,
    ...args
  },
  template: `<ukho-select [label]="label" [disabled]="disabled" (change)="change($event.target.value)" [formControl]="formControl" [validationMessages]="validationMessages" [errorsOnly]="errorsOnly">
    <option>White</option>
    <option>Blue</option>
    <option>Black</option>
    <option>Red</option>
    <option>Green</option>
</ukho-select>`
});

export const Basic: Story = Template.bind({});

export const Disabled: Story = Template.bind({});
Disabled.args = {
  disabled: true
};

export const ValidationRequired: Story = Template.bind({});
ValidationRequired.args = {
  formControl: new FormControl('', Validators.required)
};
export const CustomValidation: Story = Template.bind({});
CustomValidation.args = {
  formControl: new FormControl('', [Validators.required, Validators.pattern('Green')]),
  validationMessages: {
    required: 'This field is required',
    pattern: 'This field must be green'
  }
};

export const ShowErrorsOnly: Story = Template.bind({});
ShowErrorsOnly.args = {
  formControl: new FormControl('', Validators.required),
  errorsOnly: true
};
