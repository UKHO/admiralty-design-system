import { storiesOf } from '@storybook/angular';
import { ExpansionComponent } from './expansion.component';

storiesOf('Expansion', module)
  .add('basic', () => ({
    moduleMetadata: {
      declarations: [ExpansionComponent],
    },
    template: `<ukho-expansion heading="Expansion Heading">
      Some content for the expansion
    </ukho-expansion>`,
  }));
