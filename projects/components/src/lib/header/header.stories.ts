import { HeaderComponent } from './header.component';

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
