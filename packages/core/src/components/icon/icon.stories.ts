import { Meta, StoryObj } from '@storybook/web-components';
import { IconComponent } from './icon';
import { html } from 'lit';

const meta: Meta = {
  component: 'admiralty-icon',
  title: 'Icon',
  parameters: {
    actions: {
    },
  },
};

export default meta;

type Story = StoryObj<IconComponent>;

const template: Story = {
    render: args => html`<admiralty-icon icon-name="${args.iconName}" icon-prefix="${args.iconPrefix}"></admiralty-icon>`,
  };
  
export const Solid: Story = { ...template,
  args: {
    iconName: 'anchor',
    iconPrefix: 'fas'
  }
};

export const Regular: Story = { ...template,
  args: {
    iconName: 'paper-plane',
    iconPrefix: 'far'
  }
};

export const Brands: Story = { ...template,
  args: {
    iconName: 'google',
    iconPrefix: 'fab'
  }
};
