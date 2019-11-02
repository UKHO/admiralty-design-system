import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { ButtonComponent } from './button.component';

storiesOf('Button', module)
  .add('withText', () => ({
    moduleMetadata: {
      declarations: [ButtonComponent],
    },
    template: `<button ukho-button>Hello Button</button>`,
  }))
  .add('withEmoji', () => ({
    moduleMetadata: {
      declarations: [ButtonComponent],
    },
    template: `<button ukho-button>😀 😎 👍 💯</button>`,
  }))
  .add('withIcon', () => ({
    moduleMetadata: {
      declarations: [ButtonComponent],
    },
    template: `<button ukho-button icon="fa-angular">Hello Button</button>`,
  }))
  .add('onClick', () => ({
    moduleMetadata: {
      declarations: [ButtonComponent],
    },
    template: `<button ukho-button (click)="click($event)">Click Me</button>`,
    props: {
      click: action('click'),
    },
  }))
  .add('disabled', () => ({
    moduleMetadata: {
      declarations: [ButtonComponent],
    },
    template: `<button ukho-button [disabled]="true">Disabled Button</button>`,
  }))
  .add('isSecondary', () => ({
    moduleMetadata: {
      declarations: [ButtonComponent],
    },
    template: `<button ukho-button [secondary]="true">Secondary Button</button>`,
  }));
