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

basic.story = {
  name: 'basic',
};

export const expanded = () => ({
  moduleMetadata: {
    declarations: [ExpansionComponent],
  },
  template: `<ukho-expansion heading="Expansion Heading" [initialExpanded]="true">
      Some content for the expansion
    </ukho-expansion>`,
});

expanded.story = {
  name: 'expanded',
};
