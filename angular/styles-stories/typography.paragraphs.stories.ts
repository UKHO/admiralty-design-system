import { Story } from '@storybook/angular';

export default {
  title: 'Typography/Paragraphs',
};

export const standard: Story = () => ({
  template: `The quick brown fox jumped over the lazy dog.`,
});

export const paragraph: Story = () => ({
  template: `<p>The quick brown fox jumped over the lazy dog.</p>`,
});

export const intro: Story = () => ({
  template: `<p class="intro">The quick brown fox jumped over the lazy dog.</p>`,
});

export const small: Story = () => ({
  template: `<p class="small">The quick brown fox jumped over the lazy dog.</p>`,
});

export const blockQuote: Story = () => ({
  template: `<blockquote>The quick brown fox jumped over the lazy dog.</blockquote>`,
});

export const link: Story = () => ({
  template: `<a href="#">The quick brown fox jumped over the lazy dog.</a>`,
});
