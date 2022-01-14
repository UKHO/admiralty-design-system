import { ColourBlockComponent } from './colour-block.component';
import { HorizontalRuleModule } from '../horizontal-rule/horizontal-rule.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Story } from '@storybook/angular';
export default {
  title: 'Colour Block',
  component: ColourBlockComponent,
  argTypes: { action: { action: 'action clicked' } },
};

const template: Story<ColourBlockComponent> = (args: ColourBlockComponent) => ({
  props: args,
  moduleMetadata: {
    declarations: [ColourBlockComponent],
    imports: [HorizontalRuleModule, BrowserAnimationsModule],
  },
  template: `<ukho-colour-block [clickAction]="action" [actionText]="actionText" [width]="width" [height]="height" [title]="title" [colour]="colour"><div [innerHTML]="content"></div></ukho-colour-block>`,
});

const squareArgs = {
  width: 400,
  height: 400,
  title: 'Colour Me Surprised',
  content: `<p>This colour block is a component in the design system and we hope you enjoy it</p>`,
  actionText: 'Click Here',
};

const rectangleArgs = {
  width: 1000,
  height: 400,
  title: 'Block by Block',
  content: `<p>This colour block is a component in the design system and we hope you enjoy it</p>
  <p>This block supports HTML such as <b>bold</b> text and <a href='#'>links</a>.</p>
  <h5>Even Headings</h5>
  <span>What about spans?</span>`,
  actionText: 'Click Here',
};
export const admiraltyBlueSquare: Story = template.bind({});
admiraltyBlueSquare.args = { ...squareArgs, colour: 'admiralty-blue' };

export const tealSquare: Story = template.bind({});
tealSquare.args = { ...squareArgs, colour: 'teal' };

export const brightBlueSquare: Story = template.bind({});
brightBlueSquare.args = { ...squareArgs, colour: 'bright-blue' };

export const admiraltyBlueRectangle: Story = template.bind({});
admiraltyBlueRectangle.args = { ...rectangleArgs, colour: 'admiralty-blue' };

export const tealRectangle: Story = template.bind({});
tealRectangle.args = { ...rectangleArgs, colour: 'teal' };

export const brightBlueRectangle: Story = template.bind({});
brightBlueRectangle.args = { ...rectangleArgs, colour: 'bright-blue' };
