import { Story } from '@storybook/html';
import readme from './readme.md';

export default {
  title: 'Card',
  parameters: {
    markdown: readme,
  },
};

export const WithTitle: Story = args => {
  return `<admiralty-card heading="${args.heading}">Some content</admiralty-card>`;
};
WithTitle.args = {
  heading: 'I am a card',
};

export const WithoutTitle: Story = args => {
  return `<admiralty-card>Some content</admiralty-card>`;
};

export const WithHtmlContent: Story = args => {
  return `<admiralty-card heading="${args.heading}">You can put any html content in the body of a card. Such as <a href='#'>links</a> or <b>bold text</b></admiralty-card>`;
};
WithHtmlContent.args = {
  heading: 'I am a card',
};
