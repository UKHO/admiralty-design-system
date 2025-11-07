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
  render: args => html`<div>
    <admiralty-tooltip placement="${args.placement}" alignment="${args.alignment}">
      <admiralty-button slot="trigger">submit</admiralty-button>Tooltip description
    </admiralty-tooltip>
  </div>`,
};

const richTemplate: Story = {
  render: args => html`<div style="margin: 60px 200px">
    <admiralty-tooltip placement="${args.placement}" alignment="${args.alignment}">
      <admiralty-button slot="trigger">submit</admiralty-button>
      <div>
        <h3>Black Rock</h3>
        <h4>Underwater/awash rock</h4>

        <h6>details</h6>
        <p>50</p>
      </div>
    </admiralty-tooltip>
  </div>`,
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

export const TopAlignStart: Story = {
  ...template,
  args: {
    placement: 'top',
    alignment: 'start'
  }
};

export const TopAlignEnd: Story = {
  ...template,
  args: {
    placement: 'top',
    alignment: 'end'
  }
};

export const BottomAlignStart: Story = {
  ...template,
  args: {
    placement: 'bottom',
    alignment: 'start'
  }
};

export const BottomAlignEnd: Story = {
  ...template,
  args: {
    placement: 'bottom',
    alignment: 'end'
  }
};
