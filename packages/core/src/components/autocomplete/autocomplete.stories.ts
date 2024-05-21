import { Meta, StoryObj } from '@storybook/web-components';
import { AutocompleteComponent } from './autocomplete';
import { html } from 'lit';

const meta: Meta = {
  component: 'admiralty-complete',
  title: 'Autocomplete',
  parameters: {
    actions: {},
  },
};

export default meta;

type Story = StoryObj<AutocompleteComponent>;

const template: Story = {
  render: args => html`<admiralty-autocomplete label="Favourite Colour" hint="Please enter your favourite colour"></admiralty-autocomplete>`,
};

export const Basic: Story = { ...template };
