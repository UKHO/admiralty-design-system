import { Meta, StoryObj } from '@storybook/web-components';
import { ColourBlockComponent } from './colour-block';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

const meta: Meta = {
  component: 'admiralty-colour-block',
  title: 'Colour Block',
  parameters: {
    actions: {
      handles: ['colourBlockLinkClicked'],
    },
  },
};

export default meta;

type ColourBlockArgs = Partial<ColourBlockComponent & { content: string }>;

type Story = StoryObj<ColourBlockArgs>;

const template: Story = {
  render: args => html`
    <admiralty-colour-block
      action-text=${ifDefined(args.actionText)}
      .width=${ifDefined(args.width)}
      .height=${ifDefined(args.height)}
      heading=${ifDefined(args.heading)}
      colour=${ifDefined(args.colour)}
      link-text=${ifDefined(args.linkText)}
      href=${ifDefined(args.href)}
      ?suppress-redirect=${Boolean(args.suppressRedirect)}
      ?enable-card-event=${Boolean(args.enableCardEvent)}
    >
      <div>${unsafeHTML(args.content)}</div>
    </admiralty-colour-block>
  `,
};

const defaultArgs: ColourBlockArgs = {
  width: 400,
  height: 400,
  heading: 'Setting it up',
  content: `<p>Go to Get Started to see how to install the Design System and start using it in your builds.</p>`,
  href: 'http://www.admiralty.co.uk',
  linkText: 'Get started',
  suppressRedirect: false,
  colour: 'admiralty-blue',
  enableCardEvent: false,
};

export const AdmiraltyBlue: Story = {
  ...template,
  args: {
    ...defaultArgs,
  },
};

export const Teal: Story = {
  ...template,
  args: { ...defaultArgs, colour: 'teal' },
};

export const BrightBlue: Story = {
  ...template,
  args: { ...defaultArgs, colour: 'bright-blue' },
};

export const NoRedirect: Story = {
  ...template,
  args: {
    ...defaultArgs,
    suppressRedirect: true,
  },
};

export const CardEventOnly: Story = {
  ...template,
  args: {
    ...defaultArgs,
    heading: 'Event only card',
    content: '<p>This variant emits colourBlockLinkClicked from the card surface without a link.</p>',
    href: undefined,
    linkText: undefined,
    suppressRedirect: true,
    enableCardEvent: true,
  },
};

export const DeprecatedButton: Story = {
  ...template,
  args: {
    ...defaultArgs,
    heading: 'Accessibility',
    content: `<p>Accessible design principles state that links go somewhere and that buttons do something.</p>
      <p>Buttons should not be used for links.</p>`,
    href: undefined,
    linkText: undefined,
    actionText: 'Show an alert',
    colour: 'teal',
  },
};

export const NoLink: Story = {
  ...template,
  args: {
    ...defaultArgs,
    href: undefined,
    linkText: undefined,
  },
};

export const RectangleWithLongerContent: Story = {
  ...template,
  args: {
    ...defaultArgs,
    width: 1000,
    height: 400,
    heading: 'What is a design system?',
    content: `<p>A design system is a comprehensive set of standards, guidelines, principles, and reusable components that guide the design and development of a product or brand.</p>
      <p>Design is <b>important</b> and you can find out <a href='#'>why design is important</a>.</p>
      <h5>Types of design</h5>
      <p>There are many types of design.</p>`,
    linkText: 'Find out more about design',
  },
};
