import { Meta, StoryObj } from '@storybook/web-components';
import { RadioGroupComponent } from './radio-group';
import { html } from 'lit';

const meta: Meta = {
  component: 'admiralty-radio-group',
  title: 'Forms/Radio Group',
  parameters: {
    actions: {
      handles: ['radioChange']
    }
  }
};

export default meta;

type Story = StoryObj<RadioGroupComponent>;

export const Basic: Story = { render: args => html`
  <admiralty-radio-group display-vertical=${args.stack}>
    <admiralty-radio name="grp" value="option1">Option 1</admiralty-radio>
    <admiralty-radio name="grp" value="option2">Option 2</admiralty-radio>
  </admiralty-radio-group>`,
  args: { stack: true } };

export const YesNo: Story = { render: args => html`
  <h3 id="group-label-boolean">
    Do you agree?
  </h3>
  <admiralty-radio-group display-vertical="true" value=${args.value}>
    <admiralty-radio name="grp" value="true">Yes</admiralty-radio>
    <admiralty-radio name="grp" value="false">No</admiralty-radio>
  </admiralty-radio-group>`,
  args: { value: false } };
