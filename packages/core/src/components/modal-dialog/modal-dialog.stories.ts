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
  render: args => html` <admiralty-modal-dialog heading="${args.heading}">
    <div slot="content"><span>If you leave this page, your survey won't be saved and can't be recovered</span></div>
    <admiralty-button variant="secondary" slot="actions">Leave page</admiralty-button>
    <admiralty-button slot="actions">Continue survey</admiralty-button>
  </admiralty-modal-dialog>`,
  args: { heading: 'Do you want to leave this page?' },
};
