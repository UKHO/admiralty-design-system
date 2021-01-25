import { FooterComponent } from './footer.component';
import { MenuItem } from '../navtypes';
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

const mockNav: MenuItem[] = [
  {
    title: 'Privacy Policy',
    href: '',
    active: true,
  },
  {
    title: 'Accessibility',
    href: '',
    active: false,
  },
];

const Template: Story = (args) => ({
  props: args,
  moduleMetadata: {
    declarations: [FooterComponent],
  },
  template: `<ukho-footer [navigation]="mockNav" [text]="text" [imageSrc]="imageSrc" [imageLink]="imageLink" [imageAlt]="imageAlt"></ukho-footer>`,
});

export const Default: Story = Template.bind({});

export const WithLinks: Story = Template.bind({});
WithLinks.args = {
  mockNav: mockNav,
};
export const UKHOStackedLogo: Story = Template.bind({});
UKHOStackedLogo.args = {
  mockNav: mockNav,
  imageSrc: '/svg/UKHO stacked logo.svg',
};
