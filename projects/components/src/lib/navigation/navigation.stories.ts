import { NavigationComponent } from './navigation.component';
import { mockNavigation } from './mocknavigation';

export default {
  title: 'Navigation|Navigation',
  component: NavigationComponent,
};

export const basic = () => ({
  moduleMetadata: {
    declarations: [NavigationComponent],
  },
  template: `<ukho-navigation [navigation]="mockNav"></ukho-navigation>`,
  props: {
    mockNav: mockNavigation,
  },
});
