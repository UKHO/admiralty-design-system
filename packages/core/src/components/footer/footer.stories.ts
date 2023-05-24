import { Meta, StoryObj } from '@storybook/web-components';
import { FooterComponent } from './footer';
import { html } from 'lit';

const meta: Meta = {
  component: 'admiralty-footer',
  title: 'Footer',
  parameters: {
    actions: {
    },
  },
  args: {
    imageLink: 'http://www.example.com',
    imageSrc: 'svg/UKHO stacked logo.svg',
    imageAlt: 'UK Hydrographic Office',
    text: '© Crown copyright 2022',
  }
};

export default meta;

type Story = StoryObj<FooterComponent>;

export const Default: Story = { render: args => html`
  <admiralty-footer>
  </admiralty-footer>` };

export const AlternateText: Story = { render: args => html`
  <admiralty-footer
    image-link="${args.imageLink}"
    image-src="${args.imageSrc}"
    image-alt="${args.imageAlt}"
    text="${args.text}">
  </admiralty-footer>` };

export const WithLinks: Story = { render: args => html`
  <admiralty-footer>
    <admiralty-link href="http://www.example.com" new-tab="true">Privacy Policy</admiralty-link>
    <admiralty-link href="http://www.example.com">Accessibility</admiralty-link>
  </admiralty-footer>` };
