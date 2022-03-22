import { ExpansionComponent } from './expansion.component';
import { Story } from '@storybook/angular';

export default {
  title: 'Expansion',
  component: ExpansionComponent,
  argTypes: { change: { action: 'Expanded changed' } },
};

const template: Story = (args) => ({
  props: args,
  moduleMetadata: {
    declarations: [ExpansionComponent],
  },
  template: `<ukho-expansion (change)="change($event)" [heading]="heading" [initialExpanded]="initialExpanded" [alignHeadingRight]="alignHeadingRight" [hideBorder]="hideBorder">
      Some content for the expansion
    </ukho-expansion>`,
});

export const basic = template.bind({});
basic.args = {
  heading: "Expansion Heading"
};

export const rightAlignedHeading = template.bind({});
rightAlignedHeading.args = {
  heading: "Expansion Heading",
  alignHeadingRight: true
};

export const expanded = template.bind({});
expanded.args = {
  heading: "Expansion Heading",
  initialExpanded: true
};

export const multiple: Story = (args) => ({
  props: args,
  moduleMetadata: {
    declarations: [ExpansionComponent],
  },
  template: `<ukho-expansion (change)="change($event)" [heading]="heading" [initialExpanded]="initialExpanded" [alignHeadingRight]="alignHeadingRight">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut vulputate justo. Nulla tincidunt gravida condimentum. Vivamus elementum malesuada sem. Nulla consequat semper fermentum. Etiam et tempus massa. Nunc condimentum rhoncus dui. Duis viverra erat eu velit fringilla, eu pretium orci tincidunt. Maecenas nec ipsum at arcu viverra eleifend. Pellentesque volutpat, turpis a sagittis facilisis, nisl nisi consequat neque, in luctus tortor enim iaculis neque.</p>
    <p>Curabitur nec mattis ex. In tincidunt quis nunc eu congue. Phasellus odio dui, aliquam a aliquet vel, fermentum id dolor. Nullam neque elit, interdum et mauris et, tempus imperdiet arcu. Cras erat odio, volutpat vel bibendum quis, malesuada non quam. Etiam in bibendum lacus. In hac habitasse platea dictumst. Proin justo nunc, gravida nec magna id, faucibus placerat dui. Phasellus luctus viverra imperdiet. Maecenas sed lorem ligula. Maecenas nec velit ut lectus porta ullamcorper vel et ante. Sed pretium metus vitae sagittis tincidunt. Integer aliquam consectetur ex et tempus. Aliquam faucibus ullamcorper libero.</p>
  </ukho-expansion>
  <ukho-expansion (change)="change($event)" [heading]="heading" [initialExpanded]="initialExpanded" [alignHeadingRight]="alignHeadingRight">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut vulputate justo. Nulla tincidunt gravida condimentum. Vivamus elementum malesuada sem. Nulla consequat semper fermentum. Etiam et tempus massa. Nunc condimentum rhoncus dui. Duis viverra erat eu velit fringilla, eu pretium orci tincidunt. Maecenas nec ipsum at arcu viverra eleifend. Pellentesque volutpat, turpis a sagittis facilisis, nisl nisi consequat neque, in luctus tortor enim iaculis neque.</p>
    <p>Curabitur nec mattis ex. In tincidunt quis nunc eu congue. Phasellus odio dui, aliquam a aliquet vel, fermentum id dolor. Nullam neque elit, interdum et mauris et, tempus imperdiet arcu. Cras erat odio, volutpat vel bibendum quis, malesuada non quam. Etiam in bibendum lacus. In hac habitasse platea dictumst. Proin justo nunc, gravida nec magna id, faucibus placerat dui. Phasellus luctus viverra imperdiet. Maecenas sed lorem ligula. Maecenas nec velit ut lectus porta ullamcorper vel et ante. Sed pretium metus vitae sagittis tincidunt. Integer aliquam consectetur ex et tempus. Aliquam faucibus ullamcorper libero.</p>
  </ukho-expansion>
  <ukho-expansion (change)="change($event)" [heading]="heading" [initialExpanded]="initialExpanded" [alignHeadingRight]="alignHeadingRight">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut vulputate justo. Nulla tincidunt gravida condimentum. Vivamus elementum malesuada sem. Nulla consequat semper fermentum. Etiam et tempus massa. Nunc condimentum rhoncus dui. Duis viverra erat eu velit fringilla, eu pretium orci tincidunt. Maecenas nec ipsum at arcu viverra eleifend. Pellentesque volutpat, turpis a sagittis facilisis, nisl nisi consequat neque, in luctus tortor enim iaculis neque.</p>
    <p>Curabitur nec mattis ex. In tincidunt quis nunc eu congue. Phasellus odio dui, aliquam a aliquet vel, fermentum id dolor. Nullam neque elit, interdum et mauris et, tempus imperdiet arcu. Cras erat odio, volutpat vel bibendum quis, malesuada non quam. Etiam in bibendum lacus. In hac habitasse platea dictumst. Proin justo nunc, gravida nec magna id, faucibus placerat dui. Phasellus luctus viverra imperdiet. Maecenas sed lorem ligula. Maecenas nec velit ut lectus porta ullamcorper vel et ante. Sed pretium metus vitae sagittis tincidunt. Integer aliquam consectetur ex et tempus. Aliquam faucibus ullamcorper libero.</p>
  </ukho-expansion>`,
});
multiple.args = {
  heading: "Expansion Heading",
};

