import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { ButtonComponent } from './button.component';

storiesOf('Button', module)
  .add('withText', () => ({
    moduleMetadata: {
      declarations: [ButtonComponent],
    },
    template: `<button ukho-button>Hello Button</ukho-button>`,
  }))
  .add('withEmoji', () => ({
    moduleMetadata: {
      declarations: [ButtonComponent],
    },
    template: `<button ukho-button>😀 😎 👍 💯</ukho-button>`,
  }))
  .add('withIcon', () => ({
    moduleMetadata: {
      declarations: [ButtonComponent],
    },
    template: `<button ukho-button icon="fa-angular">Hello Button</ukho-button>`,
  }))
  .add('onClick', () => ({
    moduleMetadata: {
      declarations: [ButtonComponent],
    },
    template: `<button ukho-button (click)="click($event)">Click Me</ukho-button>`,
    props: {
      click: action('click'),
    },
  }))
  .add('disabled', () => ({
    moduleMetadata: {
      declarations: [ButtonComponent],
    },
    template: `<button ukho-button [disabled]="true">Disabled Button</ukho-button>`,
  }))
  .add('isSecondary', () => ({
    moduleMetadata: {
      declarations: [ButtonComponent],
    },
    template: `<button ukho-button [secondary]="true">Secondary Button</ukho-button>`,
  }));
