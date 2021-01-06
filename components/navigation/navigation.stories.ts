import { NavigationComponent } from './navigation.component';
import { mockNavigationBasic, mockNavigationWithSections } from './mocknavigation';

export default {
  title: 'Navigation/Navigation',
  component: NavigationComponent
};

export const basic = () => ({
  moduleMetadata: {
    declarations: [NavigationComponent]
  },
  template: `<ukho-navigation [navigation]="mockNav"></ukho-navigation>`,
  props: {
    mockNav: mockNavigationBasic
  }
});

export const withSections = () => ({
  moduleMetadata: {
    declarations: [NavigationComponent]
  },
  template: `<ukho-navigation [navigation]="mockNav"></ukho-navigation>`,
  props: {
    mockNav: mockNavigationWithSections
  }
});
