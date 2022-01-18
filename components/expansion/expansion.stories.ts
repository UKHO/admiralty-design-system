import { ExpansionComponent } from './expansion.component';

export default {
  title: 'Expansion',
  component: ExpansionComponent,
};

export const basic = () => ({
  moduleMetadata: {
    declarations: [ExpansionComponent],
  },
  template: `<ukho-expansion heading="Expansion Heading">
      Some content for the expansion
    </ukho-expansion>`,
});

export const rightAlignedHeading = () => ({
  moduleMetadata: {
    declarations: [ExpansionComponent],
  },
  template: `<ukho-expansion heading="Expansion Heading" alignHeadingRight="true">
      Some content for the expansion
    </ukho-expansion>`,
});

export const expanded = () => ({
  moduleMetadata: {
    declarations: [ExpansionComponent],
  },
  template: `<ukho-expansion heading="Expansion Heading" [initialExpanded]="true">
      Some content for the expansion
    </ukho-expansion>`,
});

export const multiple = () => ({
  moduleMetadata: {
    declarations: [ExpansionComponent],
  },
  template: `<ukho-expansion heading="Expansion Heading">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut vulputate justo. Nulla tincidunt gravida condimentum. Vivamus elementum malesuada sem. Nulla consequat semper fermentum. Etiam et tempus massa. Nunc condimentum rhoncus dui. Duis viverra erat eu velit fringilla, eu pretium orci tincidunt. Maecenas nec ipsum at arcu viverra eleifend. Pellentesque volutpat, turpis a sagittis facilisis, nisl nisi consequat neque, in luctus tortor enim iaculis neque.</p>

  <p>Curabitur nec mattis ex. In tincidunt quis nunc eu congue. Phasellus odio dui, aliquam a aliquet vel, fermentum id dolor. Nullam neque elit, interdum et mauris et, tempus imperdiet arcu. Cras erat odio, volutpat vel bibendum quis, malesuada non quam. Etiam in bibendum lacus. In hac habitasse platea dictumst. Proin justo nunc, gravida nec magna id, faucibus placerat dui. Phasellus luctus viverra imperdiet. Maecenas sed lorem ligula. Maecenas nec velit ut lectus porta ullamcorper vel et ante. Sed pretium metus vitae sagittis tincidunt. Integer aliquam consectetur ex et tempus. Aliquam faucibus ullamcorper libero.</p>
    </ukho-expansion>
    <ukho-expansion heading="Expansion Heading">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut vulputate justo. Nulla tincidunt gravida condimentum. Vivamus elementum malesuada sem. Nulla consequat semper fermentum. Etiam et tempus massa. Nunc condimentum rhoncus dui. Duis viverra erat eu velit fringilla, eu pretium orci tincidunt. Maecenas nec ipsum at arcu viverra eleifend. Pellentesque volutpat, turpis a sagittis facilisis, nisl nisi consequat neque, in luctus tortor enim iaculis neque.</p>

  <p>Curabitur nec mattis ex. In tincidunt quis nunc eu congue. Phasellus odio dui, aliquam a aliquet vel, fermentum id dolor. Nullam neque elit, interdum et mauris et, tempus imperdiet arcu. Cras erat odio, volutpat vel bibendum quis, malesuada non quam. Etiam in bibendum lacus. In hac habitasse platea dictumst. Proin justo nunc, gravida nec magna id, faucibus placerat dui. Phasellus luctus viverra imperdiet. Maecenas sed lorem ligula. Maecenas nec velit ut lectus porta ullamcorper vel et ante. Sed pretium metus vitae sagittis tincidunt. Integer aliquam consectetur ex et tempus. Aliquam faucibus ullamcorper libero.</p>
    </ukho-expansion>
    <ukho-expansion heading="Expansion Heading">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut vulputate justo. Nulla tincidunt gravida condimentum. Vivamus elementum malesuada sem. Nulla consequat semper fermentum. Etiam et tempus massa. Nunc condimentum rhoncus dui. Duis viverra erat eu velit fringilla, eu pretium orci tincidunt. Maecenas nec ipsum at arcu viverra eleifend. Pellentesque volutpat, turpis a sagittis facilisis, nisl nisi consequat neque, in luctus tortor enim iaculis neque.</p>

    <p>Curabitur nec mattis ex. In tincidunt quis nunc eu congue. Phasellus odio dui, aliquam a aliquet vel, fermentum id dolor. Nullam neque elit, interdum et mauris et, tempus imperdiet arcu. Cras erat odio, volutpat vel bibendum quis, malesuada non quam. Etiam in bibendum lacus. In hac habitasse platea dictumst. Proin justo nunc, gravida nec magna id, faucibus placerat dui. Phasellus luctus viverra imperdiet. Maecenas sed lorem ligula. Maecenas nec velit ut lectus porta ullamcorper vel et ante. Sed pretium metus vitae sagittis tincidunt. Integer aliquam consectetur ex et tempus. Aliquam faucibus ullamcorper libero.</p>
      </ukho-expansion>`,
});

export const multilineTitle = () => ({
  moduleMetadata: {
    declarations: [ExpansionComponent],
  },
  template: `<div style="width:300px"><ukho-expansion style="width:200px" heading="Expansion Heading that is really really long ">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut vulputate justo. Nulla tincidunt gravida condimentum. Vivamus elementum malesuada sem. Nulla consequat semper fermentum. Etiam et tempus massa. Nunc condimentum rhoncus dui. Duis viverra erat eu velit fringilla, eu pretium orci tincidunt. Maecenas nec ipsum at arcu viverra eleifend. Pellentesque volutpat, turpis a sagittis facilisis, nisl nisi consequat neque, in luctus tortor enim iaculis neque.</p>

  <p>Curabitur nec mattis ex. In tincidunt quis nunc eu congue. Phasellus odio dui, aliquam a aliquet vel, fermentum id dolor. Nullam neque elit, interdum et mauris et, tempus imperdiet arcu. Cras erat odio, volutpat vel bibendum quis, malesuada non quam. Etiam in bibendum lacus. In hac habitasse platea dictumst. Proin justo nunc, gravida nec magna id, faucibus placerat dui. Phasellus luctus viverra imperdiet. Maecenas sed lorem ligula. Maecenas nec velit ut lectus porta ullamcorper vel et ante. Sed pretium metus vitae sagittis tincidunt. Integer aliquam consectetur ex et tempus. Aliquam faucibus ullamcorper libero.</p>
    </ukho-expansion></div>`,
});

export const noBorder = () => ({
  moduleMetadata: {
    declarations: [ExpansionComponent],
  },
  template: `<ukho-expansion heading="Expansion Heading 1" hideBorder="true">
      Some content for the expansion with no border
    </ukho-expansion>
    <ukho-expansion heading="Expansion Heading 2" hideBorder="true">
      Some content for the expansion with no border
    </ukho-expansion>
    <ukho-expansion heading="Expansion Heading 3" hideBorder="true">
      Some content for the expansion with no border
    </ukho-expansion>`,
});
