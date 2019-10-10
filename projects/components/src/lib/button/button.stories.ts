import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { ButtonComponent } from './button.component';

storiesOf('Button', module)
  .add('withText', () => ({
    component: ButtonComponent,
    props: {
      label: 'Hello Button',
    },
  }))
  .add('withEmoji', () => ({
    component: ButtonComponent,
    props: {
      label: '😀 😎 👍 💯',
    },
  }))
  .add('withIcon', () => ({
    component: ButtonComponent,
    props: {
      label: 'Hello Button',
      icon: 'fa-angular',
    },
  }))
  .add('onClick', () => ({
    component: ButtonComponent,
    props: {
      label: 'Click Me',
      click: action('click')
    },
  }))
  .add('isSecondary', () => ({
    component: ButtonComponent,
    props: {
      label: 'Secondary Button',
      isSecondary: true,
    },
  }));
