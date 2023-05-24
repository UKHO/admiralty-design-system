import { Meta, StoryObj } from '@storybook/web-components';
import { CardComponent } from './card';
import { html } from 'lit';

const meta: Meta = {
  component: 'admiralty-card',
  parameters: {
    actions: {
    },
  },
};

export default meta;

type Story = StoryObj<CardComponent>;

export const WithTitle: Story = { 
    render: args => html`
        <admiralty-card heading="${args.heading}">Some content</admiralty-card>`,
    args: { heading: 'I am a card' }
};

export const WithoutTitle: Story = {
    render: args => html`
        <admiralty-card>Some content</admiralty-card>`
};

export const WithHtmlContent: Story = {
    render: args => html`
        <admiralty-card heading="${args.heading}">You can put any html content in the body of a card. Such as <a href='#'>links</a> or <b>bold text</b></admiralty-card>`,
    args: { heading: 'I am a card' }
};
