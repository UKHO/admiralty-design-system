import { text, withKnobs } from '@storybook/addon-knobs';
import { SelectComponent } from './select.component';
import { action } from '@storybook/addon-actions';
import { TextareaComponent } from '../textarea/textarea.component';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

export default {
  title: 'Form Elements|Select',
  component: SelectComponent,
  decorators: [withKnobs],
};

export const basic = () => ({
  moduleMetadata: {
    declarations: [SelectComponent],
  },
  props: {
    label: text('label', 'Choose a colour'),
    change: action('changed'),
  },
  template: `<ukho-select [label]="label" (change)="change($event.target.value)">
    <option>White</option>
    <option>Blue</option>
    <option>Black</option>
    <option>Red</option>
    <option>Green</option>
</ukho-select>`,
});

export const disabled = () => ({
  moduleMetadata: {
    declarations: [SelectComponent],
  },
  template: `<ukho-select label="Disabled" [disabled]="true">
    <option>White</option>
    <option>Blue</option>
    <option>Black</option>
    <option>Red</option>
    <option>Green</option>
</ukho-select>`,
});

export const validationRequired = () => ({
  moduleMetadata: {
    declarations: [SelectComponent],
    imports: [ReactiveFormsModule],
  },
  template: `<ukho-select label="Choose a colour" [formControl]="formControl">
    <option>White</option>
    <option>Blue</option>
    <option>Black</option>
    <option>Red</option>
    <option>Green</option>
</ukho-select>`,
  props: {
    formControl: new FormControl('', Validators.required),
  },
});

validationRequired.story = {
  name: 'Required Validation',
};

export const customValidation = () => ({
  moduleMetadata: {
    declarations: [SelectComponent],
    imports: [ReactiveFormsModule],
  },
  template: `<ukho-select label="Choose a colour (must be green)" [formControl]="formControl" [validationMessages]="validationMessages">
    <option>White</option>
    <option>Blue</option>
    <option>Black</option>
    <option>Red</option>
    <option>Green</option>
</ukho-select>`,
  props: {
    formControl: new FormControl('', [Validators.required, Validators.pattern('Green')]),
    validationMessages: {
      required: 'This field is required',
      pattern: 'This field must be green',
    },
  },
});

customValidation.story = {
  name: 'Custom Pattern Validation',
};
