import { RadioGroupComponent } from './radio-group.component';
import { RadioComponent } from '../radio/radio.component';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/angular';

export default {
  title: 'Form Elements/Radio Buttons/Radio Button Group',
  component: RadioGroupComponent,
  parameters: {
    componentSubtitle:
      'Radio groups are intended for grouping radio buttons together for the purpose of providing a block of choices.'
  }
};

const Template: Story = (args) => ({
  moduleMetadata: {
    imports: [ReactiveFormsModule],
    declarations: [RadioGroupComponent, RadioComponent]
  },
  props: args,
  template: `<ukho-radio-group [name]="name" [formControl]="formControl" (change)="change($event.target.value)">
<ukho-radio value="option1">Option 1</ukho-radio>
<ukho-radio value="option2">Option 2</ukho-radio>
</ukho-radio-group>`
});

export const basic: Story = Template.bind({});

export const column = () => ({
  moduleMetadata: {
    imports: [ReactiveFormsModule],
    declarations: [RadioGroupComponent, RadioComponent]
  },
  props: {},
  template: `<ukho-radio-group name="the-radio-group" [formControl]="formControl" (change)="change($event.target.value)">
<ukho-radio style="display: block" value="option1">Option 1</ukho-radio>
<ukho-radio style="display: block" value="option2">Option 2</ukho-radio>
</ukho-radio-group>`
});

export const yesNo = () => ({
  moduleMetadata: {
    imports: [ReactiveFormsModule],
    declarations: [RadioGroupComponent, RadioComponent]
  },
  props: {},
  template: `<ukho-radio-group name="the-radio-group" [formControl]="formControl" (change)="change($event.target.value)">
<ukho-radio style="display: block" [value]="true">Option 1</ukho-radio>
<ukho-radio style="display: block" [value]="false">Option 2</ukho-radio>
</ukho-radio-group>`
});

yesNo.story = {
  name: 'Boolean Yes/No Select'
};
