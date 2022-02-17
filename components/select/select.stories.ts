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
        type: 'object',
      },
    },
  },
};

const Template: Story = (args) => ({
  moduleMetadata: {
    declarations: [SelectComponent],
    imports: [ReactiveFormsModule],
  },
  props: {
    label: 'Choose a colour',
    hint: 'This is a hint to instruct the user what to do',
    change: action('changed'),
    disabled: false,
    ...args,
  },
  template: `<ukho-select [label]="label" [hint]="hint"  [disabled]="disabled" (change)="change($event.target.value)" [formControl]="formControl" [validationMessages]="validationMessages">
    <option>White</option>
    <option>Blue</option>
    <option>Black</option>
    <option>Red</option>
    <option>Green</option>
</ukho-select>`,
});

export const Basic: Story = Template.bind({});

export const Disabled: Story = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const ValidationRequired: Story = Template.bind({});
ValidationRequired.args = {
  formControl: new FormControl('', Validators.required),
};
export const CustomValidation: Story = Template.bind({});
CustomValidation.args = {
  formControl: new FormControl('', [Validators.required, Validators.pattern('Green')]),
  validationMessages: {
    required: 'This field is required',
    pattern: 'This field must be green',
  },
};
