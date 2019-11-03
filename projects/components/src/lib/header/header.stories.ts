import { storiesOf } from '@storybook/angular';
import { HeaderComponent } from './header.component';

storiesOf('Header', module)
  .add('basic', () => ({
    moduleMetadata: {
      declarations: [HeaderComponent],
    },
    template: `<ukho-header text="Header Text"></ukho-header>`,
  }));
