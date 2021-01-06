import { CardComponent } from './card.component';

export default {
  title: 'Card',
  component: CardComponent,
};

export const withTitle = () => ({
  component: CardComponent,
  props: {
    title: 'Card Title',
  },
});

withTitle.story = {
  name: 'withTitle',
};

export const withContent = () => ({
  moduleMetadata: {
    declarations: [CardComponent],
  },
  template: `<ukho-card title="I have content">Some content</ukho-card>`,
});

withContent.story = {
  name: 'withContent',
};
