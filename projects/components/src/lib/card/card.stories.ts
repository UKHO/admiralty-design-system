import { storiesOf } from '@storybook/angular';
import {CardComponent} from './card.component';

storiesOf('Card', module)
  .add('withTitle', () => ({
    component: CardComponent,
    props: {
      title: 'Card Title',
    },
  }))
  .add('withContent', () => ({
    moduleMetadata: {
      declarations: [CardComponent],
    },
    template: `<ukho-card title="I have content">Some content</ukho-card>`
  }));
