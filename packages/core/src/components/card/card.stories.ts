import { Meta, StoryObj } from '@storybook/web-components';
import { CardComponent } from './card';
import { html } from 'lit';

const meta: Meta = {
  component: 'admiralty-card',
  title: 'Card',
  parameters: {
    actions: {
    },
  }
};

export default meta;

type Story = StoryObj<CardComponent>;

interface Args {
  heading: string;
  '--admiralty-card-border-colour'?: string;
  '--admiralty-card-heading-colour'?: string;
  '--admiralty-card-heading-border-colour'?: string;
  '--admiralty-card-heading-text-colour'?: string;
  '--admiralty-card-background-colour'?: string;
}

export const WithTitle: Story = {
    render: args => html`
        <admiralty-card heading="${args.heading}">Some content</admiralty-card>`,
    args: { heading: 'I am a card', '--admiralty-card-background-colour': '#eeeeee' } as Args
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

export const WithCustomHtmlContent: Story = {
  render: (args) => {
    const element = document.createElement('admiralty-card');
    element.innerHTML = `<p style="margin-bottom: 10px">ID: <b>Random-Id-CS23-018517</b></p>
        <p style="margin-bottom: 10px">Random Data: <b>NM72957</b></p>
        <p style="margin-bottom: 25px">Random Data: <b>Joe Bloggs</b></p>
        <p style="float: right">Created: <b>01/01/1990</b></p>
        <admiralty-pill text="Draft"></admiralty-pill>`

    element.setAttribute('heading', args.heading);

    element.style.setProperty('--admiralty-card-border-colour', args['--admiralty-card-border-colour']);
    element.style.setProperty('--admiralty-card-heading-colour', args['--admiralty-card-heading-colour']);
    element.style.setProperty('--admiralty-card-heading-border-colour', args['--admiralty-card-heading-border-colour']);
    element.style.setProperty('--admiralty-card-heading-text-colour', args['--admiralty-card-heading-text-colour']);
    element.style.setProperty('--admiralty-card-background-colour', args['--admiralty-card-background-colour']);
    return element;
  },
  args: {
    heading: 'Custom card using CSS variables',
    '--admiralty-card-border-colour': '#ffffff',
    '--admiralty-card-heading-colour': '#09315b',
    '--admiralty-card-heading-border-colour': '#09315b',
    '--admiralty-card-heading-text-colour': '#FFFFFF',
    '--admiralty-card-background-colour': '#eeeeee',
  } as Args
};

export const WithCustomHtmlBrightBlueContent: Story = {
  render: (args) => {
    const element = document.createElement('admiralty-card');
    element.innerHTML = `<p style="margin-bottom: 10px">ID: <b>Random-Id-CS23-018517</b></p>
        <p style="margin-bottom: 10px">Random Data: <b>NM72957</b></p>
        <p style="margin-bottom: 25px">Random Data: <b>Joe Bloggs</b></p>
        <p style="float: right">Created: <b>01/01/1990</b></p>
        <admiralty-pill text="Draft" colour="bright-blue"></admiralty-pill>`

    element.setAttribute('heading', args.heading);
    element.style.setProperty('--admiralty-card-border-colour', args['--admiralty-card-border-colour']);
    element.style.setProperty('--admiralty-card-heading-colour', args['--admiralty-card-heading-colour']);
    element.style.setProperty('--admiralty-card-heading-border-colour', args['--admiralty-card-heading-border-colour']);
    element.style.setProperty('--admiralty-card-heading-text-colour', args['--admiralty-card-heading-text-colour']);
    element.style.setProperty('--admiralty-card-background-colour', args['--admiralty-card-background-colour']);
    return element;
  },
  args: {
    heading: 'Custom card using CSS variables',
    '--admiralty-card-border-colour': '#ffffff',
    '--admiralty-card-heading-colour': '#0177c1',
    '--admiralty-card-heading-border-colour': '#0177c1',
    '--admiralty-card-heading-text-colour': '#FFFFFF',
    '--admiralty-card-background-colour': '#eeeeee',
  } as Args
};

export const WithCustomHtmlWithContentNoHeader: Story = {
  render: (args) => {
    const element = document.createElement('admiralty-card');
    element.innerHTML = `<h2>Example heading</h2>
        <admiralty-pill style="float: right" text="Draft" colour="bright-blue"></admiralty-pill>
        <p style="line-height: 34px">ID: Random-Id-CS23-018517</p>`

    element.style.setProperty('--admiralty-card-border-colour', args['--admiralty-card-border-colour']);
    element.style.setProperty('--admiralty-card-heading-colour', args['--admiralty-card-heading-colour']);
    element.style.setProperty('--admiralty-card-heading-border-colour', args['--admiralty-card-heading-border-colour']);
    element.style.setProperty('--admiralty-card-heading-text-colour', args['--admiralty-card-heading-text-colour']);
    element.style.setProperty('--admiralty-card-background-colour', args['--admiralty-card-background-colour']);
    element.style.setProperty('--admiralty-card-padding', args['--admiralty-card-padding']);
    element.style.setProperty('--admiralty-card-not-desktop-padding', args['--admiralty-card-not-desktop-padding']);
    return element;
  },
  args: {
    heading: 'Custom card using CSS variables',
    '--admiralty-card-border-colour': '#d8d8d8',
    '--admiralty-card-heading-colour': '#eeeeee',
    '--admiralty-card-heading-border-colour': '#eeeeee',
    '--admiralty-card-heading-text-colour': '#09315b',
    '--admiralty-card-background-colour': '#eeeeee',
    '--admiralty-card-padding': '10px 10px 0px 10px',
    '--admiralty-card-not-desktop-padding': '10px 10px 0px 10px',
  } as Args
};


export const WithCustomHtmlWithContentNoHeaderWhite: Story = {
  render: (args) => {
    const element = document.createElement('admiralty-card');
    element.innerHTML = `<h2>Example heading</h2>
        <admiralty-pill style="float: right" text="Draft" colour="bright-blue"></admiralty-pill>
        <p style="line-height: 34px">ID: Random-Id-CS23-018517</p>`

    element.style.setProperty('--admiralty-card-border-colour', args['--admiralty-card-border-colour']);
    element.style.setProperty('--admiralty-card-heading-colour', args['--admiralty-card-heading-colour']);
    element.style.setProperty('--admiralty-card-heading-border-colour', args['--admiralty-card-heading-border-colour']);
    element.style.setProperty('--admiralty-card-heading-text-colour', args['--admiralty-card-heading-text-colour']);
    element.style.setProperty('--admiralty-card-background-colour', args['--admiralty-card-background-colour']);
    element.style.setProperty('--admiralty-card-padding', args['--admiralty-card-padding']);
    element.style.setProperty('--admiralty-card-not-desktop-padding', args['--admiralty-card-not-desktop-padding']);
    return element;
  },
  args: {
    heading: 'Custom card using CSS variables',
    '--admiralty-card-border-colour': '#d8d8d8',
    '--admiralty-card-heading-colour': '#eeeeee',
    '--admiralty-card-heading-border-colour': '#eeeeee',
    '--admiralty-card-heading-text-colour': '#09315b',
    '--admiralty-card-background-colour': '#FFFFFF',
    '--admiralty-card-padding': '10px 10px 0px 10px',
    '--admiralty-card-not-desktop-padding': '10px 10px 0px 10px',
  } as Args
};
