import { RadioComponent } from './radio.component';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/angular';

export default {
  title: 'Form Elements/Radio Buttons/Radio Button',
  component: RadioComponent,
  parameters: {
    componentSubtitle:
      'Radio buttons are intended for allowing users to pick a single option from a selection.' +
      'They can be grouped using radio groups'
  }
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
  change: action('changed'),
  disabled: false,
  checked: false
};
