import { Meta, StoryObj } from '@storybook/web-components';
import { ExpansionComponent } from './expansion';
import { html } from 'lit';

const meta: Meta = {
  component: 'admiralty-expansion',
  title: 'Expansion',
  parameters: {
    actions: {
        handles: ['change'],
    },
  },
  args: {
    heading: 'Expansion Heading',
    expanded: false,
    alignHeadingRight: false,
    hideBorder: false,
  }
};

export default meta;

type Story = StoryObj<ExpansionComponent>;

const template: Story = {
  render: args => html`
    <admiralty-expansion
      heading="${args.heading}"
      ?expanded="${args.expanded}"
      ?align-heading-right="${args.alignHeadingRight}"
      ?hide-border="${args.hideBorder}"
    >
      Some content for the expansion
    </admiralty-expansion>`,
};

export const Basic: Story = { ...template };

export const RightAlignedHeading: Story = { ...template,
  args: {
    heading: 'Expansion Heading',
    alignHeadingRight: true,
  }
};

export const Expanded: Story = { ...template,
  args: {
    heading: 'Expansion Heading',
    expanded: true,
  }
};

export const Multiple: Story = {
  render: args => html`
    <admiralty-expansion heading="Heading 1">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut vulputate justo. Nulla tincidunt gravida condimentum. Vivamus elementum malesuada sem. Nulla consequat semper fermentum. Etiam et tempus massa. Nunc condimentum rhoncus dui. Duis viverra erat eu velit fringilla, eu pretium orci tincidunt. Maecenas nec ipsum at arcu viverra eleifend. Pellentesque volutpat, turpis a sagittis facilisis, nisl nisi consequat neque, in luctus tortor enim iaculis neque.</p>
      <p>Curabitur nec mattis ex. In tincidunt quis nunc eu congue. Phasellus odio dui, aliquam a aliquet vel, fermentum id dolor. Nullam neque elit, interdum et mauris et, tempus imperdiet arcu. Cras erat odio, volutpat vel bibendum quis, malesuada non quam. Etiam in bibendum lacus. In hac habitasse platea dictumst. Proin justo nunc, gravida nec magna id, faucibus placerat dui. Phasellus luctus viverra imperdiet. Maecenas sed lorem ligula. Maecenas nec velit ut lectus porta ullamcorper vel et ante. Sed pretium metus vitae sagittis tincidunt. Integer aliquam consectetur ex et tempus. Aliquam faucibus ullamcorper libero.</p>
    </admiralty-expansion>
    <admiralty-expansion heading="Heading 2">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut vulputate justo. Nulla tincidunt gravida condimentum. Vivamus elementum malesuada sem. Nulla consequat semper fermentum. Etiam et tempus massa. Nunc condimentum rhoncus dui. Duis viverra erat eu velit fringilla, eu pretium orci tincidunt. Maecenas nec ipsum at arcu viverra eleifend. Pellentesque volutpat, turpis a sagittis facilisis, nisl nisi consequat neque, in luctus tortor enim iaculis neque.</p>
      <p>Curabitur nec mattis ex. In tincidunt quis nunc eu congue. Phasellus odio dui, aliquam a aliquet vel, fermentum id dolor. Nullam neque elit, interdum et mauris et, tempus imperdiet arcu. Cras erat odio, volutpat vel bibendum quis, malesuada non quam. Etiam in bibendum lacus. In hac habitasse platea dictumst. Proin justo nunc, gravida nec magna id, faucibus placerat dui. Phasellus luctus viverra imperdiet. Maecenas sed lorem ligula. Maecenas nec velit ut lectus porta ullamcorper vel et ante. Sed pretium metus vitae sagittis tincidunt. Integer aliquam consectetur ex et tempus. Aliquam faucibus ullamcorper libero.</p>
    </admiralty-expansion>
    <admiralty-expansion heading="Heading 3">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut vulputate justo. Nulla tincidunt gravida condimentum. Vivamus elementum malesuada sem. Nulla consequat semper fermentum. Etiam et tempus massa. Nunc condimentum rhoncus dui. Duis viverra erat eu velit fringilla, eu pretium orci tincidunt. Maecenas nec ipsum at arcu viverra eleifend. Pellentesque volutpat, turpis a sagittis facilisis, nisl nisi consequat neque, in luctus tortor enim iaculis neque.</p>
      <p>Curabitur nec mattis ex. In tincidunt quis nunc eu congue. Phasellus odio dui, aliquam a aliquet vel, fermentum id dolor. Nullam neque elit, interdum et mauris et, tempus imperdiet arcu. Cras erat odio, volutpat vel bibendum quis, malesuada non quam. Etiam in bibendum lacus. In hac habitasse platea dictumst. Proin justo nunc, gravida nec magna id, faucibus placerat dui. Phasellus luctus viverra imperdiet. Maecenas sed lorem ligula. Maecenas nec velit ut lectus porta ullamcorper vel et ante. Sed pretium metus vitae sagittis tincidunt. Integer aliquam consectetur ex et tempus. Aliquam faucibus ullamcorper libero.</p>
    </admiralty-expansion>`
};

export const MultilineTitle: Story = {
  render: args => html`
    <div style="width:300px">
      <admiralty-expansion
        style="width:200px"
        heading="${args.heading}"
        expanded="${args.expanded}"
        align-heading-right="${args.alignHeadingRight}"
        hide-border="${args.hideBorder}"
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut vulputate justo. Nulla tincidunt gravida condimentum. Vivamus elementum malesuada sem. Nulla consequat semper fermentum. Etiam et tempus massa. Nunc condimentum rhoncus dui. Duis viverra erat eu velit fringilla, eu pretium orci tincidunt. Maecenas nec ipsum at arcu viverra eleifend. Pellentesque volutpat, turpis a sagittis facilisis, nisl nisi consequat neque, in luctus tortor enim iaculis neque.</p>
        <p>Curabitur nec mattis ex. In tincidunt quis nunc eu congue. Phasellus odio dui, aliquam a aliquet vel, fermentum id dolor. Nullam neque elit, interdum et mauris et, tempus imperdiet arcu. Cras erat odio, volutpat vel bibendum quis, malesuada non quam. Etiam in bibendum lacus. In hac habitasse platea dictumst. Proin justo nunc, gravida nec magna id, faucibus placerat dui. Phasellus luctus viverra imperdiet. Maecenas sed lorem ligula. Maecenas nec velit ut lectus porta ullamcorper vel et ante. Sed pretium metus vitae sagittis tincidunt. Integer aliquam consectetur ex et tempus. Aliquam faucibus ullamcorper libero.</p>
      </admiralty-expansion>
    </div>`,
  args: {
    heading: 'Expansion Heading that is really really long'
  }
};

export const NoBorder: Story = {
  render: args => html`
    <admiralty-expansion heading="${args.heading}" expanded="${args.expanded}" align-heading-right="${args.alignHeadingRight}" hide-border="${args.hideBorder}">
      Some content for the expansion with no border
    </admiralty-expansion>
    <admiralty-expansion heading="${args.heading}" expanded="${args.expanded}" align-heading-right="${args.alignHeadingRight}" hide-border="${args.hideBorder}">
      Some content for the expansion with no border
    </admiralty-expansion>
    <admiralty-expansion heading="${args.heading}" expanded="${args.expanded}" align-heading-right="${args.alignHeadingRight}" hide-border="${args.hideBorder}">
      Some content for the expansion with no border
    </admiralty-expansion>`,
  args: {
    heading: 'Expansion Heading',
    hideBorder: true,
  }
};
