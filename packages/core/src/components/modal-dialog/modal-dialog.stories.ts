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

export const WithTitle: Story = {
  render: args => html` <admiralty-modal-dialog heading="${args.heading}"><div slot="content">Some content</div></admiralty-modal-dialog>`,
  args: { heading: 'I am a card' },
};

export const WithoutTitle: Story = {
  render: args => html` <admiralty-modal-dialog><div slot="content">Some content</div></admiralty-modal-dialog>`,
};

export const WithHtmlContent: Story = {
  render: args => html` <admiralty-modal-dialog heading="${args.heading}"
    ><div slot="content">You can put any html content in the body of a card. Such as <a href="#">links</a> or <b>bold text</b></div></admiralty-modal-dialog
  >`,
  args: { heading: 'I am a card' },
};

export const WithActions: Story = {
  render: args => html`<admiralty-modal-dialog heading="${args.heading}">
    <div slot="content" style="display: flex; align-items: start;">
      <admiralty-icon icon-name="triangle-exclamation" icon-prefix="fas" style="color: #09315B; display: inline-block; padding: 5px;"></admiralty-icon>
      <div style="color: #09315B; max-width: 500px; display: inline-block">If you leave this page, your survey won't be saved and can't be recovered</div>
    </div>
    <div slot="actions" style="display: flex; justify-content: end;">
      <admiralty-button variant="secondary" style="padding: 0px 8px;">Leave page</admiralty-button>
      <admiralty-button style="padding: 0px 8px;">Continue survey</admiralty-button>
    </div>
  </admiralty-modal-dialog>`,
  args: { heading: 'Do you want to leave this page?' },
};