export const multilineTitle: Story = (args) => ({
  props: args,
  moduleMetadata: {
    declarations: [ExpansionComponent],
  },
  template: `<div style="width:300px"><ukho-expansion style="width:200px"  (change)="change($event)" [heading]="heading" [initialExpanded]="initialExpanded" [alignHeadingRight]="alignHeadingRight">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut vulputate justo. Nulla tincidunt gravida condimentum. Vivamus elementum malesuada sem. Nulla consequat semper fermentum. Etiam et tempus massa. Nunc condimentum rhoncus dui. Duis viverra erat eu velit fringilla, eu pretium orci tincidunt. Maecenas nec ipsum at arcu viverra eleifend. Pellentesque volutpat, turpis a sagittis facilisis, nisl nisi consequat neque, in luctus tortor enim iaculis neque.</p>
  <p>Curabitur nec mattis ex. In tincidunt quis nunc eu congue. Phasellus odio dui, aliquam a aliquet vel, fermentum id dolor. Nullam neque elit, interdum et mauris et, tempus imperdiet arcu. Cras erat odio, volutpat vel bibendum quis, malesuada non quam. Etiam in bibendum lacus. In hac habitasse platea dictumst. Proin justo nunc, gravida nec magna id, faucibus placerat dui. Phasellus luctus viverra imperdiet. Maecenas sed lorem ligula. Maecenas nec velit ut lectus porta ullamcorper vel et ante. Sed pretium metus vitae sagittis tincidunt. Integer aliquam consectetur ex et tempus. Aliquam faucibus ullamcorper libero.</p>
    </ukho-expansion></div>`,
});
multilineTitle.args = {
  heading: "Expansion Heading that is really really long",
};

export const noBorder: Story = (args) => ({
  props: args,
  moduleMetadata: {
    declarations: [ExpansionComponent],
  },
  template: `<ukho-expansion (change)="change($event)" [heading]="heading" [initialExpanded]="initialExpanded" [alignHeadingRight]="alignHeadingRight"[hideBorder]="hideBorder">
    Some content for the expansion with no border
  </ukho-expansion>
  <ukho-expansion (change)="change($event)" [heading]="heading" [initialExpanded]="initialExpanded" [alignHeadingRight]="alignHeadingRight"[hideBorder]="hideBorder">
    Some content for the expansion with no border
  </ukho-expansion>
  <ukho-expansion (change)="change($event)" [heading]="heading" [initialExpanded]="initialExpanded" [alignHeadingRight]="alignHeadingRight"[hideBorder]="hideBorder">
    Some content for the expansion with no border
  </ukho-expansion>`,
});
noBorder.args = {
  heading: "Expansion Heading",
  hideBorder: true,
};
