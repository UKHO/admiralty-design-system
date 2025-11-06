import { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { TooltipComponent } from "./tooltip";

const meta: Meta = {
  component: 'admiralty-tooltip',
  title: 'Tooltip'
};

export default meta;

type Story = StoryObj<TooltipComponent>;

const template: Story = {
  render: args => html`
    <admiralty-tooltip placement="${args.placement}" alignment="${args.alignment}">
      <admiralty-button slot="trigger">submit</admiralty-button>Tooltip description
    </admiralty-tooltip>`,
};

export const Basic: Story = {
  ...template
};

export const Bottom: Story = {
  ...template,
  args: {
    placement: 'bottom'
  }
};

export const Top: Story = {
  ...template,
  args: {
    placement: 'top'
  }
};

export const Left: Story = {
  ...template,
  args: {
    placement: 'left'
  }
};

export const Right: Story = {
  ...template,
  args: {
    placement: 'right'
  }
};
