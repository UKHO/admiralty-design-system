import { Meta, StoryObj } from '@storybook/web-components';
import { PhaseBannerComponent } from './phase-banner';
import { html } from 'lit';

const meta: Meta = {
  component: 'admiralty-phase-banner',
  title: 'Phase Banner',
  parameters: {
    actions: {
    },
  },
  args: {
    phase: 'alpha',
    link: 'https://example.org',
  },
};

export default meta;

type Story = StoryObj<PhaseBannerComponent>;

const template: Story = {
  render: args => html`<admiralty-phase-banner phase="${args.phase}" link="${args.link}"></admiralty-phase-banner>`,
};

export const Alpha: Story = { ...template, args: { phase: 'alpha' } };

export const Beta: Story = { ...template, args: { phase: 'beta' } };
