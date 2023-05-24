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

type Story = StoryObj<ColourBlockComponent>;

const template: Story = {
  render: args => html`
  <admiralty-colour-block
      action-text="${args.actionText}"
      width="${args.width}"
      height="${args.height}"
      heading="${args.heading}"
      colour="${args.colour}"
      click-action="${args.clickAction}"
    >
      <div>${unsafeHTML(args.content)}</div>
    </admiralty-colour-block>
    <script>
      document.querySelector('admiralty-colour-block').clickAction = () => console.log('click');
    </script>`,
};

const squareArgs = {
  width: 400,
  height: 400,
  heading: 'Colour Me Surprised',
  content: `<p>This colour block is a component in the design system and we hope you enjoy it</p>`,
  actionText: 'Click Here',
  colour: 'admiralty-blue',
};

const rectangleArgs = {
  width: 1000,
  height: 400,
  heading: 'Block by Block',
  content: `<p>This colour block is a component in the design system and we hope you enjoy it</p>
    <p>This block supports HTML such as <b>bold</b> text and <a href='#'>links</a>.</p>
    <h5>Even Headings</h5>
    <span>What about spans?</span>`,
  actionText: 'Click Here',
  colour: 'admiralty-blue',
};

export const AdmiraltyBlueSquare: Story = { ...template, args: { ...squareArgs } };

export const TealSquare: Story = { ...template, args: { ...squareArgs, colour: 'teal' } };

export const BrightBlueSquare: Story = { ...template, args: { ...squareArgs, colour: 'bright-blue' } };

export const AdmiraltyBlueRectangle: Story = { ...template, args: { ...rectangleArgs } };

export const TealRectangle: Story = { ...template, args: { ...rectangleArgs, colour: 'teal' } };

export const BrightBlueRectangle: Story = { ...template, args: { ...rectangleArgs, colour: 'bright-blue' } };
