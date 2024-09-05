import { Meta, StoryObj } from '@storybook/web-components';
import { ColourBlockComponent } from './colour-block';
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

const meta: Meta = {
  component: 'admiralty-breadcrumb',
  title: 'Colour Block',
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
};

export default meta;

type ColourBlockArgs = Partial<ColourBlockComponent & { content: string; addListener: boolean }>;

type Story = StoryObj<ColourBlockArgs>;

const template: Story = {
  render: args => html`
    <admiralty-colour-block
      action-text="${args.actionText}"
      width="${args.width}"
      height="${args.height}"
      heading="${args.heading}"
      colour="${args.colour}"
      link-text="${args.linkText}"
      href="${args.href}"
      suppress-redirect="${args.suppressRedirect}"
      enable-card-event="${args.enableCardEvent}"
    >
      <div>${unsafeHTML(args.content)}</div>
    </admiralty-colour-block>
    <script>
      ${args.addListener ? `document.querySelector('admiralty-colour-block').addEventListener('colourBlockLinkClicked', () => alert('colourBlockLinkClicked'));` : null};
    </script>
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

const rectangleArgs: ColourBlockArgs = {
  width: 1000,
  height: 400,
  heading: 'Block by Block',
  content: `<p>This colour block is a component in the design system and we hope you enjoy it</p>
    <p>This block supports HTML such as <b>bold</b> text and <a href='#'>links</a>.</p>
    <h5>Even Headings</h5>
    <span>What about spans?</span>`,
  actionText: 'Click Here',
  colour: 'admiralty-blue',
  enableCardEvent: true,
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
    addListener: true,
  },
};

export const ListenerOnBlock: Story = {
  ...template,
  args: {
    ...defaultArgs,
    suppressRedirect: true,
    addListener: true,
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
    addListener: true,
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
