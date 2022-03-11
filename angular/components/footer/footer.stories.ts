import { FooterComponent } from './footer.component';
import { FooterItem } from './footer.types';
import { Story } from '@storybook/angular';

export default {
  title: 'Footer',
  component: FooterComponent,
  argTypes: {
    imageSrc: {
      table: {
        disable: true,
      },
    },
    navigation: {
      table: {
        disable: true,
      },
    },
    mockNav: {
      table: {
        disable: true,
      },
    },
  },
};

const mockNav: FooterItem[] = [
  {
    title: 'Privacy Policy',
    href: '',
    newTab: true,
  },
  {
    title: 'Accessibility',
    href: '',
  },
];

const Template: Story<FooterComponent> = (args: FooterComponent) => ({
  props: args,
  moduleMetadata: {
    declarations: [FooterComponent],
  },
  template: `<ukho-footer [navigation]="mockNav" [text]="text" [imageSrc]="imageSrc" [imageLink]="imageLink" [imageAlt]="imageAlt"></ukho-footer>`,
});

export const Default: Story = Template.bind({});
Default.args = {
  imageSrc: '/svg/UKHO stacked logo.svg',
};

export const WithLinks: Story = Template.bind({});
WithLinks.args = {
  mockNav: mockNav,
  imageSrc: '/svg/UKHO stacked logo.svg',
};
export const UKHOStackedLogo: Story = Template.bind({});
UKHOStackedLogo.args = {
  mockNav,
  imageSrc: '/svg/UKHO stacked logo.svg',
};