import { Meta, StoryObj } from '@storybook/web-components';
import { PillComponent } from './pill';
import { html } from 'lit';

const meta: Meta = {
  component: 'admiralty-pill',
  title: 'Pill',
  parameters: {
    actions: {},
  },
};

export default meta;

type Story = StoryObj<PillComponent>;

export const AdmiraltyBlue: Story = {
  render: args => html`<admiralty-pill text="${args.text}" number="${args.number}" ?selected="${args.selected}" label="${args.label}" colour="${args.colour}"></admiralty-pill>`,
  args: {
    text: 'Filter one',
    label: 'Filter one',
    colour: 'admiralty-blue',
    number: '',
    selected: false,
  },
};

export const White: Story = {
  render: args => html`<admiralty-pill text="${args.text}" number="${args.number}" ?selected="${args.selected}" label="${args.label}" colour="${args.colour}"></admiralty-pill>`,
  args: {
    text: 'Filter one',
    label: 'Filter one',
    colour: 'white',
    number: '',
    selected: false,
  },
};

export const BrightBlue: Story = {
  render: args => html`<admiralty-pill text="${args.text}" number="${args.number}" ?selected="${args.selected}" label="${args.label}" colour="${args.colour}"></admiralty-pill>`,
  args: {
    text: 'Filter one',
    label: 'Filter one',
    colour: 'bright-blue',
    number: '',
    selected: false,
  },
};

export const AdmiraltyBlueNumber: Story = {
  render: args => html`<admiralty-pill text="${args.text}" number="${args.number}" label="${args.label}" colour="${args.colour}"></admiralty-pill>`,
  args: {
    text: 'Filters',
    label: 'Filters',
    colour: 'admiralty-blue',
    number: '3',
    selected: false,
  },
};

export const WhiteNumber: Story = {
  render: args => html`<admiralty-pill text="${args.text}" number="${args.number}" ?selected="${args.selected}" label="${args.label}" colour="${args.colour}"></admiralty-pill>`,
  args: {
    text: 'Filters',
    label: 'Filters',
    colour: 'white',
    number: '3',
    selected: false,
  },
};

export const BrightBlueNumber: Story = {
  render: args => html`<admiralty-pill text="${args.text}" number="${args.number}" ?selected="${args.selected}" label="${args.label}" colour="${args.colour}"></admiralty-pill>`,
  args: {
    text: 'Filters',
    label: 'Filters',
    colour: 'bright-blue',
    number: '3',
    selected: false,
  },
};

export const AdmiraltyBlueChecked: Story = {
  render: args => html`<admiralty-pill text="${args.text}" number="${args.number}" ?selected="${args.selected}" label="${args.label}" colour="${args.colour}"></admiralty-pill>`,
  args: {
    text: 'Filters one',
    label: 'Filters one',
    colour: 'admiralty-blue',
    number: '',
    selected: true,
  },
};

export const WhiteChecked: Story = {
  render: args => html`<admiralty-pill text="${args.text}" number="${args.number}" ?selected="${args.selected}" label="${args.label}" colour="${args.colour}"></admiralty-pill>`,
  args: {
    text: 'Filters one',
    label: 'Filters one',
    colour: 'white',
    number: '',
    selected: true,
  },
};

export const BrightBlueChecked: Story = {
  render: args => html`<admiralty-pill text="${args.text}" number="${args.number}" ?selected="${args.selected}" label="${args.label}" colour="${args.colour}"></admiralty-pill>`,
  args: {
    text: 'Filters one',
    label: 'Filters one',
    colour: 'bright-blue',
    number: '',
    selected: true,
  },
};

export const AdmiraltyBlueNumberChecked: Story = {
  render: args => html`<admiralty-pill text="${args.text}" number="${args.number}" ?selected="${args.selected}" label="${args.label}" colour="${args.colour}"></admiralty-pill>`,
  args: {
    text: 'Filters',
    label: 'Filters',
    colour: 'admiralty-blue',
    number: '3',
    selected: true,
  },
};

export const WhiteNumberChecked: Story = {
  render: args => html`<admiralty-pill text="${args.text}" number="${args.number}" ?selected="${args.selected}" label="${args.label}" colour="${args.colour}"></admiralty-pill>`,
  args: {
    text: 'Filters',
    label: 'Filters',
    colour: 'white',
    number: '3',
    selected: true,
  },
};

export const BrightBlueNumberChecked: Story = {
  render: args => html`<admiralty-pill text="${args.text}" number="${args.number}" ?selected="${args.selected}" label="${args.label}" colour="${args.colour}"></admiralty-pill>`,
  args: {
    text: 'Filters',
    label: 'Filters',
    colour: 'bright-blue',
    number: '3',
    selected: true,
  },
};
