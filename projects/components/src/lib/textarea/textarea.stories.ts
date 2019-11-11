import { TextareaComponent } from './textarea.component';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

export default {
  title: 'Text Area',
  component: TextareaComponent,
};

export const basic = () => ({
  moduleMetadata: {
    declarations: [TextareaComponent],
  },
  template: `<ukho-textarea label="Description"></ukho-textarea>`,
});

export const disabled = () => ({
  moduleMetadata: {
    declarations: [TextareaComponent],
  },
  template: `<ukho-textarea label="Description" [disabled]="true"></ukho-textarea>`,
});

export const validationRequired = () => ({
  moduleMetadata: {
    declarations: [TextareaComponent],
    imports: [ReactiveFormsModule],
  },
  template: `<ukho-textarea label="Description" [formControl]="formControl"></ukho-textarea>`,
  props: {
    formControl: new FormControl('', Validators.required),
  },
});

validationRequired.story = {
  name: 'Required Validation',
};
