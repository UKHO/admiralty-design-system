import { Meta, StoryObj } from '@storybook/web-components';
import { FooterComponent } from './footer';
import { html } from 'lit';
import { FooterType } from './footer.types';

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

export const VariantStandard: Story = { render: args => html`
  <admiralty-footer
    image-link="${args.imageLink}"
    variant="${FooterType.Standard}"
    image-alt="${args.imageAlt}"
    text="${args.text}">
  </admiralty-footer>` };

export const VariantCompact: Story = { render: args => html`
  <admiralty-footer
    image-link="${args.imageLink}"
    variant="${FooterType.Compact}"
    image-alt="${args.imageAlt}"
    text="© Crown copyright 2024 UK Hydrographic Office">
  </admiralty-footer>` };

export const VariantCompactFloatRight: Story = { render: args => html`
  <admiralty-footer
    image-link="${args.imageLink}"
    style="float: right"
    variant="${FooterType.Compact}"
    image-alt="${args.imageAlt}"
    text="© Crown copyright 2024 UK Hydrographic Office">
  </admiralty-footer>` };

export const VariantCompactWithLinks: Story = { render: args => html`
  <admiralty-footer
    image-link="${args.imageLink}"
    variant="${FooterType.Compact}"
    image-alt="${args.imageAlt}"
    text="© Crown copyright 2024 UK Hydrographic Office">
    <admiralty-link href="http://www.example.com" new-tab="true">Privacy policy</admiralty-link>
    <admiralty-link href="http://www.example.com">Accessibility statement</admiralty-link>
  </admiralty-footer>` };

export const VariantCompactWithLinksFloatRight: Story = { render: args => html`
  <admiralty-footer
    image-link="${args.imageLink}"
    style="float: right"
    variant="${FooterType.Compact}"
    image-alt="${args.imageAlt}"
    text="© Crown copyright 2024 UK Hydrographic Office">
    <admiralty-link href="http://www.example.com" new-tab="true">Privacy policy</admiralty-link>
    <admiralty-link href="http://www.example.com">Accessibility statement</admiralty-link>
  </admiralty-footer>` };
