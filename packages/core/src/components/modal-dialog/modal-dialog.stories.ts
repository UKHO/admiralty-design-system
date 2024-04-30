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
  render: args => html`<admiralty-modal-dialog heading="${args.heading}" ?show="${args.show}" label="${args.label}" description="${args.description}">
    <div slot="content">
      <admiralty-icon icon-name="triangle-exclamation" icon-prefix="fas"></admiralty-icon>
      <div>If you leave this page, your survey won&apos;t be saved and can&apos;t be recovered</div>
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

export const Hidden: Story = {
  render: args => html`<admiralty-modal-dialog heading="${args.heading}" ?show="${args.show}" label="${args.label}" description="${args.description}">
    <div slot="content">
      <admiralty-icon icon-name="triangle-exclamation" icon-prefix="fas"></admiralty-icon>
      <div>If you leave this page, your survey won&apos;t be saved and can&apos;t be recovered</div>
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
