import { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { TooltipComponent } from "./tooltip";

const meta: Meta = {
  component: 'admiralty-tooltip',
  title: 'Tooltip'
};

export default meta;

type Story = StoryObj<TooltipComponent>;

const template: Story = { // style="margin: 300px"
  render: args => html`<div style="margin: 300px">
    <admiralty-label id="myButton">my label</admiralty-label>
    <admiralty-tooltip for="myButton" placement="${args.placement}" alignment="${args.alignment}">
      Tooltip description
    </admiralty-tooltip>
  </div>`,
};

const richTemplate: Story = {
  render: args => html`<div style="margin: 90px 10px">
    <admiralty-label id="myButton">my label</admiralty-label>
    <admiralty-tooltip for="myButton" placement="${args.placement}" alignment="${args.alignment}">
      <admiralty-button slot="trigger">submit</admiralty-button>
      <div>
        <h3 style="margin: 0;">Black Rock</h3>
        <p>Underwater/awash rock</p>
        <h6 style="margin: 0;">Details</h6>
        <p style="margin: 0">50°42'.50N | °30'.63W</p>
        <a>Covers and uncovers</a>
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

export const BasicRichToolTip: Story = {
  ...richTemplate
};
