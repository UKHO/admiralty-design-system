import { Meta, StoryObj } from '@storybook/web-components';
import { PaginatorComponent } from './paginator';
import { html } from 'lit';

const meta: Meta = {
  component: 'admiralty-paginator',
  title: 'Paginator',
  parameters: {
    actions: {
      handles: ['pageChange']
    },
  },
};

export default meta;

type Story = StoryObj<PaginatorComponent>;

const basicTemplate: Story = {
  render: args => html`
    <admiralty-paginator-wrapper>
      <admiralty-paginator pages="${args.pages}" current-page="${args.currentPage}" label="${args.label}">
      </admiralty-paginator>
    </admiralty-paginator-wrapper>`
};

export const Basic: Story = { ...basicTemplate,
  args: {
    pages: 8,
    currentPage: 1,
    label: 'Showing 1-6 of 45',
  }
};

const withoutLabelTemplate: Story = {
  render: args => html`
    <admiralty-paginator-wrapper>
      <admiralty-paginator pages="${args.pages}" current-page="${args.currentPage}">
      </admiralty-paginator>
    </admiralty-paginator-wrapper>`
};

export const WithoutLabel: Story = { ...withoutLabelTemplate,
  args: {
    pages: 10,
    currentPage: 5
  }
};

export const FirstPage: Story = { ...withoutLabelTemplate,
  args: {
    pages: 10,
    currentPage: 1
  }
};

export const LastPage: Story = { ...withoutLabelTemplate,
  args: {
    pages: 10,
    currentPage: 10
  }
};
