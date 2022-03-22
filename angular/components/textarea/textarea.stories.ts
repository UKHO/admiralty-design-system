import { TextareaComponent } from './textarea.component';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputHeaderModule } from '../form-field/input-header/input-header.module';
import { Story } from '@storybook/angular';

export default {
  title: 'Form Elements/Text Area',
  component: TextareaComponent,
  parameters: {
    componentSubtitle: 'Text area is intended for users to enter multi-line text data.',
  },
};

const template: Story<TextareaComponent> = (args: TextareaComponent) => ({
  moduleMetadata: {
    declarations: [TextareaComponent],
    imports: [FormsModule, ReactiveFormsModule, InputHeaderModule],
  },
  props: args,
  template: `<ukho-textarea [label]="label" [disabled]="true" [width]="width" [text]="text"></ukho-textarea>`,
});

export const Basic: Story = template.bind({});
Basic.args = {
  label: 'Description',
};

export const FixedWidth: Story = template.bind({});
FixedWidth.args = {
  label: 'Description',
  width: 400,
};

export const Disabled: Story = template.bind({});
Disabled.args = {
  label: 'Description',
  disabled:  true,
};

export const ValidationRequired = (args) => ({
  moduleMetadata: {
    declarations: [TextareaComponent],
    imports: [ReactiveFormsModule, InputHeaderModule],
  },
  template: `<ukho-textarea [label]="label" [validationMessages]="validationMessages" [formControl]="formControl"></ukho-textarea>`,
  props: {
    ...args,
    formControl: new FormControl('', Validators.required),
    validationMessages: { required: 'This field is required' },
  },
});
ValidationRequired.args = {
  label: 'Description',
};

export const WithText: Story = template.bind({});
WithText.args = {
  label: 'With text',
  text: 'Sample Text',
};
