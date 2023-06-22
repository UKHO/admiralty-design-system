import { Meta, StoryObj } from '@storybook/web-components';
import { TypeAheadComponent } from './type-ahead';
import { html } from 'lit';

const meta: Meta = {
  component: 'admiralty-type-ahead',
  title: 'Forms/Typeahead',
  parameters: {
    actions: {
        handles: ['valueChanged', 'selectionChanged']
    }
  },
  args: {
    label: 'Please Type',
    hint: '',
    value: '',
    placeholder: '',
    resultsOnInitFocus: false
  }
};

export default meta;

type Story = StoryObj<TypeAheadComponent>;

const template: Story = {
  render: args => html`
    <admiralty-type-ahead
      value = "${args.value}"
      label="${args.label}"
      hint="${args.hint}"
      ?results-on-init-focus="${args.resultsOnInitFocus}"
      placeholder="${args.placeholder}">
      <admiralty-type-ahead-item value="dog"></admiralty-type-ahead-item>
      <admiralty-type-ahead-item value="cat"></admiralty-type-ahead-item>
      <admiralty-type-ahead-item value="elephant"></admiralty-type-ahead-item>
      <admiralty-type-ahead-item value="badger"></admiralty-type-ahead-item>
      <admiralty-type-ahead-item value="donkey"></admiralty-type-ahead-item>
      <admiralty-type-ahead-item value="horse"></admiralty-type-ahead-item>
      <admiralty-type-ahead-item value="lion"></admiralty-type-ahead-item>
      <admiralty-type-ahead-item value="ostrich"></admiralty-type-ahead-item>
      <admiralty-type-ahead-item value="rabbit"></admiralty-type-ahead-item>
      <admiralty-type-ahead-item value="tiger"></admiralty-type-ahead-item>
      <admiralty-type-ahead-item value="guinea pig"></admiralty-type-ahead-item>
    </admiralty-type-ahead>`,
};

export const WithoutSelectionAction: Story = { ...template };

export const Prefilled: Story = { ...template, 
  args: { 
    value: 'donke2y'
  }
};

export const ShowResultsOnInitFocus: Story = { ...template, 
  args: { 
    resultsOnInitFocus: true
  }
};

export const withPlaceholderText: Story = { ...template, 
  args: { 
    placeholder: 'Start typing the name of an animal',
    hint: 'Please type the name of an animal'
  }
};
