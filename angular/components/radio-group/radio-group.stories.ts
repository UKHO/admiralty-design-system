import { RadioGroupComponent } from './radio-group.component';
import { RadioComponent } from '../radio/radio.component';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Story } from '@storybook/angular';

export default {
  title: 'Form Elements/Radio Buttons/Radio Button Group',
  component: RadioGroupComponent,
  parameters: {
    componentSubtitle:
      'Radio groups are intended for grouping radio buttons together for the purpose of providing a block of choices.'
  },
  argTypes: { change: { action: 'radio changed' } },
};

const Template: Story = (args) => ({
  moduleMetadata: {
    imports: [ReactiveFormsModule],
    declarations: [RadioGroupComponent, RadioComponent]
  },
  props: {
    ...args,
    formControl: new FormControl(''),
  },
  template: `<ukho-radio-group [name]="name" [formControl]="formControl" (change)="change($event.target.value)">
<ukho-radio value="option1">Option 1</ukho-radio>
<ukho-radio value="option2">Option 2</ukho-radio>
</ukho-radio-group>`
});

export const basic: Story = Template.bind({});

export const column = (args) => ({
  moduleMetadata: {
    imports: [ReactiveFormsModule],
    declarations: [RadioGroupComponent, RadioComponent]
  },
  props: {
    ...args,
    formControl: new FormControl(''),
  },
  template: `<ukho-radio-group name="the-radio-group" [formControl]="formControl" (change)="change($event.target.value)">
<ukho-radio style="display: block" value="option1">Option 1</ukho-radio>
<ukho-radio style="display: block" value="option2">Option 2</ukho-radio>
</ukho-radio-group>`
});

export const yesNo = (args) => ({
  moduleMetadata: {
    imports: [ReactiveFormsModule],
    declarations: [RadioGroupComponent, RadioComponent]
  },
  props: {
    ...args,
    formControl: new FormControl(''),
  },
  template: `<ukho-radio-group name="the-radio-group" [formControl]="formControl" ariaLabelledBy="group-label-boolean" (change)="change($event.target.value)">
    <h3 id="group-label-boolean">
      Do you agree?
    </h3>
<ukho-radio style="display: block" [value]="true">Yes</ukho-radio>
<ukho-radio style="display: block" [value]="false">No</ukho-radio>
</ukho-radio-group>`
});

yesNo.story = {
  name: 'Boolean Yes/No Select'
};
