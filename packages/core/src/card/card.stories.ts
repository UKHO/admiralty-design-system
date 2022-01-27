import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

import './card';
import { UKHOCard } from './card';

export default {
  title: 'Card',
  component: 'ukho-button',
  argTypes: {
    heading: {
      control: { type: 'text' },
    },
    content: {
      table: {
        disable: true,
      },
    },
  },
};

// TODO - update typings for stories
const Template: Partial<any> = ({ heading, content }: { heading: string; content: string }) =>
  html`<ukho-card heading=${heading}>${unsafeHTML(content)}</ukho-card>`;

export const WithTitle = Template.bind();
WithTitle.args = {
  heading: 'I am a card',
  content: 'Some content',
};

export const WithoutTitle = Template.bind();
WithoutTitle.args = {
  content: 'Some content',
};

export const WithHtmlContent = Template.bind();
WithHtmlContent.args = {
  heading: 'I am a card',
  content: `
    <p>
      You can put any html content in the body of a card. Such as <a href="#">links</a> or <b>bold text</b>
    </p>
    <p>You will need to ensure they are styled.</p>
  `,
};

export const WithListContent = Template.bind();
WithListContent.args = {
  heading: 'I am a card',
  content: `
    <div>
      <h3>Heading</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra est id elit auctor tristique. Aliquam
        vestibulum gravida mi eu ornare. Aenean tristique ac leo at eleifend.
      </p>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing.</li>
        <li>Dolore magna aliqua. Ut enim ad minim veniam.</li>
        <li>Commodo consequat duis aute irure dolor in.</li>
        <li>Labore et dolore magna aliqua occaecat.</li>
      </ul>
      <p><a href="#">Lorem ipsum dolor sit amet</a></p>
    </div>
  `,
};
