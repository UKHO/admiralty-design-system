import { Story } from '@storybook/html';
import readme from './readme.md';

export default {
  title: 'Footer',
  parameters: {
    markdown: readme,
  },
  args: {
    imageLink: 'http://www.example.com',
    imageSrc: 'svg/UKHO stacked logo.svg',
    imageAlt: 'UK Hydrographic Office',
    text: '© Crown copyright 2022',
  },
};

export const Default: Story = args => {
  return `<admiralty-footer>
  </admiralty-footer>`;
};

export const AlternateText: Story = args => {
  return `<admiralty-footer
    image-link="${args.imageLink}"
    image-src="${args.imageSrc}"
    image-alt="${args.imageAlt}"
    text="${args.text}">
  </admiralty-footer>`;
};

export const WithLinks: Story = args => {
  return `<admiralty-footer>
    <admiralty-link href=http://www.example.com" new-tab="true">Privacy Policy</admiralty-link>
    <admiralty-link href=http://www.example.com">Accessibility</admiralty-link>
  </admiralty-footer>`;
};
