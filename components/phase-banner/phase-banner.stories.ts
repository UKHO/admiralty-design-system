import { PhaseBannerComponent } from './phase-banner.component';
import { Story } from '@storybook/angular';

export default {
  title: 'Phase Banner',
  component: PhaseBannerComponent,
};

const Template: Story = (args) => ({
  moduleMetadata: {
    declarations: [PhaseBannerComponent],
  },
  props: args,
  template: `<ukho-phase-banner [phase]="phase" [link]="link"></ukho-phase-banner>`,
});

export const Alpha: Story = Template.bind({});
Alpha.args = {
  phase: 'alpha',
  link: 'https://google.com',
};

export const Beta: Story = Template.bind({});
Beta.args = {
  phase: 'beta',
  link: 'https://google.com',
};
