import { Story } from '@storybook/angular';
import { CardComponent } from './card.component';

export default {
  title: 'Card',
  component: CardComponent,
};

const template: Story<CardComponent> = (args: CardComponent) => ({
  moduleMetadata: {
    declarations: [CardComponent],
  },
  props: args,
  template: `<ukho-card [title]="title">Some content</ukho-card>`,
});

export const withTitle: Story = template.bind({});
withTitle.args = {
  title: 'I am a card',
};

export const withoutTitle: Story = template.bind({});

export const withHtmlContent: Story<CardComponent> = (args: CardComponent) => ({
  moduleMetadata: {
    declarations: [CardComponent],
  },
  props: args,
  template: `<ukho-card [title]="title">You can put any html content in the body of a card. Such as <a href='#'>links</a> or <b>bold text</b></ukho-card>`,
});

withHtmlContent.args = {
  title: 'I am a card',
};
