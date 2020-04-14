import { HeaderComponent } from './header.component';
import { MenuItem } from '../navtypes';

export default {
  title: 'Header',
  component: HeaderComponent,
};

export const basic = () => ({
  moduleMetadata: {
    declarations: [HeaderComponent],
  },
  template: `<ukho-header text="Header Text"></ukho-header>`,
});

basic.story = {
  name: 'basic',
};

export const withLogo = () => ({
  moduleMetadata: {
    declarations: [HeaderComponent],
  },
  template: `<ukho-header></ukho-header>`,
});

const mockNav: MenuItem[] = [
  {
    title: 'test1',
    href: '',
    active: true,
  },
  {
    title: 'test2',
    href: '',
    active: false,
  },
  {
    title: 'test3',
    href: '',
    active: false,
  },
];

export const withNavigation = () => ({
  moduleMetadata: {
    declarations: [HeaderComponent],
  },
  template: `<ukho-header [navigation]="mockNav"></ukho-header>`,
  props: {
    mockNav: mockNav,
  },
});
