import { RadioComponent } from './radio.component';
import { Story } from '@storybook/angular';

export default {
  title: 'Form Elements/Radio Buttons/Radio Button',
  component: RadioComponent,
  parameters: {
    componentSubtitle:
      'Radio buttons are intended for allowing users to pick a single option from a selection.' +
      'They can be grouped using radio groups'
  },
  argTypes: { change: { action: 'radio changed' } },
};

const Template: Story = (args) => ({
  moduleMetadata: {
    declarations: [RadioComponent]
  },
  props: args,
  template: `<ukho-radio name="group1"
   [disabled]="disabled"
   [checked]="checked"
   (change)="change($event.target.checked)">Option 1</ukho-radio>`
});

export const basic: Story = Template.bind({});
basic.args = {
  disabled: false,
  checked: false
};

export const checked: Story = Template.bind({});
checked.args = {
  disabled: false,
  checked: true
};

export const disabled: Story = Template.bind({});
disabled.args = {
  disabled: true,
  checked: false
};
