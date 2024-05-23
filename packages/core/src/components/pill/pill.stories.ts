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
  render: args => html`<admiralty-pill text="${args.text}" ?selected="${args.selected}" label="${args.label}" colour="${args.colour}"></admiralty-pill>`,
  args: {
    text: 'Do you want to leave this page?',
    label: 'Do you want to leave this page?',
    colour: 'admiralty-blue',
    selected: false,
  },
};

export const White: Story = {
  render: args => html`<admiralty-pill text="${args.text}" ?selected="${args.selected}" label="${args.label}" colour="${args.colour}"></admiralty-pill>`,
  args: {
    text: 'Do you want to leave this page?',
    label: 'Do you want to leave this page?',
    colour: 'white',
    selected: false,
  },
};

export const BrightBlue: Story = {
  render: args => html`<admiralty-pill text="${args.text}" ?selected="${args.selected}" label="${args.label}" colour="${args.colour}"></admiralty-pill>`,
  args: {
    text: 'Do you want to leave this page?',
    label: 'Do you want to leave this page?',
    colour: 'bright-blue',
    selected: false,
  },
};

export const AdmiraltyBlueChecked: Story = {
  render: args => html`<admiralty-pill text="${args.text}" ?selected="${args.selected}" label="${args.label}" colour="${args.colour}"></admiralty-pill>`,
  args: {
    text: 'Do you want to leave this page?',
    label: 'Do you want to leave this page?',
    colour: 'admiralty-blue',
    selected: true,
  },
};

export const WhiteChecked: Story = {
  render: args => html`<admiralty-pill text="${args.text}" ?selected="${args.selected}" label="${args.label}" colour="${args.colour}"></admiralty-pill>`,
  args: {
    text: 'Do you want to leave this page?',
    label: 'Do you want to leave this page?',
    colour: 'white',
    selected: true,
  },
};

export const BrightBlueChecked: Story = {
  render: args => html`<admiralty-pill text="${args.text}" ?selected="${args.selected}" label="${args.label}" colour="${args.colour}"></admiralty-pill>`,
  args: {
    text: 'Do you want to leave this page?',
    label: 'Do you want to leave this page?',
    colour: 'bright-blue',
    selected: true,
  },
};
