import { HorizontalRuleComponent } from './horizontal-rule.component';
import { Story } from '@storybook/angular';

export default {
  title: 'Horizontal Rule',
  component: HorizontalRuleComponent,
};

const Template: Story = (args) => ({
  props: args,
  moduleMetadata: {
    declarations: [HorizontalRuleComponent],
  },
  template: `<ukho-hr></ukho-hr>`,
});

export const HorizontalRule: Story = Template.bind({});
