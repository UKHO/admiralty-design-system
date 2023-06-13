import { Meta, StoryObj } from '@storybook/web-components';
import { BreadcrumbsComponent } from './breadcrumbs';
import { html } from 'lit';

const meta: Meta = {
  component: 'admiralty-breadcrumbs',
  title: 'Breadcrumbs',
  parameters: {
    actions: {
    },
  },
};

export default meta;

type Story = StoryObj<BreadcrumbsComponent>;

export const Basic: Story = { render: args => html`
<admiralty-breadcrumbs>
    <admiralty-breadcrumb>Test1</admiralty-breadcrumb>
</admiralty-breadcrumbs>` };

export const Three: Story = { render: args => html`
<admiralty-breadcrumbs>
    <admiralty-breadcrumb>Home</admiralty-breadcrumb>
    <admiralty-breadcrumb>Components</admiralty-breadcrumb>
    <admiralty-breadcrumb>Button</admiralty-breadcrumb>
</admiralty-breadcrumbs>` };
