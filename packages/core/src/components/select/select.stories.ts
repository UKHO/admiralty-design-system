import { Meta, StoryObj } from '@storybook/web-components';
import { SelectComponent } from './select';
import { html } from 'lit';

const meta: Meta = {
  component: 'admiralty-select',
  title: 'Forms/Select',
  parameters: {
    actions: {
      handles: ['admiraltyChange', 'admiraltyBlur']
    }
  },
  args: {
    disabled: false,
    error: false,
    errorHint: 'The colour must be green',
    hint: 'Select an option from the list',
    label: 'Choose a colour'
  }
};

export default meta;

type Story = StoryObj<SelectComponent>;

const template: Story = {
  render: args => html`
    <admiralty-select ?disabled="${args.disabled}" ?error=${args.error} error-hint="${args.errorHint}" hint="${args.hint}" label="${args.label}" width="${args.width}">
      <option>first</option>
      <option>second</option>
      <option>third</option>
    </admiralty-select>`,
};

export const DefaultSelect: Story = { ...template };

export const SelectWithError: Story = { ...template, 
  args: { 
    error: true
  }
};

export const SelectDisabled: Story = { ...template, 
  args: { 
    disabled: true
  }
};

export const FixedWidth: Story = { ...template, 
  args: { 
    width: 150
  }
};
