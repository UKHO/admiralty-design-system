import { CheckboxComponent } from './checkbox.component';
import { Story } from '@storybook/angular';
import { FormsModule } from '@angular/forms';

export default {
  title: 'Form Elements/Checkbox',
  component: CheckboxComponent,
  parameters: {
    componentSubtitle: 'Checkboxes are a form element intended for proving a mechanism for multiple selections.'
  },
  argTypes: { change: { action: 'checkbox changed' } },
};

const template: Story = (args) => ({
  props: args,
  moduleMetadata: {
    declarations: [CheckboxComponent],
    imports: [FormsModule]
  },
  template: `<ukho-checkbox (change)="change($event.target.checked)" [checkboxRight]="checkboxRight" [value]="value" [checked]="checked" [justify]="justify">I emit actions</ukho-checkbox>`,
});

export const checkbox = template.bind({});

export const checkboxMultiple: Story = (args) => ({
  props: args,
  moduleMetadata: {
    declarations: [CheckboxComponent],
    imports: [FormsModule]
  },
  template: `<div style="display: flex; flex-direction: column;">
  <ukho-checkbox value="tea" (change)="change($event.target.checked)" [checkboxRight]="checkboxRight" [value]="value" [checked]="checked" [justify]="justify">Tea</ukho-checkbox>
  <ukho-checkbox value="coffee" (change)="change($event.target.checked)" [checkboxRight]="checkboxRight" [value]="value" [checked]="checked" [justify]="justify">Coffee</ukho-checkbox>
  </div>`,
});

export const checkboxRight = template.bind({});
checkboxRight.args = {
  checkboxRight: true,
};
