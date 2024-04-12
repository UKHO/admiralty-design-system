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
  render: args => html`<admiralty-modal-dialog heading="${args.heading}">
    <div slot="content" style="display: flex; align-items: start;">
      <admiralty-icon icon-name="triangle-exclamation" icon-prefix="fas" style="color: #09315B; display: inline-block; padding: 5px;"></admiralty-icon>
      <div style="color: #09315B; max-width: 500px; display: inline-block">If you leave this page, your survey won't be saved and can't be recovered</div>
    </div>
    <div slot="actions">
      <admiralty-button variant="secondary" style="padding: 0px 8px;">Leave page</admiralty-button>
      <admiralty-button style="padding: 0px 8px;">Continue survey</admiralty-button>
    </div>
  </admiralty-modal-dialog>`,
  args: { heading: 'Do you want to leave this page?' },
};
