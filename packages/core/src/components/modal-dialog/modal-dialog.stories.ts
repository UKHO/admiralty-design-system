import { Meta, StoryObj } from '@storybook/web-components';
import { ModalDialogComponent } from './modal-dialog';
import { html } from 'lit';

const meta: Meta = {
  component: 'admiralty-modal-dialog',
  title: 'Modal Dialog',
  parameters: {
    actions: {},
  },
};

export default meta;

type Story = StoryObj<ModalDialogComponent>;

export const Basic: Story = {
  render: args =>
    html`<admiralty-modal-dialog heading="${args.heading}" ?show="${args.show}" label="${args.label}" description="${args.description}">
      <div slot="content">
        <admiralty-icon name="warning-rounded"></admiralty-icon>
        <div>If you leave this page, your survey won't be saved and can't be recovered</div>
      </div>
      <div slot="actions">
        <admiralty-button variant="secondary">Leave page</admiralty-button>
        <admiralty-button>Continue survey</admiralty-button>
      </div>
    </admiralty-modal-dialog>`,
  args: {
    heading: 'Do you want to leave this page?',
    show: true,
    label: 'Do you want to leave this page?',
    description: "If you leave this page, your survey won't be saved and can't be recovered",
  },
  parameters: {
    docs: {
      story: {
        height: '500px',
      },
    },
  },
};

export const Mobile: Story = {
  render: args =>
    html`<div style="max-width: 375px; margin: 0 auto;">
      <admiralty-modal-dialog heading="${args.heading}" ?show="${args.show}" label="${args.label}" description="${args.description}">
        <div slot="content">
          <admiralty-icon name="warning-rounded"></admiralty-icon>
          <div>If you leave this page, your survey won't be saved and can't be recovered</div>
        </div>
        <div slot="actions">
          <admiralty-button variant="secondary">Leave page</admiralty-button>
          <admiralty-button>Continue survey</admiralty-button>
        </div>
      </admiralty-modal-dialog>
    </div>`,
  args: {
    heading: 'Do you want to leave this page?',
    show: true,
    label: 'Do you want to leave this page?',
    description: "If you leave this page, your survey won't be saved and can't be recovered",
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'This story demonstrates the mobile layout. When viewing on a viewport below 480px or in a mobile viewport (press CTRL+Shift+M in browser DevTools), the modal will render with a fluid width filling the viewport with side margins. Action buttons are stacked vertically with the primary action first.',
      },
    },
  },
};

export const MobileWithLongContent: Story = {
  render: args =>
    html`<div style="max-width: 375px; margin: 0 auto;">
      <admiralty-modal-dialog heading="${args.heading}" ?show="${args.show}" label="${args.label}" description="${args.description}">
        <div slot="content">
          <admiralty-icon name="warning-rounded"></admiralty-icon>
          <div>
            This is a longer piece of content to demonstrate how the modal handles scrolling on mobile viewports. 
            When the content exceeds the available height, the body area scrolls internally while the title and 
            action buttons remain visible and sticky to the viewport. This ensures users can always access the actions 
            without scrolling the modal itself out of view.
          </div>
        </div>
        <div slot="actions">
          <admiralty-button variant="secondary">Leave page</admiralty-button>
          <admiralty-button>Continue survey</admiralty-button>
        </div>
      </admiralty-modal-dialog>
    </div>`,
  args: {
    heading: 'Do you want to leave this page?',
    show: true,
    label: 'Do you want to leave this page?',
    description: 'This is a longer piece of content to demonstrate scrolling behavior on mobile.',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'This story demonstrates the mobile layout with longer content. The content area scrolls internally while the title and footer with actions remain fixed.',
      },
    },
  },
};

export const Hidden: Story = {
  render: args =>
    html`<admiralty-modal-dialog heading="${args.heading}" ?show="${args.show}" label="${args.label}" description="${args.description}">
      <div slot="content">
        <admiralty-icon name="warning-rounded"></admiralty-icon>
        <div>If you leave this page, your survey won't be saved and can't be recovered</div>
      </div>
      <div slot="actions">
        <admiralty-button variant="secondary">Leave page</admiralty-button>
        <admiralty-button>Continue survey</admiralty-button>
      </div>
    </admiralty-modal-dialog>`,
  args: {
    heading: 'Do you want to leave this page?',
    show: false,
    label: 'Do you want to leave this page?',
    description: "If you leave this page, your survey won't be saved and can't be recovered",
  },
};
