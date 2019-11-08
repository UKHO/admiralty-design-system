import {button, text, withKnobs} from '@storybook/addon-knobs';
import {RadioGroupComponent} from './radio-group.component';
import {RadioComponent} from '../radio/radio.component';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';

export default {
  title: 'Radio Button Group',
  component: RadioGroupComponent,
  decorators: [withKnobs],
};

const testFormControl = new FormControl('', Validators.required);
const handleSelectOpt1 = () => { testFormControl.setValue('option1'); };
const handleSelectOpt2 = () => { testFormControl.setValue('option2'); };
const handleSelectOpt1Bool = () => { testFormControl.setValue(true); };
const handleSelectOpt2Bool = () => { testFormControl.setValue(false); };
const handleEnableForm = () => { testFormControl.enable(); };
const handleDisableForm = () => { testFormControl.disable(); };

const commonProps = () => ({
  name: text('name', 'Test'),
  formControl: testFormControl,
  enable: button('enable radio group', handleEnableForm),
  disable: button('disable radio group', handleDisableForm),
});

export const basic = () => ({
  moduleMetadata: {
    imports: [ReactiveFormsModule],
    declarations: [RadioGroupComponent, RadioComponent],
  },
  props: {
    ...commonProps(),
    selectOption1: button('select option 1', handleSelectOpt1),
    selectOption2: button('select option 2', handleSelectOpt2),
  },
  template: `<ukho-radio-group [name]="name" [formControl]="formControl" (change)="change($event.target.value)">
<ukho-radio value="option1">Option 1</ukho-radio>
<ukho-radio value="option2">Option 2</ukho-radio>
</ukho-radio-group>`,
});

export const column = () => ({
  moduleMetadata: {
    imports: [ReactiveFormsModule],
    declarations: [RadioGroupComponent, RadioComponent],
  },
  props: {
    ...commonProps(),
    selectOption1: button('select option 1', handleSelectOpt1),
    selectOption2: button('select option 2', handleSelectOpt2),
  },
  template: `<ukho-radio-group name="the-radio-group" [formControl]="formControl" (change)="change($event.target.value)">
<ukho-radio style="display: block" value="option1">Option 1</ukho-radio>
<ukho-radio style="display: block" value="option2">Option 2</ukho-radio>
</ukho-radio-group>`,
});

export const yesNo = () => ({
  moduleMetadata: {
    imports: [ReactiveFormsModule],
    declarations: [RadioGroupComponent, RadioComponent],
  },
  props: {
    ...commonProps(),
    selectOption1: button('select option 1', handleSelectOpt1Bool),
    selectOption2: button('select option 2', handleSelectOpt2Bool),
  },
  template: `<ukho-radio-group name="the-radio-group" [formControl]="formControl" (change)="change($event.target.value)">
<ukho-radio style="display: block" [value]="true">Option 1</ukho-radio>
<ukho-radio style="display: block" [value]="false">Option 2</ukho-radio>
</ukho-radio-group>`,
});

yesNo.story = {
  name: 'Boolean Yes/No Select'
};
