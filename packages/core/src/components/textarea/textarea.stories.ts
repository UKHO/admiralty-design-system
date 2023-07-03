import { Meta, StoryObj } from '@storybook/web-components';
import { TextareaComponent } from './textarea';
import { html } from 'lit';

const meta: Meta = {
  component: 'admiralty-side-nav-item',
  title: 'Forms/Text Area',
  parameters: {
    actions: {
    }
  }
};

export default meta;

type Story = StoryObj<TextareaComponent>;
  
export const Basic: Story = { render: args => 
  html`
    <admiralty-textarea label="${args.label}" hint="${args.hint}">
    </admiralty-textarea>`,
  args: {
    label: 'Description',
    hint: 'Enter a description'
  }
};
  
export const FixedWidth: Story = { render: args => 
  html`
    <admiralty-textarea label="${args.label}" width="${args.width}">
    </admiralty-textarea>`,
  args: {
    label: 'Description',
    width: 400
  }
};
  
export const Disabled: Story = { render: args => 
  html`
    <admiralty-textarea label="${args.label}" ?disabled="${args.disabled}">
    </admiralty-textarea>`,
  args: {
    label: 'Description',
    disabled: true
  }
};
  
export const Invalid: Story = { render: args => 
  html`
    <admiralty-textarea label="${args.label}" ?invalid="${args.invalid}" invalid-message="${args.invalidMessage}">
    </admiralty-textarea>`,
  args: {
    label: 'What is your name?',
    invalid: true,
    invalidMessage: 'That is not a real name'
  }
};
  
export const WithText: Story = { render: args => 
  html`
    <admiralty-textarea label="${args.label}" text="${args.text}">
    </admiralty-textarea>`,
  args: {
    label: 'With text',
    text: 'Sample Text',
  },
};

export const MaxLength: Story = {
  render: args => html` <admiralty-textarea text="${args.text}" max-length="${args.maxLength}"> </admiralty-textarea>`,
  args: {
    maxLength: 1,
    text: 'A',
  },
};
