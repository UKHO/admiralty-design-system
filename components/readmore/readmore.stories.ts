import { ReadMoreComponent } from './readmore.component';
import { ButtonModule } from '../button/button.module';
import { Story } from '@storybook/angular';

export default {
  title: 'Read More',
  component: ReadMoreComponent,
  argTypes: { click: { action: 'clicked' } },
};

const template: Story = (args) => ({
  props: args,
  moduleMetadata: {
    declarations: [ReadMoreComponent],
    imports: [ButtonModule]
  },
  template: `<ukho-readmore [heading]="heading" [initialExpanded]="initialExpanded" (click)="click($event)">
    <p class="readmore-intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra est id elit auctor tristique. Aliquam vestibulum gravida mi eu ornare. Aenean tristique ac leo at eleifend. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In hac habitasse platea dictumst.</p>
    <p>Morbi tempus tortor eu massa pharetra efficitur. Aenean hendrerit tellus eu condimentum dapibus. In egestas nibh at sapien pellentesque congue. Nam pulvinar neque vitae risus sagittis, vel iaculis diam condimentum. Fusce mollis id est vel suscipit. Aenean ut eleifend libero. Duis dui urna, ultricies vitae porttitor vitae, sodales a massa. Sed dictum mattis diam quis ultricies.</p>
  </ukho-readmore>`,
});

export const basic = template.bind({});
basic.args = {
  heading: 'Heading',
  initialExpanded: false,
};

export const expanded = template.bind({});
expanded.args = {
  heading: 'Heading',
  initialExpanded: true,
};
